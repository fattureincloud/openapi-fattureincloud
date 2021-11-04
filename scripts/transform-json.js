var fs = require("fs")
var jsonata = require("jsonata")

function transformJsonByLocation(path, updateMap) {
    var data = fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            return console.log(err)
        } else {
            var json = JSON.parse(data)
            Object.keys(updateMap).map(function (key, _) {
                var update = updateMap[key]
                var location = null
                if (key.includes("$")) {
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

module.exports = {
    transformJsonByLocation
}