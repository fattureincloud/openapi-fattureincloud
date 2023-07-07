const _ = require('lodash')
const EventType = require('../models/EventType')

const replacePathParameters = (url) => url.replace(/{([^{}]+)}/g, (keyExpr, key) => `{{bundle.inputData.${key}}}`)
const removeKeyPrefixes = (objectsArray) => objectsArray == undefined || typeof objectsArray[0] != 'object' ? objectsArray : objectsArray.map((obj) => Object.keys(obj).reduce((res, key) => (res[(key.split('.')).slice(-1)] = obj[key], res), {}))
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

module.exports = {
    replacePathParameters: replacePathParameters,
    removeKeyPrefixes: removeKeyPrefixes,
    removeIfEmpty: removeIfEmpty,
    buildKeyAndLabel: buildKeyAndLabel,
    hasSearchRequisites: hasSearchRequisites,
    isSearchAction: isSearchAction,
    searchMiddleware: searchMiddleware,
    extractResourceAndOperation: extractResourceAndOperation,
    retrieveResourceOperations: retrieveResourceOperations,
}