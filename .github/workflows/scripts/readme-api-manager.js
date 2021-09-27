const yaml = require('js-yaml')
const semver = require('semver')
const https = require('https')
const fs   = require('fs')

var baseUrl = 'dash.readme.com'
var versionPath = '/api/v1/version'
var specificationPath = '/api/v1/api-specification'
var apiKey = process.argv[2]
var yamlFile = "../../../openapi.yaml"

function main() {
	var bumpVersion = retrieveVersionFromOpenApi(yamlFile)

	var result = {}

	if (bumpVersion != null) {

		var versionId = null
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
					versionId = versionList[elem]['_id']
				} 
				if (lastVersion == null || semver.lt(lastVersion, v)) {
					lastVersion = v
				}

			}

			if (versionId == null) {

				createVersion(apiVersion, lastVersion, apiKey, function cv(createdVersion) {
					
					versionId = JSON.parse(createdVersion)['_id']
					if (versionId == null) {
						throw "VersionId not found!!!"
					} else {
						getSpecificationMetadata(apiVersion, apiKey, function gsm(metadata) {
							//  should have only one spec in the newly created version
							var specList = JSON.parse(metadata)
							if (specList.length != 1) {
								throw "Something strange happened!!!"
							} else {
								var specId = specList[0]['_id']
								deleteSpecification(specId, apiKey, function ds() {
									result['version_id'] = versionId
									printResult(result)
								})
							}
							
						})
					}
				})
				
			}  else {
				result['version_id'] = versionId
				printResult(result)
			}
		})
		
	} else {
		throw "OpenAPI version ID not found!!!"
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
		path: versionPath,
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
		path: versionPath + '/' + version,
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
		path: versionPath,
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

function getSpecificationMetadata(version, apiKey, callback) {

	var apiKeyB64 = Buffer.from(apiKey).toString('base64')

	var headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic ' + apiKeyB64,
		'x-readme-version': version
	}

	const options = {
		hostname: baseUrl,
		path: specificationPath,
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

function deleteSpecification(specId, apiKey, callback) {

	var apiKeyB64 = Buffer.from(apiKey).toString('base64')

	var headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic ' + apiKeyB64
	}

	const options = {
		hostname: baseUrl,
		path: specificationPath + '/' + specId,
		headers: headers,
		method: 'DELETE',
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
      
      req.end()
}