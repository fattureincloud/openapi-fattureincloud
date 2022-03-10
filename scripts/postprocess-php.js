var fs = require("fs")
var transformJson = require("./transform-json")

process.argv.slice(3).forEach((val, _) => cleanPHPComments(val))

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
