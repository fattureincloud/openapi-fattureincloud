# It.FattureInCloud.Sdk.Model.EmailSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SenderId** | **int** | Email sender id [required if **sender_email** is not specified] | [optional] 
**SenderEmail** | **string** | Email sender address [required if **sender_id** is not specified] | [optional] 
**RecipientEmail** | **string** | Email recipient emails [comma separated] | [optional] 
**Subject** | **string** | Email subject | [optional] 
**Body** | **string** | Email body [HTML Escaped] [max size 50KiB] | [optional] 
**Include** | [**EmailScheduleInclude**](EmailScheduleInclude.md) |  | [optional] 
**AttachPdf** | **bool** | Attach the pdf of the document | [optional] 
**SendCopy** | **bool** | Send a copy of the email to the **cc_email** specified by **Get email data** | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

