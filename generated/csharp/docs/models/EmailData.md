# It.FattureInCloud.Sdk.Model.EmailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecipientEmail** | **string** | Email recipient | [optional] 
**DefaultSenderEmail** | [**EmailDataDefaultSenderEmail**](EmailDataDefaultSenderEmail.md) |  | [optional] 
**SenderEmailsList** | [**List&lt;SenderEmail&gt;**](SenderEmail.md) | List of all emails from which the document can be sent | [optional] 
**CcEmail** | **string** | Email cc [by default is the logged company email] | [optional] 
**Subject** | **string** | Email subject | [optional] 
**Body** | **string** | Email body | [optional] 
**DocumentExists** | **bool** | Document exists if it is not a delivery note | [optional] 
**DeliveryNoteExists** | **bool** | Document is a delivery note | [optional] 
**AttachmentExists** | **bool** | Document has attachment | [optional] 
**AccompanyingInvoiceExists** | **bool** | Document has accompanying invoice | [optional] 
**DefaultAttachPdf** | **bool** | Attach document pdf | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

