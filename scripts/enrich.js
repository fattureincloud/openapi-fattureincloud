// This script takes in input the details file, and uses that to modify the merged OpenAPI spec by adding the details on the input models where needed.

const yaml = require("js-yaml");
const fs = require("fs");
const jsonata = require("jsonata");

var filePath = process.argv[3];
var detailsPath = process.argv[2];

// var filePath = './openapi-enriched.yaml'
// var detailsPath = './details.yaml'

enrichFile(filePath, detailsPath);
cleanFile(filePath);

// This functions removes the "nullable" from all the input schemas of the merged file
function cleanFile(filePath) {
  console.log("Trying to clean: " + filePath);

  // Get document, or throw exception on error
  try {
    var doc = yaml.load(fs.readFileSync(filePath, "utf8"));

    var paths = doc["paths"];
    var endpoints = Object.keys(paths);
    endpoints.forEach((endpointKey, _) => {
      console.log(endpointKey);
      var endpoint = paths[endpointKey];
      const verbsOfInterest = ["post", "put"];

      const filteredVerbs = Object.keys(endpoint).filter((verbKey) =>
        verbsOfInterest.includes(verbKey)
      );

      if (filteredVerbs.length > 0) {
        filteredVerbs.forEach((verbKey, _) => {
          console.log(verbKey);
          var requestBody = endpoint[verbKey]["requestBody"];
          if (requestBody != null) {
            var content = requestBody["content"];
            if (content != null) {
              var contentTypes = Object.keys(content);
              contentTypes.forEach((contentType, _) => {
                var schema = content[contentType]["schema"];
                schema = cleanProperty(schema);
                doc["paths"][endpointKey][verbKey]["requestBody"]["content"][
                  contentType
                ]["schema"] = schema;
              });
            }
          }
        });
      }
    });

    fs.writeFileSync(filePath, yaml.dump(doc));
    console.log("Done");
  } catch (e) {
    console.log(e);
  }
}

// For the passed property, remove nullable and apply to all the subproperties
function cleanProperty(prop) {
  if (Object.keys(prop).includes("properties")) {
    var properties = prop["properties"];
    const keys = Object.keys(properties);

    keys.forEach((key, index) => {
      var property = properties[key];

      const detailsToRemove = ["nullable"];

      var filtered = Object.fromEntries(
        Object.entries(property).filter(
          ([k, v]) => !detailsToRemove.includes(k)
        )
      );

      if (Object.keys(filtered).includes("properties")) {
        filtered = cleanProperty(filtered);
      }
      properties[key] = filtered;
    });
    prop["properties"] = properties;
  }
  return prop;
}

// This functions adds the details from the details.yaml file
function enrichFile(filePath, detailsPath) {
  console.log("Trying to enrich: " + filePath);
  console.log("With details from: " + detailsPath);

  // Get document, or throw exception on error
  try {
    var doc = yaml.load(fs.readFileSync(filePath, "utf8"));
    const detailsDoc = yaml.load(fs.readFileSync(detailsPath, "utf8"));

    var endpoints = Object.keys(detailsDoc);
    endpoints.forEach((endpointKey, _) => {
      var endpoint = detailsDoc[endpointKey];
      var verbs = Object.keys(endpoint);
      verbs.forEach((verbKey, _) => {
        var verb = endpoint[verbKey];
        var contentTypes = Object.keys(verb);
        contentTypes.forEach((contentType, _) => {
          var schema = verb[contentType];
          var path = `paths.\'${endpointKey}\'.${verbKey}.requestBody.content.\'${contentType}\'.schema.properties`;
          doc = enrichProperty(doc, path, schema);
        });
      });
    });

    doc = addReceiveTokenInParam(doc);
    doc = addManualAuthMethod(doc);
    doc = addManualAuthMethodToEndpoints(doc);

    fs.writeFileSync(filePath, yaml.dump(doc));
    console.log("Done");
  } catch (e) {
    console.log(e);
  }
}

