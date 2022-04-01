# IssuedEInvoicesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEInvoiceRejectionReason**](IssuedEInvoicesApi.md#getEInvoiceRejectionReason) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason | Get e-invoice rejection reason
[**getEInvoiceRejectionReasonWithHttpInfo**](IssuedEInvoicesApi.md#getEInvoiceRejectionReasonWithHttpInfo) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason | Get e-invoice rejection reason
[**getEInvoiceXml**](IssuedEInvoicesApi.md#getEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml | Get e-invoice XML
[**getEInvoiceXmlWithHttpInfo**](IssuedEInvoicesApi.md#getEInvoiceXmlWithHttpInfo) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml | Get e-invoice XML
[**sendEInvoice**](IssuedEInvoicesApi.md#sendEInvoice) | **POST** /c/{company_id}/issued_documents/{document_id}/e_invoice/send | Send the e-invoice
[**sendEInvoiceWithHttpInfo**](IssuedEInvoicesApi.md#sendEInvoiceWithHttpInfo) | **POST** /c/{company_id}/issued_documents/{document_id}/e_invoice/send | Send the e-invoice
[**verifyEInvoiceXml**](IssuedEInvoicesApi.md#verifyEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify | Verify e-invoice XML
[**verifyEInvoiceXmlWithHttpInfo**](IssuedEInvoicesApi.md#verifyEInvoiceXmlWithHttpInfo) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify | Verify e-invoice XML



## getEInvoiceRejectionReason

> GetEInvoiceRejectionReasonResponse getEInvoiceRejectionReason(companyId, documentId)

Get e-invoice rejection reason

Get e-invoice rejection reason

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            GetEInvoiceRejectionReasonResponse result = apiInstance.getEInvoiceRejectionReason(companyId, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#getEInvoiceRejectionReason");
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

[**GetEInvoiceRejectionReasonResponse**](GetEInvoiceRejectionReasonResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## getEInvoiceRejectionReasonWithHttpInfo

> ApiResponse<GetEInvoiceRejectionReasonResponse> getEInvoiceRejectionReason getEInvoiceRejectionReasonWithHttpInfo(companyId, documentId)

Get e-invoice rejection reason

Get e-invoice rejection reason

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<GetEInvoiceRejectionReasonResponse> response = apiInstance.getEInvoiceRejectionReasonWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#getEInvoiceRejectionReason");
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

ApiResponse<[**GetEInvoiceRejectionReasonResponse**](GetEInvoiceRejectionReasonResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## getEInvoiceXml

> String getEInvoiceXml(companyId, documentId, includeAttachment)

Get e-invoice XML

Downloads the e-invoice in XML format.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        Boolean includeAttachment = true; // Boolean | Include the attachment to the XML e-invoice.
        try {
            String result = apiInstance.getEInvoiceXml(companyId, documentId, includeAttachment);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#getEInvoiceXml");
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
 **includeAttachment** | **Boolean**| Include the attachment to the XML e-invoice. | [optional]

### Return type

**String**


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## getEInvoiceXmlWithHttpInfo

> ApiResponse<String> getEInvoiceXml getEInvoiceXmlWithHttpInfo(companyId, documentId, includeAttachment)

Get e-invoice XML

Downloads the e-invoice in XML format.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        Boolean includeAttachment = true; // Boolean | Include the attachment to the XML e-invoice.
        try {
            ApiResponse<String> response = apiInstance.getEInvoiceXmlWithHttpInfo(companyId, documentId, includeAttachment);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#getEInvoiceXml");
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
 **includeAttachment** | **Boolean**| Include the attachment to the XML e-invoice. | [optional]

### Return type

ApiResponse<**String**>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## sendEInvoice

> SendEInvoiceResponse sendEInvoice(companyId, documentId, sendEInvoiceRequest)

Send the e-invoice

Sends the e-invoice to SDI.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        SendEInvoiceRequest sendEInvoiceRequest = new SendEInvoiceRequest(); // SendEInvoiceRequest | 
        try {
            SendEInvoiceResponse result = apiInstance.sendEInvoice(companyId, documentId, sendEInvoiceRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#sendEInvoice");
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
 **sendEInvoiceRequest** | [**SendEInvoiceRequest**](SendEInvoiceRequest.md)|  | [optional]

### Return type

[**SendEInvoiceResponse**](SendEInvoiceResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## sendEInvoiceWithHttpInfo

> ApiResponse<SendEInvoiceResponse> sendEInvoice sendEInvoiceWithHttpInfo(companyId, documentId, sendEInvoiceRequest)

Send the e-invoice

Sends the e-invoice to SDI.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        SendEInvoiceRequest sendEInvoiceRequest = new SendEInvoiceRequest(); // SendEInvoiceRequest | 
        try {
            ApiResponse<SendEInvoiceResponse> response = apiInstance.sendEInvoiceWithHttpInfo(companyId, documentId, sendEInvoiceRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#sendEInvoice");
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
 **sendEInvoiceRequest** | [**SendEInvoiceRequest**](SendEInvoiceRequest.md)|  | [optional]

### Return type

ApiResponse<[**SendEInvoiceResponse**](SendEInvoiceResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## verifyEInvoiceXml

> VerifyEInvoiceXmlResponse verifyEInvoiceXml(companyId, documentId)

Verify e-invoice XML

Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            VerifyEInvoiceXmlResponse result = apiInstance.verifyEInvoiceXml(companyId, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#verifyEInvoiceXml");
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

[**VerifyEInvoiceXmlResponse**](VerifyEInvoiceXmlResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **422** | Example response |  -  |

## verifyEInvoiceXmlWithHttpInfo

> ApiResponse<VerifyEInvoiceXmlResponse> verifyEInvoiceXml verifyEInvoiceXmlWithHttpInfo(companyId, documentId)

Verify e-invoice XML

Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.IssuedEInvoicesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        IssuedEInvoicesApi apiInstance = new IssuedEInvoicesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer documentId = 56; // Integer | The ID of the document.
        try {
            ApiResponse<VerifyEInvoiceXmlResponse> response = apiInstance.verifyEInvoiceXmlWithHttpInfo(companyId, documentId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IssuedEInvoicesApi#verifyEInvoiceXml");
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

ApiResponse<[**VerifyEInvoiceXmlResponse**](VerifyEInvoiceXmlResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **422** | Example response |  -  |

