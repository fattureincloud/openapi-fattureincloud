var fs = require("fs")
var transformJson = require("./transform-json")

var command = process.argv[2]

switch (command) {
  case 'clean':
    process.argv.slice(3).forEach((val, _) => cleanPHPComments(val))
    break
  case 'backport':
    var path = process.argv[3]
    transformJson.transformJsonByLocation(path, {'require': {'php': '^7.1 || ^8.0', "guzzlehttp/guzzle": "^6.2 || ^7.3", "guzzlehttp/psr7": "^1.8 || ^2.0"}, 'require-dev': {'phpunit/phpunit': '^7.0 || ^8.0 || ^9.0'}})
    break
  case 'license':
    var license = process.argv[3]
    var path = process.argv[4]
    transformJson.transformJsonByLocation(path, {'$': {'license': license}})
    break
  default:
    console.err("Unrecognised command: " + command)
}

function cleanPHPComments(dir) {
  files = fs.readdirSync(dir)

  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      cleanPHPComments(dir + file + "/")
    } else {
      fs.readFile(dir + file, "utf8", function (err, data) {
        if (err) {
          return console.log(err)
        }

        var result = data.replace(
          /@link.*/g,
          "@link     https://fattureincloud.it"
        )

        result = result.replace(
          /@author.*/g,
          "@author   Fatture In Cloud API team"
        )

        fs.writeFile(dir + file, result, "utf8", function (err) {
          if (err) {
            return console.log(err)
          }
        })
      })
    }
  })
}
