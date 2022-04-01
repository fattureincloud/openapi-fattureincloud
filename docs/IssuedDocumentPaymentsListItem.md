

# IssuedDocumentPaymentsListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique identifier. |  [optional]
**dueDate** | **LocalDate** | Due date. |  [optional]
**amount** | **BigDecimal** | Payment amount. |  [optional]
**status** | **IssuedDocumentStatus** |  |  [optional]
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  |  [optional]
**paidDate** | **LocalDate** | Payment date. [Only if status is paid] |  [optional]
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. |  [optional]


## Implemented Interfaces

* Serializable


