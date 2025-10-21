# It.FattureInCloud.Sdk.Api.ReceiptsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateReceipt**](ReceiptsApi.md#createreceipt) | **POST** /c/{company_id}/receipts | Create Receipt |
| [**DeleteReceipt**](ReceiptsApi.md#deletereceipt) | **DELETE** /c/{company_id}/receipts/{document_id} | Delete Receipt |
| [**GetReceipt**](ReceiptsApi.md#getreceipt) | **GET** /c/{company_id}/receipts/{document_id} | Get Receipt |
| [**GetReceiptPreCreateInfo**](ReceiptsApi.md#getreceiptprecreateinfo) | **GET** /c/{company_id}/receipts/info | Get Receipt Pre-Create Info |
| [**GetReceiptsMonthlyTotals**](ReceiptsApi.md#getreceiptsmonthlytotals) | **GET** /c/{company_id}/receipts/monthly_totals | Get Receipts Monthly Totals |
| [**ListReceipts**](ReceiptsApi.md#listreceipts) | **GET** /c/{company_id}/receipts | List Receipts |
| [**ModifyReceipt**](ReceiptsApi.md#modifyreceipt) | **PUT** /c/{company_id}/receipts/{document_id} | Modify Receipt |

<a id="createreceipt"></a>
# **CreateReceipt**
> CreateReceiptResponse CreateReceipt (int companyId, CreateReceiptRequest createReceiptRequest = null)

Create Receipt

Creates a new receipt.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createReceiptRequest** | [**CreateReceiptRequest**](CreateReceiptRequest.md) | The Receipt to create. | [optional]  |

### Return type

[**CreateReceiptResponse**](CreateReceiptResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Created Receipt. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletereceipt"></a>
# **DeleteReceipt**
> void DeleteReceipt (int companyId, int documentId)

Delete Receipt

Deletes the specified receipt.


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

<a id="getreceipt"></a>
# **GetReceipt**
> GetReceiptResponse GetReceipt (int companyId, int documentId, string fields = null, string fieldset = null)

Get Receipt

Gets the specified receipt.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

### Return type

[**GetReceiptResponse**](GetReceiptResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Receipt Details. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getreceiptprecreateinfo"></a>
# **GetReceiptPreCreateInfo**
> GetReceiptPreCreateInfoResponse GetReceiptPreCreateInfo (int companyId)

Get Receipt Pre-Create Info

Retrieves the information useful while creating a new receipt.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |

### Return type

[**GetReceiptPreCreateInfoResponse**](GetReceiptPreCreateInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pre-create info. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getreceiptsmonthlytotals"></a>
# **GetReceiptsMonthlyTotals**
> GetReceiptsMonthlyTotalsResponse GetReceiptsMonthlyTotals (int companyId, string type, string year)

Get Receipts Monthly Totals

Returns the monthly totals by year and receipt type.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **type** | **string** | Receipt Type |  |
| **year** | **string** | Year for which you want monthly totals |  |

### Return type

[**GetReceiptsMonthlyTotalsResponse**](GetReceiptsMonthlyTotalsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Monthly Totals. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listreceipts"></a>
# **ListReceipts**
> ListReceiptsResponse ListReceipts (int companyId, string fields = null, string fieldset = null, int page = null, int perPage = null, string sort = null, string q = null)

List Receipts

Lists the receipts.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |
| **page** | **int** | The page to retrieve. | [optional] [default to 1] |
| **perPage** | **int** | The size of the page. | [optional] [default to 5] |
| **sort** | **string** | List of comma-separated fields for result sorting (minus for desc sorting). | [optional]  |
| **q** | **string** | Query for filtering the results. | [optional]  |

### Return type

[**ListReceiptsResponse**](ListReceiptsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Receipts list. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifyreceipt"></a>
# **ModifyReceipt**
> ModifyReceiptResponse ModifyReceipt (int companyId, int documentId, ModifyReceiptRequest modifyReceiptRequest = null)

Modify Receipt

Modifies the specified receipt.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **int** | The ID of the document. |  |
| **modifyReceiptRequest** | [**ModifyReceiptRequest**](ModifyReceiptRequest.md) | Modified receipt. | [optional]  |

### Return type

[**ModifyReceiptResponse**](ModifyReceiptResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Modified receipt. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