// For each key contained in schema, update the path, compose the update object and apply to the document
// If it has subproperties, extend the path and apply to subproperties
function enrichProperty(doc, path, schema) {
  var propertyKeys = Object.keys(schema);
  propertyKeys.forEach((propertyKey, _) => {
    var property = schema[propertyKey];
    // Until here the path is generic for all the properties, we must indicate the single property it refers to by concatenating its name
    var propertyPath = `${path}.${propertyKey}`;
    var update = {};
    var detailKeys = Object.keys(property);
    detailKeys.forEach((detailKey, _) => {
      if (detailKey != "properties") {
        update[detailKey] = property[detailKey];
      } else {
        var subSchema = property["properties"];
        // Here we make the path generic again to be used with all the subproperties by calling enrichProperty again
        var subPath = `${propertyPath}.properties`;
        doc = enrichProperty(doc, subPath, subSchema);
      }
    });
    doc = applyUpdates(doc, propertyPath, update);
  });
  return doc;
}

// Applies the following JSONata transformation:
// $ ~> | components.securitySchemes.OAuth2AuthenticationCodeFlow | {"x-receive-token-in": "request-body"} |
// It is necessary to select the proper option on RapiDOC TryIt
function addReceiveTokenInParam(doc) {
  path = "components.securitySchemes.OAuth2AuthenticationCodeFlow";
  value = '{"x-receive-token-in": "request-body"}';
  var transformation = `$ ~> | ${path} | ${value} | `;
  var expression = jsonata(transformation);
  var result = expression.evaluate(doc);
  return result;
}

// Applies the following JSONata transformation:
// $ ~> | components.securitySchemes | {"ManualAuth": {"type": "http", "scheme": "bearer"}} |
// It is necessary to add the manual auth to RapiDOC TryIt
function addManualAuthMethod(doc) {
  path = "components.securitySchemes";
  value = '{"ManualAuth": {"type": "http", "scheme": "bearer"}}';
  var transformation = `$ ~> | ${path} | ${value} | `;
  var expression = jsonata(transformation);
  var result = expression.evaluate(doc);
  return result;
}

function addManualAuthMethodToEndpoints(doc) {
  var paths = doc["paths"];
  var endpoints = Object.keys(paths);

  endpoints.forEach((endpointKey, _) => {
    var endpoint = paths[endpointKey];
    const verbs = Object.keys(endpoint);

    // uses this to filter 'params'
    const verbsOfInterest = ["get", "post", "put", "delete"];

    const filteredVerbs = Object.keys(endpoint).filter((verbKey) =>
      verbsOfInterest.includes(verbKey)
    );

    filteredVerbs.forEach((verbKey, _) => {
      console.log(`${endpointKey} | ${verbKey} | `);
      var arr = doc["paths"][endpointKey][verbKey]["security"];
      console.log(arr);
      if (arr == null) {
        arr = [];
      }

      // Check if ManualAuth is already present
      var manualAuthExists = arr.some((item) =>
        item.hasOwnProperty("ManualAuth")
      );

      if (!manualAuthExists) {
        var value = {};
        value["ManualAuth"] = [];
        arr.push(value);
      }

      doc["paths"][endpointKey][verbKey]["security"] = arr;
    });
  });
  return doc;
}

// This function uses JSONata's transform operator to apply modifies to the selected path
// https://docs.jsonata.org/other-operators#-------transform
// The "path" param indicates the object that must be updated in the YAML structure
// The "update" param includes the modifies that must be applied to the selected path as a JSON object string, excluded the 'properties' value
// The subproperties must be processed by extending the path concatenating ".properties.subproperty_name" and creating a new update value, the path is computed in the enrichProperty function
// For example: $ ~> | paths.'/c/{company_id}/issued_documents/{document_id}'.put.requestBody.content.'application/json'.schema.properties.data.properties.entity.properties.default_vat.properties.value | {"maximum": 100, "minimum": 0} |
function applyUpdates(doc, path, details) {
  var update = JSON.stringify(details);
  var transformation = `$ ~> | ${path} | ${update} | `;
  var expression = jsonata(transformation);
  var result = expression.evaluate(doc);
  return result;
}
