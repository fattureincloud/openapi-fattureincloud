# ArchiveApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArchiveDocument**](ArchiveApi.md#createArchiveDocument) | **POST** /c/{company_id}/archive | Create Archive Document
[**createArchiveDocumentWithHttpInfo**](ArchiveApi.md#createArchiveDocumentWithHttpInfo) | **POST** /c/{company_id}/archive | Create Archive Document
[**deleteArchiveDocument**](ArchiveApi.md#deleteArchiveDocument) | **DELETE** /c/{company_id}/archive/{document_id} | Delete Archive Document
[**deleteArchiveDocumentWithHttpInfo**](ArchiveApi.md#deleteArchiveDocumentWithHttpInfo) | **DELETE** /c/{company_id}/archive/{document_id} | Delete Archive Document
[**getArchiveDocument**](ArchiveApi.md#getArchiveDocument) | **GET** /c/{company_id}/archive/{document_id} | Get Archive Document
[**getArchiveDocumentWithHttpInfo**](ArchiveApi.md#getArchiveDocumentWithHttpInfo) | **GET** /c/{company_id}/archive/{document_id} | Get Archive Document
[**listArchiveDocuments**](ArchiveApi.md#listArchiveDocuments) | **GET** /c/{company_id}/archive | List Archive Documents
[**listArchiveDocumentsWithHttpInfo**](ArchiveApi.md#listArchiveDocumentsWithHttpInfo) | **GET** /c/{company_id}/archive | List Archive Documents
[**modifyArchiveDocument**](ArchiveApi.md#modifyArchiveDocument) | **PUT** /c/{company_id}/archive/{document_id} | Modify Archive Document
[**modifyArchiveDocumentWithHttpInfo**](ArchiveApi.md#modifyArchiveDocumentWithHttpInfo) | **PUT** /c/{company_id}/archive/{document_id} | Modify Archive Document
[**uploadArchiveDocumentAttachment**](ArchiveApi.md#uploadArchiveDocumentAttachment) | **POST** /c/{company_id}/archive/attachment | Upload Archive Document Attachment
[**uploadArchiveDocumentAttachmentWithHttpInfo**](ArchiveApi.md#uploadArchiveDocumentAttachmentWithHttpInfo) | **POST** /c/{company_id}/archive/attachment | Upload Archive Document Attachment



## createArchiveDocument

> CreateArchiveDocumentResponse createArchiveDocument(companyId, createArchiveDocumentRequest)

Create Archive Document

Creates a new archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateArchiveDocumentRequest createArchiveDocumentRequest = new CreateArchiveDocumentRequest(); // CreateArchiveDocumentRequest | The Archive Document.
        try {
            CreateArchiveDocumentResponse result = apiInstance.createArchiveDocument(companyId, createArchiveDocumentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#createArchiveDocument");
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
 **createArchiveDocumentRequest** | [**CreateArchiveDocumentRequest**](CreateArchiveDocumentRequest.md)| The Archive Document. | [optional]

### Return type

[**CreateArchiveDocumentResponse**](CreateArchiveDocumentResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Archive Document. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## createArchiveDocumentWithHttpInfo

> ApiResponse<CreateArchiveDocumentResponse> createArchiveDocument createArchiveDocumentWithHttpInfo(companyId, createArchiveDocumentRequest)

Create Archive Document

Creates a new archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateArchiveDocumentRequest createArchiveDocumentRequest = new CreateArchiveDocumentRequest(); // CreateArchiveDocumentRequest | The Archive Document.
        try {
            ApiResponse<CreateArchiveDocumentResponse> response = apiInstance.createArchiveDocumentWithHttpInfo(companyId, createArchiveDocumentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#createArchiveDocument");
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
 **createArchiveDocumentRequest** | [**CreateArchiveDocumentRequest**](CreateArchiveDocumentRequest.md)| The Archive Document. | [optional]

### Return type

ApiResponse<[**CreateArchiveDocumentResponse**](CreateArchiveDocumentResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Archive Document. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## deleteArchiveDocument

> void deleteArchiveDocument(companyId, documentId)

Delete Archive Document

Deletes the specified archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteArchiveDocument(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#deleteArchiveDocument");
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

## deleteArchiveDocumentWithHttpInfo

> ApiResponse<Void> deleteArchiveDocument deleteArchiveDocumentWithHttpInfo(companyId, documentId)

Delete Archive Document

Deletes the specified archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteArchiveDocumentWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#deleteArchiveDocument");
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


## getArchiveDocument

> GetArchiveDocumentResponse getArchiveDocument(companyId, documentId, fields, fieldset)

Get Archive Document

Gets the specified archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetArchiveDocumentResponse result = apiInstance.getArchiveDocument(companyId, documentId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#getArchiveDocument");
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

[**GetArchiveDocumentResponse**](GetArchiveDocumentResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Archive Document Details |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## getArchiveDocumentWithHttpInfo

> ApiResponse<GetArchiveDocumentResponse> getArchiveDocument getArchiveDocumentWithHttpInfo(companyId, documentId, fields, fieldset)

Get Archive Document

Gets the specified archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetArchiveDocumentResponse> response = apiInstance.getArchiveDocumentWithHttpInfo(companyId, documentId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#getArchiveDocument");
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

ApiResponse<[**GetArchiveDocumentResponse**](GetArchiveDocumentResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Archive Document Details |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listArchiveDocuments

> ListArchiveDocumentsResponse listArchiveDocuments(companyId, fields, fieldset, sort, page, perPage, q)

List Archive Documents

Lists the archive documents.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListArchiveDocumentsResponse result = apiInstance.listArchiveDocuments(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#listArchiveDocuments");
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

[**ListArchiveDocumentsResponse**](ListArchiveDocumentsResponse.md)


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

## listArchiveDocumentsWithHttpInfo

> ApiResponse<ListArchiveDocumentsResponse> listArchiveDocuments listArchiveDocumentsWithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q)

List Archive Documents

Lists the archive documents.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListArchiveDocumentsResponse> response = apiInstance.listArchiveDocumentsWithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#listArchiveDocuments");
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

ApiResponse<[**ListArchiveDocumentsResponse**](ListArchiveDocumentsResponse.md)>


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


## modifyArchiveDocument

> ModifyArchiveDocumentResponse modifyArchiveDocument(companyId, documentId, modifyArchiveDocumentRequest)

Modify Archive Document

Modifies the specified archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyArchiveDocumentRequest modifyArchiveDocumentRequest = new ModifyArchiveDocumentRequest(); // ModifyArchiveDocumentRequest | Modified Archive Document
        try {
            ModifyArchiveDocumentResponse result = apiInstance.modifyArchiveDocument(companyId, documentId, modifyArchiveDocumentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#modifyArchiveDocument");
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
 **modifyArchiveDocumentRequest** | [**ModifyArchiveDocumentRequest**](ModifyArchiveDocumentRequest.md)| Modified Archive Document | [optional]

### Return type

[**ModifyArchiveDocumentResponse**](ModifyArchiveDocumentResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The modified Archived Document |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## modifyArchiveDocumentWithHttpInfo

> ApiResponse<ModifyArchiveDocumentResponse> modifyArchiveDocument modifyArchiveDocumentWithHttpInfo(companyId, documentId, modifyArchiveDocumentRequest)

Modify Archive Document

Modifies the specified archive document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyArchiveDocumentRequest modifyArchiveDocumentRequest = new ModifyArchiveDocumentRequest(); // ModifyArchiveDocumentRequest | Modified Archive Document
        try {
            ApiResponse<ModifyArchiveDocumentResponse> response = apiInstance.modifyArchiveDocumentWithHttpInfo(companyId, documentId, modifyArchiveDocumentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#modifyArchiveDocument");
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
 **modifyArchiveDocumentRequest** | [**ModifyArchiveDocumentRequest**](ModifyArchiveDocumentRequest.md)| Modified Archive Document | [optional]

### Return type

ApiResponse<[**ModifyArchiveDocumentResponse**](ModifyArchiveDocumentResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The modified Archived Document |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## uploadArchiveDocumentAttachment

> UploadArchiveAttachmentResponse uploadArchiveDocumentAttachment(companyId, filename, attachment)

Upload Archive Document Attachment

Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            UploadArchiveAttachmentResponse result = apiInstance.uploadArchiveDocumentAttachment(companyId, filename, attachment);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#uploadArchiveDocumentAttachment");
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

[**UploadArchiveAttachmentResponse**](UploadArchiveAttachmentResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## uploadArchiveDocumentAttachmentWithHttpInfo

> ApiResponse<UploadArchiveAttachmentResponse> uploadArchiveDocumentAttachment uploadArchiveDocumentAttachmentWithHttpInfo(companyId, filename, attachment)

Upload Archive Document Attachment

Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ArchiveApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ArchiveApi apiInstance = new ArchiveApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            ApiResponse<UploadArchiveAttachmentResponse> response = apiInstance.uploadArchiveDocumentAttachmentWithHttpInfo(companyId, filename, attachment);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ArchiveApi#uploadArchiveDocumentAttachment");
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

ApiResponse<[**UploadArchiveAttachmentResponse**](UploadArchiveAttachmentResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

