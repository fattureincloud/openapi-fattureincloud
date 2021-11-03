
const yaml = require('js-yaml');
const fs   = require('fs');
const path = "./generated/csharp-netcore/src/It.FattureInCloud.Sdk/";
const dir = path + "models/";


iterateAllFiles(dir);

function iterateAllFiles(dir) {
  files = fs.readdirSync(dir);

  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      iterateAllFiles(dir + file + "/");
    } else if(file.split('.').pop() === "yaml"){
        try {
            const doc = yaml.load(fs.readFileSync(dir + file, 'utf8'));
            fs.writeFile(dir + file, yaml.dump(removeRequired(doc)), "utf8", function (err) {
              if (err) return console.log(err);
            });
          } catch (e) {
            console.log(e);
        }
      }
    });
};

function removeRequired(nodo){

    for(prop in nodo){
        if(prop === "required"){
             nodo[prop] = undefined;
        }
        else if(typeof(nodo) === "object"){
            removeRequired(prop);
        }
    }
    return(nodo);
}