# CashbookApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCashbookEntry**](CashbookApi.md#createCashbookEntry) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry
[**createCashbookEntryWithHttpInfo**](CashbookApi.md#createCashbookEntryWithHttpInfo) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry
[**deleteCashbookEntry**](CashbookApi.md#deleteCashbookEntry) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry
[**deleteCashbookEntryWithHttpInfo**](CashbookApi.md#deleteCashbookEntryWithHttpInfo) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry
[**getCashbookEntry**](CashbookApi.md#getCashbookEntry) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry
[**getCashbookEntryWithHttpInfo**](CashbookApi.md#getCashbookEntryWithHttpInfo) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry
[**listCashbookEntries**](CashbookApi.md#listCashbookEntries) | **GET** /c/{company_id}/cashbook | List Cashbook Entries
[**listCashbookEntriesWithHttpInfo**](CashbookApi.md#listCashbookEntriesWithHttpInfo) | **GET** /c/{company_id}/cashbook | List Cashbook Entries
[**modifyCashbookEntry**](CashbookApi.md#modifyCashbookEntry) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry
[**modifyCashbookEntryWithHttpInfo**](CashbookApi.md#modifyCashbookEntryWithHttpInfo) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry



## createCashbookEntry

> CreateCashbookEntryResponse createCashbookEntry(companyId, createCashbookEntryRequest)

Create Cashbook Entry

Creates a new cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateCashbookEntryRequest createCashbookEntryRequest = new CreateCashbookEntryRequest(); // CreateCashbookEntryRequest | Cashbook entry. 
        try {
            CreateCashbookEntryResponse result = apiInstance.createCashbookEntry(companyId, createCashbookEntryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#createCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **createCashbookEntryRequest** | [**CreateCashbookEntryRequest**](CreateCashbookEntryRequest.md)| Cashbook entry.  | [optional]

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

## createCashbookEntryWithHttpInfo

> ApiResponse<CreateCashbookEntryResponse> createCashbookEntry createCashbookEntryWithHttpInfo(companyId, createCashbookEntryRequest)

Create Cashbook Entry

Creates a new cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateCashbookEntryRequest createCashbookEntryRequest = new CreateCashbookEntryRequest(); // CreateCashbookEntryRequest | Cashbook entry. 
        try {
            ApiResponse<CreateCashbookEntryResponse> response = apiInstance.createCashbookEntryWithHttpInfo(companyId, createCashbookEntryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#createCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **createCashbookEntryRequest** | [**CreateCashbookEntryRequest**](CreateCashbookEntryRequest.md)| Cashbook entry.  | [optional]

### Return type

ApiResponse<[**CreateCashbookEntryResponse**](CreateCashbookEntryResponse.md)>


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


## deleteCashbookEntry

> void deleteCashbookEntry(companyId, documentId)

Delete Cashbook Entry

Deletes the specified cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteCashbookEntry(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#deleteCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **documentId** | **Integer**| The ID of the document. |

### Return type


null (empty response body)

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

## deleteCashbookEntryWithHttpInfo

> ApiResponse<Void> deleteCashbookEntry deleteCashbookEntryWithHttpInfo(companyId, documentId)

Delete Cashbook Entry

Deletes the specified cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteCashbookEntryWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#deleteCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **documentId** | **Integer**| The ID of the document. |

### Return type


ApiResponse<Void>

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


## getCashbookEntry

> GetCashbookEntryResponse getCashbookEntry(companyId, documentId, fields, fieldset)

Get Cashbook Entry

Gets the specified cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetCashbookEntryResponse result = apiInstance.getCashbookEntry(companyId, documentId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#getCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **documentId** | **Integer**| The ID of the document. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

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

## getCashbookEntryWithHttpInfo

> ApiResponse<GetCashbookEntryResponse> getCashbookEntry getCashbookEntryWithHttpInfo(companyId, documentId, fields, fieldset)

Get Cashbook Entry

Gets the specified cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetCashbookEntryResponse> response = apiInstance.getCashbookEntryWithHttpInfo(companyId, documentId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#getCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **documentId** | **Integer**| The ID of the document. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

ApiResponse<[**GetCashbookEntryResponse**](GetCashbookEntryResponse.md)>


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


## listCashbookEntries

> ListCashbookEntriesResponse listCashbookEntries(companyId, dateFrom, dateTo, year, type, paymentAccountId)

List Cashbook Entries

Lists the cashbook entries.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String dateFrom = "dateFrom_example"; // String | Start date.
        String dateTo = "dateTo_example"; // String | End date.
        Integer year = 56; // Integer | Filter cashbook by year.
        String type = "all"; // String | Filter cashbook by type.
        Integer paymentAccountId = 56; // Integer | Filter by payment account.
        try {
            ListCashbookEntriesResponse result = apiInstance.listCashbookEntries(companyId, dateFrom, dateTo, year, type, paymentAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#listCashbookEntries");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **dateFrom** | **String**| Start date. |
 **dateTo** | **String**| End date. |
 **year** | **Integer**| Filter cashbook by year. | [optional]
 **type** | **String**| Filter cashbook by type. | [optional] [enum: all, in, out]
 **paymentAccountId** | **Integer**| Filter by payment account. | [optional]

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

## listCashbookEntriesWithHttpInfo

> ApiResponse<ListCashbookEntriesResponse> listCashbookEntries listCashbookEntriesWithHttpInfo(companyId, dateFrom, dateTo, year, type, paymentAccountId)

List Cashbook Entries

Lists the cashbook entries.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String dateFrom = "dateFrom_example"; // String | Start date.
        String dateTo = "dateTo_example"; // String | End date.
        Integer year = 56; // Integer | Filter cashbook by year.
        String type = "all"; // String | Filter cashbook by type.
        Integer paymentAccountId = 56; // Integer | Filter by payment account.
        try {
            ApiResponse<ListCashbookEntriesResponse> response = apiInstance.listCashbookEntriesWithHttpInfo(companyId, dateFrom, dateTo, year, type, paymentAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#listCashbookEntries");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **dateFrom** | **String**| Start date. |
 **dateTo** | **String**| End date. |
 **year** | **Integer**| Filter cashbook by year. | [optional]
 **type** | **String**| Filter cashbook by type. | [optional] [enum: all, in, out]
 **paymentAccountId** | **Integer**| Filter by payment account. | [optional]

### Return type

ApiResponse<[**ListCashbookEntriesResponse**](ListCashbookEntriesResponse.md)>


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


## modifyCashbookEntry

> ModifyCashbookEntryResponse modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest)

Modify Cashbook Entry

Modifies the specified cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyCashbookEntryRequest modifyCashbookEntryRequest = new ModifyCashbookEntryRequest(); // ModifyCashbookEntryRequest | Cashbook Entry
        try {
            ModifyCashbookEntryResponse result = apiInstance.modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#modifyCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **documentId** | **Integer**| The ID of the document. |
 **modifyCashbookEntryRequest** | [**ModifyCashbookEntryRequest**](ModifyCashbookEntryRequest.md)| Cashbook Entry | [optional]

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

## modifyCashbookEntryWithHttpInfo

> ApiResponse<ModifyCashbookEntryResponse> modifyCashbookEntry modifyCashbookEntryWithHttpInfo(companyId, documentId, modifyCashbookEntryRequest)

Modify Cashbook Entry

Modifies the specified cashbook entry.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CashbookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CashbookApi apiInstance = new CashbookApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyCashbookEntryRequest modifyCashbookEntryRequest = new ModifyCashbookEntryRequest(); // ModifyCashbookEntryRequest | Cashbook Entry
        try {
            ApiResponse<ModifyCashbookEntryResponse> response = apiInstance.modifyCashbookEntryWithHttpInfo(companyId, documentId, modifyCashbookEntryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CashbookApi#modifyCashbookEntry");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| The ID of the company. |
 **documentId** | **Integer**| The ID of the document. |
 **modifyCashbookEntryRequest** | [**ModifyCashbookEntryRequest**](ModifyCashbookEntryRequest.md)| Cashbook Entry | [optional]

### Return type

ApiResponse<[**ModifyCashbookEntryResponse**](ModifyCashbookEntryResponse.md)>


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

