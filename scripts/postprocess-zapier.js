const fs = require('fs')
const path = require("path");

let filePath = process.argv[2]
postProcessZapierFolder(filePath)

function postProcessZapierFolder(dir)
{
  files = fs.readdirSync(dir)
  
  files.forEach((file) => {
    if (!dir.startsWith('.') && fs.statSync(dir + file).isDirectory()) {
      postProcessZapierFolder(dir + file + '/')
    } else {
      fs.readFile(dir + file, 'utf8', function (err, data) {
        if (err) {
          return console.log(err)
        }
        
        if (path.basename(dir) == 'apis') {
          // add triggers
          data = addTriggers(data)
        }
  
        fs.writeFile(dir + file, data, 'utf8', function (err) {
          if (err) {
            return console.log(err)
          }
        })
      })
    }
  })
}

const triggers = [
  {key: 'company_id', trigger: 'listUserCompaniesTrigger.id.name'}
]

function addTriggers(file)
{
  triggers.forEach(trigger => {
    file = file.replaceAll(
      `key: '${trigger.key}',`,
      `key: '${trigger.key}',
                    dynamic: '${trigger.trigger}',`
    )
  });
  return file
}