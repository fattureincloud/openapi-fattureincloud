# TaxesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createF24**](TaxesApi.md#createF24) | **POST** /c/{company_id}/taxes | Create F24
[**createF24WithHttpInfo**](TaxesApi.md#createF24WithHttpInfo) | **POST** /c/{company_id}/taxes | Create F24
[**deleteF24**](TaxesApi.md#deleteF24) | **DELETE** /c/{company_id}/taxes/{document_id} | Delete F24
[**deleteF24WithHttpInfo**](TaxesApi.md#deleteF24WithHttpInfo) | **DELETE** /c/{company_id}/taxes/{document_id} | Delete F24
[**deleteF24Attachment**](TaxesApi.md#deleteF24Attachment) | **DELETE** /c/{company_id}/taxes/{document_id}/attachment | Delete F24 Attachment
[**deleteF24AttachmentWithHttpInfo**](TaxesApi.md#deleteF24AttachmentWithHttpInfo) | **DELETE** /c/{company_id}/taxes/{document_id}/attachment | Delete F24 Attachment
[**getF24**](TaxesApi.md#getF24) | **GET** /c/{company_id}/taxes/{document_id} | Get F24
[**getF24WithHttpInfo**](TaxesApi.md#getF24WithHttpInfo) | **GET** /c/{company_id}/taxes/{document_id} | Get F24
[**listF24**](TaxesApi.md#listF24) | **GET** /c/{company_id}/taxes | List F24
[**listF24WithHttpInfo**](TaxesApi.md#listF24WithHttpInfo) | **GET** /c/{company_id}/taxes | List F24
[**modifyF24**](TaxesApi.md#modifyF24) | **PUT** /c/{company_id}/taxes/{document_id} | Modify F24
[**modifyF24WithHttpInfo**](TaxesApi.md#modifyF24WithHttpInfo) | **PUT** /c/{company_id}/taxes/{document_id} | Modify F24
[**uploadF24Attachment**](TaxesApi.md#uploadF24Attachment) | **POST** /c/{company_id}/taxes/attachment | Upload F24 Attachment
[**uploadF24AttachmentWithHttpInfo**](TaxesApi.md#uploadF24AttachmentWithHttpInfo) | **POST** /c/{company_id}/taxes/attachment | Upload F24 Attachment



## createF24

> CreateF24Response createF24(companyId, createF24Request)

Create F24

Creates a new F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateF24Request createF24Request = new CreateF24Request(); // CreateF24Request | The F24 to create
        try {
            CreateF24Response result = apiInstance.createF24(companyId, createF24Request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#createF24");
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
 **createF24Request** | [**CreateF24Request**](CreateF24Request.md)| The F24 to create | [optional]

### Return type

[**CreateF24Response**](CreateF24Response.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created F24 |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## createF24WithHttpInfo

> ApiResponse<CreateF24Response> createF24 createF24WithHttpInfo(companyId, createF24Request)

Create F24

Creates a new F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateF24Request createF24Request = new CreateF24Request(); // CreateF24Request | The F24 to create
        try {
            ApiResponse<CreateF24Response> response = apiInstance.createF24WithHttpInfo(companyId, createF24Request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#createF24");
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
 **createF24Request** | [**CreateF24Request**](CreateF24Request.md)| The F24 to create | [optional]

### Return type

ApiResponse<[**CreateF24Response**](CreateF24Response.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created F24 |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## deleteF24

> void deleteF24(companyId, documentId)

Delete F24

Removes the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteF24(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#deleteF24");
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

## deleteF24WithHttpInfo

> ApiResponse<Void> deleteF24 deleteF24WithHttpInfo(companyId, documentId)

Delete F24

Removes the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteF24WithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#deleteF24");
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


## deleteF24Attachment

> void deleteF24Attachment(companyId, documentId)

Delete F24 Attachment

Removes the attachment of the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteF24Attachment(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#deleteF24Attachment");
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
| **200** | File Removed. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## deleteF24AttachmentWithHttpInfo

> ApiResponse<Void> deleteF24Attachment deleteF24AttachmentWithHttpInfo(companyId, documentId)

Delete F24 Attachment

Removes the attachment of the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteF24AttachmentWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#deleteF24Attachment");
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
| **200** | File Removed. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## getF24

> GetF24Response getF24(companyId, documentId, fields, fieldset)

Get F24

Gets the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetF24Response result = apiInstance.getF24(companyId, documentId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#getF24");
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

[**GetF24Response**](GetF24Response.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The F24 |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## getF24WithHttpInfo

> ApiResponse<GetF24Response> getF24 getF24WithHttpInfo(companyId, documentId, fields, fieldset)

Get F24

Gets the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetF24Response> response = apiInstance.getF24WithHttpInfo(companyId, documentId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#getF24");
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

ApiResponse<[**GetF24Response**](GetF24Response.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The F24 |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listF24

> ListF24Response listF24(companyId, fields, fieldset, sort, page, perPage, q)

List F24

Lists the F24s.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListF24Response result = apiInstance.listF24(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#listF24");
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
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional]

### Return type

[**ListF24Response**](ListF24Response.md)


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

## listF24WithHttpInfo

> ApiResponse<ListF24Response> listF24 listF24WithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q)

List F24

Lists the F24s.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListF24Response> response = apiInstance.listF24WithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#listF24");
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
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional]

### Return type

ApiResponse<[**ListF24Response**](ListF24Response.md)>


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


## modifyF24

> ModifyF24Response modifyF24(companyId, documentId, modifyF24Request)

Modify F24

Modifies the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyF24Request modifyF24Request = new ModifyF24Request(); // ModifyF24Request | The F24
        try {
            ModifyF24Response result = apiInstance.modifyF24(companyId, documentId, modifyF24Request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#modifyF24");
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
 **modifyF24Request** | [**ModifyF24Request**](ModifyF24Request.md)| The F24 | [optional]

### Return type

[**ModifyF24Response**](ModifyF24Response.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The modified F24 |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## modifyF24WithHttpInfo

> ApiResponse<ModifyF24Response> modifyF24 modifyF24WithHttpInfo(companyId, documentId, modifyF24Request)

Modify F24

Modifies the specified F24.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyF24Request modifyF24Request = new ModifyF24Request(); // ModifyF24Request | The F24
        try {
            ApiResponse<ModifyF24Response> response = apiInstance.modifyF24WithHttpInfo(companyId, documentId, modifyF24Request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#modifyF24");
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
 **modifyF24Request** | [**ModifyF24Request**](ModifyF24Request.md)| The F24 | [optional]

### Return type

ApiResponse<[**ModifyF24Response**](ModifyF24Response.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The modified F24 |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## uploadF24Attachment

> UploadF24AttachmentResponse uploadF24Attachment(companyId, filename, attachment)

Upload F24 Attachment

Uploads an attachment destined to a F24. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            UploadF24AttachmentResponse result = apiInstance.uploadF24Attachment(companyId, filename, attachment);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#uploadF24Attachment");
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
 **filename** | **String**| Name of the file. | [optional]
 **attachment** | **File**| Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx | [optional]

### Return type

[**UploadF24AttachmentResponse**](UploadF24AttachmentResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Attachment Token. |  -  |

## uploadF24AttachmentWithHttpInfo

> ApiResponse<UploadF24AttachmentResponse> uploadF24Attachment uploadF24AttachmentWithHttpInfo(companyId, filename, attachment)

Upload F24 Attachment

Uploads an attachment destined to a F24. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.TaxesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        TaxesApi apiInstance = new TaxesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            ApiResponse<UploadF24AttachmentResponse> response = apiInstance.uploadF24AttachmentWithHttpInfo(companyId, filename, attachment);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaxesApi#uploadF24Attachment");
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
 **filename** | **String**| Name of the file. | [optional]
 **attachment** | **File**| Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx | [optional]

### Return type

ApiResponse<[**UploadF24AttachmentResponse**](UploadF24AttachmentResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Attachment Token. |  -  |

