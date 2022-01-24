const yaml = require('js-yaml');
const fs   = require('fs');

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('./openapi.yaml', 'utf8'));
  fs.writeFileSync('./openapi.yaml', yaml.dump(doc));
} catch (e) {
  console.log(e);
}

