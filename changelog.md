# Begin starter app changelog


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