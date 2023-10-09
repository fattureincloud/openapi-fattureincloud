const _ = require('lodash')
const EventType = require('../models/EventType')

const replacePathParameters = (url) => url.replace(/{([^{}]+)}/g, (keyExpr, key) => `{{bundle.inputData.${key}}}`)
const childMapping = (objectsArray, prefix, model) => objectsArray.map(object => model.mapping({inputData: object}, prefix))
const removeIfEmpty = (obj) => _.isEmpty(JSON.parse(JSON.stringify(obj))) ? undefined : obj
const buildKeyAndLabel = (prefix, isInput = true, isArrayChild = false) => {
    const keyPrefix = !_.isEmpty(prefix) && (!isArrayChild || isInput) ? `${prefix}${isInput ? '.' : '__'}` : prefix
    const labelPrefix = !_.isEmpty(keyPrefix) ? keyPrefix.replaceAll('__', '.') : ''
    return {
        keyPrefix: keyPrefix,
        labelPrefix:labelPrefix,
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
const extractResourceAndOperation = (eventType) => ({
  resource: eventType.substring('it.fattureincloud.webhooks.'.length, eventType.lastIndexOf('.')),
  eventOperation: eventType.substring(eventType.lastIndexOf('.') + 1)
})
const retrieveResourceOperations = (resource) => EventType.fields('').choices.filter(eventType => extractResourceAndOperation(eventType).resource == resource).map(et => ({type: extractResourceAndOperation(et).eventOperation, id: extractResourceAndOperation(et).eventOperation}))
const overrideUserAgent = (request, z, bundle) => {
    request.headers['user-agent'] = `FattureInCloud/${require('../package.json').version}/Zapier`
    return request
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
    extractResourceAndOperation: extractResourceAndOperation,
    retrieveResourceOperations: retrieveResourceOperations,
    overrideUserAgent: overrideUserAgent,
    jsonFieldToObject: jsonFieldToObject,
}