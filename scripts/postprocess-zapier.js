const fs = require('fs')
const path = require("path");

let filePath = process.argv[2]
postProcessZapierFolder(filePath)

function postProcessZapierFolder(dir)
{
  files = fs.readdirSync(dir)
  
  files.forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      postProcessZapierFolder(dir + file + '/')
    } else {
      fs.readFile(dir + file, 'utf8', function (err, data) {
        if (err) {
          return console.log(err)
        }
  
        // remove duplicate imports 
        let result = data.replace(
          /(const [^;]+;\n)(?=(.*\n)*\1)/g,
          ''
        )
  
        // unescape field names
        result = result.replaceAll(
          '\\_',
          '_'
        )

        if (path.basename(dir) == 'apis') {
          // add triggers
          result = addTriggers(result)
        }
        
        // change extension
        let filename = file.replace('.md', '.js')
        if(file == 'README.md') filename = 'operations/actions.js'
  
        fs.writeFile(dir + filename, result, 'utf8', function (err) {
          if (err) {
            return console.log(err)
          }
        })

        if(file != filename){
          fs.unlink(dir + file, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        }
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