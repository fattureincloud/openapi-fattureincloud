# ReceiptsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReceipt**](ReceiptsApi.md#createReceipt) | **POST** /c/{company_id}/receipts | Create Receipt
[**createReceiptWithHttpInfo**](ReceiptsApi.md#createReceiptWithHttpInfo) | **POST** /c/{company_id}/receipts | Create Receipt
[**deleteReceipt**](ReceiptsApi.md#deleteReceipt) | **DELETE** /c/{company_id}/receipts/{document_id} | Delete Receipt
[**deleteReceiptWithHttpInfo**](ReceiptsApi.md#deleteReceiptWithHttpInfo) | **DELETE** /c/{company_id}/receipts/{document_id} | Delete Receipt
[**getReceipt**](ReceiptsApi.md#getReceipt) | **GET** /c/{company_id}/receipts/{document_id} | Get Receipt
[**getReceiptWithHttpInfo**](ReceiptsApi.md#getReceiptWithHttpInfo) | **GET** /c/{company_id}/receipts/{document_id} | Get Receipt
[**getReceiptPreCreateInfo**](ReceiptsApi.md#getReceiptPreCreateInfo) | **GET** /c/{company_id}/receipts/info | Get Receipt Pre-Create Info
[**getReceiptPreCreateInfoWithHttpInfo**](ReceiptsApi.md#getReceiptPreCreateInfoWithHttpInfo) | **GET** /c/{company_id}/receipts/info | Get Receipt Pre-Create Info
[**getReceiptsMonthlyTotals**](ReceiptsApi.md#getReceiptsMonthlyTotals) | **GET** /c/{company_id}/receipts/monthly_totals | Get Receipts Monthly Totals
[**getReceiptsMonthlyTotalsWithHttpInfo**](ReceiptsApi.md#getReceiptsMonthlyTotalsWithHttpInfo) | **GET** /c/{company_id}/receipts/monthly_totals | Get Receipts Monthly Totals
[**listReceipts**](ReceiptsApi.md#listReceipts) | **GET** /c/{company_id}/receipts | List Receipts
[**listReceiptsWithHttpInfo**](ReceiptsApi.md#listReceiptsWithHttpInfo) | **GET** /c/{company_id}/receipts | List Receipts
[**modifyReceipt**](ReceiptsApi.md#modifyReceipt) | **PUT** /c/{company_id}/receipts/{document_id} | Modify Receipt
[**modifyReceiptWithHttpInfo**](ReceiptsApi.md#modifyReceiptWithHttpInfo) | **PUT** /c/{company_id}/receipts/{document_id} | Modify Receipt



## createReceipt

> CreateReceiptResponse createReceipt(companyId, createReceiptRequest)

Create Receipt

Creates a new receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateReceiptRequest createReceiptRequest = new CreateReceiptRequest(); // CreateReceiptRequest | The Receipt to create.
        try {
            CreateReceiptResponse result = apiInstance.createReceipt(companyId, createReceiptRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#createReceipt");
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
 **createReceiptRequest** | [**CreateReceiptRequest**](CreateReceiptRequest.md)| The Receipt to create. | [optional]

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

## createReceiptWithHttpInfo

> ApiResponse<CreateReceiptResponse> createReceipt createReceiptWithHttpInfo(companyId, createReceiptRequest)

Create Receipt

Creates a new receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateReceiptRequest createReceiptRequest = new CreateReceiptRequest(); // CreateReceiptRequest | The Receipt to create.
        try {
            ApiResponse<CreateReceiptResponse> response = apiInstance.createReceiptWithHttpInfo(companyId, createReceiptRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#createReceipt");
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
 **createReceiptRequest** | [**CreateReceiptRequest**](CreateReceiptRequest.md)| The Receipt to create. | [optional]

### Return type

ApiResponse<[**CreateReceiptResponse**](CreateReceiptResponse.md)>


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


## deleteReceipt

> void deleteReceipt(companyId, documentId)

Delete Receipt

Deletes the specified receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteReceipt(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#deleteReceipt");
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

## deleteReceiptWithHttpInfo

> ApiResponse<Void> deleteReceipt deleteReceiptWithHttpInfo(companyId, documentId)

Delete Receipt

Deletes the specified receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteReceiptWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#deleteReceipt");
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


## getReceipt

> GetReceiptResponse getReceipt(companyId, documentId, fields, fieldset)

Get Receipt

Gets the specified receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetReceiptResponse result = apiInstance.getReceipt(companyId, documentId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#getReceipt");
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

## getReceiptWithHttpInfo

> ApiResponse<GetReceiptResponse> getReceipt getReceiptWithHttpInfo(companyId, documentId, fields, fieldset)

Get Receipt

Gets the specified receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetReceiptResponse> response = apiInstance.getReceiptWithHttpInfo(companyId, documentId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#getReceipt");
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

ApiResponse<[**GetReceiptResponse**](GetReceiptResponse.md)>


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


## getReceiptPreCreateInfo

> GetReceiptPreCreateInfoResponse getReceiptPreCreateInfo(companyId)

Get Receipt Pre-Create Info

Retrieves the information useful while creating a new receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            GetReceiptPreCreateInfoResponse result = apiInstance.getReceiptPreCreateInfo(companyId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#getReceiptPreCreateInfo");
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

## getReceiptPreCreateInfoWithHttpInfo

> ApiResponse<GetReceiptPreCreateInfoResponse> getReceiptPreCreateInfo getReceiptPreCreateInfoWithHttpInfo(companyId)

Get Receipt Pre-Create Info

Retrieves the information useful while creating a new receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ApiResponse<GetReceiptPreCreateInfoResponse> response = apiInstance.getReceiptPreCreateInfoWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#getReceiptPreCreateInfo");
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

### Return type

ApiResponse<[**GetReceiptPreCreateInfoResponse**](GetReceiptPreCreateInfoResponse.md)>


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


## getReceiptsMonthlyTotals

> GetReceiptsMonthlyTotalsResponse getReceiptsMonthlyTotals(companyId, type, year)

Get Receipts Monthly Totals

Returns the monthly totals by year and receipt type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "sales_receipt"; // String | Receipt Type
        String year = "year_example"; // String | Year for which you want monthly totals
        try {
            GetReceiptsMonthlyTotalsResponse result = apiInstance.getReceiptsMonthlyTotals(companyId, type, year);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#getReceiptsMonthlyTotals");
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
 **type** | **String**| Receipt Type | [enum: sales_receipt, till_receipt]
 **year** | **String**| Year for which you want monthly totals |

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

## getReceiptsMonthlyTotalsWithHttpInfo

> ApiResponse<GetReceiptsMonthlyTotalsResponse> getReceiptsMonthlyTotals getReceiptsMonthlyTotalsWithHttpInfo(companyId, type, year)

Get Receipts Monthly Totals

Returns the monthly totals by year and receipt type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "sales_receipt"; // String | Receipt Type
        String year = "year_example"; // String | Year for which you want monthly totals
        try {
            ApiResponse<GetReceiptsMonthlyTotalsResponse> response = apiInstance.getReceiptsMonthlyTotalsWithHttpInfo(companyId, type, year);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#getReceiptsMonthlyTotals");
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
 **type** | **String**| Receipt Type | [enum: sales_receipt, till_receipt]
 **year** | **String**| Year for which you want monthly totals |

### Return type

ApiResponse<[**GetReceiptsMonthlyTotalsResponse**](GetReceiptsMonthlyTotalsResponse.md)>


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


## listReceipts

> ListReceiptsResponse listReceipts(companyId, fields, fieldset, page, perPage, sort, q)

List Receipts

Lists the receipts.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListReceiptsResponse result = apiInstance.listReceipts(companyId, fields, fieldset, page, perPage, sort, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#listReceipts");
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
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **q** | **String**| Query for filtering the results. | [optional]

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

## listReceiptsWithHttpInfo

> ApiResponse<ListReceiptsResponse> listReceipts listReceiptsWithHttpInfo(companyId, fields, fieldset, page, perPage, sort, q)

List Receipts

Lists the receipts.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListReceiptsResponse> response = apiInstance.listReceiptsWithHttpInfo(companyId, fields, fieldset, page, perPage, sort, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#listReceipts");
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
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **q** | **String**| Query for filtering the results. | [optional]

### Return type

ApiResponse<[**ListReceiptsResponse**](ListReceiptsResponse.md)>


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


## modifyReceipt

> ModifyReceiptResponse modifyReceipt(companyId, documentId, modifyReceiptRequest)

Modify Receipt

Modifies the specified receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyReceiptRequest modifyReceiptRequest = new ModifyReceiptRequest(); // ModifyReceiptRequest | Modified receipt.
        try {
            ModifyReceiptResponse result = apiInstance.modifyReceipt(companyId, documentId, modifyReceiptRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#modifyReceipt");
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
 **modifyReceiptRequest** | [**ModifyReceiptRequest**](ModifyReceiptRequest.md)| Modified receipt. | [optional]

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

## modifyReceiptWithHttpInfo

> ApiResponse<ModifyReceiptResponse> modifyReceipt modifyReceiptWithHttpInfo(companyId, documentId, modifyReceiptRequest)

Modify Receipt

Modifies the specified receipt.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceiptsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceiptsApi apiInstance = new ReceiptsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyReceiptRequest modifyReceiptRequest = new ModifyReceiptRequest(); // ModifyReceiptRequest | Modified receipt.
        try {
            ApiResponse<ModifyReceiptResponse> response = apiInstance.modifyReceiptWithHttpInfo(companyId, documentId, modifyReceiptRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#modifyReceipt");
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
 **modifyReceiptRequest** | [**ModifyReceiptRequest**](ModifyReceiptRequest.md)| Modified receipt. | [optional]

### Return type

ApiResponse<[**ModifyReceiptResponse**](ModifyReceiptResponse.md)>


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

