# IssuedDocumentsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIssuedDocument**](IssuedDocumentsApi.md#createIssuedDocument) | **POST** /c/{company_id}/issued_documents | Create Issued Document
[**createIssuedDocumentWithHttpInfo**](IssuedDocumentsApi.md#createIssuedDocumentWithHttpInfo) | **POST** /c/{company_id}/issued_documents | Create Issued Document
[**deleteIssuedDocument**](IssuedDocumentsApi.md#deleteIssuedDocument) | **DELETE** /c/{company_id}/issued_documents/{document_id} | Delete Issued Document
[**deleteIssuedDocumentWithHttpInfo**](IssuedDocumentsApi.md#deleteIssuedDocumentWithHttpInfo) | **DELETE** /c/{company_id}/issued_documents/{document_id} | Delete Issued Document
[**deleteIssuedDocumentAttachment**](IssuedDocumentsApi.md#deleteIssuedDocumentAttachment) | **DELETE** /c/{company_id}/issued_documents/{document_id}/attachment | Delete Issued Document Attachment
[**deleteIssuedDocumentAttachmentWithHttpInfo**](IssuedDocumentsApi.md#deleteIssuedDocumentAttachmentWithHttpInfo) | **DELETE** /c/{company_id}/issued_documents/{document_id}/attachment | Delete Issued Document Attachment
[**getEmailData**](IssuedDocumentsApi.md#getEmailData) | **GET** /c/{company_id}/issued_documents/{document_id}/email | Get Email Data
[**getEmailDataWithHttpInfo**](IssuedDocumentsApi.md#getEmailDataWithHttpInfo) | **GET** /c/{company_id}/issued_documents/{document_id}/email | Get Email Data
[**getExistingIssuedDocumentTotals**](IssuedDocumentsApi.md#getExistingIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/{document_id}/totals | Get Existing Issued Document Totals
[**getExistingIssuedDocumentTotalsWithHttpInfo**](IssuedDocumentsApi.md#getExistingIssuedDocumentTotalsWithHttpInfo) | **POST** /c/{company_id}/issued_documents/{document_id}/totals | Get Existing Issued Document Totals
[**getIssuedDocument**](IssuedDocumentsApi.md#getIssuedDocument) | **GET** /c/{company_id}/issued_documents/{document_id} | Get Issued Document
[**getIssuedDocumentWithHttpInfo**](IssuedDocumentsApi.md#getIssuedDocumentWithHttpInfo) | **GET** /c/{company_id}/issued_documents/{document_id} | Get Issued Document
[**getIssuedDocumentPreCreateInfo**](IssuedDocumentsApi.md#getIssuedDocumentPreCreateInfo) | **GET** /c/{company_id}/issued_documents/info | Get Issued Document Pre-create info
[**getIssuedDocumentPreCreateInfoWithHttpInfo**](IssuedDocumentsApi.md#getIssuedDocumentPreCreateInfoWithHttpInfo) | **GET** /c/{company_id}/issued_documents/info | Get Issued Document Pre-create info
[**getNewIssuedDocumentTotals**](IssuedDocumentsApi.md#getNewIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/totals | Get New Issued Document Totals
[**getNewIssuedDocumentTotalsWithHttpInfo**](IssuedDocumentsApi.md#getNewIssuedDocumentTotalsWithHttpInfo) | **POST** /c/{company_id}/issued_documents/totals | Get New Issued Document Totals
[**listIssuedDocuments**](IssuedDocumentsApi.md#listIssuedDocuments) | **GET** /c/{company_id}/issued_documents | List Issued Documents
[**listIssuedDocumentsWithHttpInfo**](IssuedDocumentsApi.md#listIssuedDocumentsWithHttpInfo) | **GET** /c/{company_id}/issued_documents | List Issued Documents
[**modifyIssuedDocument**](IssuedDocumentsApi.md#modifyIssuedDocument) | **PUT** /c/{company_id}/issued_documents/{document_id} | Modify Issued Document
[**modifyIssuedDocumentWithHttpInfo**](IssuedDocumentsApi.md#modifyIssuedDocumentWithHttpInfo) | **PUT** /c/{company_id}/issued_documents/{document_id} | Modify Issued Document
[**scheduleEmail**](IssuedDocumentsApi.md#scheduleEmail) | **POST** /c/{company_id}/issued_documents/{document_id}/email | Schedule Email
[**scheduleEmailWithHttpInfo**](IssuedDocumentsApi.md#scheduleEmailWithHttpInfo) | **POST** /c/{company_id}/issued_documents/{document_id}/email | Schedule Email
[**uploadIssuedDocumentAttachment**](IssuedDocumentsApi.md#uploadIssuedDocumentAttachment) | **POST** /c/{company_id}/issued_documents/attachment | Upload Issued Document Attachment
[**uploadIssuedDocumentAttachmentWithHttpInfo**](IssuedDocumentsApi.md#uploadIssuedDocumentAttachmentWithHttpInfo) | **POST** /c/{company_id}/issued_documents/attachment | Upload Issued Document Attachment



## createIssuedDocument

> CreateIssuedDocumentResponse createIssuedDocument(companyId, createIssuedDocumentRequest)

Create Issued Document

Creates a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateIssuedDocumentRequest createIssuedDocumentRequest = new CreateIssuedDocumentRequest(); // CreateIssuedDocumentRequest | The Issued Document
        try {
            CreateIssuedDocumentResponse result = apiInstance.createIssuedDocument(companyId, createIssuedDocumentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#createIssuedDocument");
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
 **createIssuedDocumentRequest** | [**CreateIssuedDocumentRequest**](CreateIssuedDocumentRequest.md)| The Issued Document | [optional]

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

## createIssuedDocumentWithHttpInfo

> ApiResponse<CreateIssuedDocumentResponse> createIssuedDocument createIssuedDocumentWithHttpInfo(companyId, createIssuedDocumentRequest)

Create Issued Document

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateIssuedDocumentRequest createIssuedDocumentRequest = new CreateIssuedDocumentRequest(); // CreateIssuedDocumentRequest | The Issued Document
        try {
            ApiResponse<CreateIssuedDocumentResponse> response = apiInstance.createIssuedDocumentWithHttpInfo(companyId, createIssuedDocumentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#createIssuedDocument");
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
 **createIssuedDocumentRequest** | [**CreateIssuedDocumentRequest**](CreateIssuedDocumentRequest.md)| The Issued Document | [optional]

### Return type

ApiResponse<[**CreateIssuedDocumentResponse**](CreateIssuedDocumentResponse.md)>


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


## deleteIssuedDocument

> void deleteIssuedDocument(companyId, documentId)

Delete Issued Document

Deletes the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteIssuedDocument(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#deleteIssuedDocument");
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
| **200** | Document removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## deleteIssuedDocumentWithHttpInfo

> ApiResponse<Void> deleteIssuedDocument deleteIssuedDocumentWithHttpInfo(companyId, documentId)

Delete Issued Document

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteIssuedDocumentWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#deleteIssuedDocument");
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
| **200** | Document removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## deleteIssuedDocumentAttachment

> void deleteIssuedDocumentAttachment(companyId, documentId)

Delete Issued Document Attachment

Removes the attachment of the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            apiInstance.deleteIssuedDocumentAttachment(companyId, documentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#deleteIssuedDocumentAttachment");
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
| **200** | File removed. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## deleteIssuedDocumentAttachmentWithHttpInfo

> ApiResponse<Void> deleteIssuedDocumentAttachment deleteIssuedDocumentAttachmentWithHttpInfo(companyId, documentId)

Delete Issued Document Attachment

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<Void> response = apiInstance.deleteIssuedDocumentAttachmentWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#deleteIssuedDocumentAttachment");
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
| **200** | File removed. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## getEmailData

> GetEmailDataResponse getEmailData(companyId, documentId)

Get Email Data

Gets the pre-compiled email details.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            GetEmailDataResponse result = apiInstance.getEmailData(companyId, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getEmailData");
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

## getEmailDataWithHttpInfo

> ApiResponse<GetEmailDataResponse> getEmailData getEmailDataWithHttpInfo(companyId, documentId)

Get Email Data

Gets the pre-compiled email details.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<GetEmailDataResponse> response = apiInstance.getEmailDataWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getEmailData");
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

ApiResponse<[**GetEmailDataResponse**](GetEmailDataResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | EmailData |  -  |


## getExistingIssuedDocumentTotals

> GetExistingIssuedDocumentTotalsResponse getExistingIssuedDocumentTotals(companyId, documentId, getExistingIssuedDocumentTotalsRequest)

Get Existing Issued Document Totals

Returns the totals for a specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        GetExistingIssuedDocumentTotalsRequest getExistingIssuedDocumentTotalsRequest = new GetExistingIssuedDocumentTotalsRequest(); // GetExistingIssuedDocumentTotalsRequest | 
        try {
            GetExistingIssuedDocumentTotalsResponse result = apiInstance.getExistingIssuedDocumentTotals(companyId, documentId, getExistingIssuedDocumentTotalsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getExistingIssuedDocumentTotals");
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
 **getExistingIssuedDocumentTotalsRequest** | [**GetExistingIssuedDocumentTotalsRequest**](GetExistingIssuedDocumentTotalsRequest.md)|  | [optional]

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

## getExistingIssuedDocumentTotalsWithHttpInfo

> ApiResponse<GetExistingIssuedDocumentTotalsResponse> getExistingIssuedDocumentTotals getExistingIssuedDocumentTotalsWithHttpInfo(companyId, documentId, getExistingIssuedDocumentTotalsRequest)

Get Existing Issued Document Totals

Returns the totals for a specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        GetExistingIssuedDocumentTotalsRequest getExistingIssuedDocumentTotalsRequest = new GetExistingIssuedDocumentTotalsRequest(); // GetExistingIssuedDocumentTotalsRequest | 
        try {
            ApiResponse<GetExistingIssuedDocumentTotalsResponse> response = apiInstance.getExistingIssuedDocumentTotalsWithHttpInfo(companyId, documentId, getExistingIssuedDocumentTotalsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getExistingIssuedDocumentTotals");
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
 **getExistingIssuedDocumentTotalsRequest** | [**GetExistingIssuedDocumentTotalsRequest**](GetExistingIssuedDocumentTotalsRequest.md)|  | [optional]

### Return type

ApiResponse<[**GetExistingIssuedDocumentTotalsResponse**](GetExistingIssuedDocumentTotalsResponse.md)>


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


## getIssuedDocument

> GetIssuedDocumentResponse getIssuedDocument(companyId, documentId, fields, fieldset)

Get Issued Document

Gets the specified document. 

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetIssuedDocumentResponse result = apiInstance.getIssuedDocument(companyId, documentId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getIssuedDocument");
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

## getIssuedDocumentWithHttpInfo

> ApiResponse<GetIssuedDocumentResponse> getIssuedDocument getIssuedDocumentWithHttpInfo(companyId, documentId, fields, fieldset)

Get Issued Document

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetIssuedDocumentResponse> response = apiInstance.getIssuedDocumentWithHttpInfo(companyId, documentId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getIssuedDocument");
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

ApiResponse<[**GetIssuedDocumentResponse**](GetIssuedDocumentResponse.md)>


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


## getIssuedDocumentPreCreateInfo

> GetIssuedDocumentPreCreateInfoResponse getIssuedDocumentPreCreateInfo(companyId, type)

Get Issued Document Pre-create info

Retrieves the information useful while creating a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "invoice"; // String | The type of the issued document.
        try {
            GetIssuedDocumentPreCreateInfoResponse result = apiInstance.getIssuedDocumentPreCreateInfo(companyId, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getIssuedDocumentPreCreateInfo");
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
 **type** | **String**| The type of the issued document. | [enum: invoice, credit_note, receipt, order, quote, proforma, delivery_note]

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

## getIssuedDocumentPreCreateInfoWithHttpInfo

> ApiResponse<GetIssuedDocumentPreCreateInfoResponse> getIssuedDocumentPreCreateInfo getIssuedDocumentPreCreateInfoWithHttpInfo(companyId, type)

Get Issued Document Pre-create info

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "invoice"; // String | The type of the issued document.
        try {
            ApiResponse<GetIssuedDocumentPreCreateInfoResponse> response = apiInstance.getIssuedDocumentPreCreateInfoWithHttpInfo(companyId, type);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getIssuedDocumentPreCreateInfo");
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
 **type** | **String**| The type of the issued document. | [enum: invoice, credit_note, receipt, order, quote, proforma, delivery_note]

### Return type

ApiResponse<[**GetIssuedDocumentPreCreateInfoResponse**](GetIssuedDocumentPreCreateInfoResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pre-create info. |  -  |


## getNewIssuedDocumentTotals

> GetNewIssuedDocumentTotalsResponse getNewIssuedDocumentTotals(companyId, getNewIssuedDocumentTotalsRequest)

Get New Issued Document Totals

Returns the totals for a new document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        GetNewIssuedDocumentTotalsRequest getNewIssuedDocumentTotalsRequest = new GetNewIssuedDocumentTotalsRequest(); // GetNewIssuedDocumentTotalsRequest | 
        try {
            GetNewIssuedDocumentTotalsResponse result = apiInstance.getNewIssuedDocumentTotals(companyId, getNewIssuedDocumentTotalsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getNewIssuedDocumentTotals");
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
 **getNewIssuedDocumentTotalsRequest** | [**GetNewIssuedDocumentTotalsRequest**](GetNewIssuedDocumentTotalsRequest.md)|  | [optional]

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

## getNewIssuedDocumentTotalsWithHttpInfo

> ApiResponse<GetNewIssuedDocumentTotalsResponse> getNewIssuedDocumentTotals getNewIssuedDocumentTotalsWithHttpInfo(companyId, getNewIssuedDocumentTotalsRequest)

Get New Issued Document Totals

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        GetNewIssuedDocumentTotalsRequest getNewIssuedDocumentTotalsRequest = new GetNewIssuedDocumentTotalsRequest(); // GetNewIssuedDocumentTotalsRequest | 
        try {
            ApiResponse<GetNewIssuedDocumentTotalsResponse> response = apiInstance.getNewIssuedDocumentTotalsWithHttpInfo(companyId, getNewIssuedDocumentTotalsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#getNewIssuedDocumentTotals");
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
 **getNewIssuedDocumentTotalsRequest** | [**GetNewIssuedDocumentTotalsRequest**](GetNewIssuedDocumentTotalsRequest.md)|  | [optional]

### Return type

ApiResponse<[**GetNewIssuedDocumentTotalsResponse**](GetNewIssuedDocumentTotalsResponse.md)>


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


## listIssuedDocuments

> ListIssuedDocumentsResponse listIssuedDocuments(companyId, type, fields, fieldset, sort, page, perPage, q)

List Issued Documents

Lists the issued documents.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "invoice"; // String | The type of the issued document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListIssuedDocumentsResponse result = apiInstance.listIssuedDocuments(companyId, type, fields, fieldset, sort, page, perPage, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#listIssuedDocuments");
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
 **type** | **String**| The type of the issued document. | [enum: invoice, credit_note, receipt, order, quote, proforma, delivery_note]
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional]

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

## listIssuedDocumentsWithHttpInfo

> ApiResponse<ListIssuedDocumentsResponse> listIssuedDocuments listIssuedDocumentsWithHttpInfo(companyId, type, fields, fieldset, sort, page, perPage, q)

List Issued Documents

Lists the issued documents.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String type = "invoice"; // String | The type of the issued document.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListIssuedDocumentsResponse> response = apiInstance.listIssuedDocumentsWithHttpInfo(companyId, type, fields, fieldset, sort, page, perPage, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#listIssuedDocuments");
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
 **type** | **String**| The type of the issued document. | [enum: invoice, credit_note, receipt, order, quote, proforma, delivery_note]
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional]
 **page** | **Integer**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Integer**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional]

### Return type

ApiResponse<[**ListIssuedDocumentsResponse**](ListIssuedDocumentsResponse.md)>


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


## modifyIssuedDocument

> ModifyIssuedDocumentResponse modifyIssuedDocument(companyId, documentId, modifyIssuedDocumentRequest)

Modify Issued Document

Modifies the specified document.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyIssuedDocumentRequest modifyIssuedDocumentRequest = new ModifyIssuedDocumentRequest(); // ModifyIssuedDocumentRequest | The modified document
        try {
            ModifyIssuedDocumentResponse result = apiInstance.modifyIssuedDocument(companyId, documentId, modifyIssuedDocumentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#modifyIssuedDocument");
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
 **modifyIssuedDocumentRequest** | [**ModifyIssuedDocumentRequest**](ModifyIssuedDocumentRequest.md)| The modified document | [optional]

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

## modifyIssuedDocumentWithHttpInfo

> ApiResponse<ModifyIssuedDocumentResponse> modifyIssuedDocument modifyIssuedDocumentWithHttpInfo(companyId, documentId, modifyIssuedDocumentRequest)

Modify Issued Document

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
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ModifyIssuedDocumentRequest modifyIssuedDocumentRequest = new ModifyIssuedDocumentRequest(); // ModifyIssuedDocumentRequest | The modified document
        try {
            ApiResponse<ModifyIssuedDocumentResponse> response = apiInstance.modifyIssuedDocumentWithHttpInfo(companyId, documentId, modifyIssuedDocumentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#modifyIssuedDocument");
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
 **modifyIssuedDocumentRequest** | [**ModifyIssuedDocumentRequest**](ModifyIssuedDocumentRequest.md)| The modified document | [optional]

### Return type

ApiResponse<[**ModifyIssuedDocumentResponse**](ModifyIssuedDocumentResponse.md)>


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


## scheduleEmail

> void scheduleEmail(companyId, documentId, scheduleEmailRequest)

Schedule Email

Schedules the sending of a document by email.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ScheduleEmailRequest scheduleEmailRequest = new ScheduleEmailRequest(); // ScheduleEmailRequest | Email Schedule
        try {
            apiInstance.scheduleEmail(companyId, documentId, scheduleEmailRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#scheduleEmail");
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
 **scheduleEmailRequest** | [**ScheduleEmailRequest**](ScheduleEmailRequest.md)| Email Schedule | [optional]

### Return type


null (empty response body)

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

## scheduleEmailWithHttpInfo

> ApiResponse<Void> scheduleEmail scheduleEmailWithHttpInfo(companyId, documentId, scheduleEmailRequest)

Schedule Email

Schedules the sending of a document by email.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        ScheduleEmailRequest scheduleEmailRequest = new ScheduleEmailRequest(); // ScheduleEmailRequest | Email Schedule
        try {
            ApiResponse<Void> response = apiInstance.scheduleEmailWithHttpInfo(companyId, documentId, scheduleEmailRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#scheduleEmail");
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
 **scheduleEmailRequest** | [**ScheduleEmailRequest**](ScheduleEmailRequest.md)| Email Schedule | [optional]

### Return type


ApiResponse<Void>

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


## uploadIssuedDocumentAttachment

> UploadIssuedDocumentAttachmentResponse uploadIssuedDocumentAttachment(companyId, filename, attachment)

Upload Issued Document Attachment

Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            UploadIssuedDocumentAttachmentResponse result = apiInstance.uploadIssuedDocumentAttachment(companyId, filename, attachment);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#uploadIssuedDocumentAttachment");
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

## uploadIssuedDocumentAttachmentWithHttpInfo

> ApiResponse<UploadIssuedDocumentAttachmentResponse> uploadIssuedDocumentAttachment uploadIssuedDocumentAttachmentWithHttpInfo(companyId, filename, attachment)

Upload Issued Document Attachment

Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedDocumentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String filename = "filename_example"; // String | Name of the file.
        File attachment = new File("/path/to/file"); // File | Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
        try {
            ApiResponse<UploadIssuedDocumentAttachmentResponse> response = apiInstance.uploadIssuedDocumentAttachmentWithHttpInfo(companyId, filename, attachment);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedDocumentsApi#uploadIssuedDocumentAttachment");
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

ApiResponse<[**UploadIssuedDocumentAttachmentResponse**](UploadIssuedDocumentAttachmentResponse.md)>


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

