# It.FattureInCloud.Sdk.Api.CashbookApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateCashbookEntry**](CashbookApi.md#createcashbookentry) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry |
| [**DeleteCashbookEntry**](CashbookApi.md#deletecashbookentry) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry |
| [**GetCashbookEntry**](CashbookApi.md#getcashbookentry) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry |
| [**ListCashbookEntries**](CashbookApi.md#listcashbookentries) | **GET** /c/{company_id}/cashbook | List Cashbook Entries |
| [**ModifyCashbookEntry**](CashbookApi.md#modifycashbookentry) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry |

<a id="createcashbookentry"></a>
# **CreateCashbookEntry**
> CreateCashbookEntryResponse CreateCashbookEntry (int companyId, CreateCashbookEntryRequest createCashbookEntryRequest = null)

Create Cashbook Entry

Creates a new cashbook entry.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createCashbookEntryRequest** | [**CreateCashbookEntryRequest**](CreateCashbookEntryRequest.md) | Cashbook entry.  | [optional]  |

### Return type

[**CreateCashbookEntryResponse**](CreateCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created Cashbook Entry. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletecashbookentry"></a>
# **DeleteCashbookEntry**
> void DeleteCashbookEntry (int companyId, string documentId)

Delete Cashbook Entry

Deletes the specified cashbook entry.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **string** | The ID of the document. |  |

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

<a id="getcashbookentry"></a>
# **GetCashbookEntry**
> GetCashbookEntryResponse GetCashbookEntry (int companyId, string documentId, string fields = null, string fieldset = null)

Get Cashbook Entry

Gets the specified cashbook entry.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **string** | The ID of the document. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

### Return type

[**GetCashbookEntryResponse**](GetCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cashbook Entry. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listcashbookentries"></a>
# **ListCashbookEntries**
> ListCashbookEntriesResponse ListCashbookEntries (int companyId, string dateFrom, string dateTo, int year = null, string type = null, int paymentAccountId = null)

List Cashbook Entries

Lists the cashbook entries.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **dateFrom** | **string** | Start date. |  |
| **dateTo** | **string** | End date. |  |
| **year** | **int** | Filter cashbook by year. | [optional]  |
| **type** | **string** | Filter cashbook by type. | [optional]  |
| **paymentAccountId** | **int** | Filter by payment account. | [optional]  |

### Return type

[**ListCashbookEntriesResponse**](ListCashbookEntriesResponse.md)

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

<a id="modifycashbookentry"></a>
# **ModifyCashbookEntry**
> ModifyCashbookEntryResponse ModifyCashbookEntry (int companyId, string documentId, ModifyCashbookEntryRequest modifyCashbookEntryRequest = null)

Modify Cashbook Entry

Modifies the specified cashbook entry.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **documentId** | **string** | The ID of the document. |  |
| **modifyCashbookEntryRequest** | [**ModifyCashbookEntryRequest**](ModifyCashbookEntryRequest.md) | Cashbook Entry | [optional]  |

### Return type

[**ModifyCashbookEntryResponse**](ModifyCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The modified Cashbook Entry |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

