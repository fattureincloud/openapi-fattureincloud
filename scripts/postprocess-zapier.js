const fs = require('fs')

let path = process.argv[2]
postProcessZapierFolder(path)

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

        // remove empty labels
        result = result.replaceAll(
          'label: \'\',',
          ''
        )
        result = result.replaceAll(
          'label: labelPrefix + \'\',',
          ''
        )
        
        // change extension
        let filename = file.replace('.md', '.js')
        if(file == 'README.md') filename = 'index.js'
  
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