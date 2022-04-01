

# Receipt



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Receipt unique identifier. |  [optional]
**date** | **LocalDate** | Receipt date. |  [optional]
**number** | **BigDecimal** | Receipt number. |  [optional]
**numeration** | **String** | If it&#39;s null or empty string use the default numeration. |  [optional]
**amountNet** | **BigDecimal** | Total net amount. |  [optional]
**amountVat** | **BigDecimal** | Total vat amount. |  [optional]
**amountGross** | **BigDecimal** | Total gross amount. |  [optional]
**useGrossPrices** | **Boolean** |  |  [optional]
**type** | **ReceiptType** |  |  [optional]
**description** | **String** | Receipt description. |  [optional]
**rcCenter** | **String** | Revenue center. |  [optional]
**createdAt** | **String** |  |  [optional]
**updatedAt** | **String** |  |  [optional]
**paymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  |  [optional]
**itemsList** | [**List&lt;ReceiptItemsListItem&gt;**](ReceiptItemsListItem.md) |  |  [optional]


## Implemented Interfaces

* Serializable


