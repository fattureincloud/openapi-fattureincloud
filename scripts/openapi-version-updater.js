// openapi-version-updater.js
const yaml = require('js-yaml')

module.exports.readVersion = function (contents) {
    const openapi = yaml.load(contents)
    return openapi.info.version;
}

module.exports.writeVersion = function (contents, version) {
    const openapi = yaml.load(contents)
    openapi.info.version = version
    return yaml.dump(openapi)
}