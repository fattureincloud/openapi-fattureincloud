var fs = require("fs")

function iterateAllFiles(dir) {
    files = fs.readdirSync(dir);
  
    files.forEach(function (file) {
      if (fs.statSync(dir + file).isDirectory()) {
        iterateAllFiles(dir + file + "/");
      } else if(file.split('.').pop() === "js") {
          try {
              const doc = fs.readFileSync(dir + file, 'utf8');
              var newDoc = replaceOccurencies(doc);
              fs.writeFile(dir + file, newDoc, "utf8", function (err) {
                if (err) return console.log(err);
              });
            } catch (e) {
              console.log(e);
          }
        }
      });
  };
  
function replaceOccurencies(file){

var result = file
    .replace(/module:model\//g, '')
    .replace(/module:api\//g, '')
    .replace(/module:/g, '')
    .replace(/(?<=Array)(.*)(?=prototype)/g, '.');

    return result;
}

module.exports = {
    iterateAllFiles
}