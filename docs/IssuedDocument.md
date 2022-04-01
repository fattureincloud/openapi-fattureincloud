

# IssuedDocument



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique identifier of the document. |  [optional]
**entity** | [**Entity**](Entity.md) |  |  [optional]
**type** | **IssuedDocumentType** |  |  [optional]
**number** | **Integer** | Number of the document [If not specified, next number is used] |  [optional]
**numeration** | **String** | Numeration of the document [Not available if type&#x3D;delivery_note] |  [optional]
**date** | **LocalDate** | Date of the document [If not specified, today date is used] |  [optional]
**year** | **Integer** | Invoice year. |  [optional]
**currency** | [**Currency**](Currency.md) |  |  [optional]
**language** | [**Language**](Language.md) |  |  [optional]
**subject** | **String** | Issued document subject. |  [optional]
**visibleSubject** | **String** | Issued document visible subject. |  [optional]
**rcCenter** | **String** | Revenue center [or cost center if type&#x3D;supplier_order]. |  [optional]
**notes** | **String** | Issued document extra notes. |  [optional]
**rivalsa** | **BigDecimal** | \&quot;Rivalsa INPS\&quot; percentual value |  [optional]
**cassa** | **BigDecimal** | \&quot;Cassa previdenziale\&quot; percentual value |  [optional]
**amountCassa** | **BigDecimal** | [Read Only] Cassa amount. |  [optional] [readonly]
**cassaTaxable** | **BigDecimal** | Cassa taxable percentage |  [optional]
**amountCassaTaxable** | **BigDecimal** | [Can be set only if cassa_taxable is NULL] Cassa2 taxable amount |  [optional]
**cassa2** | **BigDecimal** | \&quot;Cassa previdenziale 2\&quot; percentual value |  [optional]
**amountCassa2** | **BigDecimal** | [Read Only] Cassa amount. |  [optional] [readonly]
**cassa2Taxable** | **BigDecimal** | Cassa2 taxable percentage |  [optional]
**amountCassa2Taxable** | **BigDecimal** | [Can be set only if cassa2_taxable is NULL] Cassa2 taxable amount |  [optional]
**globalCassaTaxable** | **BigDecimal** | Global cassa taxable percentage |  [optional]
**amountGlobalCassaTaxable** | **BigDecimal** | [Can be set only if global_cassa_taxable is NULL] Global cassa taxable amount |  [optional]
**withholdingTax** | **BigDecimal** | Withholding tax (ritenuta d&#39;acconto) percentual value |  [optional]
**withholdingTaxTaxable** | **BigDecimal** | Withholding tax taxable (imponibile) percentual value |  [optional]
**otherWithholdingTax** | **BigDecimal** | Other withholding tax (altra ritenuta) percentual value |  [optional]
**stampDuty** | **BigDecimal** | Stamp duty value [0 if not present] |  [optional]
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  |  [optional]
**useSplitPayment** | **Boolean** | Use split payment |  [optional]
**useGrossPrices** | **Boolean** | Use gross prices |  [optional]
**eInvoice** | **Boolean** | Indicates if this is an e-invoice. |  [optional]
**eiData** | [**IssuedDocumentEiData**](IssuedDocumentEiData.md) |  |  [optional]
**eiCassaType** | **String** | E-invoice cassa type |  [optional]
**eiCassa2Type** | **String** | E-invoice cassa2 type |  [optional]
**eiWithholdingTaxCausal** | **String** | E-invoice withholding tax causal |  [optional]
**eiOtherWithholdingTaxType** | **String** | E-invoice other withholding tax type |  [optional]
**eiOtherWithholdingTaxCausal** | **String** | E-invoice other withholding tax causal |  [optional]
**itemsList** | [**List&lt;IssuedDocumentItemsListItem&gt;**](IssuedDocumentItemsListItem.md) |  |  [optional]
**paymentsList** | [**List&lt;IssuedDocumentPaymentsListItem&gt;**](IssuedDocumentPaymentsListItem.md) |  |  [optional]
**template** | [**DocumentTemplate**](DocumentTemplate.md) |  |  [optional]
**deliveryNoteTemplate** | [**DocumentTemplate**](DocumentTemplate.md) |  |  [optional]
**accInvTemplate** | [**DocumentTemplate**](DocumentTemplate.md) |  |  [optional]
**hMargins** | **Integer** | Horizontal margins. |  [optional]
**vMargins** | **Integer** | Vertical margins. |  [optional]
**showPayments** | **Boolean** | Shows the expiration dates of the payments on the document. |  [optional]
**showPaymentMethod** | **Boolean** | Show the payment method details on the document. |  [optional]
**showTotals** | **ShowTotalsMode** |  |  [optional]
**showPaypalButton** | **Boolean** | Show paypal button |  [optional]
**showNotificationButton** | **Boolean** | Show notification button |  [optional]
**showTspayButton** | **Boolean** | Show ts pay button. |  [optional]
**deliveryNote** | **Boolean** |  |  [optional]
**accompanyingInvoice** | **Boolean** | Attach an accompanying invoice. |  [optional]
**dnNumber** | **Integer** | Number (for the attached delivery note). |  [optional]
**dnDate** | **LocalDate** | Date (for the attached delivery note). |  [optional]
**dnAiPackagesNumber** | **String** | Number of packages (for the attached delivery note). |  [optional]
**dnAiWeight** | **String** | Weight (for the attached delivery note). |  [optional]
**dnAiCausal** | **String** | Causal (for the attached delivery note). |  [optional]
**dnAiDestination** | **String** | Destination (for the attached delivery note). |  [optional]
**dnAiTransporter** | **String** | Transporter (for the attached delivery note). |  [optional]
**dnAiNotes** | **String** | Notes (for the attached delivery note). |  [optional]
**isMarked** | **Boolean** | This is true if the document is marked. |  [optional]
**amountNet** | **BigDecimal** | [Read Only] Total net amount (competenze). |  [optional] [readonly]
**amountVat** | **BigDecimal** | [Read Only] Total vat amount (IVA). |  [optional] [readonly]
**amountGross** | **BigDecimal** | [Read Only] Total gross amount (totale documento). |  [optional] [readonly]
**amountDueDiscount** | **BigDecimal** | Amount due discount |  [optional]
**amountRivalsa** | **BigDecimal** | [Read Only] Rivalsa amount. |  [optional] [readonly]
**amountRivalsaTaxable** | **BigDecimal** | Taxable rivalsa amount |  [optional]
**amountWithholdingTax** | **BigDecimal** | [Read Only] Withholding tax amount (ritenuta d&#39;acconto). |  [optional] [readonly]
**amountWithholdingTaxTaxable** | **BigDecimal** | Taxable withholding tax amount |  [optional]
**amountOtherWithholdingTax** | **BigDecimal** | [Read Only] Other withholding tax amount (altra ritenuta). |  [optional] [readonly]
**amountOtherWithholdingTaxTaxable** | **BigDecimal** | Taxable other withholding tax amount |  [optional]
**amountEnasarcoTaxable** | **BigDecimal** | Taxable enasarco amount |  [optional]
**extraData** | [**IssuedDocumentExtraData**](IssuedDocumentExtraData.md) |  |  [optional]
**seenDate** | **LocalDate** | Date when the client/supplier has seen the document. |  [optional]
**nextDueDate** | **LocalDate** | Date of the next not paid payment. |  [optional]
**url** | **String** | Public url of the document PDF file. |  [optional]
**attachmentUrl** | **String** | [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}. |  [optional] [readonly]
**attachmentToken** | **String** | [Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded. |  [optional]
**eiRaw** | **Object** | Advanced raw attributes for e-invoices. |  [optional]
**eiStatus** | [**EiStatusEnum**](#EiStatusEnum) | [Read only] Status of the e-invoice.   * &#x60;attempt&#x60; - We are trying to send the invoice, please wait up to 2 hours   * &#x60;missing&#x60; - The invoice is missing   * &#x60;not_sent&#x60; - The invoice has yet to be sent   * &#x60;sent&#x60; - The invoice was sent   * &#x60;pending&#x60; - The checks for the digital signature and sending are in progress   * &#x60;processing&#x60; - The SDI is delivering the invoice to the customer   * &#x60;error&#x60; - An error occurred while handling the invoice, please try to resend it or contact support   * &#x60;discarded&#x60; - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * &#x60;not_delivered&#x60; - The SDI was unable to deliver the invoice   * &#x60;accepted&#x60; - The customer accepted the invoice   * &#x60;rejected&#x60; - The customer rejected the invoice, so it must be corrected   * &#x60;no_response&#x60; - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice  |  [optional]



## Enum: EiStatusEnum

Name | Value
---- | -----
ATTEMPT | &quot;attempt&quot;
MISSING | &quot;missing&quot;
NOT_SENT | &quot;not_sent&quot;
SENT | &quot;sent&quot;
PENDING | &quot;pending&quot;
PROCESSING | &quot;processing&quot;
ERROR | &quot;error&quot;
DISCARDED | &quot;discarded&quot;
NOT_DELIVERED | &quot;not_delivered&quot;
ACCEPTED | &quot;accepted&quot;
REJECTED | &quot;rejected&quot;
NO_RESPONSE | &quot;no_response&quot;


## Implemented Interfaces

* Serializable


