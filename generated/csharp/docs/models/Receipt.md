# It.FattureInCloud.Sdk.Model.Receipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** | Receipt id | [optional] 
**Date** | **DateOnly** | Receipt date | [optional] 
**Number** | **decimal** | Receipt number | [optional] 
**Numeration** | **string** | Receipt numeration | [optional] 
**AmountNet** | **decimal** | Receipt total net amount | [optional] 
**AmountVat** | **decimal** | Receipt total vat amount | [optional] 
**AmountGross** | **decimal** | Receipt total gross amount | [optional] 
**UseGrossPrices** | **bool** | Receipt uses gross prices | [optional] 
**Type** | **ReceiptType** |  | [optional] 
**Description** | **string** | Receipt description | [optional] 
**RcCenter** | **string** | Receipt revenue center | [optional] 
**CreatedAt** | **string** | Receipt creation date | [optional] 
**UpdatedAt** | **string** | Receipt last update date | [optional] 
**PaymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**ItemsList** | [**List&lt;ReceiptItemsListItem&gt;**](ReceiptItemsListItem.md) |  | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

