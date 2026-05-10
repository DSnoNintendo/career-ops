#!/usr/bin/env node
/**
 * gemini-eval.mjs — Gemini-powered Job Offer Evaluator for career-ops
 *
 * A free-tier alternative to the Claude-based pipeline.
 * Reads evaluation logic from modes/oferta.md + modes/_shared.md,
 * reads the user's resume from cv.md, and evaluates a Job Description
 * passed as a command-line argument.
 *
 * Usage:
 *   node gemini-eval.mjs "Paste full JD text here"
 *   node gemini-eval.mjs --file ./jds/my-job.txt
 *
 * Requires:
 *   GEMINI_API_KEY in .env (or environment variable)
 *
 * Free-tier model: gemini-2.5-flash (generous quota, no billing required)
 *
 * Model deprecation reference (per Google AI for Developers, May 2026):
 *   - gemini-2.0-flash       deprecated 2026-03-31  (do not use)
 *   - gemini-2.0-flash-lite  deprecated 2026-03-31
 *   - gemini-2.5-flash       deprecated 2026-06-17  (current default)
 *   - gemini-2.5-flash-lite  deprecated 2026-07-22
 * Stable Gemini models follow a 12-month lifecycle from their release date.
 * Source: https://ai.google.dev/gemini-api/docs/models
 *
 * When the current default approaches its deprecation date, bump
 * `modelName` below and the `--model` examples accordingly.
 *
 * Output protocol:
 *   The LLM returns a single JSON object (responseMimeType: application/json).
 *   This script renders the markdown report from that JSON. The LLM never
 *   emits markdown directly, which prevents token-repetition loops on
 *   table-separator rows (a known Gemini failure mode that produced
 *   "unknown — unknown" headers when the SCORE_SUMMARY block was truncated).
 */

import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------------------------
// Bootstrap: load .env before anything else
// ---------------------------------------------------------------------------
try {
  const { config } = await import('dotenv');
  config();
} catch {
  // dotenv is optional — fall back to process.env if not installed
}

import { GoogleGenerativeAI } from '@google/generative-ai';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const ROOT = dirname(fileURLToPath(import.meta.url));

const PATHS = {
  // Primary evaluation logic lives in these two mode files
  shared:      join(ROOT, 'modes', '_shared.md'),
  oferta:      join(ROOT, 'modes', 'oferta.md'),
  // Canonical skill path referenced in Issue #344
  evaluate:    join(ROOT, '.claude', 'skills', 'career-ops', 'SKILL.md'),
  cv:          join(ROOT, 'cv.md'),
  profile:     join(ROOT, 'modes', '_profile.md'),
  profileYml:  join(ROOT, 'config', 'profile.yml'),
  reports:     join(ROOT, 'reports'),
  tracker:     join(ROOT, 'data', 'applications.md'),
};

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║           career-ops — Gemini Evaluator (free-tier)             ║
╚══════════════════════════════════════════════════════════════════╝

  Evaluate a job offer using Google Gemini instead of Claude.

  USAGE
    node gemini-eval.mjs "<JD text>"
    node gemini-eval.mjs --file ./jds/my-job.txt
    node gemini-eval.mjs --model gemini-2.5-flash "<JD text>"

  OPTIONS
    --file <path>    Read JD from a file instead of inline text
    --model <name>   Gemini model to use (default: gemini-2.5-flash)
    --no-save        Do not save report to reports/ directory
    --help           Show this help

  SETUP
    1. Get a free API key at https://aistudio.google.com/apikey
    2. Add GEMINI_API_KEY=<your-key> to .env
    3. Run: npm install   (installs @google/generative-ai + dotenv)

  EXAMPLES
    node gemini-eval.mjs "We are looking for a Senior AI Engineer..."
    node gemini-eval.mjs --file ./jds/openai-swe.txt
`);
  process.exit(0);
}

// Parse flags
let jdText = '';
let modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
let saveReport = true;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--file' && args[i + 1]) {
    const filePath = args[++i];
    if (!existsSync(filePath)) {
      console.error(`❌  File not found: ${filePath}`);
      process.exit(1);
    }
    jdText = readFileSync(filePath, 'utf-8').trim();
  } else if (args[i] === '--model' && args[i + 1]) {
    modelName = args[++i];
  } else if (args[i] === '--no-save') {
    saveReport = false;
  } else if (!args[i].startsWith('--')) {
    jdText += (jdText ? '\n' : '') + args[i];
  }
}

if (!jdText) {
  console.error('❌  No Job Description provided. Run with --help for usage.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Validate environment
// ---------------------------------------------------------------------------
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error(`
❌  GEMINI_API_KEY not found.

   1. Get a free key at https://aistudio.google.com/apikey
   2. Add it to .env:   GEMINI_API_KEY=your_key_here
   3. Or export it:     export GEMINI_API_KEY=your_key_here
