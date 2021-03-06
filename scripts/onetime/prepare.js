// This file was used to prepare the YAML files to be used by the enrichment script.
// We performed two operations:
// - Removed all the details that were exported to the details.yaml file (see "detailsToRemove" array below)
// - Add the 'nullable' detail to all the properties

const yaml = require('js-yaml')
const fs = require('fs')
const glob = require("glob")

var options = {}
glob("./models/**/*.yaml", options, function (er, files) {
  
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.yaml"]
  // er is an error object or null.
  files.forEach(function (filePath) {
    prepareFile(filePath)
  })
})

function prepareFile(filePath) {

  console.log("Trying to prepare: " + filePath)

  // Get document, or throw exception on error
  try {
    var doc = yaml.load(fs.readFileSync(filePath, 'utf8'))

    doc = prepareProperty(doc, 0, '')

    fs.writeFileSync(filePath, yaml.dump(doc))
    console.log("Done")
  } catch (e) {
    console.log(e)
  }
}

function prepareProperty(prop) {
  if (Object.keys(prop).includes('required')) {
    delete prop['required']
  }
  if (Object.keys(prop).includes('properties')) {
    var properties = prop['properties']
    const keys = Object.keys(properties)

    keys.forEach((key, index) => {
      
      var property = properties[key]

      const detailsToRemove = ['required', 'default', 'minimum', 'maximum']
      
      var filtered = Object.fromEntries(Object.entries(property).filter(([k, v]) => !detailsToRemove.includes(k)));

      filtered['nullable'] = true

      if (Object.keys(filtered).includes('properties')) {
        filtered = prepareProperty(filtered)
      }
      properties[key] = filtered
    })
    prop['properties'] = properties
  }
  return prop
}
