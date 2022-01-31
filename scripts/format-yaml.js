const yaml = require('js-yaml')
const fs   = require('fs')

var filePath = process.argv[2]

console.log("Trying to format: " + filePath)

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync(filePath, 'utf8'))
  fs.writeFileSync(filePath, yaml.dump(doc))
  console.log("Done")
} catch (e) {
  console.log(e)
}

