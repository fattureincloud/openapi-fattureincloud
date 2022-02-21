// This file was used to export the details of interest from the requests models to the details.yaml file
// The source file was not modified, we used the prepare.js for that.
// The list of the details of interest can be found in the "detailsOfInterest" array below.
// Please note that the details file does not strictly follow the OpenAPI Path, but we removed some levels that were unuseful for our purposes.

const yaml = require('js-yaml')
const fs = require('fs')

var openapiPath = './openapi-resolved.yaml'
var filePath = './details.yaml'

console.log("Trying to read: " + openapiPath)

// Get document, or throw exception on error
try {
    const doc = yaml.load(fs.readFileSync(openapiPath, 'utf8'))

    const paths = doc.paths

    const endpoints = Object.keys(paths)

    var res = {}

    endpoints.forEach((endpoint, index) => {
        var endpointObj = paths[endpoint]

        const verbsOfInterest = ['post', 'put']

        const filtered = Object.keys(endpointObj)
            .filter(verb => verbsOfInterest.includes(verb))
            .reduce((verbObj, verb) => {
                var content = endpointObj[verb]['requestBody']['content']

                var parameters = Object.keys(content)
                    .reduce((contentObj, contentType) => {
                        var schema = content[contentType]['schema']
                        var properties = getPropertyDetails('', schema['properties'])

                        if (Object.keys(properties).length !== 0) {
                            contentObj[contentType] = properties
                        }
                        
                        return contentObj
                    }, {})

                if (Object.keys(parameters).length !== 0) {
                    verbObj[verb] = parameters
                }
                return verbObj
            }, {})

        if (Object.keys(filtered).length !== 0) {

            res[endpoint] = filtered
        }

    })

    console.log("Trying to write to: " + filePath)
    fs.writeFileSync(filePath, yaml.dump(res))
    console.log("Done")
} catch (e) {
    console.log(e)
}

function getPropertyDetails(key, obj) {
    var fields = {}
    const fieldNames = Object.keys(obj)

    fieldNames.forEach(function (fieldName, index) {
        const detailsOfInterest = ['nullable', 'default', 'required', 'properties', 'maximum', 'minimum']
        var field = obj[fieldName]

        const filtered = Object.keys(obj[fieldName])
            .filter(detail => detailsOfInterest.includes(detail))
            .reduce((details, detail) => { 
                if (detail != 'properties') {
                    details[detail] = field[detail]
                } else {
                    var properties = getPropertyDetails('', field[detail])
                    if (Object.keys(properties).length !== 0) {
                        details[detail] = properties
                    }
                }
                return details
            }, {})
        if (Object.keys(filtered).length !== 0) {
            fields[fieldName] = filtered
        }
        
    })

    return fields
}