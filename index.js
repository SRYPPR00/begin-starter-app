// Helper syncronously reads starter app files and returns it as a Buffer

let fs = require('fs')

module.exports = function readFile(filepath, callback) {
  let dir = __dirname + '/app/'

  if (!filepath) throw ReferenceError(`Relative file path required (eg 'src/http/get-index/index.js')`)
  if (!fs.existsSync(dir + filepath)) throw Error('Invalid path or file does not exist')

  // File exists, read it!
  let file = fs.readFileSync(dir + filepath)

  // Return file as a Buffer
  if (callback) {
    callback(file)
  } else {
    return file
  }
}
