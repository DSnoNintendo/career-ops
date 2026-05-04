# Changelog

## [1.7.0](https://github.com/DSnoNintendo/career-ops/compare/career-ops-v1.6.0...career-ops-v1.7.0) (2026-05-04)


### Features

* adapt contacto mode by contact type (recruiter/HM/peer/interviewer) ([9fd5a90](https://github.com/DSnoNintendo/career-ops/commit/9fd5a90896f20020f48455cd079b64fed491b89f))
* add --min-score flag to batch runner ([#249](https://github.com/DSnoNintendo/career-ops/issues/249)) ([cb0c7f7](https://github.com/DSnoNintendo/career-ops/commit/cb0c7f7d7d3b9f3f1c3dc75ccac0a08d2737c01e))
* add {{PHONE}} placeholder to CV template ([#287](https://github.com/DSnoNintendo/career-ops/issues/287)) ([e71595f](https://github.com/DSnoNintendo/career-ops/commit/e71595f8ba134971ecf1cc3c3420d9caf21eed43))
* add authenticated LinkedIn scanner with persistent browser sessions ([59a3f00](https://github.com/DSnoNintendo/career-ops/commit/59a3f00d23f61dc97f971fb047e7ddfd977fa578))
* add authenticated portal scanner harness (scan-auth.mjs) ([df33d2d](https://github.com/DSnoNintendo/career-ops/commit/df33d2d28fe45031fbadebf482505892592f70ca))
* add authenticated portal scanner with LinkedIn support ([8949ae7](https://github.com/DSnoNintendo/career-ops/commit/8949ae72d88fbeabd4069d576d20188764e44920))
* add Block G — posting legitimacy assessment ([3a636ac](https://github.com/DSnoNintendo/career-ops/commit/3a636ac586659bb798ef46a0a9798478a1e28b0a))
* add Claude Code plugin manifests (path-stable) ([62b767d](https://github.com/DSnoNintendo/career-ops/commit/62b767dcc56e4c875ed70bf4fe799c254ecf8eea))
* add follow-up cadence tracker mode ([4308c37](https://github.com/DSnoNintendo/career-ops/commit/4308c375033c6df430308235f4324658a8353b81))
* add Gemini CLI native integration and evaluator script  ([#349](https://github.com/DSnoNintendo/career-ops/issues/349)) ([0853486](https://github.com/DSnoNintendo/career-ops/commit/0853486d2c01a35adafea2cc6b6d8c429b843588))
* add Gemini CLI native integration and evaluator script (closes [#344](https://github.com/DSnoNintendo/career-ops/issues/344)) ([0853486](https://github.com/DSnoNintendo/career-ops/commit/0853486d2c01a35adafea2cc6b6d8c429b843588))
* add generate-html.mjs and English pdf mode for local CV HTML generation ([73bb9ef](https://github.com/DSnoNintendo/career-ops/commit/73bb9ef9195959791f51a081dd975e78df2b7262))
* add GitHub Actions CI + auto-labeler + welcome bot + /run skill ([2ddf22a](https://github.com/DSnoNintendo/career-ops/commit/2ddf22a6a2731b38bcaed5786c4855c4ab9fe722))
* add LaTeX/Overleaf CV export mode with pdflatex compilation ([#362](https://github.com/DSnoNintendo/career-ops/issues/362)) ([b824953](https://github.com/DSnoNintendo/career-ops/commit/b824953d0e3b7f8c6105dfcce7e17257c95ce6cd))
* add LaTeX/Overleaf CV export mode with pdflatex compilation (closes [#47](https://github.com/DSnoNintendo/career-ops/issues/47)) ([b824953](https://github.com/DSnoNintendo/career-ops/commit/b824953d0e3b7f8c6105dfcce7e17257c95ce6cd))
* add linkedin npm scripts pointing to scan-auth.mjs ([3721a71](https://github.com/DSnoNintendo/career-ops/commit/3721a71477afd34616ea6edf1525752729ecd8df))
* add LinkedIn portal scanner with job data extraction and cross-portal dedup ([88fd9d4](https://github.com/DSnoNintendo/career-ops/commit/88fd9d4f4e20aed489601963e69e03a6eea61538))
* add linkedin_searches config section to portals example ([5bc17a4](https://github.com/DSnoNintendo/career-ops/commit/5bc17a414d6937b61b86bcea226fdb0cffb9f0fa))
* add Nix flake devshell with Playwright support ([c579fcd](https://github.com/DSnoNintendo/career-ops/commit/c579fcddebf793f00cfad8534fd74085c09017fb))
* add OpenCode slash commands for career-ops ([#67](https://github.com/DSnoNintendo/career-ops/issues/67)) ([93caaed](https://github.com/DSnoNintendo/career-ops/commit/93caaed49cbc9f3214f9beb66fb2281c3f2370e6))
* add project linking for pdf generation. ([1f1677b](https://github.com/DSnoNintendo/career-ops/commit/1f1677bdb7ad45ae9b498a897df1609fd968fd6e))
* add project linking for pdf generation. ([6e0c628](https://github.com/DSnoNintendo/career-ops/commit/6e0c628e905cfb9a537c6639c0458c45ff219274))
* add scan-auth mode and skill routing ([38e3b62](https://github.com/DSnoNintendo/career-ops/commit/38e3b62f44041d07e463fc718bd2d434ae15c746))
* add scan-auth mode for Claude integration with LinkedIn scanner ([c8e6a41](https://github.com/DSnoNintendo/career-ops/commit/c8e6a410f33f8936e59b6be9b40bd4012ceb5113))
* add scan-auth route and menu entry to skill router ([23bcc41](https://github.com/DSnoNintendo/career-ops/commit/23bcc41f8497d53feaa81fd84104901709c1662c))
* add scan:auth and scan:login npm scripts ([b3c78ee](https://github.com/DSnoNintendo/career-ops/commit/b3c78eec0cf86b3a548a684617e3a3e8c8f52f92))
* add scan:auth script for running auth portal scan ([2f32caf](https://github.com/DSnoNintendo/career-ops/commit/2f32caf653f36cacde91e5a2588c682ea9c2c886))
* add scan.mjs — zero-token portal scanner ([8c19b2b](https://github.com/DSnoNintendo/career-ops/commit/8c19b2b59f7087689e004f3d48e912f291911373))
* add writing-samples folder for AI-detection-evading voice calibration ([9ae201d](https://github.com/DSnoNintendo/career-ops/commit/9ae201d0682a17e7006ed7902b42db8234212e97))
* **cv:** add cv.output_format to route between html and latex generation ([b82bb5f](https://github.com/DSnoNintendo/career-ops/commit/b82bb5fb7c86ab3074a54eaf0f3186f81d41f417))
* **dashboard:** add Catppuccin Latte light theme with auto-detection ([ff686c8](https://github.com/DSnoNintendo/career-ops/commit/ff686c8af97a7bf93565fe8eeac677f998cc9ece))
* **dashboard:** add manual refresh shortcut ([#246](https://github.com/DSnoNintendo/career-ops/issues/246)) ([4b5093a](https://github.com/DSnoNintendo/career-ops/commit/4b5093a8ef1733c449ec0821f722f996625fcb84))
* **dashboard:** add progress analytics screen ([623c837](https://github.com/DSnoNintendo/career-ops/commit/623c837bf3155fd5b7413554240071d40585dd7e))
* **dashboard:** add rejected and discarded pipeline tabs ([7d05967](https://github.com/DSnoNintendo/career-ops/commit/7d05967389fb6185f0d6e566a4ba583ee3824e1e))
* **dashboard:** add vim motions to pipeline screen ([#262](https://github.com/DSnoNintendo/career-ops/issues/262)) ([d149e54](https://github.com/DSnoNintendo/career-ops/commit/d149e541402db0c88161a71c73899cd1836a1b2d))
* **dashboard:** aligned tables and markdown syntax rendering in viewer ([dbd1d3f](https://github.com/DSnoNintendo/career-ops/commit/dbd1d3f7177358d0384d6e661d1b0dfc1f60bd4e))
* **dashboard:** show tracker IDs in pipeline list ([8d289c6](https://github.com/DSnoNintendo/career-ops/commit/8d289c64e31f81cf447f75105b500d1feca21058))
* expand portals.example.yml with 8 dev-tools companies + 23 search queries ([#140](https://github.com/DSnoNintendo/career-ops/issues/140)) ([b7f555d](https://github.com/DSnoNintendo/career-ops/commit/b7f555d7b9a7b23c875fa0d35584df534961dabe))
* Generate CV HTML Locally ([2ed948e](https://github.com/DSnoNintendo/career-ops/commit/2ed948e379ddd79760d7331f1f33262394b97c11))
* **i18n:** add Japanese README + language modes for Japan market ([20a2c81](https://github.com/DSnoNintendo/career-ops/commit/20a2c817486968ca42a534aa86838c797d599c10))
* **latex:** add tectonic engine auto-detect with pdflatex fallback ([4b71b2c](https://github.com/DSnoNintendo/career-ops/commit/4b71b2cbf4fd49d3882cdd8767e31727337fab34))
* **portals:** add Canada/Vancouver and automation companies to example template ([590ba6e](https://github.com/DSnoNintendo/career-ops/commit/590ba6e1b4b9d2d9d03893b7f5fdae920d4f9a0b))
* scan all portals when no portal is specified ([aa19b9c](https://github.com/DSnoNintendo/career-ops/commit/aa19b9c268b828b3cba4f5a141f6e168563e323b))


### Bug Fixes

* 10 bug fixes — resource leaks, command injection, Unicode, navigation ([cb01a2c](https://github.com/DSnoNintendo/career-ops/commit/cb01a2c2e3b7fc334b1c4594749ea40b0da8fc62))
* add blank lines after headings in SKILL.md (MD022) ([7275c16](https://github.com/DSnoNintendo/career-ops/commit/7275c16464bdc8ad62100425c96d89c74694e1b3))
* add data/ fallback to UpdateApplicationStatus ([#55](https://github.com/DSnoNintendo/career-ops/issues/55)) ([3512b8e](https://github.com/DSnoNintendo/career-ops/commit/3512b8ef4eb8ca967bc967664f8798af42b58a52))
* add stopword filtering and overlap ratio to roleMatch ([#248](https://github.com/DSnoNintendo/career-ops/issues/248)) ([4da772d](https://github.com/DSnoNintendo/career-ops/commit/4da772d3a4996bc9ecbe2d384d1e9d2ed75b9819))
* align portals.example.yml indentation for new companies ([26a6751](https://github.com/DSnoNintendo/career-ops/commit/26a675173e64dac09fd1524ff9a7c7061520e057))
* append job ID to JD filenames to prevent collisions ([d2260bb](https://github.com/DSnoNintendo/career-ops/commit/d2260bb4c78aacb12bd4d2f9b81c4f59e4a8ce2c))
* **ci:** correct first-interaction@v3 input names ([c5196a8](https://github.com/DSnoNintendo/career-ops/commit/c5196a8dd8ff05da51c72ea151f67e481f12c329))
* **ci:** gracefully handle missing dependency graph in dependency-review ([#343](https://github.com/DSnoNintendo/career-ops/issues/343)) ([7c5fecb](https://github.com/DSnoNintendo/career-ops/commit/7c5fecb00d60521f77b33724eb345a28257d8832))
* **ci:** gracefully handle missing dependency graph in dependency-review workflow ([#352](https://github.com/DSnoNintendo/career-ops/issues/352)) ([7c5fecb](https://github.com/DSnoNintendo/career-ops/commit/7c5fecb00d60521f77b33724eb345a28257d8832))
* **ci:** use pull_request_target for labeler on fork PRs ([#260](https://github.com/DSnoNintendo/career-ops/issues/260)) ([2ecf572](https://github.com/DSnoNintendo/career-ops/commit/2ecf57206c2eb6e35e2a843d6b8365f7a04c53d6))
* clarify next-step message after scan summary ([d2260bb](https://github.com/DSnoNintendo/career-ops/commit/d2260bb4c78aacb12bd4d2f9b81c4f59e4a8ce2c))
* correct _shared.md → _profile.md reference in CUSTOMIZATION.md (closes [#137](https://github.com/DSnoNintendo/career-ops/issues/137)) ([a91e264](https://github.com/DSnoNintendo/career-ops/commit/a91e264b6ea047a76d8c033aa564fe01b8f9c1d9))
* correct dashboard launch path in docs ([#80](https://github.com/DSnoNintendo/career-ops/issues/80)) ([2b969ee](https://github.com/DSnoNintendo/career-ops/commit/2b969eea5f6bbc8f29b9e42bedb59312379e9f02))
* **dashboard:** show dates in pipeline list ([#298](https://github.com/DSnoNintendo/career-ops/issues/298)) ([e5e2a6c](https://github.com/DSnoNintendo/career-ops/commit/e5e2a6cffe9a5b9f3cec862df25410d02ecc9aa4))
* deduplicate listings within a single scan run ([28f35b0](https://github.com/DSnoNintendo/career-ops/commit/28f35b074bfc71972cf24aef45e2105737cceca9))
* ensure data/ and output/ dirs exist before writing in scripts ([#261](https://github.com/DSnoNintendo/career-ops/issues/261)) ([4b834f6](https://github.com/DSnoNintendo/career-ops/commit/4b834f6f7f8f1b647a6bf76e43b017dcbe9cd52f))
* escape frontmatter fields in saved JD files ([1c76aad](https://github.com/DSnoNintendo/career-ops/commit/1c76aad26f299d0b13132ab6c2a4102b9c401109))
* extract listings when description has no 'more' button ([276299d](https://github.com/DSnoNintendo/career-ops/commit/276299dd41db3ed4dfbc30d1b2dd9eeb9c4060bd))
* filter expired WebSearch links before they reach the pipeline ([#57](https://github.com/DSnoNintendo/career-ops/issues/57)) ([ce1c5a3](https://github.com/DSnoNintendo/career-ops/commit/ce1c5a3c7eea6ebce2c90aebba59d6e26b790d3f))
* fix report URL for local jds across pipeline modes ([d81fe0b](https://github.com/DSnoNintendo/career-ops/commit/d81fe0b03d19776e2eea06cbaf6c144583701ea9))
* fix report URL for local jds across pipeline modes ([84608d1](https://github.com/DSnoNintendo/career-ops/commit/84608d11220746a3fba0ec2916ac23db781b41dd))
* improve default PDF readability ([#85](https://github.com/DSnoNintendo/career-ops/issues/85)) ([10034ec](https://github.com/DSnoNintendo/career-ops/commit/10034ec3304c1c79ff9c9678c7826ab77c0bcbf7))
* liveness checks ignore nav/footer Apply text, expired signals win ([3a3cb95](https://github.com/DSnoNintendo/career-ops/commit/3a3cb95bdf09235509df72e30b3077623f571ea1))
* **liveness:** detect closed postings with applications-closed banner variants ([7f8217e](https://github.com/DSnoNintendo/career-ops/commit/7f8217e057b327980a797a682c4f01d3318edbbe))
* **merge-tracker:** filter seniority and location stopwords + require overlap ratio in roleFuzzyMatch ([7821113](https://github.com/DSnoNintendo/career-ops/commit/7821113261eeb32f99639ff076651ab2e7757209))
* **pt:** restore diacritical marks in PT-BR modes ([#358](https://github.com/DSnoNintendo/career-ops/issues/358)) ([3a4c596](https://github.com/DSnoNintendo/career-ops/commit/3a4c596cb0a522f562ba38b35c210facaf38a503))
* **pt:** restore diacritical marks in PT-BR modes ([#359](https://github.com/DSnoNintendo/career-ops/issues/359)) ([3a4c596](https://github.com/DSnoNintendo/career-ops/commit/3a4c596cb0a522f562ba38b35c210facaf38a503))
* reject unknown flags and extra args in scan-auth CLI parsing ([99f245b](https://github.com/DSnoNintendo/career-ops/commit/99f245b3296e26298f28fc7fcbfe225921591c7e))
* **release:** sync VERSION and package.json via release-please-config ([6a3dc22](https://github.com/DSnoNintendo/career-ops/commit/6a3dc224337a1942bf2ebf18b9b275d94fc06e7a))
* remove prompt for user login in runs where '--login' flag is not explicity used ([fa0dab8](https://github.com/DSnoNintendo/career-ops/commit/fa0dab86cff474569ed02a44179481c24927280b))
* remove references to stale scan-auth.mjs flags ([f7c0dac](https://github.com/DSnoNintendo/career-ops/commit/f7c0dac1e519cdcfdb46667cd836dce390cb496b))
* remove scan:login auth portal scans should only be handled by calling 'node scan-auth.mjs --login &lt;portal&gt; directly' ([ef3bc51](https://github.com/DSnoNintendo/career-ops/commit/ef3bc51730812a4f20d7f1a116ade169c2f3a636))
* remove wellfound, lever and remotefront from portals.example.yml ([#286](https://github.com/DSnoNintendo/career-ops/issues/286)) ([ecd013c](https://github.com/DSnoNintendo/career-ops/commit/ecd013cc6f59e3a1a8ef77d34e7abc15e8075ed3))
* replace grep -P with POSIX-compatible grep in batch-runner.sh ([637b39e](https://github.com/DSnoNintendo/career-ops/commit/637b39e383d1174c8287f42e9534e9e3cdfabb19))
* test-all.mjs scans only git-tracked files, avoids false positives ([47c9f98](https://github.com/DSnoNintendo/career-ops/commit/47c9f984d8ddc70974f15c99b081667b73f1bb9a))
* update message prompting user to run '/career-ops {portal}' instead of '/career-ops pipeline' once scan job is complete ([648b562](https://github.com/DSnoNintendo/career-ops/commit/648b562722583dbd763833a6ca802aa362633160))
* **update-system:** cross-check GitHub Releases API when VERSION file is stale ([b0ee6eb](https://github.com/DSnoNintendo/career-ops/commit/b0ee6ebfcec7920ea7590ada61f3c39324d22ebc))
* **update-system:** expand SYSTEM_PATHS to cover all language modes and current scripts ([34fe3fb](https://github.com/DSnoNintendo/career-ops/commit/34fe3fbd5782f7f57faf8ef4a245fbee6275a040))
* use candidate name from profile.yml in PDF filename ([7bcbc08](https://github.com/DSnoNintendo/career-ops/commit/7bcbc08ca6184362398690234e49df0ac157567f))
* use execFileSync to prevent shell injection in test-all.mjs ([c99d5a6](https://github.com/DSnoNintendo/career-ops/commit/c99d5a6526f923b56c3790b79b0349f402fa00e2))
* use fileURLToPath for cross platform compatible paths in tracker scripts ([#32](https://github.com/DSnoNintendo/career-ops/issues/32)) ([#58](https://github.com/DSnoNintendo/career-ops/issues/58)) ([ab77510](https://github.com/DSnoNintendo/career-ops/commit/ab775102f4586ae4663a593b519927531be27122))
* use hi@santifer.io in English README ([5518d3d](https://github.com/DSnoNintendo/career-ops/commit/5518d3dd07716137b97bb4d8c7b5264b94e2b9e9))
* warn when pipeline.md is missing instead of silently skipping ([a8dae39](https://github.com/DSnoNintendo/career-ops/commit/a8dae39a51912bf16386b07c7a98e0f2dbd3f3cb))


### Performance Improvements

* compress hero banner from 5.7MB to 671KB ([dac4259](https://github.com/DSnoNintendo/career-ops/commit/dac425913620fe0a66916dda7ba8d8fc4c427d51))

## [1.6.0](https://github.com/santifer/career-ops/compare/v1.5.0...v1.6.0) (2026-04-26)


### Features

* add Gemini CLI native integration and evaluator script  ([#349](https://github.com/santifer/career-ops/issues/349)) ([0853486](https://github.com/santifer/career-ops/commit/0853486d2c01a35adafea2cc6b6d8c429b843588))
* add Gemini CLI native integration and evaluator script (closes [#344](https://github.com/santifer/career-ops/issues/344)) ([0853486](https://github.com/santifer/career-ops/commit/0853486d2c01a35adafea2cc6b6d8c429b843588))
* add LaTeX/Overleaf CV export mode with pdflatex compilation ([#362](https://github.com/santifer/career-ops/issues/362)) ([b824953](https://github.com/santifer/career-ops/commit/b824953d0e3b7f8c6105dfcce7e17257c95ce6cd))
* add LaTeX/Overleaf CV export mode with pdflatex compilation (closes [#47](https://github.com/santifer/career-ops/issues/47)) ([b824953](https://github.com/santifer/career-ops/commit/b824953d0e3b7f8c6105dfcce7e17257c95ce6cd))
* **cv:** add cv.output_format to route between html and latex generation ([b82bb5f](https://github.com/santifer/career-ops/commit/b82bb5fb7c86ab3074a54eaf0f3186f81d41f417))
* **dashboard:** add rejected and discarded pipeline tabs ([7d05967](https://github.com/santifer/career-ops/commit/7d05967389fb6185f0d6e566a4ba583ee3824e1e))
* **dashboard:** show tracker IDs in pipeline list ([8d289c6](https://github.com/santifer/career-ops/commit/8d289c64e31f81cf447f75105b500d1feca21058))
* **latex:** add tectonic engine auto-detect with pdflatex fallback ([4b71b2c](https://github.com/santifer/career-ops/commit/4b71b2cbf4fd49d3882cdd8767e31727337fab34))
* **portals:** add Canada/Vancouver and automation companies to example template ([590ba6e](https://github.com/santifer/career-ops/commit/590ba6e1b4b9d2d9d03893b7f5fdae920d4f9a0b))


### Bug Fixes

* **ci:** correct first-interaction@v3 input names ([c5196a8](https://github.com/santifer/career-ops/commit/c5196a8dd8ff05da51c72ea151f67e481f12c329))
* **ci:** gracefully handle missing dependency graph in dependency-review ([#343](https://github.com/santifer/career-ops/issues/343)) ([7c5fecb](https://github.com/santifer/career-ops/commit/7c5fecb00d60521f77b33724eb345a28257d8832))
* **ci:** gracefully handle missing dependency graph in dependency-review workflow ([#352](https://github.com/santifer/career-ops/issues/352)) ([7c5fecb](https://github.com/santifer/career-ops/commit/7c5fecb00d60521f77b33724eb345a28257d8832))
* **liveness:** detect closed postings with applications-closed banner variants ([7f8217e](https://github.com/santifer/career-ops/commit/7f8217e057b327980a797a682c4f01d3318edbbe))
* **merge-tracker:** filter seniority and location stopwords + require overlap ratio in roleFuzzyMatch ([7821113](https://github.com/santifer/career-ops/commit/7821113261eeb32f99639ff076651ab2e7757209))
* **pt:** restore diacritical marks in PT-BR modes ([#358](https://github.com/santifer/career-ops/issues/358)) ([3a4c596](https://github.com/santifer/career-ops/commit/3a4c596cb0a522f562ba38b35c210facaf38a503))
* **pt:** restore diacritical marks in PT-BR modes ([#359](https://github.com/santifer/career-ops/issues/359)) ([3a4c596](https://github.com/santifer/career-ops/commit/3a4c596cb0a522f562ba38b35c210facaf38a503))
* **update-system:** cross-check GitHub Releases API when VERSION file is stale ([b0ee6eb](https://github.com/santifer/career-ops/commit/b0ee6ebfcec7920ea7590ada61f3c39324d22ebc))
* **update-system:** expand SYSTEM_PATHS to cover all language modes and current scripts ([34fe3fb](https://github.com/santifer/career-ops/commit/34fe3fbd5782f7f57faf8ef4a245fbee6275a040))

## [1.5.0](https://github.com/santifer/career-ops/compare/v1.4.0...v1.5.0) (2026-04-14)


### Features

* add --min-score flag to batch runner ([#249](https://github.com/santifer/career-ops/issues/249)) ([cb0c7f7](https://github.com/santifer/career-ops/commit/cb0c7f7d7d3b9f3f1c3dc75ccac0a08d2737c01e))
* add {{PHONE}} placeholder to CV template ([#287](https://github.com/santifer/career-ops/issues/287)) ([e71595f](https://github.com/santifer/career-ops/commit/e71595f8ba134971ecf1cc3c3420d9caf21eed43))
* **dashboard:** add manual refresh shortcut ([#246](https://github.com/santifer/career-ops/issues/246)) ([4b5093a](https://github.com/santifer/career-ops/commit/4b5093a8ef1733c449ec0821f722f996625fcb84))


### Bug Fixes

* add stopword filtering and overlap ratio to roleMatch ([#248](https://github.com/santifer/career-ops/issues/248)) ([4da772d](https://github.com/santifer/career-ops/commit/4da772d3a4996bc9ecbe2d384d1e9d2ed75b9819))
* **dashboard:** show dates in pipeline list ([#298](https://github.com/santifer/career-ops/issues/298)) ([e5e2a6c](https://github.com/santifer/career-ops/commit/e5e2a6cffe9a5b9f3cec862df25410d02ecc9aa4))
* ensure data/ and output/ dirs exist before writing in scripts ([#261](https://github.com/santifer/career-ops/issues/261)) ([4b834f6](https://github.com/santifer/career-ops/commit/4b834f6f7f8f1b647a6bf76e43b017dcbe9cd52f))
* remove wellfound, lever and remotefront from portals.example.yml ([#286](https://github.com/santifer/career-ops/issues/286)) ([ecd013c](https://github.com/santifer/career-ops/commit/ecd013cc6f59e3a1a8ef77d34e7abc15e8075ed3))

## [1.4.0](https://github.com/santifer/career-ops/compare/v1.3.0...v1.4.0) (2026-04-13)


### Features

* add GitHub Actions CI + auto-labeler + welcome bot + /run skill ([2ddf22a](https://github.com/santifer/career-ops/commit/2ddf22a6a2731b38bcaed5786c4855c4ab9fe722))
* **dashboard:** add Catppuccin Latte light theme with auto-detection ([ff686c8](https://github.com/santifer/career-ops/commit/ff686c8af97a7bf93565fe8eeac677f998cc9ece))
* **dashboard:** add progress analytics screen ([623c837](https://github.com/santifer/career-ops/commit/623c837bf3155fd5b7413554240071d40585dd7e))
* **dashboard:** add vim motions to pipeline screen ([#262](https://github.com/santifer/career-ops/issues/262)) ([d149e54](https://github.com/santifer/career-ops/commit/d149e541402db0c88161a71c73899cd1836a1b2d))
* **dashboard:** aligned tables and markdown syntax rendering in viewer ([dbd1d3f](https://github.com/santifer/career-ops/commit/dbd1d3f7177358d0384d6e661d1b0dfc1f60bd4e))


### Bug Fixes

* **ci:** use pull_request_target for labeler on fork PRs ([#260](https://github.com/santifer/career-ops/issues/260)) ([2ecf572](https://github.com/santifer/career-ops/commit/2ecf57206c2eb6e35e2a843d6b8365f7a04c53d6))
* correct _shared.md → _profile.md reference in CUSTOMIZATION.md (closes [#137](https://github.com/santifer/career-ops/issues/137)) ([a91e264](https://github.com/santifer/career-ops/commit/a91e264b6ea047a76d8c033aa564fe01b8f9c1d9))
* replace grep -P with POSIX-compatible grep in batch-runner.sh ([637b39e](https://github.com/santifer/career-ops/commit/637b39e383d1174c8287f42e9534e9e3cdfabb19))
* test-all.mjs scans only git-tracked files, avoids false positives ([47c9f98](https://github.com/santifer/career-ops/commit/47c9f984d8ddc70974f15c99b081667b73f1bb9a))
* use execFileSync to prevent shell injection in test-all.mjs ([c99d5a6](https://github.com/santifer/career-ops/commit/c99d5a6526f923b56c3790b79b0349f402fa00e2))
