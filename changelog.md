# Begin starter app changelog

---

## [1.0.5] - 2018-12-05

### Added

- Module now returns a Buffer of any valid requested file in the starter app dir (`app/`)


### Changed

- Updated starter app to `@architect/architect` 4.4.4
- Made commented code examples a little more clean and uniform
- Linter now lints file helper


### Fixed

- Broken link to [HTTP function create doc](https://docs.begin.com/en/functions/http/)

---

## [1.0.3] - 2018-11-29

### Changed

- Updated starter app to `@architect/architect` 4.4.2


### Fixed

- Adds back app config files that were inadvertently missing from npm package

---

## [1.0.2] - 2018-11-27

### Changed

- Updated starter app to `@architect/architect` 4.3.14

---

## [1.0.1] - 2018-11-14

### Changed

- Updated starter app to `@architect/architect` 4.3.8
- Updated starter app bundled tests

---

## [1.0.0] - 2018-11-04

### Added

- Initial version on npm


### Changed

- Starter app now uses `@architect/architect` 4.x (specifically, `4.1.2`)
- `.arc` file and test suite updated for to use new `@http` functions
- npm does not allow the publishing of `package-lock.json` files, but it does allow the publishing of `npm-shrinkwrap.json` files, so those files are renamed here (but will renamed back again by Begin when provisioned to customers)

---

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).