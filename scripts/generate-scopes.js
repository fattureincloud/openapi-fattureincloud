var { Liquid } = require('liquidjs')
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const lang = process.argv[2]

const languagesPaths = {
    'csharp-netcore': './generated/csharp-netcore/src/It.FattureInCloud.Sdk/Oauth2/Scope.cs',
    'java': './generated/java/src/main/java/it/fattureincloud/sdk/auth/Scope.java',
    'javascript': './generated/javascript/src/oauth2/Scope.js',
    'python': './generated/python/fattureincloud_python_sdk/oauth2/scopes.py',
    'php': './generated/php/lib/OAuth2/Scope.php',
    'ruby': './generated/ruby/lib/fattureincloud_ruby_sdk/oauth2/scope.rb',
    'typescript-axios': './generated/typescript-axios/src/oauth2/scope.ts',
    'go': './generated/go/oauth2/scope.go',
}

var engine = new Liquid({
    root: path.resolve(__dirname, `../templates/scopes/${lang}`), 
    extname: '.liquid'
});

function getScopesFromOpenAPI() {
    const openapi = yaml.load(fs.readFileSync('openapi.yaml', 'utf8'))
    var scopes = openapi.components.securitySchemes.OAuth2AuthenticationCodeFlow.flows.authorizationCode.scopes
    var map = Object.entries(scopes).map(([k,v]) => { return {name: getNameFromScope(k), str: k, comment: v} });
    return map
}

function getNameFromScope(scope) {
    const scopeTypes = {
        ':a': '_ALL',
        ':r': '_READ'
    }
    var ext = scope

    Object.keys(scopeTypes).forEach(key => {
        ext = ext.replace(key, scopeTypes[key])
    })
    return ext.toUpperCase().replace(".", "_")
}

function main() {
    var collection = {
        scopes: getScopesFromOpenAPI()
    }

    engine
        .renderFile("scopes", collection)  
        .then((c) => {
            fs.writeFileSync(languagesPaths[lang], c, 'utf8')
        })
}

main()
