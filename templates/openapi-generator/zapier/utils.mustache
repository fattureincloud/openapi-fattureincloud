const _ = require('lodash')
const EventType = require('../models/EventType')

const replacePathParameters = (url) => url.replace(/{([^{}]+)}/g, (keyExpr, key) => `{{bundle.inputData.${key}}}`)
const childMapping = (objectsArray, prefix, model) => {
    if(_.isEmpty(objectsArray)) return undefined
    if (typeof model.mapping === "function") { 
        return objectsArray.map(object => model.mapping({inputData: object}, prefix))
    }
    return objectsArray
}
const removeIfEmpty = (obj) => _.isEmpty(JSON.parse(JSON.stringify(obj))) ? undefined : obj
const buildKeyAndLabel = (prefix, isInput = true, isArrayChild = false) => {
    const keyPrefix = !_.isEmpty(prefix) && (!isArrayChild || isInput) ? `${prefix}${isInput ? '.' : '__'}` : prefix
    const labelPrefix = !_.isEmpty(keyPrefix) ? keyPrefix.replaceAll('__', '.') : ''
    return {
        keyPrefix: keyPrefix,
        labelPrefix: labelPrefix,
    }
}
const isSearchAction = (key) => {
    return key.startsWith('list')
}
const hasASearchField = action => action.operation.inputFields.length > 0
const returnsObjectsArray = action => !!action.operation.outputFields.find(field => 'children' in field)
const hasSearchRequisites = action => hasASearchField(action) && returnsObjectsArray(action)
const searchMiddleware = (action) => {
    let newOutputFields = action.operation.outputFields.find(field => field.key === 'data').children.map(field => ({
            key: field.key.replace('data[]', ''),
            label: field.label.replace('data[]', ''),
            type: field.type,
        })
    )
    action.operation.outputFields = newOutputFields
    let oldFunc = action.operation.perform
    action.operation.perform = async(z, bundle) => oldFunc(z, bundle).then((response) => response.data)
    return action
}

const isCreateAction = (key) => {
    // TODO: return true if the key is a "create" action for your API
    return !isSearchAction(key);
}

const isTrigger = (key) => {
    // TODO: custom logic
    return false
}

const triggerMiddleware = (action) => {
    return action
}

const requestOptionsMiddleware = (z, bundle, requestOptions) => {
  requestOptions.headers['Authorization'] = `Bearer ${bundle.authData.access_token}`
  return requestOptions
}

const responseOptionsMiddleware = (z, bundle, key, json) => {
  // TODO: modify if your response needs to be transformed before returning the
  //      data to Zapier. For example, you may need to map an id field to the
  //      "id" field. For example, map "contactId": 1 to "id": 1. Or wrap your
  //      response in a json object. For example, { data: response }.
  //
  //      Note that if the type being returned from the endpoint is a primitive
  //      type, the response is automatically wrapped like this: { data: response }.
  return json
}

const extractResourceAndOperation = (eventType) => ({
    resource: eventType.substring('it.fattureincloud.webhooks.'.length, eventType.lastIndexOf('.')),
    eventOperation: eventType.substring(eventType.lastIndexOf('.') + 1)
})
const retrieveResourceOperations = (resource) => EventType.fields('').choices.filter(eventType => extractResourceAndOperation(eventType).resource == resource).map(et => ({type: extractResourceAndOperation(et).eventOperation, id: extractResourceAndOperation(et).eventOperation}))
const overrideUserAgent = (request, z, bundle) => {
    request.headers['user-agent'] = `FattureInCloud/${require('../package.json').version}/Zapier`
    return request
}
const handleClientErrors = (response, z) => {
    if (response.status >= 400 && response.status < 500) {
        let errorMessage = JSON.stringify(response.json)

        if (!_.isEmpty(response.json?.error?.validation_result)) {
            errorMessage = Object.keys(response.json?.error?.validation_result)
                .map(key => `[${key}]: ${response.json.error.validation_result[key].join(' - ')}`)
                .join('\n')
        } else if (!_.isEmpty(response.json?.error?.message)) {
            errorMessage = response.json.error.message
        }

        throw new z.errors.Error(
            errorMessage
        );
      }
      return response;
}
const jsonFieldToObject = (val, fieldname) => {
    if (_.isEmpty(val)) return undefined
    try {
        return JSON.parse(val)
    } catch(e) {
        throw new Error(`The json provided in the ${fieldname} field is invalid\n`)
    }
}

module.exports = {
    replacePathParameters: replacePathParameters,
    childMapping: childMapping,
    removeIfEmpty: removeIfEmpty,
    buildKeyAndLabel: buildKeyAndLabel,
    hasSearchRequisites: hasSearchRequisites,
    isSearchAction: isSearchAction,
    searchMiddleware: searchMiddleware,
    requestOptionsMiddleware: requestOptionsMiddleware,
    responseOptionsMiddleware: responseOptionsMiddleware,
    isTrigger: isTrigger,
    triggerMiddleware: triggerMiddleware,
    isCreateAction: isCreateAction,
    extractResourceAndOperation: extractResourceAndOperation,
    retrieveResourceOperations: retrieveResourceOperations,
    overrideUserAgent: overrideUserAgent,
    handleClientErrors: handleClientErrors,
    jsonFieldToObject: jsonFieldToObject,
}