`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// File helpers
// ---------------------------------------------------------------------------
function readFile(path, label) {
  if (!existsSync(path)) {
    console.warn(`⚠️   ${label} not found at: ${path}`);
    return `[${label} not found — skipping]`;
  }
  return readFileSync(path, 'utf-8').trim();
}

function nextReportNumber() {
  if (!existsSync(PATHS.reports)) return '001';
  const files = readdirSync(PATHS.reports)
    .filter(f => /^\d{3}-/.test(f))
    .map(f => parseInt(f.slice(0, 3)))
    .filter(n => !isNaN(n));
  if (files.length === 0) return '001';
  return String(Math.max(...files) + 1).padStart(3, '0');
}

// Lazy import — only used when saving
let readdirSync;
try {
  ({ readdirSync } = await import('fs'));
} catch { /* already imported above via named exports */ }
// Use named import fallback
if (!readdirSync) {
  readdirSync = (await import('fs')).readdirSync;
}

// ---------------------------------------------------------------------------
// Load context files
// ---------------------------------------------------------------------------
console.log('\n📂  Loading context files...');

const sharedContext  = readFile(PATHS.shared,      'modes/_shared.md');
const ofertaLogic    = readFile(PATHS.oferta,      'modes/oferta.md');
const cvContent      = readFile(PATHS.cv,          'cv.md');
const profileContent = readFile(PATHS.profile,     'modes/_profile.md');
const profileYml     = readFile(PATHS.profileYml,  'config/profile.yml');

// ---------------------------------------------------------------------------
// Build the system prompt
//
// Methodology files (modes/_shared.md, modes/oferta.md) describe the A-G
// evaluation in markdown. In this CLI session we override the output format:
// the LLM returns a single JSON object, the script renders the markdown.
// This eliminates the "wall of dashes" failure mode where Gemini got stuck
// in a token-repetition loop on a markdown table separator and truncated
// before emitting the SCORE_SUMMARY block (see header docblock).
// ---------------------------------------------------------------------------
const systemPrompt = `You are career-ops, an AI-powered job search assistant.
You evaluate job offers against the user's CV using a structured A-G evaluation.

Use the methodology documents below to inform your analysis. The OUTPUT FORMAT
section at the end overrides any markdown formatting instructions inside those
documents -- in this CLI session you return JSON, not markdown.

═══════════════════════════════════════════════════════
SYSTEM CONTEXT (_shared.md)
═══════════════════════════════════════════════════════
${sharedContext}

═══════════════════════════════════════════════════════
EVALUATION MODE (oferta.md)
═══════════════════════════════════════════════════════
${ofertaLogic}

═══════════════════════════════════════════════════════
CANDIDATE RESUME (cv.md)
═══════════════════════════════════════════════════════
${cvContent}

═══════════════════════════════════════════════════════
CANDIDATE PROFILE & TARGETS (config/profile.yml)
═══════════════════════════════════════════════════════
${profileYml}

═══════════════════════════════════════════════════════
USER ARCHETYPES & NARRATIVE (_profile.md)
═══════════════════════════════════════════════════════
${profileContent}

═══════════════════════════════════════════════════════
OUTPUT FORMAT (overrides methodology -- this CLI session only)
═══════════════════════════════════════════════════════
You do NOT have access to WebSearch, Playwright, or file writing tools.
- For Comp Analysis: provide salary estimates from your training data, clearly noted as estimates.
- For Posting Legitimacy: analyze the JD text only; skip URL/freshness checks.
- The script handles file saving and markdown rendering -- not you.

Return ONLY a single valid JSON object matching the schema below. No prose,
no markdown, no code fences -- just the raw JSON. Do NOT emit markdown
tables, separator rows (e.g. |---|), or any other markdown formatting.

Schema:
{
  "company":      string,                      // company name; "Unknown" if absent
  "role":         string,                      // exact role title from the JD
  "url":          string | null,               // canonical job URL if present in the JD, else null
  "archetype":    string,                      // detected archetype (short label)
  "score":        number,                      // global score, decimal in [1.0, 5.0]
  "legitimacy":   string,                      // one of: "High Confidence", "Proceed with Caution", "Suspicious"
  "verification": string | null,               // e.g. "unconfirmed (batch mode)" or null
  "role_summary": {
    "archetype":  string,
    "domain":     string,
    "seniority":  string,
    "remote":     string,
    "comp":       string,                      // "Not stated" if absent
    "team_size":  string | null,
    "tldr":       string                       // 1-2 sentence summary
  },
  "cv_match": [
    { "requirement": string, "match": string }  // one row per JD requirement
  ],
  "recommendation":      string,               // 2-4 sentences; lead with APPLY / CONSIDER / SKIP
  "comp_analysis":       string,               // prose
  "cultural_signals":    string,               // prose
  "red_flags":           [string],             // 0+ concise concerns
  "legitimacy_analysis": string                // prose explaining the legitimacy tier
}

