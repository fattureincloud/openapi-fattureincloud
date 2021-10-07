const semver = require('semver')
const yaml = require('js-yaml')
const fs = require('fs')

var openapiVersion = semver.clean(process.argv[3])
var sdkVersionFile = process.argv[2]

try {
    if (fs.existsSync(sdkVersionFile)) {
        const doc = yaml.load(fs.readFileSync(sdkVersionFile, 'utf8'))
        var sdkVersion = semver.clean(doc.info.version)

        var diff = semver.diff(openapiVersion, sdkVersion)

        // If major and minor are the same, we increment patch by 1
        // If diff is null, then sdkVersion and openapiVersion should be the same
        if (!diff || diff == 'patch') {
            console.log('patch')
        } else if (diff == 'major' || diff == 'minor') {
            console.log('openapi')
        } else {
            throw "Unexpected semver diff: " + diff
        }
    } else {
        var doc = {
            'info': {
                'version': openapiVersion
            }
        }
        fs.writeFileSync(sdkVersionFile, yaml.dump(doc))
        console.log('openapi')
    }
    

} catch (e) {
    console.error(e)
}

