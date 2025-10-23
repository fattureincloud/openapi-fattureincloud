var fs = require("fs")
var path = require('path');

const filePath = path.resolve(__dirname, '../generated/php/lib/Model/EventType.php');

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

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
      console.error('Errore durante la lettura del file:', err);
      process.exit(1);
  }

  const updatedData = data.replace(/IT_FATTUREINCLOUD_WEBHOOKS_/g, '');

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
          console.error('Errore durante la scrittura del file:', err);
          process.exit(1);
      }

      console.log('Sostituzione completata con successo!');
  });
});
