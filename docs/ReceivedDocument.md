

# ReceivedDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique identifier of the document. |  [optional]
**type** | **ReceivedDocumentType** |  |  [optional]
**entity** | [**ReceivedDocumentEntity**](ReceivedDocumentEntity.md) |  |  [optional]
**date** | **LocalDate** | Date of the document [If not specified, today date is used]. |  [optional]
**category** | **String** | Document category. |  [optional]
**description** | **String** | Document description. |  [optional]
**amountNet** | **BigDecimal** | Total net amount. |  [optional]
**amountVat** | **BigDecimal** | Total vat amount. |  [optional]
**amountWithholdingTax** | **BigDecimal** | Withholding tax amount. |  [optional]
**amountOtherWithholdingTax** | **BigDecimal** | Other withholding tax amount. |  [optional]
**amountGross** | **BigDecimal** | [Read Only] Total gross amount. |  [optional] [readonly]
**amortization** | **BigDecimal** | Amortization value |  [optional]
**rcCenter** | **String** | Revenue center. |  [optional]
**invoiceNumber** | **String** | Invoice number |  [optional]
**isMarked** | **Boolean** |  |  [optional]
**isDetailed** | **Boolean** |  |  [optional]
**eInvoice** | **Boolean** | [Read Only] Indicates if this is an e-invoice. |  [optional]
**nextDueDate** | **LocalDate** | [Read Only] Next due date. |  [optional] [readonly]
**currency** | [**Currency**](Currency.md) |  |  [optional]
**taxDeductibility** | **BigDecimal** | Tax deducibility percentage. |  [optional]
**vatDeductibility** | **BigDecimal** | Vat deducibility percentage. |  [optional]
**itemsList** | [**List&lt;ReceivedDocumentItemsListItem&gt;**](ReceivedDocumentItemsListItem.md) |  |  [optional]
**paymentsList** | [**List&lt;ReceivedDocumentPaymentsListItem&gt;**](ReceivedDocumentPaymentsListItem.md) |  |  [optional]
**attachmentUrl** | **String** | [Read Only] Attachment url. |  [optional] [readonly]
**attachmentPreviewUrl** | **String** | [Read Only] Attachment preview url. |  [optional] [readonly]
**attachmentToken** | **String** | Uploaded attachement token. |  [optional]


## Implemented Interfaces

* Serializable


