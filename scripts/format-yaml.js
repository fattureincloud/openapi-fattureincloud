const yaml = require('js-yaml')
const fs   = require('fs')
const glob = require("glob")

var command = process.argv[2]

var filePath = process.argv[3]

switch (command) {
  case 'single':
    formatFile(filePath)
    break

  case 'all':
    var options = {}

    const files = glob("**/*.yaml").then(
        files =>
            // files is an array of filenames.
            // If the `nonull` option is set, and nothing
            // was found, then files is ["**/*.yaml"]
            // er is an error object or null.
            files.forEach(function(filePath){
              formatFile(filePath)
            })
    )
    break
  default:
    console.err("Unrecognised command: " + command)
}

function formatFile(filePath) {
  console.log("Trying to format: " + filePath)
  // Get document, or throw exception on error
  try {
    const doc = yaml.load(fs.readFileSync(filePath, 'utf8'))
    fs.writeFileSync(filePath, yaml.dump(doc))
    console.log("Done")
  } catch (e) {
    console.log(e)
  }
}
