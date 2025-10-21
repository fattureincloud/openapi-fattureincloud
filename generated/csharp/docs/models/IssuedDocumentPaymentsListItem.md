# It.FattureInCloud.Sdk.Model.IssuedDocumentPaymentsListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** | Issued document payment item id | [optional] 
**DueDate** | **DateOnly** | Issued document payment due date | [optional] 
**Amount** | **decimal** | Issued document payment amount | [optional] 
**Status** | **IssuedDocumentStatus** |  | [optional] 
**PaymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  | [optional] 
**PaidDate** | **DateOnly** | Issued document payment date [Only if status is paid] | [optional] 
**EiRaw** | **Object** | Issued document payment advanced raw attributes for e-invoices | [optional] 
**PaymentTerms** | [**IssuedDocumentPaymentsListItemPaymentTerms**](IssuedDocumentPaymentsListItemPaymentTerms.md) |  | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

