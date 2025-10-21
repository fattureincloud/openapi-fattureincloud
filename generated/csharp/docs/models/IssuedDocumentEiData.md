# It.FattureInCloud.Sdk.Model.IssuedDocumentEiData
Issued document e-invoice data [Only if e_invoice=true]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VatKind** | **VatKind** |  | [optional] 
**OriginalDocumentType** | **OriginalDocumentType** |  | [optional] 
**OdNumber** | **string** | E-invoice original document number | [optional] 
**OdDate** | **DateOnly** | E-invoice original document date | [optional] 
**Cig** | **string** | E-invoice CIG | [optional] 
**Cup** | **string** | E-invoice CUP | [optional] 
**PaymentMethod** | **string** | E-invoice payment method [required for e-invoices] (see [here](https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.2/Rappresentazione_Tabellare_FattOrdinaria_V1.2.2.pdf) for the accepted values of ModalitaPagamento) | [optional] 
**BankName** | **string** | E-invoice bank name | [optional] 
**BankIban** | **string** | E-invoice bank IBAN | [optional] 
**BankBeneficiary** | **string** | E-invoice bank beneficiary | [optional] 
**InvoiceNumber** | **string** | E-invoice invoice number | [optional] 
**InvoiceDate** | **DateOnly** | E-invoice invoice date | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

