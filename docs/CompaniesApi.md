# CompaniesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanyInfo**](CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info
[**getCompanyInfoWithHttpInfo**](CompaniesApi.md#getCompanyInfoWithHttpInfo) | **GET** /c/{company_id}/company/info | Get Company Info



## getCompanyInfo

> GetCompanyInfoResponse getCompanyInfo(companyId)

Get Company Info

Gets the company detailed info.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CompaniesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CompaniesApi apiInstance = new CompaniesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            GetCompanyInfoResponse result = apiInstance.getCompanyInfo(companyId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CompaniesApi#getCompanyInfo");
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

[**GetCompanyInfoResponse**](GetCompanyInfoResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Company info. |  -  |
| **401** | Unauthorized. |  -  |

## getCompanyInfoWithHttpInfo

> ApiResponse<GetCompanyInfoResponse> getCompanyInfo getCompanyInfoWithHttpInfo(companyId)

Get Company Info

Gets the company detailed info.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.CompaniesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        CompaniesApi apiInstance = new CompaniesApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ApiResponse<GetCompanyInfoResponse> response = apiInstance.getCompanyInfoWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompaniesApi#getCompanyInfo");
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

ApiResponse<[**GetCompanyInfoResponse**](GetCompanyInfoResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Company info. |  -  |
| **401** | Unauthorized. |  -  |

