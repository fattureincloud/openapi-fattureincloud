var fs = require("fs")
var transformJson = require("./transform-json")

var command = process.argv[2]

switch (command) {
  case 'nyc':
    var path = process.argv[3]
    transformJson.transformJsonByLocation(path, {'devDependencies': {'nyc': '^15.1.0'}, 'scripts': {'test': 'nyc mocha --require @babel/register --recursive'}})
    break
  default:
    console.err("Unrecognised command: " + command)
}
