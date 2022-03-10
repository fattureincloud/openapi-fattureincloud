<h1>Fatture in cloud OpenApi specification</h1>

OpenAPI specification for <a href="http://developers.fattureincloud.it">Fatture in Cloud API</a>. 

<img alt ="OpenApi validation" src="https://validator.swagger.io/validator?url=https://raw.githubusercontent.com/fattureincloud/openapi-fattureincloud/master/openapi.yaml">

<img alt="GitHub tag (latest SemVer)" src="https://img.shields.io/github/v/tag/fattureincloud/openapi-fattureincloud?color=violet&label=release&sort=semver">

<h2>Available SDKs</h2>
<p>We provide SDKs for the main programming languages, but you can also generate the SDK for the language you need using the <a href="https://github.com/OpenAPITools/openapi-generator">OpenAPI Generator</a> with our OpenAPI spec.</p>
<table>
    <tr><th>Language</th><th>Package</th></tr>
    <tr><td>PHP</td><td><a href="https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk"><img alt="Packagist" src="https://img.shields.io/packagist/v/fattureincloud/fattureincloud-php-sdk?color=8892be"></a></td></tr>
    <tr><td>JavaScript</td><td><a href="https://www.npmjs.com/package/@fattureincloud/fattureincloud-js-sdk"><img alt="npm" src="https://img.shields.io/npm/v/@fattureincloud/fattureincloud-js-sdk?color=ffeb42"></a></td></tr>
    <tr><td>C#</td><td><a href="https://www.nuget.org/packages/It.FattureInCloud.Sdk/"><img alt="Nuget" src="https://img.shields.io/nuget/v/It.FattureInCloud.Sdk?color=7b2f85"></a></td></tr>
    <tr><td>Java</td><td><a href="https://search.maven.org/artifact/it.fattureincloud/fattureincloud-java-sdk"><img alt="Maven Central" src="https://img.shields.io/maven-central/v/it.fattureincloud/fattureincloud-java-sdk?color=b07219"></a></td></tr>
    <tr><td>Python</td><td><a href="https://pypi.org/project/fattureincloud-python-sdk/"><img alt="PyPI" src="https://img.shields.io/pypi/v/fattureincloud-python-sdk?color=16c0f8"></a></td></tr>
    <tr><td>Ruby</td><td><a href="https://rubygems.org/gems/fattureincloud_ruby_sdk"><img alt="Gem" src="https://img.shields.io/gem/v/fattureincloud_ruby_sdk?color=c22815"></a></td></tr>
</table>

<h2>Two specs</h2>
<p>If you looked at our repo files you almost surely noticed that we have two api specifications:</p>
<ul>
    <li>openapi.yaml</li>
    <li>openapi-enriched.yaml</li>
</ul>

<h3>openapi.yaml</h3>
<p>The <b>openapi.yaml</b> file is the file we use to generate our SDKs, it contains only the necessary informations to generate a fully working SDK, it's splitted in several files, contained in the models directory.
</p>

<h3>openapi-enriched.yaml</h3>
<p>The <b>openapi-enriched.yaml</b> file is the file we use for our documentation, it contains all the accessory informations to provide to the user the best documentation possible for the usage of our methods, it includes required parameteres, default values and other usefuls infos.</p>

<h2>Postman collection<h2>
<p>To use our postman collection you have to follow some simple steps: 
<ul>
    <li>Download the <a href="https://github.com/fattureincloud/openapi-fattureincloud/blob/master/postman/fic-api.json"><b>postman/fic-api.json</b></a> file tou can find in this repo</li>
    <li>Import it following <a href="https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman">this procedure.</a></li>
</ul>
</p>