Rules:
- Begin your response with { and end with }.
- Use double quotes for all keys and string values.
- Use null (not "null") for missing optional fields.
- Do not wrap the JSON in code fences.
- Do not include any commentary outside the JSON.
`;

// ---------------------------------------------------------------------------
// Markdown rendering helpers (script-side -- never asked of the LLM)
// ---------------------------------------------------------------------------
function escPipe(s) {
  return String(s ?? '').replace(/\|/g, '\\|');
}

function strOr(v, fallback = 'unknown') {
  if (v === null || v === undefined) return fallback;
  const s = String(v).trim();
  return s.length === 0 ? fallback : s;
}

function parseJsonLoosely(text) {
  if (!text) return null;
  try { return JSON.parse(text); } catch (_) {}
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fenced) {
    try { return JSON.parse(fenced[1]); } catch (_) {}
  }
  const first = text.indexOf('{');
  const last  = text.lastIndexOf('}');
  if (first >= 0 && last > first) {
    try { return JSON.parse(text.slice(first, last + 1)); } catch (_) {}
  }
  return null;
}

function renderHeader(data, today, modelName) {
  const lines = [];
  lines.push(`# Evaluation: ${strOr(data.company)} -- ${strOr(data.role)}`);
  const scoreStr = (typeof data.score === 'number' && !Number.isNaN(data.score))
    ? `${data.score}/5`
    : '?/5';
  lines.push(`**Date:** ${today}  **Archetype:** ${strOr(data.archetype)}  **Score:** ${scoreStr}`);
  const line3 = [];
  if (data.url)          line3.push(`**URL:** ${data.url}`);
  if (data.verification) line3.push(`**Verification:** ${data.verification}`);
  if (line3.length)      lines.push(line3.join('  '));
  lines.push(`**Legitimacy:** ${strOr(data.legitimacy)}`);
  lines.push(`**PDF:** pending`);
  lines.push(`**Tool:** Gemini (${modelName})`);
  return lines.join('\n');
}

function renderRoleSummary(rs = {}) {
  const lines = ['## A) Role Summary'];
  const fields = [
    ['Archetype', rs.archetype],
    ['Domain',    rs.domain],
    ['Seniority', rs.seniority],
    ['Remote',    rs.remote],
    ['Comp',      rs.comp],
    ['Team Size', rs.team_size],
    ['TL;DR',     rs.tldr],
  ];
  for (const [label, value] of fields) {
    if (value) lines.push(`- **${label}:** ${value}`);
  }
  if (lines.length === 1) lines.push('_No role summary available._');
  return lines.join('\n');
}

function renderCvMatch(matches = []) {
  const lines = ['## B) CV Match'];
  if (!Array.isArray(matches) || matches.length === 0) {
    lines.push('_No CV match analysis available._');
    return lines.join('\n');
  }
  lines.push('| Requirement | Match |');
  lines.push('|---|---|');
  for (const m of matches) {
    lines.push(`| ${escPipe(m?.requirement)} | ${escPipe(m?.match)} |`);
  }
  return lines.join('\n');
}

function renderProse(heading, text) {
  const body = (text && String(text).trim()) ? String(text).trim() : '_No analysis provided._';
  return `${heading}\n${body}`;
}

function renderBullets(heading, items = []) {
  const lines = [heading];
  if (!Array.isArray(items) || items.length === 0) {
    lines.push('_None identified._');
  } else {
    for (const item of items) lines.push(`- ${item}`);
  }
  return lines.join('\n');
}

function renderReport(data, today, modelName) {
  return [
    renderHeader(data, today, modelName),
    '',
    renderRoleSummary(data.role_summary),
    '',
    renderCvMatch(data.cv_match),
    '',
    renderProse('## C) Recommendation',       data.recommendation),
    '',
    renderProse('## D) Comp Analysis',        data.comp_analysis),
    '',
    renderProse('## E) Cultural Signals',     data.cultural_signals),
    '',
    renderBullets('## F) Red Flags',          data.red_flags),
    '',
    renderProse('## G) Posting Legitimacy',   data.legitimacy_analysis),
    '',
  ].join('\n');
}

