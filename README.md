# Fatture in Cloud - OpenAPI Specification #
OpenAPI Specification for the [Fatture in Cloud API](http://developers.fattureincloud.it). 

![OpenApi validation](https://validator.swagger.io/validator?url=https://raw.githubusercontent.com/fattureincloud/openapi-fattureincloud/master/openapi.yaml)

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/fattureincloud/openapi-fattureincloud?color=violet&label=release&sort=semver)

## &#128109;&nbsp; Two specs ##
If you looked at our repo files you almost surely noticed that we have two API specifications:

### openapi.yaml ###
The **openapi.yaml** file is the file we use to generate our SDKs, it contains only the necessary information to generate a fully working SDK; to keep the files as simple as possible we split the specification in multiple YAML files, you can find them in the "/models" folder of this repo.

### openapi-enriched.yaml ###
The **openapi-enriched.yaml** file is the file we use for our *API reference* documentation, it contains all the info contained in the previous file plus some additional properties, to provide to the user all the details needed for the correct usage of our methods: it includes the required parameters, default values and other useful info. In this case the specification is *flattened*: it contains all the models that in the previous file were stored separatedly.

## &#128736;&nbsp; Our SDKs ##
To help you interact with our APIs we decided to create a set of dedicated **SDKs** (Software Developer Kits) in a certain number of programming languages, that can be useful to speed up the integration process. These SDKs provide updated models and methods to contact our APIs with minimal configuration, making it possible to start interacting with Fatture in Cloud within minutes: in most cases, you just need to retrieve the Access Token and you're ready to go!

Here you can find the list of the currently supported SDKs:

| Language | Package |
|---|---|
| C# | [![NuGet](https://img.shields.io/nuget/v/It.FattureInCloud.Sdk?color=7b2f85)](https://www.nuget.org/packages/It.FattureInCloud.Sdk) |
| Java | [![Maven Central](https://img.shields.io/maven-central/v/it.fattureincloud/fattureincloud-java-sdk?color=b07219)](https://search.maven.org/artifact/it.fattureincloud/fattureincloud-java-sdk) |
| JavaScript | [![NPM](https://img.shields.io/npm/v/@fattureincloud/fattureincloud-js-sdk?color=ffeb42)](https://www.npmjs.com/package/@fattureincloud/fattureincloud-js-sdk) |
| PHP | [![Packagist](https://img.shields.io/packagist/v/fattureincloud/fattureincloud-php-sdk?color=8892be)](https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk) |
| Python | [![PyPI](https://img.shields.io/pypi/v/fattureincloud-python-sdk?color=16c0f8)](https://pypi.org/project/fattureincloud-python-sdk/) |
| Ruby | [![Ruby Gems](https://img.shields.io/gem/v/fattureincloud_ruby_sdk?color=c22815)](https://rubygems.org/gems/fattureincloud_ruby_sdk) |

Our SDKs are generated from the OpenAPI specification using the [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator); if we don't support your favorite language yet you can try to generate an SDK on your own! &#128515;

## &#128193;&nbsp; Generate your SDK ##
If you need an SDK for a language we are not supporting right now you can just generate it using the [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or another tool of your choice.

These are the required steps:
- Install the generator using your preferred method as explained [here](https://openapi-generator.tech/docs/installation);
- Generate the SDK you want following [these instructions](https://openapi-generator.tech/docs/usage) using our [openapi.yaml](https://raw.githubusercontent.com/fattureincloud/openapi-fattureincloud/master/openapi.yaml) file.

You can find a list of all the languages and additional options supported by the generator [here](https://openapi-generator.tech/docs/generators).

## &#128238;&nbsp; Postman collection ##
It is really easy to test our APIs using our Postman collection:
- Download the [postman/fic-api.json](https://raw.githubusercontent.com/fattureincloud/openapi-fattureincloud/master/postman/fic-api.json) file from our repo;
- Import it following [this procedure](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).

You can also directly import our OpenAPI YAML file if you prefer.

## &#128218;&nbsp; Documentation ##
The [Fatture in Cloud Developers Hub](https://developers.fattureincloud.it), contains a lot of useful guides and info that can help you with the most common issues that could arise while integrating our APIs and SDKs. Be sure to check it out! 