# Begin starter app changelog

---

## [1.1.11] - 2019-01-22

### Changed

- Updated starter app to `@architect/architect` 4.5.6, `@architect/functions` to 1.12.1, and `@begin/data` to 1.1.1
- Updated comment text in default `GET /` Function

---

## [1.1.0] - 2019-01-06

### Added

- Adds new `@begin/data`! https://docs.begin.com/en/data/begin-data

### Changed

- Updated tests for `@begin/data`
- Updated eslint rules

---

## [1.0.10] - 2018-12-20

### Changed

- Updated starter app to `@architect/architect` 4.4.11, and `@architect/functions` to 1.11.1

---

## [1.0.9] - 2018-12-12

### Changed

- Updated starter app to `@architect/architect` 4.4.8, and `@architect/functions` to 1.10.5

---

## [1.0.8] - 2018-12-10

### Added

- Adds empty favicon into `GET /` template

---

## [1.0.7] - 2018-12-07

### Changed

- Updated starter app to `@architect/architect` 4.4.5

---

## [1.0.6] - 2018-12-06

### Changed

- Destructures body ref and adds simpler ref logging statement in boilerplate `GET /` function

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