// ---------------------------------------------------------------------------
// Call Gemini API (JSON output mode)
// ---------------------------------------------------------------------------
console.log(`🤖  Calling Gemini (${modelName}) in JSON mode... this may take 30-60 seconds.\n`);

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: modelName,
  generationConfig: {
    temperature: 0.4,                       // deterministic enough for structured evaluation
    maxOutputTokens: 32768,                 // bumped from 8192 to remove truncation as a failure mode
    responseMimeType: 'application/json',   // forces structured JSON output
  },
});

let rawResponse;
let usage;
let finishReason;
try {
  const result = await model.generateContent([
    { text: systemPrompt },
    { text: `\n\nJOB DESCRIPTION TO EVALUATE:\n\n${jdText}` },
  ]);
  rawResponse  = result.response.text();
  usage        = result.response.usageMetadata;
  finishReason = result.response.candidates?.[0]?.finishReason;
} catch (err) {
  console.error('❌  Gemini API error:', err.message);
  if (err.message?.includes('API_KEY')) {
    console.error('    Check your GEMINI_API_KEY in .env');
  } else if (err.message?.includes('quota') || err.message?.includes('rate')) {
    console.error('    You may have hit the free-tier rate limit. Wait 60s and retry.');
  }
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Diagnostics
// ---------------------------------------------------------------------------
const promptTok = usage?.promptTokenCount ?? '?';
const outTok    = usage?.candidatesTokenCount ?? '?';
console.log(`📊  finishReason: ${finishReason ?? 'unknown'}  |  tokens: ${outTok} out / ${promptTok} in`);
if (finishReason === 'MAX_TOKENS') {
  console.warn(`⚠️   Response hit maxOutputTokens. JSON may be truncated and unparseable.`);
}

// ---------------------------------------------------------------------------
// Parse JSON; if it fails, persist raw response so no work is lost
// ---------------------------------------------------------------------------
const data = parseJsonLoosely(rawResponse);

if (!data) {
  console.error(`\n❌  Could not parse JSON from Gemini response.`);
  if (saveReport) {
    try {
      if (!existsSync(PATHS.reports)) mkdirSync(PATHS.reports, { recursive: true });
      const today   = new Date().toISOString().split('T')[0];
      const num     = nextReportNumber();
      const rawPath = join(PATHS.reports, `${num}-unparsed-${today}.raw.txt`);
      writeFileSync(rawPath, rawResponse ?? '', 'utf-8');
      console.error(`    Raw response saved to: reports/${num}-unparsed-${today}.raw.txt`);
    } catch (err) {
      console.error(`    Failed to save raw response: ${err.message}`);
    }
  } else {
    console.error(`--- raw response ---\n${rawResponse}\n--- end raw ---`);
  }
  process.exit(2);
}

// ---------------------------------------------------------------------------
// Render markdown report
// ---------------------------------------------------------------------------
const today          = new Date().toISOString().split('T')[0];
const reportContent  = renderReport(data, today, modelName);

console.log('\n' + '═'.repeat(66));
console.log('  CAREER-OPS EVALUATION — powered by Google Gemini');
console.log('═'.repeat(66) + '\n');
console.log(reportContent);

// ---------------------------------------------------------------------------
// Save report
// ---------------------------------------------------------------------------
const company    = strOr(data.company);
const role       = strOr(data.role);
const archetype  = strOr(data.archetype);
const legitimacy = strOr(data.legitimacy);
const score      = (typeof data.score === 'number' && !Number.isNaN(data.score)) ? data.score : '?';

if (saveReport) {
  try {
    if (!existsSync(PATHS.reports)) {
      mkdirSync(PATHS.reports, { recursive: true });
    }

    const num         = nextReportNumber();
    const companySlug = company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'unknown';
    const filename    = `${num}-${companySlug}-${today}.md`;
    const reportPath  = join(PATHS.reports, filename);

    writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`\n✅  Report saved: reports/${filename}`);

    console.log(`\n📊  Tracker entry (add to data/applications.md):`);
    console.log(`    | ${num} | ${today} | ${company} | ${role} | ${score} | Evaluada | ❌ | [${num}](reports/${filename}) |`);
  } catch (err) {
    console.warn(`⚠️   Could not save report: ${err.message}`);
  }
}

console.log('\n' + '─'.repeat(66));
console.log(`  Score: ${score}/5  |  Archetype: ${archetype}  |  Legitimacy: ${legitimacy}`);
console.log('─'.repeat(66) + '\n');
