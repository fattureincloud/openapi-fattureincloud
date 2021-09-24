const yaml = require('js-yaml')
const semver = require('semver')
const https = require('https')
const fs   = require('fs')

var baseUrl = 'dash.readme.com'
var path = '/api/v1/version'
var apiKey = process.env.README_API_KEY
var yamlFile = "../../../openapi.yaml"

var bumpVersion = retrieveVersionFromOpenApi(yamlFile)

if (bumpVersion != null) {

    var major = semver.major(bumpVersion)
    var minor = semver.minor(bumpVersion)
    var apiVersion = `v${major}.${minor}`
    exportVariable('api_version', apiVersion)

	getVersions(apiKey, function lv(versionList) {
		versionList = JSON.parse(versionList)
		specId = null
		lastVersion = null

		for (var elem in versionList) {

			var v = versionList[elem]['version']

			if (v == apiVersion) specId = versionList[elem]['_id']
			if (lastVersion == null || lastVersion < v) lastVersion = v

		}

		if (specId == null) {

			createVersion(apiVersion, lastVersion, function cv(result) {
                specId = JSON.parse(result)['_id']
                if (specId == null) {
                    console.error(result)
                } else {
                    exportVariable('spec_id', specId)
                }
				
			})

		} else {
            exportOasKey('spec_id', specId)
        }
	})
} else {
    console.error("OpenAPI spec version not found!!!")
}

function exportVariable(key, val) {
    process.env[key] = val
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

function createVersion(version, lastVersion, callback) {

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
        console.error(e)
      })
      
      req.write(json)
      req.end()

}