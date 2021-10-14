var fs = require("fs")
var jsonata = require("jsonata")

var command = process.argv[2]

switch (command) {
  case 'clean':
    process.argv.slice(3).forEach((val, _) => cleanPHPComments(val))
    break
  case 'backport':
    var path = process.argv[3]
    transformJsonByLocation(path, {'require': {'php': '>=7.1', 'guzzlehttp/guzzle': '>=6.2 <7.0.0'}, 'require-dev': {'phpunit/phpunit': '>=7.0 <8.0.0'}})
    break
  case 'license':
    var license = process.argv[3]
    var path = process.argv[4]
    transformJsonByLocation(path, {'$': {'license': license}})
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

function transformJsonByLocation(path, updateMap) {
  var data = fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      return console.log(err)
    } else {
      var json = JSON.parse(data)
      Object.keys(updateMap).map(function(key, _) {
        var update = updateMap[key]
        var location = null
        if (key == "$") {
          location = key
        } else {
          location = `$.\"${key}\"`
        }
        var expression = jsonata(`$ ~> |${location}|${JSON.stringify(update)}|`)
        json = expression.evaluate(json)
      })

      fs.writeFile(path, JSON.stringify(json, null, 4), "utf8", function (err) {
        if (err) {
          return console.log(err)
        }
      })
    }
  })
}