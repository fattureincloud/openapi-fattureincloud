# It.FattureInCloud.Sdk.Api.IssuedDocumentsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateIssuedDocument**](IssuedDocumentsApi.md#createissueddocument) | **POST** /c/{company_id}/issued_documents | Create Issued Document |
| [**DeleteBinIssuedDocument**](IssuedDocumentsApi.md#deletebinissueddocument) | **DELETE** /c/{company_id}/bin/issued_documents/{document_id} | Delete Bin Issued Document |
| [**DeleteIssuedDocument**](IssuedDocumentsApi.md#deleteissueddocument) | **DELETE** /c/{company_id}/issued_documents/{document_id} | Delete Issued Document |
| [**DeleteIssuedDocumentAttachment**](IssuedDocumentsApi.md#deleteissueddocumentattachment) | **DELETE** /c/{company_id}/issued_documents/{document_id}/attachment | Delete Issued Document Attachment |
| [**GetBinIssuedDocument**](IssuedDocumentsApi.md#getbinissueddocument) | **GET** /c/{company_id}/bin/issued_documents/{document_id} | Get Bin Issued Documents List |
| [**GetEmailData**](IssuedDocumentsApi.md#getemaildata) | **GET** /c/{company_id}/issued_documents/{document_id}/email | Get Email Data |
| [**GetExistingIssuedDocumentTotals**](IssuedDocumentsApi.md#getexistingissueddocumenttotals) | **POST** /c/{company_id}/issued_documents/{document_id}/totals | Get Existing Issued Document Totals |
| [**GetIssuedDocument**](IssuedDocumentsApi.md#getissueddocument) | **GET** /c/{company_id}/issued_documents/{document_id} | Get Issued Document |
| [**GetIssuedDocumentPreCreateInfo**](IssuedDocumentsApi.md#getissueddocumentprecreateinfo) | **GET** /c/{company_id}/issued_documents/info | Get Issued Document Pre-Create Info |
| [**GetNewIssuedDocumentTotals**](IssuedDocumentsApi.md#getnewissueddocumenttotals) | **POST** /c/{company_id}/issued_documents/totals | Get New Issued Document Totals |
| [**JoinIssuedDocuments**](IssuedDocumentsApi.md#joinissueddocuments) | **GET** /c/{company_id}/issued_documents/join | Join Issued Documents |
| [**ListBinIssuedDocuments**](IssuedDocumentsApi.md#listbinissueddocuments) | **GET** /c/{company_id}/bin/issued_documents | Get Bin Issued Documents List |
| [**ListIssuedDocuments**](IssuedDocumentsApi.md#listissueddocuments) | **GET** /c/{company_id}/issued_documents | List Issued Documents |
| [**ModifyIssuedDocument**](IssuedDocumentsApi.md#modifyissueddocument) | **PUT** /c/{company_id}/issued_documents/{document_id} | Modify Issued Document |
| [**RecoverBinIssuedDocument**](IssuedDocumentsApi.md#recoverbinissueddocument) | **POST** /c/{company_id}/bin/issued_documents/{document_id}/recover | Recover Issued Document From The Bin |
| [**ScheduleEmail**](IssuedDocumentsApi.md#scheduleemail) | **POST** /c/{company_id}/issued_documents/{document_id}/email | Schedule Email |
| [**TransformIssuedDocument**](IssuedDocumentsApi.md#transformissueddocument) | **GET** /c/{company_id}/issued_documents/transform | Transform Issued Document |
| [**UploadIssuedDocumentAttachment**](IssuedDocumentsApi.md#uploadissueddocumentattachment) | **POST** /c/{company_id}/issued_documents/attachment | Upload Issued Document Attachment |

<a id="createissueddocument"></a>
# **CreateIssuedDocument**
> CreateIssuedDocumentResponse CreateIssuedDocument (int companyId, CreateIssuedDocumentRequest createIssuedDocumentRequest = null)

Create Issued Document

Creates a new document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createIssuedDocumentRequest** | [**CreateIssuedDocumentRequest**](CreateIssuedDocumentRequest.md) | The Issued Document | [optional]  |

### Return type

[**CreateIssuedDocumentResponse**](CreateIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document created. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletebinissueddocument"></a>
# **DeleteBinIssuedDocument**
> void DeleteBinIssuedDocument (int companyId, int documentId)

Delete Bin Issued Document

Delete Bin Issued Document


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |

### Return type

void (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deleteissueddocument"></a>
# **DeleteIssuedDocument**
> void DeleteIssuedDocument (int companyId, int documentId)

Delete Issued Document

Deletes the specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |

### Return type

void (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deleteissueddocumentattachment"></a>
# **DeleteIssuedDocumentAttachment**
> void DeleteIssuedDocumentAttachment (int companyId, int documentId)

Delete Issued Document Attachment

Removes the attachment of the specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |

### Return type

void (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File removed. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getbinissueddocument"></a>
# **GetBinIssuedDocument**
> GetBinIssuedDocumentResponse GetBinIssuedDocument (int companyId, int documentId)

Get Bin Issued Documents List

Get bin issued documents detail


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |

### Return type

[**GetBinIssuedDocumentResponse**](GetBinIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bin issued document details |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getemaildata"></a>
# **GetEmailData**
> GetEmailDataResponse GetEmailData (int companyId, int documentId)

Get Email Data

Gets the pre-compiled email details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |

### Return type

[**GetEmailDataResponse**](GetEmailDataResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | EmailData |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getexistingissueddocumenttotals"></a>
# **GetExistingIssuedDocumentTotals**
> GetExistingIssuedDocumentTotalsResponse GetExistingIssuedDocumentTotals (int companyId, int documentId, GetExistingIssuedDocumentTotalsRequest getExistingIssuedDocumentTotalsRequest = null)

Get Existing Issued Document Totals

Returns the totals for a specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **getExistingIssuedDocumentTotalsRequest** | [**GetExistingIssuedDocumentTotalsRequest**](GetExistingIssuedDocumentTotalsRequest.md) |  | [optional]  |

### Return type

[**GetExistingIssuedDocumentTotalsResponse**](GetExistingIssuedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Totals. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getissueddocument"></a>
# **GetIssuedDocument**
> GetIssuedDocumentResponse GetIssuedDocument (int companyId, int documentId, string fields = null, string fieldset = null)

Get Issued Document

Gets the specified document. 


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

### Return type

[**GetIssuedDocumentResponse**](GetIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document Details. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getissueddocumentprecreateinfo"></a>
# **GetIssuedDocumentPreCreateInfo**
> GetIssuedDocumentPreCreateInfoResponse GetIssuedDocumentPreCreateInfo (int companyId, string type)

Get Issued Document Pre-Create Info

Retrieves the information useful while creating a new document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **type** | **string** | The type of the issued document. |  |

### Return type

[**GetIssuedDocumentPreCreateInfoResponse**](GetIssuedDocumentPreCreateInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pre-create info. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getnewissueddocumenttotals"></a>
# **GetNewIssuedDocumentTotals**
> GetNewIssuedDocumentTotalsResponse GetNewIssuedDocumentTotals (int companyId, GetNewIssuedDocumentTotalsRequest getNewIssuedDocumentTotalsRequest = null)

Get New Issued Document Totals

Returns the totals for a new document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **getNewIssuedDocumentTotalsRequest** | [**GetNewIssuedDocumentTotalsRequest**](GetNewIssuedDocumentTotalsRequest.md) |  | [optional]  |

### Return type

[**GetNewIssuedDocumentTotalsResponse**](GetNewIssuedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Totals. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="joinissueddocuments"></a>
# **JoinIssuedDocuments**
> JoinIssuedDocumentsResponse JoinIssuedDocuments (int companyId, string ids, int group = null, string type = null)

Join Issued Documents

Joins issued documents.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **ids** | **string** | Ids of the documents. |  |
| **group** | **int** | Group items. | [optional]  |
| **type** | **string** | Type of the documents to be joined | [optional]  |

### Return type

[**JoinIssuedDocumentsResponse**](JoinIssuedDocumentsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listbinissueddocuments"></a>
# **ListBinIssuedDocuments**
> ListBinIssuedDocuments ListBinIssuedDocuments (int companyId)

Get Bin Issued Documents List

Get bin issued documents list


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |

### Return type

[**ListBinIssuedDocuments**](ListBinIssuedDocuments.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bin Issued Documents List |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listissueddocuments"></a>
# **ListIssuedDocuments**
> ListIssuedDocumentsResponse ListIssuedDocuments (int companyId, string type, string fields = null, string fieldset = null, string sort = null, int page = null, int perPage = null, string q = null, int inclusive = null)

List Issued Documents

Lists the issued documents.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **type** | **string** | The type of the issued document. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |
| **sort** | **string** | List of comma-separated fields for result sorting (minus for desc sorting). | [optional]  |
| **page** | **int** | The page to retrieve. | [optional] [default to 1] |
| **perPage** | **int** | The size of the page. | [optional] [default to 5] |
| **q** | **string** | Query for filtering the results. | [optional]  |
| **inclusive** | **int** | (Only for type &#x3D; delivery_notes) Include invoices delivery notes. | [optional]  |

### Return type

[**ListIssuedDocumentsResponse**](ListIssuedDocumentsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Results list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifyissueddocument"></a>
# **ModifyIssuedDocument**
> ModifyIssuedDocumentResponse ModifyIssuedDocument (int companyId, int documentId, ModifyIssuedDocumentRequest modifyIssuedDocumentRequest = null)

Modify Issued Document

Modifies the specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **modifyIssuedDocumentRequest** | [**ModifyIssuedDocumentRequest**](ModifyIssuedDocumentRequest.md) | The modified document | [optional]  |

### Return type

[**ModifyIssuedDocumentResponse**](ModifyIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document edited |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="recoverbinissueddocument"></a>
# **RecoverBinIssuedDocument**
> void RecoverBinIssuedDocument (int companyId, int documentId)

Recover Issued Document From The Bin

Recover Issued Document From The Bin


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |

### Return type

void (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="scheduleemail"></a>
# **ScheduleEmail**
> void ScheduleEmail (int companyId, int documentId, ScheduleEmailRequest scheduleEmailRequest = null)

Schedule Email

Schedules the sending of a document by email.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **scheduleEmailRequest** | [**ScheduleEmailRequest**](ScheduleEmailRequest.md) | Email Schedule | [optional]  |

### Return type

void (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="transformissueddocument"></a>
# **TransformIssuedDocument**
> TransformIssuedDocumentResponse TransformIssuedDocument (int companyId, int originalDocumentId, string newType, string type = null, int eInvoice = null, int transformKeepCopy = null)

Transform Issued Document

Transforms the document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **originalDocumentId** | **int** | Original document id. |  |
| **newType** | **string** | New document type. |  |
| **type** | **string** | Current document type. | [optional]  |
| **eInvoice** | **int** | New document e_invoice. | [optional]  |
| **transformKeepCopy** | **int** | Keep the old document. | [optional]  |

### Return type

[**TransformIssuedDocumentResponse**](TransformIssuedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="uploadissueddocumentattachment"></a>
# **UploadIssuedDocumentAttachment**
> UploadIssuedDocumentAttachmentResponse UploadIssuedDocumentAttachment (int companyId, string filename = null, System.IO.Stream attachment = null)

Upload Issued Document Attachment

Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **filename** | **string** | Attachment file name | [optional]  |
| **attachment** | **System.IO.Stream****System.IO.Stream** | Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx] | [optional]  |

### Return type

[**UploadIssuedDocumentAttachmentResponse**](UploadIssuedDocumentAttachmentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Attachment Token. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

