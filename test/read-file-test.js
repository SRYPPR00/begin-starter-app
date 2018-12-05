let test = require('tape')
let fs = require('fs')
let helper = require('../')

test('Starter app file reader should match output of an fs read', t => {
  let file = 'npm-shrinkwrap.json'
  let rawRead = fs.readFileSync(__dirname + '/../app/' + file)
  let helperRead = helper('npm-shrinkwrap.json')
  t.equal(rawRead.toString(), helperRead.toString(), 'Files match (string)!')
  t.equal(rawRead.toString('base64'), helperRead.toString('base64'), 'Files match (base64)!')
  t.end()
})
