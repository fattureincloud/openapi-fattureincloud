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
          return console.log(dir + file, err)
        }
        
        if (path.basename(dir) == 'apis') {
          // add triggers
          data = addGlobalTriggers(data)
          fs.writeFile(dir + file, data, 'utf8', function (err) {
            if (err) {
              return console.log(err)
            }
          })
        }

        if (path.basename(dir) == 'models') {
          // add models triggers
          data = addModelTriggers(data, file)
          fs.writeFile(dir + file, data, 'utf8', function (err) {
            if (err) {
              return console.log(err)
            }
          })
        }
      })
    }
  })
}

const globalTriggers = [
  {key: 'company_id', trigger: 'listUserCompaniesTrigger.id.name'},
]

const modelTriggers = {
  'VatType': [
    {key: '${keyPrefix}id', trigger: 'listVatTypesTrigger.id.name'},
  ],
  'PaymentAccount': [
    {key: '${keyPrefix}id', trigger: 'listPaymentAccountsTrigger.id.name'},
  ],
}

function addGlobalTriggers(file)
{
  globalTriggers.forEach(trigger => {
    file = file.replaceAll(
      `key: '${trigger.key}',`,
      `key: '${trigger.key}',
                    dynamic: '${trigger.trigger}',`
    )
  })
  return file
}

function addModelTriggers(file, filename)
{
  modelTriggers?.[filename.split('.')[0]]?.forEach(trigger => {
    console.log(`key: '${trigger.key}',`)
    file = file.replaceAll(
      `key: \`${trigger.key}\`,`,
      `key: \`${trigger.key}\`,
                dynamic: '${trigger.trigger}',`
      )
  })
  return file
}