const yaml = require('js-yaml')
const fs = require('fs')
const httpsnippet = require("@readme/httpsnippet")

var filePath = process.argv[3]

addExamples(filePath)
function addExamples(filePath) {
    console.log("Adding code examples...")
    try {
        var doc = yaml.load(fs.readFileSync(filePath, 'utf8'))
        var paths = doc['paths']
        var endpoints = Object.keys(paths)
        endpoints.forEach((endpointKey, _) => {
            var endpoint = paths[endpointKey]
            Object.keys(endpoint).forEach((verbKey, _) => {
                if (verbKey != 'parameters') {
                    var queryParams = endpoint?.[verbKey]?.['parameters'];
                    var content = endpoint?.[verbKey]?.['requestBody']?.['content']
                    var url = "api-v2.fattureincloud.it" + endpointKey + buildQueryString(queryParams)
                    var snippetObj = {
                        method: verbKey.toUpperCase(),
                        url: "https://www.urlplaceholder.com",
                        headers: [{ name: "Authorization:", value: "Bearer YOUR_ACCESS_TOKEN" }],
                        body: { foo: 'bar', hello: 'world' }
                    };
                    if (content?.['application/json']?.examples?.['example-1'].value) {
                        snippetObj["postData"] = { text: JSON.stringify(content?.['application/json']?.examples?.['example-1'].value) }
                    }
                    const snippet = new httpsnippet.HTTPSnippet(snippetObj)

                    var clients = [
                        { language: "php", client: "guzzle" },
                        { language: "node", client: null },
                        { language: "csharp", client: "httpclient" },
                        { language: "go", client: null },
                        { language: "java", client: null },
                        { language: "python", client: null },
                        { language: "ruby", client: null },
                    ]

                    var snippets = clients.map(
                        (c) => snippet.convert(c.language, c.client).replace("www.urlplaceholder.com", url)
                    )
                    endpoint[verbKey]["x-code-samples"] = [
                        {
                            lang: "cs",
                            label: "C#",
                            source: snippets[2]
                        },
                        {
                            lang: "go",
                            label: "Go",
                            source: snippets[3]
                        },
                        {
                            lang: "java",
                            label: "Java",
                            source: snippets[4]
                        },
                        {
                            lang: "js",
                            label: "Node Js",
                            source: snippets[1]
                        },
                        {
                            lang: "php",
                            label: "PHP",
                            source: snippets[0]
                        },
                        {
                            lang: "python",
                            label: "Python",
                            source: snippets[5]
                        },
                        {
                            lang: "ruby",
                            label: "Ruby",
                            source: snippets[6]
                        }
                    ]
                }
            })
        })

        fs.writeFileSync(filePath, yaml.dump(doc))
        console.log("Done")
    } catch (e) {
        console.log(e)
    }
}

function buildQueryString(queryArr) {
    if (!queryArr || queryArr == []) return ""

    var paramsObj = {}

    queryArr.forEach(
        (param) => {
            if (param.required == true) {
                paramsObj[param.name] = param.schema?.example ?? param?.enum?.[0] ?? "{example}"
            }
        }
    )

    var encodedParams = decodeURIComponent(new URLSearchParams(paramsObj).toString());
    if (encodedParams) return "?" + encodedParams
    return ""
}