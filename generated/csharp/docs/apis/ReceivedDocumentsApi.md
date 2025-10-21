# It.FattureInCloud.Sdk.Api.ReceivedDocumentsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateReceivedDocument**](ReceivedDocumentsApi.md#createreceiveddocument) | **POST** /c/{company_id}/received_documents | Create Received Document |
| [**DeleteBinReceivedDocument**](ReceivedDocumentsApi.md#deletebinreceiveddocument) | **DELETE** /c/{company_id}/bin/received_documents/{document_id} | Delete Bin Received Document |
| [**DeleteReceivedDocument**](ReceivedDocumentsApi.md#deletereceiveddocument) | **DELETE** /c/{company_id}/received_documents/{document_id} | Delete Received Document |
| [**DeleteReceivedDocumentAttachment**](ReceivedDocumentsApi.md#deletereceiveddocumentattachment) | **DELETE** /c/{company_id}/received_documents/{document_id}/attachment | Delete Received Document Attachment |
| [**GetBinReceivedDocument**](ReceivedDocumentsApi.md#getbinreceiveddocument) | **GET** /c/{company_id}/bin/received_documents/{document_id} | Get Bin Received Documents List |
| [**GetExistingReceivedDocumentTotals**](ReceivedDocumentsApi.md#getexistingreceiveddocumenttotals) | **POST** /c/{company_id}/received_documents/{document_id}/totals | Get Existing Received Document Totals |
| [**GetNewReceivedDocumentTotals**](ReceivedDocumentsApi.md#getnewreceiveddocumenttotals) | **POST** /c/{company_id}/received_documents/totals | Get New Received Document Totals |
| [**GetReceivedDocument**](ReceivedDocumentsApi.md#getreceiveddocument) | **GET** /c/{company_id}/received_documents/{document_id} | Get Received Document |
| [**GetReceivedDocumentPreCreateInfo**](ReceivedDocumentsApi.md#getreceiveddocumentprecreateinfo) | **GET** /c/{company_id}/received_documents/info | Get Received Document Pre-Create Info |
| [**ListBinReceivedDocuments**](ReceivedDocumentsApi.md#listbinreceiveddocuments) | **GET** /c/{company_id}/bin/received_documents | Get Bin Received Documents List |
| [**ListReceivedDocuments**](ReceivedDocumentsApi.md#listreceiveddocuments) | **GET** /c/{company_id}/received_documents | List Received Documents |
| [**ModifyReceivedDocument**](ReceivedDocumentsApi.md#modifyreceiveddocument) | **PUT** /c/{company_id}/received_documents/{document_id} | Modify Received Document |
| [**RecoverBinReceivedDocument**](ReceivedDocumentsApi.md#recoverbinreceiveddocument) | **POST** /c/{company_id}/bin/received_documents/{document_id}/recover | Recover Received Document From The Bin |
| [**UploadReceivedDocumentAttachment**](ReceivedDocumentsApi.md#uploadreceiveddocumentattachment) | **POST** /c/{company_id}/received_documents/attachment | Upload Received Document Attachment |

<a id="createreceiveddocument"></a>
# **CreateReceivedDocument**
> CreateReceivedDocumentResponse CreateReceivedDocument (int companyId, CreateReceivedDocumentRequest createReceivedDocumentRequest = null)

Create Received Document

Creates a new document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createReceivedDocumentRequest** | [**CreateReceivedDocumentRequest**](CreateReceivedDocumentRequest.md) | Document to create | [optional]  |

### Return type

[**CreateReceivedDocumentResponse**](CreateReceivedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document created. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletebinreceiveddocument"></a>
# **DeleteBinReceivedDocument**
> void DeleteBinReceivedDocument (int companyId, int documentId)

Delete Bin Received Document

Delete Bin Received Document


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

<a id="deletereceiveddocument"></a>
# **DeleteReceivedDocument**
> void DeleteReceivedDocument (int companyId, int documentId)

Delete Received Document

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
| **200** | Document removed. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletereceiveddocumentattachment"></a>
# **DeleteReceivedDocumentAttachment**
> void DeleteReceivedDocumentAttachment (int companyId, int documentId)

Delete Received Document Attachment

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
| **200** | File removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getbinreceiveddocument"></a>
# **GetBinReceivedDocument**
> GetBinIssuedDocumentResponse GetBinReceivedDocument (int companyId, int documentId)

Get Bin Received Documents List

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

<a id="getexistingreceiveddocumenttotals"></a>
# **GetExistingReceivedDocumentTotals**
> GetExistingReceivedDocumentTotalsResponse GetExistingReceivedDocumentTotals (int companyId, int documentId, GetExistingReceivedDocumentTotalsRequest getExistingReceivedDocumentTotalsRequest = null)

Get Existing Received Document Totals

Returns the totals for the specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **getExistingReceivedDocumentTotalsRequest** | [**GetExistingReceivedDocumentTotalsRequest**](GetExistingReceivedDocumentTotalsRequest.md) | Received document. | [optional]  |

### Return type

[**GetExistingReceivedDocumentTotalsResponse**](GetExistingReceivedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document Totals. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getnewreceiveddocumenttotals"></a>
# **GetNewReceivedDocumentTotals**
> GetNewReceivedDocumentTotalsResponse GetNewReceivedDocumentTotals (int companyId, GetNewReceivedDocumentTotalsRequest getNewReceivedDocumentTotalsRequest = null)

Get New Received Document Totals

Returns the totals for a new document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **getNewReceivedDocumentTotalsRequest** | [**GetNewReceivedDocumentTotalsRequest**](GetNewReceivedDocumentTotalsRequest.md) | Received document. | [optional]  |

### Return type

[**GetNewReceivedDocumentTotalsResponse**](GetNewReceivedDocumentTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document Totals. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getreceiveddocument"></a>
# **GetReceivedDocument**
> GetReceivedDocumentResponse GetReceivedDocument (int companyId, int documentId, string fields = null, string fieldset = null)

Get Received Document

Gets the specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

### Return type

[**GetReceivedDocumentResponse**](GetReceivedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document details. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getreceiveddocumentprecreateinfo"></a>
# **GetReceivedDocumentPreCreateInfo**
> GetReceivedDocumentPreCreateInfoResponse GetReceivedDocumentPreCreateInfo (int companyId, string type)

Get Received Document Pre-Create Info

Retrieves the information useful while creating a new document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **type** | **string** | The type of the received document. |  |

### Return type

[**GetReceivedDocumentPreCreateInfoResponse**](GetReceivedDocumentPreCreateInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pre-create info |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listbinreceiveddocuments"></a>
# **ListBinReceivedDocuments**
> ListBinReceivedDocuments ListBinReceivedDocuments (int companyId)

Get Bin Received Documents List

Get bin Received documents list


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |

### Return type

[**ListBinReceivedDocuments**](ListBinReceivedDocuments.md)

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

<a id="listreceiveddocuments"></a>
# **ListReceivedDocuments**
> ListReceivedDocumentsResponse ListReceivedDocuments (int companyId, string type, string fields = null, string fieldset = null, string sort = null, int page = null, int perPage = null, string q = null)

List Received Documents

Lists the received documents.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **type** | **string** | The type of the received document. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |
| **sort** | **string** | List of comma-separated fields for result sorting (minus for desc sorting). | [optional]  |
| **page** | **int** | The page to retrieve. | [optional] [default to 1] |
| **perPage** | **int** | The size of the page. | [optional] [default to 5] |
| **q** | **string** | Query for filtering the results. | [optional]  |

### Return type

[**ListReceivedDocumentsResponse**](ListReceivedDocumentsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifyreceiveddocument"></a>
# **ModifyReceivedDocument**
> ModifyReceivedDocumentResponse ModifyReceivedDocument (int companyId, int documentId, ModifyReceivedDocumentRequest modifyReceivedDocumentRequest = null)

Modify Received Document

Modifies the specified document.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **modifyReceivedDocumentRequest** | [**ModifyReceivedDocumentRequest**](ModifyReceivedDocumentRequest.md) | Modified document. | [optional]  |

### Return type

[**ModifyReceivedDocumentResponse**](ModifyReceivedDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Modified document. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="recoverbinreceiveddocument"></a>
# **RecoverBinReceivedDocument**
> void RecoverBinReceivedDocument (int companyId, int documentId)

Recover Received Document From The Bin

Recover Received Document From The Bin


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

<a id="uploadreceiveddocumentattachment"></a>
# **UploadReceivedDocumentAttachment**
> UploadReceivedDocumentAttachmentResponse UploadReceivedDocumentAttachment (int companyId, string filename = null, System.IO.Stream attachment = null)

Upload Received Document Attachment

Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **filename** | **string** | Attachment file name | [optional]  |
| **attachment** | **System.IO.Stream****System.IO.Stream** | Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx] | [optional]  |

### Return type

[**UploadReceivedDocumentAttachmentResponse**](UploadReceivedDocumentAttachmentResponse.md)

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

