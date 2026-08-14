var fs = require("fs");
var path = require("path");

const filePath = path.resolve(
  __dirname,
  "../generated/php/lib/Model/EventType.php",
);

process.argv.slice(3).forEach((val) => cleanPHPComments(val));

function cleanPHPComments(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(function (file) {
    const currentPath = path.join(dir, file);
    if (fs.statSync(currentPath).isDirectory()) {
      cleanPHPComments(currentPath);
    } else {
      const data = fs.readFileSync(currentPath, "utf8");
      let result = data.replace(
        /@link.*/g,
        "@link     https://fattureincloud.it",
      );

      result = result.replace(
        /@author.*/g,
        "@author   Fatture In Cloud API team",
      );

      result = result.replace(
        /(@return\s+)array<string,\s*mixed>(?:\|array<string,\s*mixed>)+/g,
        "$1array<string,mixed>",
      );

      fs.writeFileSync(currentPath, result, "utf8");
    }
  });
}

const data = fs.readFileSync(filePath, "utf8");
const updatedData = data.replace(/IT_FATTUREINCLOUD_WEBHOOKS_/g, "");
fs.writeFileSync(filePath, updatedData, "utf8");
console.log("Sostituzione completata con successo!");
