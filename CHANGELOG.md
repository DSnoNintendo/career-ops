# Changelog

## [1.6.0](https://github.com/DSnoNintendo/career-ops/compare/v1.5.0...v1.6.0) (2026-04-15)


### Features

* adapt contacto mode by contact type (recruiter/HM/peer/interviewer) ([9fd5a90](https://github.com/DSnoNintendo/career-ops/commit/9fd5a90896f20020f48455cd079b64fed491b89f))
* add --min-score flag to batch runner ([#249](https://github.com/DSnoNintendo/career-ops/issues/249)) ([cb0c7f7](https://github.com/DSnoNintendo/career-ops/commit/cb0c7f7d7d3b9f3f1c3dc75ccac0a08d2737c01e))
* add {{PHONE}} placeholder to CV template ([#287](https://github.com/DSnoNintendo/career-ops/issues/287)) ([e71595f](https://github.com/DSnoNintendo/career-ops/commit/e71595f8ba134971ecf1cc3c3420d9caf21eed43))
* add authenticated LinkedIn scanner with persistent browser sessions ([59a3f00](https://github.com/DSnoNintendo/career-ops/commit/59a3f00d23f61dc97f971fb047e7ddfd977fa578))
* add authenticated portal scanner with LinkedIn support ([8949ae7](https://github.com/DSnoNintendo/career-ops/commit/8949ae72d88fbeabd4069d576d20188764e44920))
* add Block G — posting legitimacy assessment ([3a636ac](https://github.com/DSnoNintendo/career-ops/commit/3a636ac586659bb798ef46a0a9798478a1e28b0a))
* add follow-up cadence tracker mode ([4308c37](https://github.com/DSnoNintendo/career-ops/commit/4308c375033c6df430308235f4324658a8353b81))
* add GitHub Actions CI + auto-labeler + welcome bot + /run skill ([2ddf22a](https://github.com/DSnoNintendo/career-ops/commit/2ddf22a6a2731b38bcaed5786c4855c4ab9fe722))
* add linkedin npm scripts pointing to scan-auth.mjs ([3721a71](https://github.com/DSnoNintendo/career-ops/commit/3721a71477afd34616ea6edf1525752729ecd8df))
* add linkedin_searches config section to portals example ([5bc17a4](https://github.com/DSnoNintendo/career-ops/commit/5bc17a414d6937b61b86bcea226fdb0cffb9f0fa))
* add Nix flake devshell with Playwright support ([c579fcd](https://github.com/DSnoNintendo/career-ops/commit/c579fcddebf793f00cfad8534fd74085c09017fb))
* add OpenCode slash commands for career-ops ([#67](https://github.com/DSnoNintendo/career-ops/issues/67)) ([93caaed](https://github.com/DSnoNintendo/career-ops/commit/93caaed49cbc9f3214f9beb66fb2281c3f2370e6))
* add project linking for pdf generation. ([1f1677b](https://github.com/DSnoNintendo/career-ops/commit/1f1677bdb7ad45ae9b498a897df1609fd968fd6e))
* add project linking for pdf generation. ([6e0c628](https://github.com/DSnoNintendo/career-ops/commit/6e0c628e905cfb9a537c6639c0458c45ff219274))
* add scan-auth mode and skill routing ([38e3b62](https://github.com/DSnoNintendo/career-ops/commit/38e3b62f44041d07e463fc718bd2d434ae15c746))
* add scan-auth mode for Claude integration with LinkedIn scanner ([c8e6a41](https://github.com/DSnoNintendo/career-ops/commit/c8e6a410f33f8936e59b6be9b40bd4012ceb5113))
* add scan-auth route and menu entry to skill router ([23bcc41](https://github.com/DSnoNintendo/career-ops/commit/23bcc41f8497d53feaa81fd84104901709c1662c))
* add scan:auth and scan:login npm scripts ([b3c78ee](https://github.com/DSnoNintendo/career-ops/commit/b3c78eec0cf86b3a548a684617e3a3e8c8f52f92))
* add scan.mjs — zero-token portal scanner ([8c19b2b](https://github.com/DSnoNintendo/career-ops/commit/8c19b2b59f7087689e004f3d48e912f291911373))
* **dashboard:** add Catppuccin Latte light theme with auto-detection ([ff686c8](https://github.com/DSnoNintendo/career-ops/commit/ff686c8af97a7bf93565fe8eeac677f998cc9ece))
* **dashboard:** add manual refresh shortcut ([#246](https://github.com/DSnoNintendo/career-ops/issues/246)) ([4b5093a](https://github.com/DSnoNintendo/career-ops/commit/4b5093a8ef1733c449ec0821f722f996625fcb84))
* **dashboard:** add progress analytics screen ([623c837](https://github.com/DSnoNintendo/career-ops/commit/623c837bf3155fd5b7413554240071d40585dd7e))
* **dashboard:** add vim motions to pipeline screen ([#262](https://github.com/DSnoNintendo/career-ops/issues/262)) ([d149e54](https://github.com/DSnoNintendo/career-ops/commit/d149e541402db0c88161a71c73899cd1836a1b2d))
* **dashboard:** aligned tables and markdown syntax rendering in viewer ([dbd1d3f](https://github.com/DSnoNintendo/career-ops/commit/dbd1d3f7177358d0384d6e661d1b0dfc1f60bd4e))
* expand portals.example.yml with 8 dev-tools companies + 23 search queries ([#140](https://github.com/DSnoNintendo/career-ops/issues/140)) ([b7f555d](https://github.com/DSnoNintendo/career-ops/commit/b7f555d7b9a7b23c875fa0d35584df534961dabe))
* **i18n:** add Japanese README + language modes for Japan market ([20a2c81](https://github.com/DSnoNintendo/career-ops/commit/20a2c817486968ca42a534aa86838c797d599c10))
* scan all portals when no portal is specified ([aa19b9c](https://github.com/DSnoNintendo/career-ops/commit/aa19b9c268b828b3cba4f5a141f6e168563e323b))


### Bug Fixes

* 10 bug fixes — resource leaks, command injection, Unicode, navigation ([cb01a2c](https://github.com/DSnoNintendo/career-ops/commit/cb01a2c2e3b7fc334b1c4594749ea40b0da8fc62))
* add data/ fallback to UpdateApplicationStatus ([#55](https://github.com/DSnoNintendo/career-ops/issues/55)) ([3512b8e](https://github.com/DSnoNintendo/career-ops/commit/3512b8ef4eb8ca967bc967664f8798af42b58a52))
* add stopword filtering and overlap ratio to roleMatch ([#248](https://github.com/DSnoNintendo/career-ops/issues/248)) ([4da772d](https://github.com/DSnoNintendo/career-ops/commit/4da772d3a4996bc9ecbe2d384d1e9d2ed75b9819))
* align portals.example.yml indentation for new companies ([26a6751](https://github.com/DSnoNintendo/career-ops/commit/26a675173e64dac09fd1524ff9a7c7061520e057))
* **ci:** use pull_request_target for labeler on fork PRs ([#260](https://github.com/DSnoNintendo/career-ops/issues/260)) ([2ecf572](https://github.com/DSnoNintendo/career-ops/commit/2ecf57206c2eb6e35e2a843d6b8365f7a04c53d6))
* correct _shared.md → _profile.md reference in CUSTOMIZATION.md (closes [#137](https://github.com/DSnoNintendo/career-ops/issues/137)) ([a91e264](https://github.com/DSnoNintendo/career-ops/commit/a91e264b6ea047a76d8c033aa564fe01b8f9c1d9))
* correct dashboard launch path in docs ([#80](https://github.com/DSnoNintendo/career-ops/issues/80)) ([2b969ee](https://github.com/DSnoNintendo/career-ops/commit/2b969eea5f6bbc8f29b9e42bedb59312379e9f02))
* **dashboard:** show dates in pipeline list ([#298](https://github.com/DSnoNintendo/career-ops/issues/298)) ([e5e2a6c](https://github.com/DSnoNintendo/career-ops/commit/e5e2a6cffe9a5b9f3cec862df25410d02ecc9aa4))
* deduplicate listings within a single scan run ([28f35b0](https://github.com/DSnoNintendo/career-ops/commit/28f35b074bfc71972cf24aef45e2105737cceca9))
* ensure data/ and output/ dirs exist before writing in scripts ([#261](https://github.com/DSnoNintendo/career-ops/issues/261)) ([4b834f6](https://github.com/DSnoNintendo/career-ops/commit/4b834f6f7f8f1b647a6bf76e43b017dcbe9cd52f))
* escape frontmatter fields in saved JD files ([1c76aad](https://github.com/DSnoNintendo/career-ops/commit/1c76aad26f299d0b13132ab6c2a4102b9c401109))
* extract listings when description has no 'more' button ([276299d](https://github.com/DSnoNintendo/career-ops/commit/276299dd41db3ed4dfbc30d1b2dd9eeb9c4060bd))
* filter expired WebSearch links before they reach the pipeline ([#57](https://github.com/DSnoNintendo/career-ops/issues/57)) ([ce1c5a3](https://github.com/DSnoNintendo/career-ops/commit/ce1c5a3c7eea6ebce2c90aebba59d6e26b790d3f))
* improve default PDF readability ([#85](https://github.com/DSnoNintendo/career-ops/issues/85)) ([10034ec](https://github.com/DSnoNintendo/career-ops/commit/10034ec3304c1c79ff9c9678c7826ab77c0bcbf7))
* liveness checks ignore nav/footer Apply text, expired signals win ([3a3cb95](https://github.com/DSnoNintendo/career-ops/commit/3a3cb95bdf09235509df72e30b3077623f571ea1))
* remove prompt for user login in runs where '--login' flag is not explicity used ([fa0dab8](https://github.com/DSnoNintendo/career-ops/commit/fa0dab86cff474569ed02a44179481c24927280b))
* remove scan:login auth portal scans should only be handled by calling 'node scan-auth.mjs --login &lt;portal&gt; directly' ([ef3bc51](https://github.com/DSnoNintendo/career-ops/commit/ef3bc51730812a4f20d7f1a116ade169c2f3a636))
* remove wellfound, lever and remotefront from portals.example.yml ([#286](https://github.com/DSnoNintendo/career-ops/issues/286)) ([ecd013c](https://github.com/DSnoNintendo/career-ops/commit/ecd013cc6f59e3a1a8ef77d34e7abc15e8075ed3))
* replace grep -P with POSIX-compatible grep in batch-runner.sh ([637b39e](https://github.com/DSnoNintendo/career-ops/commit/637b39e383d1174c8287f42e9534e9e3cdfabb19))
* test-all.mjs scans only git-tracked files, avoids false positives ([47c9f98](https://github.com/DSnoNintendo/career-ops/commit/47c9f984d8ddc70974f15c99b081667b73f1bb9a))
* use candidate name from profile.yml in PDF filename ([7bcbc08](https://github.com/DSnoNintendo/career-ops/commit/7bcbc08ca6184362398690234e49df0ac157567f))
* use execFileSync to prevent shell injection in test-all.mjs ([c99d5a6](https://github.com/DSnoNintendo/career-ops/commit/c99d5a6526f923b56c3790b79b0349f402fa00e2))
* use fileURLToPath for cross platform compatible paths in tracker scripts ([#32](https://github.com/DSnoNintendo/career-ops/issues/32)) ([#58](https://github.com/DSnoNintendo/career-ops/issues/58)) ([ab77510](https://github.com/DSnoNintendo/career-ops/commit/ab775102f4586ae4663a593b519927531be27122))
* use hi@santifer.io in English README ([5518d3d](https://github.com/DSnoNintendo/career-ops/commit/5518d3dd07716137b97bb4d8c7b5264b94e2b9e9))


### Performance Improvements

* compress hero banner from 5.7MB to 671KB ([dac4259](https://github.com/DSnoNintendo/career-ops/commit/dac425913620fe0a66916dda7ba8d8fc4c427d51))

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
