const yaml = require('js-yaml')
const semver = require('semver')
const https = require('https')
const fs   = require('fs')

var baseUrl = 'dash.readme.com'
var path = '/api/v1/version'
var apiKey = process.argv[2]
var yamlFile = "../../../openapi.yaml"

function main() {
	var bumpVersion = retrieveVersionFromOpenApi(yamlFile)

	var result = {}

	if (bumpVersion != null) {

		var specId = null
		var major = semver.major(bumpVersion)
		var minor = semver.minor(bumpVersion)
		var apiVersion = `v${major}.${minor}`
		result['api_version'] = apiVersion

		getVersions(apiKey, function lv(versionList) {
			var versionList = JSON.parse(versionList)
			var lastVersion = null
			var compareVersion = semver.coerce(apiVersion).version

			for (var elem in versionList) {

				var elemVersion = versionList[elem]['version']
				var v = semver.coerce(elemVersion).version
				
				if (semver.eq(v, compareVersion)) {
					specId = versionList[elem]['_id']
				} 
				if (lastVersion == null || semver.lt(lastVersion, v)) {
					lastVersion = v
				}

			}

			if (specId == null) {

				/*createVersion(apiVersion, lastVersion, apiKey, function cv(response) {
					
					specId = JSON.parse(response)['_id']
					if (specId == null) {
						throw "SpecId not found!!!"
					} else {
						result['spec_id'] = specId
						printResult(result)
					}
				})*/
				getVersion(lastVersion, apiKey, function cv(response) {
					
					specId = JSON.parse(response)['_id']
					if (specId == null) {
						throw "SpecId not found!!!"
					} else {
						result['spec_id'] = specId
						printResult(result)
					}
				})
			}  else {
				result['spec_id'] = specId
				printResult(result)
			}
		})
		
	} else {
		throw "OpenAPI spec version not found!!!"
	}
	
}

main()

function printResult(result) {
	console.log(yaml.dump(result))
}

function retrieveVersionFromOpenApi(contents) {

	const openapi = yaml.load(fs.readFileSync(contents, 'utf8'))
	return openapi.info.version

}

function getVersions(apiKey, callback) {

	var apiKeyB64 = Buffer.from(apiKey).toString('base64')

	var headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic ' + apiKeyB64
	}

	const options = {
		hostname: baseUrl,
		path: path,
		headers: headers
	}

	https.get(options, (response) => {

		var result = ''
		response.on('data', function (chunk) {
			result += chunk
		})

		response.on('end', function () {
			callback(result)
		})

	})
}

function getVersion(version, apiKey, callback) {

	var apiKeyB64 = Buffer.from(apiKey).toString('base64')

	var headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic ' + apiKeyB64
	}

	const options = {
		hostname: baseUrl,
		path: path + '/' + version,
		headers: headers
	}

	https.get(options, (response) => {

		var result = ''
		response.on('data', function (chunk) {
			result += chunk
		})

		response.on('end', function () {
			callback(result)
		})

	})
}

function createVersion(version, lastVersion, apiKey, callback) {

	var apiKeyB64 = Buffer.from(apiKey).toString('base64')

	var headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic ' + apiKeyB64
	}

	var payload = {
		'version': version,
		'from': lastVersion,
		'is_stable': false,
		'is_hidden': true
	}

    var json = JSON.stringify(payload)
    
    const options = {
		hostname: baseUrl,
		path: path,
		method: 'POST',
		json: true,
		headers: headers
	}

    var req = https.request(options, (response) => {
  
        var result = ''
		response.on('data', function (chunk) {
			result += chunk
		})

		response.on('end', function () {
			callback(result)
		})
      })
      
      req.on('error', (e) => {
        throw e
      })
      
      req.write(json)
      req.end()

}