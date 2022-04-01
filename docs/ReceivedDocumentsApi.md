# ReceivedDocumentsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReceivedDocument**](ReceivedDocumentsApi.md#createReceivedDocument) | **POST** /c/{company_id}/received_documents | Create Received Document
[**createReceivedDocumentWithHttpInfo**](ReceivedDocumentsApi.md#createReceivedDocumentWithHttpInfo) | **POST** /c/{company_id}/received_documents | Create Received Document
[**deleteReceivedDocument**](ReceivedDocumentsApi.md#deleteReceivedDocument) | **DELETE** /c/{company_id}/received_documents/{document_id} | Delete Received Document
[**deleteReceivedDocumentWithHttpInfo**](ReceivedDocumentsApi.md#deleteReceivedDocumentWithHttpInfo) | **DELETE** /c/{company_id}/received_documents/{document_id} | Delete Received Document
[**deleteReceivedDocumentAttachment**](ReceivedDocumentsApi.md#deleteReceivedDocumentAttachment) | **DELETE** /c/{company_id}/received_documents/{document_id}/attachment | Delete Received Document Attachment
[**deleteReceivedDocumentAttachmentWithHttpInfo**](ReceivedDocumentsApi.md#deleteReceivedDocumentAttachmentWithHttpInfo) | **DELETE** /c/{company_id}/received_documents/{document_id}/attachment | Delete Received Document Attachment
[**getExistingReceivedDocumentTotals**](ReceivedDocumentsApi.md#getExistingReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/{document_id}/totals | Get Existing Received Document Totals
[**getExistingReceivedDocumentTotalsWithHttpInfo**](ReceivedDocumentsApi.md#getExistingReceivedDocumentTotalsWithHttpInfo) | **POST** /c/{company_id}/received_documents/{document_id}/totals | Get Existing Received Document Totals
[**getNewReceivedDocumentTotals**](ReceivedDocumentsApi.md#getNewReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/totals | Get New Received Document Totals
[**getNewReceivedDocumentTotalsWithHttpInfo**](ReceivedDocumentsApi.md#getNewReceivedDocumentTotalsWithHttpInfo) | **POST** /c/{company_id}/received_documents/totals | Get New Received Document Totals
[**getReceivedDocument**](ReceivedDocumentsApi.md#getReceivedDocument) | **GET** /c/{company_id}/received_documents/{document_id} | Get Received Document
[**getReceivedDocumentWithHttpInfo**](ReceivedDocumentsApi.md#getReceivedDocumentWithHttpInfo) | **GET** /c/{company_id}/received_documents/{document_id} | Get Received Document
[**getReceivedDocumentPreCreateInfo**](ReceivedDocumentsApi.md#getReceivedDocumentPreCreateInfo) | **GET** /c/{company_id}/received_documents/info | Get Received Document Pre-Create Info
[**getReceivedDocumentPreCreateInfoWithHttpInfo**](ReceivedDocumentsApi.md#getReceivedDocumentPreCreateInfoWithHttpInfo) | **GET** /c/{company_id}/received_documents/info | Get Received Document Pre-Create Info
[**listReceivedDocuments**](ReceivedDocumentsApi.md#listReceivedDocuments) | **GET** /c/{company_id}/received_documents | List Received Documents
[**listReceivedDocumentsWithHttpInfo**](ReceivedDocumentsApi.md#listReceivedDocumentsWithHttpInfo) | **GET** /c/{company_id}/received_documents | List Received Documents
[**modifyReceivedDocument**](ReceivedDocumentsApi.md#modifyReceivedDocument) | **PUT** /c/{company_id}/received_documents/{document_id} | Modify Received Document
[**modifyReceivedDocumentWithHttpInfo**](ReceivedDocumentsApi.md#modifyReceivedDocumentWithHttpInfo) | **PUT** /c/{company_id}/received_documents/{document_id} | Modify Received Document
[**uploadReceivedDocumentAttachment**](ReceivedDocumentsApi.md#uploadReceivedDocumentAttachment) | **POST** /c/{company_id}/received_documents/attachment | Upload Received Document Attachment
[**uploadReceivedDocumentAttachmentWithHttpInfo**](ReceivedDocumentsApi.md#uploadReceivedDocumentAttachmentWithHttpInfo) | **POST** /c/{company_id}/received_documents/attachment | Upload Received Document Attachment



## createReceivedDocument

> CreateReceivedDocumentResponse createReceivedDocument(companyId, createReceivedDocumentRequest)

Create Received Document

Creates a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateReceivedDocumentRequest createReceivedDocumentRequest = new CreateReceivedDocumentRequest(); // CreateReceivedDocumentRequest | Document to create
        try {
            CreateReceivedDocumentResponse result = apiInstance.createReceivedDocument(companyId, createReceivedDocumentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#createReceivedDocument");
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
 **createReceivedDocumentRequest** | [**CreateReceivedDocumentRequest**](CreateReceivedDocumentRequest.md)| Document to create | [optional]

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

## createReceivedDocumentWithHttpInfo

> ApiResponse<CreateReceivedDocumentResponse> createReceivedDocument createReceivedDocumentWithHttpInfo(companyId, createReceivedDocumentRequest)

Create Received Document

Creates a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateReceivedDocumentRequest createReceivedDocumentRequest = new CreateReceivedDocumentRequest(); // CreateReceivedDocumentRequest | Document to create
        try {
            ApiResponse<CreateReceivedDocumentResponse> response = apiInstance.createReceivedDocumentWithHttpInfo(companyId, createReceivedDocumentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#createReceivedDocument");
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
 **createReceivedDocumentRequest** | [**CreateReceivedDocumentRequest**](CreateReceivedDocumentRequest.md)| Document to create | [optional]

### Return type

ApiResponse<[**CreateReceivedDocumentResponse**](CreateReceivedDocumentResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document created. |  -  |


## deleteReceivedDocument

> void deleteReceivedDocument(companyId, documentId)

Delete Received Document

Deletes the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteReceivedDocument(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#deleteReceivedDocument");
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

## deleteReceivedDocumentWithHttpInfo

> ApiResponse<Void> deleteReceivedDocument deleteReceivedDocumentWithHttpInfo(companyId, documentId)

Delete Received Document

Deletes the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteReceivedDocumentWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#deleteReceivedDocument");
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


## deleteReceivedDocumentAttachment

> void deleteReceivedDocumentAttachment(companyId, documentId)

Delete Received Document Attachment

Removes the attachment of the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteReceivedDocumentAttachment(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#deleteReceivedDocumentAttachment");
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
| **200** | File removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## deleteReceivedDocumentAttachmentWithHttpInfo

> ApiResponse<Void> deleteReceivedDocumentAttachment deleteReceivedDocumentAttachmentWithHttpInfo(companyId, documentId)

Delete Received Document Attachment

Removes the attachment of the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteReceivedDocumentAttachmentWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#deleteReceivedDocumentAttachment");
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
| **200** | File removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## getExistingReceivedDocumentTotals

> GetExistingReceivedDocumentTotalsResponse getExistingReceivedDocumentTotals(companyId, documentId, getExistingReceivedDocumentTotalsRequest)

Get Existing Received Document Totals

Returns the totals for the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        GetExistingReceivedDocumentTotalsRequest getExistingReceivedDocumentTotalsRequest = new GetExistingReceivedDocumentTotalsRequest(); // GetExistingReceivedDocumentTotalsRequest | Received document.
        try {
            GetExistingReceivedDocumentTotalsResponse result = apiInstance.getExistingReceivedDocumentTotals(companyId, documentId, getExistingReceivedDocumentTotalsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getExistingReceivedDocumentTotals");
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
 **getExistingReceivedDocumentTotalsRequest** | [**GetExistingReceivedDocumentTotalsRequest**](GetExistingReceivedDocumentTotalsRequest.md)| Received document. | [optional]

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

## getExistingReceivedDocumentTotalsWithHttpInfo

> ApiResponse<GetExistingReceivedDocumentTotalsResponse> getExistingReceivedDocumentTotals getExistingReceivedDocumentTotalsWithHttpInfo(companyId, documentId, getExistingReceivedDocumentTotalsRequest)

Get Existing Received Document Totals

Returns the totals for the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        GetExistingReceivedDocumentTotalsRequest getExistingReceivedDocumentTotalsRequest = new GetExistingReceivedDocumentTotalsRequest(); // GetExistingReceivedDocumentTotalsRequest | Received document.
        try {
            ApiResponse<GetExistingReceivedDocumentTotalsResponse> response = apiInstance.getExistingReceivedDocumentTotalsWithHttpInfo(companyId, documentId, getExistingReceivedDocumentTotalsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getExistingReceivedDocumentTotals");
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
 **getExistingReceivedDocumentTotalsRequest** | [**GetExistingReceivedDocumentTotalsRequest**](GetExistingReceivedDocumentTotalsRequest.md)| Received document. | [optional]

### Return type

ApiResponse<[**GetExistingReceivedDocumentTotalsResponse**](GetExistingReceivedDocumentTotalsResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document Totals. |  -  |


## getNewReceivedDocumentTotals

> GetNewReceivedDocumentTotalsResponse getNewReceivedDocumentTotals(companyId, getNewReceivedDocumentTotalsRequest)

Get New Received Document Totals

Returns the totals for a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        GetNewReceivedDocumentTotalsRequest getNewReceivedDocumentTotalsRequest = new GetNewReceivedDocumentTotalsRequest(); // GetNewReceivedDocumentTotalsRequest | Received document.
        try {
            GetNewReceivedDocumentTotalsResponse result = apiInstance.getNewReceivedDocumentTotals(companyId, getNewReceivedDocumentTotalsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getNewReceivedDocumentTotals");
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
 **getNewReceivedDocumentTotalsRequest** | [**GetNewReceivedDocumentTotalsRequest**](GetNewReceivedDocumentTotalsRequest.md)| Received document. | [optional]

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

## getNewReceivedDocumentTotalsWithHttpInfo

> ApiResponse<GetNewReceivedDocumentTotalsResponse> getNewReceivedDocumentTotals getNewReceivedDocumentTotalsWithHttpInfo(companyId, getNewReceivedDocumentTotalsRequest)

Get New Received Document Totals

Returns the totals for a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        GetNewReceivedDocumentTotalsRequest getNewReceivedDocumentTotalsRequest = new GetNewReceivedDocumentTotalsRequest(); // GetNewReceivedDocumentTotalsRequest | Received document.
        try {
            ApiResponse<GetNewReceivedDocumentTotalsResponse> response = apiInstance.getNewReceivedDocumentTotalsWithHttpInfo(companyId, getNewReceivedDocumentTotalsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getNewReceivedDocumentTotals");
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
 **getNewReceivedDocumentTotalsRequest** | [**GetNewReceivedDocumentTotalsRequest**](GetNewReceivedDocumentTotalsRequest.md)| Received document. | [optional]

### Return type

ApiResponse<[**GetNewReceivedDocumentTotalsResponse**](GetNewReceivedDocumentTotalsResponse.md)>


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


## getReceivedDocument

> GetReceivedDocumentResponse getReceivedDocument(companyId, documentId, fields, fieldset)

Get Received Document

Gets the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetReceivedDocumentResponse result = apiInstance.getReceivedDocument(companyId, documentId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getReceivedDocument");
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

## getReceivedDocumentWithHttpInfo

> ApiResponse<GetReceivedDocumentResponse> getReceivedDocument getReceivedDocumentWithHttpInfo(companyId, documentId, fields, fieldset)

Get Received Document

Gets the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetReceivedDocumentResponse> response = apiInstance.getReceivedDocumentWithHttpInfo(companyId, documentId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getReceivedDocument");
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

ApiResponse<[**GetReceivedDocumentResponse**](GetReceivedDocumentResponse.md)>


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


## getReceivedDocumentPreCreateInfo

> GetReceivedDocumentPreCreateInfoResponse getReceivedDocumentPreCreateInfo(companyId, type)

Get Received Document Pre-Create Info

Retrieves the information useful while creating a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "expense"; // String | The type of the received document.
        try {
            GetReceivedDocumentPreCreateInfoResponse result = apiInstance.getReceivedDocumentPreCreateInfo(companyId, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getReceivedDocumentPreCreateInfo");
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
 **type** | **String**| The type of the received document. | [enum: expense, passive_credit_note, passive_delivery_note]

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

## getReceivedDocumentPreCreateInfoWithHttpInfo

> ApiResponse<GetReceivedDocumentPreCreateInfoResponse> getReceivedDocumentPreCreateInfo getReceivedDocumentPreCreateInfoWithHttpInfo(companyId, type)

Get Received Document Pre-Create Info

Retrieves the information useful while creating a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "expense"; // String | The type of the received document.
        try {
            ApiResponse<GetReceivedDocumentPreCreateInfoResponse> response = apiInstance.getReceivedDocumentPreCreateInfoWithHttpInfo(companyId, type);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#getReceivedDocumentPreCreateInfo");
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
 **type** | **String**| The type of the received document. | [enum: expense, passive_credit_note, passive_delivery_note]

### Return type

ApiResponse<[**GetReceivedDocumentPreCreateInfoResponse**](GetReceivedDocumentPreCreateInfoResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pre-create info |  -  |


## listReceivedDocuments

> ListReceivedDocumentsResponse listReceivedDocuments(companyId, type, fields, fieldset, sort, page, perPage, q)

List Received Documents

Lists the received documents.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "expense"; // String | The type of the received document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListReceivedDocumentsResponse result = apiInstance.listReceivedDocuments(companyId, type, fields, fieldset, sort, page, perPage, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#listReceivedDocuments");
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
 **type** | **String**| The type of the received document. | [enum: expense, passive_credit_note, passive_delivery_note]
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional]

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

## listReceivedDocumentsWithHttpInfo

> ApiResponse<ListReceivedDocumentsResponse> listReceivedDocuments listReceivedDocumentsWithHttpInfo(companyId, type, fields, fieldset, sort, page, perPage, q)

List Received Documents

Lists the received documents.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "expense"; // String | The type of the received document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListReceivedDocumentsResponse> response = apiInstance.listReceivedDocumentsWithHttpInfo(companyId, type, fields, fieldset, sort, page, perPage, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#listReceivedDocuments");
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
 **type** | **String**| The type of the received document. | [enum: expense, passive_credit_note, passive_delivery_note]
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional]

### Return type

ApiResponse<[**ListReceivedDocumentsResponse**](ListReceivedDocumentsResponse.md)>


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


## modifyReceivedDocument

> ModifyReceivedDocumentResponse modifyReceivedDocument(companyId, documentId, modifyReceivedDocumentRequest)

Modify Received Document

Modifies the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyReceivedDocumentRequest modifyReceivedDocumentRequest = new ModifyReceivedDocumentRequest(); // ModifyReceivedDocumentRequest | Modified document.
        try {
            ModifyReceivedDocumentResponse result = apiInstance.modifyReceivedDocument(companyId, documentId, modifyReceivedDocumentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#modifyReceivedDocument");
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
 **modifyReceivedDocumentRequest** | [**ModifyReceivedDocumentRequest**](ModifyReceivedDocumentRequest.md)| Modified document. | [optional]

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

## modifyReceivedDocumentWithHttpInfo

> ApiResponse<ModifyReceivedDocumentResponse> modifyReceivedDocument modifyReceivedDocumentWithHttpInfo(companyId, documentId, modifyReceivedDocumentRequest)

Modify Received Document

Modifies the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyReceivedDocumentRequest modifyReceivedDocumentRequest = new ModifyReceivedDocumentRequest(); // ModifyReceivedDocumentRequest | Modified document.
        try {
            ApiResponse<ModifyReceivedDocumentResponse> response = apiInstance.modifyReceivedDocumentWithHttpInfo(companyId, documentId, modifyReceivedDocumentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#modifyReceivedDocument");
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
 **modifyReceivedDocumentRequest** | [**ModifyReceivedDocumentRequest**](ModifyReceivedDocumentRequest.md)| Modified document. | [optional]

### Return type

ApiResponse<[**ModifyReceivedDocumentResponse**](ModifyReceivedDocumentResponse.md)>


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


## uploadReceivedDocumentAttachment

> UploadReceivedDocumentAttachmentResponse uploadReceivedDocumentAttachment(companyId, filename, attachment)

Upload Received Document Attachment

Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            UploadReceivedDocumentAttachmentResponse result = apiInstance.uploadReceivedDocumentAttachment(companyId, filename, attachment);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#uploadReceivedDocumentAttachment");
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

## uploadReceivedDocumentAttachmentWithHttpInfo

> ApiResponse<UploadReceivedDocumentAttachmentResponse> uploadReceivedDocumentAttachment uploadReceivedDocumentAttachmentWithHttpInfo(companyId, filename, attachment)

Upload Received Document Attachment

Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ReceivedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ReceivedDocumentsApi apiInstance = new ReceivedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            ApiResponse<UploadReceivedDocumentAttachmentResponse> response = apiInstance.uploadReceivedDocumentAttachmentWithHttpInfo(companyId, filename, attachment);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceivedDocumentsApi#uploadReceivedDocumentAttachment");
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

ApiResponse<[**UploadReceivedDocumentAttachmentResponse**](UploadReceivedDocumentAttachmentResponse.md)>


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

