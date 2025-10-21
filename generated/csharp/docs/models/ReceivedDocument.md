# It.FattureInCloud.Sdk.Model.ReceivedDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** | Received document id | [optional] 
**Type** | **ReceivedDocumentType** |  | [optional] 
**Entity** | [**Entity**](Entity.md) |  | [optional] 
**Date** | **DateOnly** | Received document date [defaults to today&#39;s date] | [optional] 
**Category** | **string** | Received document category | [optional] 
**Description** | **string** | Received document description | [optional] 
**AmountNet** | **decimal** | Received document total net amount | [optional] 
**AmountVat** | **decimal** | Received document total vat amount | [optional] 
**AmountWithholdingTax** | **decimal** | Received document withholding tax amount | [optional] 
**AmountOtherWithholdingTax** | **decimal** | Received document other withholding tax amount | [optional] 
**AmountGross** | **decimal** | [Read Only] Received document total gross amount | [optional] [readonly] 
**Amortization** | **decimal** | Received document amortization value | [optional] 
**RcCenter** | **string** | Received document revenue center | [optional] 
**InvoiceNumber** | **string** | Received document invoice number | [optional] 
**IsMarked** | **bool** | Received document is marked | [optional] 
**IsDetailed** | **bool** | Received document has items | [optional] 
**EInvoice** | **bool** | [Read Only] Received document is an e-invoice | [optional] 
**NextDueDate** | **DateOnly** | [Read Only] Received document date of the next not paid payment | [optional] [readonly] 
**Currency** | [**Currency**](Currency.md) |  | [optional] 
**TaxDeductibility** | **decimal** | Received document tax deducibility percentage | [optional] 
**VatDeductibility** | **decimal** | Received document vat deducibility percentage | [optional] 
**ItemsList** | [**List&lt;ReceivedDocumentItemsListItem&gt;**](ReceivedDocumentItemsListItem.md) |  | [optional] 
**PaymentsList** | [**List&lt;ReceivedDocumentPaymentsListItem&gt;**](ReceivedDocumentPaymentsListItem.md) |  | [optional] 
**AttachmentUrl** | **string** | [Temporary] [Read Only] Received document url of the attached file | [optional] [readonly] 
**AttachmentPreviewUrl** | **string** | [Temporary] [Read Only] Received document url of the attachment preview | [optional] [readonly] 
**AutoCalculate** | **bool** | Received document total items amount and total payments amount can differ if this field is set to false | [optional] 
**AttachmentToken** | **string** | [Write Only] Received document attachment token returned by POST /received_documents/attachment | [optional] 
**Locked** | **bool** | Received Document can&#39;t be edited | [optional] 
**CreatedAt** | **string** | Received document creation date | [optional] 
**UpdatedAt** | **string** | Received document last update date | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

