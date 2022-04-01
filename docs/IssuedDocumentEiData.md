

# IssuedDocumentEiData

E-invoice data. [Only if e_invoice=true]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vatKind** | **VatKind** |  |  [optional]
**originalDocumentType** | **OriginalDocumentType** |  |  [optional]
**odNumber** | **String** | Original document number. |  [optional]
**odDate** | **LocalDate** | Original document date. |  [optional]
**cig** | **String** | CIG. |  [optional]
**cup** | **String** | CUP. |  [optional]
**paymentMethod** | **String** | Payment method (see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Rappresentazione-tabellare-fattura-ordinaria.pdf for the accepted values of ModalitaPagamento). |  [optional]
**bankName** | **String** | Bank name. |  [optional]
**bankIban** | **String** | IBAN. |  [optional]
**bankBeneficiary** | **String** | Bank beneficiary. |  [optional]
**invoiceNumber** | **String** | Invoice number. |  [optional]
**invoiceDate** | **LocalDate** | Invoice date. |  [optional]


## Implemented Interfaces

* Serializable


