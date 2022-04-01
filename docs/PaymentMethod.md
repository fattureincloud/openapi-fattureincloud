

# PaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique identifier |  [optional]
**name** | **String** | Name of the payment method |  [optional]
**type** | **PaymentMethodType** |  |  [optional]
**isDefault** | **Boolean** | Determines if this is the default payment method. |  [optional]
**defaultPaymentAccount** | [**PaymentAccount**](PaymentAccount.md) |  |  [optional]
**details** | [**List&lt;PaymentMethodDetails&gt;**](PaymentMethodDetails.md) | Method details rows |  [optional]
**bankIban** | **String** | Bank iban |  [optional]
**bankName** | **String** | Bank name |  [optional]
**bankBeneficiary** | **String** | Bank beneficiary |  [optional]
**eiPaymentMethod** | **String** | E-invoice payment method |  [optional]


## Implemented Interfaces

* Serializable


