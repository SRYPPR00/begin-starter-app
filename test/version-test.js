let test = require('tape')
let fs = require('fs')

let starterAppPath = 'app/'
let starterAppPackage = starterAppPath + 'package.json'
let starterAppDeps = starterAppPath + 'npm-shrinkwrap.json'
let starterAppIndexDeps = starterAppPath + 'src/http/get-index/npm-shrinkwrap.json'

// Must always be 0.0.0, can never change
let appVersion = '0.0.0'

// All starter apps should always match
let currentArcVersion = '4.3.14'

// Reads packages
function package(file) {
  return JSON.parse(fs.readFileSync(file).toString())
}

let starterAppVersion = package(starterAppPackage).version
let starterArcVersion = package(starterAppDeps).dependencies["@architect/architect"].version
let starterAppIndexVersion = package(starterAppIndexDeps)

test('starter app v0.0.0 should exist', t => {
  t.equal(appVersion, starterAppVersion, 'app versions match')
  t.end()
})

test('app is using the correct version of Architect', t => {
  t.equal(starterArcVersion, currentArcVersion, 'app versions match')
  t.end()
})
