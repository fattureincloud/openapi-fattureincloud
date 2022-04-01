# SettingsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentAccount**](SettingsApi.md#createPaymentAccount) | **POST** /c/{company_id}/settings/payment_accounts | Create Payment Account
[**createPaymentAccountWithHttpInfo**](SettingsApi.md#createPaymentAccountWithHttpInfo) | **POST** /c/{company_id}/settings/payment_accounts | Create Payment Account
[**createPaymentMethod**](SettingsApi.md#createPaymentMethod) | **POST** /c/{company_id}/settings/payment_methods | Create Payment Method
[**createPaymentMethodWithHttpInfo**](SettingsApi.md#createPaymentMethodWithHttpInfo) | **POST** /c/{company_id}/settings/payment_methods | Create Payment Method
[**createVatType**](SettingsApi.md#createVatType) | **POST** /c/{company_id}/settings/vat_types | Create Vat Type
[**createVatTypeWithHttpInfo**](SettingsApi.md#createVatTypeWithHttpInfo) | **POST** /c/{company_id}/settings/vat_types | Create Vat Type
[**deletePaymentAccount**](SettingsApi.md#deletePaymentAccount) | **DELETE** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Delete Payment Account
[**deletePaymentAccountWithHttpInfo**](SettingsApi.md#deletePaymentAccountWithHttpInfo) | **DELETE** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Delete Payment Account
[**deletePaymentMethod**](SettingsApi.md#deletePaymentMethod) | **DELETE** /c/{company_id}/settings/payment_methods/{payment_method_id} | Delete Payment Method
[**deletePaymentMethodWithHttpInfo**](SettingsApi.md#deletePaymentMethodWithHttpInfo) | **DELETE** /c/{company_id}/settings/payment_methods/{payment_method_id} | Delete Payment Method
[**deleteVatType**](SettingsApi.md#deleteVatType) | **DELETE** /c/{company_id}/settings/vat_types/{vat_type_id} | Delete Vat Type
[**deleteVatTypeWithHttpInfo**](SettingsApi.md#deleteVatTypeWithHttpInfo) | **DELETE** /c/{company_id}/settings/vat_types/{vat_type_id} | Delete Vat Type
[**getPaymentAccount**](SettingsApi.md#getPaymentAccount) | **GET** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Get Payment Account
[**getPaymentAccountWithHttpInfo**](SettingsApi.md#getPaymentAccountWithHttpInfo) | **GET** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Get Payment Account
[**getPaymentMethod**](SettingsApi.md#getPaymentMethod) | **GET** /c/{company_id}/settings/payment_methods/{payment_method_id} | Get Payment Method
[**getPaymentMethodWithHttpInfo**](SettingsApi.md#getPaymentMethodWithHttpInfo) | **GET** /c/{company_id}/settings/payment_methods/{payment_method_id} | Get Payment Method
[**getVatType**](SettingsApi.md#getVatType) | **GET** /c/{company_id}/settings/vat_types/{vat_type_id} | Get Vat Type
[**getVatTypeWithHttpInfo**](SettingsApi.md#getVatTypeWithHttpInfo) | **GET** /c/{company_id}/settings/vat_types/{vat_type_id} | Get Vat Type
[**modifyPaymentAccount**](SettingsApi.md#modifyPaymentAccount) | **PUT** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Modify Payment Account
[**modifyPaymentAccountWithHttpInfo**](SettingsApi.md#modifyPaymentAccountWithHttpInfo) | **PUT** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Modify Payment Account
[**modifyPaymentMethod**](SettingsApi.md#modifyPaymentMethod) | **PUT** /c/{company_id}/settings/payment_methods/{payment_method_id} | Modify Payment Method
[**modifyPaymentMethodWithHttpInfo**](SettingsApi.md#modifyPaymentMethodWithHttpInfo) | **PUT** /c/{company_id}/settings/payment_methods/{payment_method_id} | Modify Payment Method
[**modifyVatType**](SettingsApi.md#modifyVatType) | **PUT** /c/{company_id}/settings/vat_types/{vat_type_id} | Modify Vat Type
[**modifyVatTypeWithHttpInfo**](SettingsApi.md#modifyVatTypeWithHttpInfo) | **PUT** /c/{company_id}/settings/vat_types/{vat_type_id} | Modify Vat Type



## createPaymentAccount

> CreatePaymentAccountResponse createPaymentAccount(companyId, createPaymentAccountRequest)

Create Payment Account

Creates a new payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreatePaymentAccountRequest createPaymentAccountRequest = new CreatePaymentAccountRequest(); // CreatePaymentAccountRequest | 
        try {
            CreatePaymentAccountResponse result = apiInstance.createPaymentAccount(companyId, createPaymentAccountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#createPaymentAccount");
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
 **createPaymentAccountRequest** | [**CreatePaymentAccountRequest**](CreatePaymentAccountRequest.md)|  | [optional]

### Return type

[**CreatePaymentAccountResponse**](CreatePaymentAccountResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## createPaymentAccountWithHttpInfo

> ApiResponse<CreatePaymentAccountResponse> createPaymentAccount createPaymentAccountWithHttpInfo(companyId, createPaymentAccountRequest)

Create Payment Account

Creates a new payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreatePaymentAccountRequest createPaymentAccountRequest = new CreatePaymentAccountRequest(); // CreatePaymentAccountRequest | 
        try {
            ApiResponse<CreatePaymentAccountResponse> response = apiInstance.createPaymentAccountWithHttpInfo(companyId, createPaymentAccountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#createPaymentAccount");
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
 **createPaymentAccountRequest** | [**CreatePaymentAccountRequest**](CreatePaymentAccountRequest.md)|  | [optional]

### Return type

ApiResponse<[**CreatePaymentAccountResponse**](CreatePaymentAccountResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## createPaymentMethod

> CreatePaymentMethodResponse createPaymentMethod(companyId, createPaymentMethodRequest)

Create Payment Method

Creates a new payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreatePaymentMethodRequest createPaymentMethodRequest = new CreatePaymentMethodRequest(); // CreatePaymentMethodRequest | 
        try {
            CreatePaymentMethodResponse result = apiInstance.createPaymentMethod(companyId, createPaymentMethodRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#createPaymentMethod");
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
 **createPaymentMethodRequest** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md)|  | [optional]

### Return type

[**CreatePaymentMethodResponse**](CreatePaymentMethodResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## createPaymentMethodWithHttpInfo

> ApiResponse<CreatePaymentMethodResponse> createPaymentMethod createPaymentMethodWithHttpInfo(companyId, createPaymentMethodRequest)

Create Payment Method

Creates a new payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreatePaymentMethodRequest createPaymentMethodRequest = new CreatePaymentMethodRequest(); // CreatePaymentMethodRequest | 
        try {
            ApiResponse<CreatePaymentMethodResponse> response = apiInstance.createPaymentMethodWithHttpInfo(companyId, createPaymentMethodRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#createPaymentMethod");
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
 **createPaymentMethodRequest** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md)|  | [optional]

### Return type

ApiResponse<[**CreatePaymentMethodResponse**](CreatePaymentMethodResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## createVatType

> CreateVatTypeResponse createVatType(companyId, createVatTypeRequest)

Create Vat Type

Creates a vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateVatTypeRequest createVatTypeRequest = new CreateVatTypeRequest(); // CreateVatTypeRequest | 
        try {
            CreateVatTypeResponse result = apiInstance.createVatType(companyId, createVatTypeRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#createVatType");
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
 **createVatTypeRequest** | [**CreateVatTypeRequest**](CreateVatTypeRequest.md)|  | [optional]

### Return type

[**CreateVatTypeResponse**](CreateVatTypeResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## createVatTypeWithHttpInfo

> ApiResponse<CreateVatTypeResponse> createVatType createVatTypeWithHttpInfo(companyId, createVatTypeRequest)

Create Vat Type

Creates a vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateVatTypeRequest createVatTypeRequest = new CreateVatTypeRequest(); // CreateVatTypeRequest | 
        try {
            ApiResponse<CreateVatTypeResponse> response = apiInstance.createVatTypeWithHttpInfo(companyId, createVatTypeRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#createVatType");
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
 **createVatTypeRequest** | [**CreateVatTypeRequest**](CreateVatTypeRequest.md)|  | [optional]

### Return type

ApiResponse<[**CreateVatTypeResponse**](CreateVatTypeResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## deletePaymentAccount

> void deletePaymentAccount(companyId, paymentAccountId)

Delete Payment Account

Deletes the specified payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentAccountId = 56; // Integer | The Referred Payment Account Id.
        try {
            apiInstance.deletePaymentAccount(companyId, paymentAccountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#deletePaymentAccount");
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
 **paymentAccountId** | **Integer**| The Referred Payment Account Id. |

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
| **200** | OK |  -  |

## deletePaymentAccountWithHttpInfo

> ApiResponse<Void> deletePaymentAccount deletePaymentAccountWithHttpInfo(companyId, paymentAccountId)

Delete Payment Account

Deletes the specified payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentAccountId = 56; // Integer | The Referred Payment Account Id.
        try {
            ApiResponse<Void> response = apiInstance.deletePaymentAccountWithHttpInfo(companyId, paymentAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#deletePaymentAccount");
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
 **paymentAccountId** | **Integer**| The Referred Payment Account Id. |

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
| **200** | OK |  -  |


## deletePaymentMethod

> void deletePaymentMethod(companyId, paymentMethodId)

Delete Payment Method

Deletes the specified payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentMethodId = 56; // Integer | The Referred Payment Method Id.
        try {
            apiInstance.deletePaymentMethod(companyId, paymentMethodId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#deletePaymentMethod");
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
 **paymentMethodId** | **Integer**| The Referred Payment Method Id. |

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
| **200** | OK |  -  |

## deletePaymentMethodWithHttpInfo

> ApiResponse<Void> deletePaymentMethod deletePaymentMethodWithHttpInfo(companyId, paymentMethodId)

Delete Payment Method

Deletes the specified payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentMethodId = 56; // Integer | The Referred Payment Method Id.
        try {
            ApiResponse<Void> response = apiInstance.deletePaymentMethodWithHttpInfo(companyId, paymentMethodId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#deletePaymentMethod");
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
 **paymentMethodId** | **Integer**| The Referred Payment Method Id. |

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
| **200** | OK |  -  |


## deleteVatType

> void deleteVatType(companyId, vatTypeId)

Delete Vat Type

Deletes the specified vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer vatTypeId = 56; // Integer | The Referred Vat Type Id.
        try {
            apiInstance.deleteVatType(companyId, vatTypeId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#deleteVatType");
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
 **vatTypeId** | **Integer**| The Referred Vat Type Id. |

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
| **200** | OK |  -  |

## deleteVatTypeWithHttpInfo

> ApiResponse<Void> deleteVatType deleteVatTypeWithHttpInfo(companyId, vatTypeId)

Delete Vat Type

Deletes the specified vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer vatTypeId = 56; // Integer | The Referred Vat Type Id.
        try {
            ApiResponse<Void> response = apiInstance.deleteVatTypeWithHttpInfo(companyId, vatTypeId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#deleteVatType");
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
 **vatTypeId** | **Integer**| The Referred Vat Type Id. |

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
| **200** | OK |  -  |


## getPaymentAccount

> GetPaymentAccountResponse getPaymentAccount(companyId, paymentAccountId, fields, fieldset)

Get Payment Account

Gets the specified payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentAccountId = 56; // Integer | The Referred Payment Account Id.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetPaymentAccountResponse result = apiInstance.getPaymentAccount(companyId, paymentAccountId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getPaymentAccount");
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
 **paymentAccountId** | **Integer**| The Referred Payment Account Id. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

[**GetPaymentAccountResponse**](GetPaymentAccountResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## getPaymentAccountWithHttpInfo

> ApiResponse<GetPaymentAccountResponse> getPaymentAccount getPaymentAccountWithHttpInfo(companyId, paymentAccountId, fields, fieldset)

Get Payment Account

Gets the specified payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentAccountId = 56; // Integer | The Referred Payment Account Id.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetPaymentAccountResponse> response = apiInstance.getPaymentAccountWithHttpInfo(companyId, paymentAccountId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getPaymentAccount");
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
 **paymentAccountId** | **Integer**| The Referred Payment Account Id. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

ApiResponse<[**GetPaymentAccountResponse**](GetPaymentAccountResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## getPaymentMethod

> GetPaymentMethodResponse getPaymentMethod(companyId, paymentMethodId, fields, fieldset)

Get Payment Method

Gets the specified payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentMethodId = 56; // Integer | The Referred Payment Method Id.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetPaymentMethodResponse result = apiInstance.getPaymentMethod(companyId, paymentMethodId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getPaymentMethod");
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
 **paymentMethodId** | **Integer**| The Referred Payment Method Id. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

[**GetPaymentMethodResponse**](GetPaymentMethodResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## getPaymentMethodWithHttpInfo

> ApiResponse<GetPaymentMethodResponse> getPaymentMethod getPaymentMethodWithHttpInfo(companyId, paymentMethodId, fields, fieldset)

Get Payment Method

Gets the specified payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentMethodId = 56; // Integer | The Referred Payment Method Id.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetPaymentMethodResponse> response = apiInstance.getPaymentMethodWithHttpInfo(companyId, paymentMethodId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getPaymentMethod");
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
 **paymentMethodId** | **Integer**| The Referred Payment Method Id. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

ApiResponse<[**GetPaymentMethodResponse**](GetPaymentMethodResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## getVatType

> GetVatTypeResponse getVatType(companyId, vatTypeId)

Get Vat Type

Gets the specified vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer vatTypeId = 56; // Integer | The Referred Vat Type Id.
        try {
            GetVatTypeResponse result = apiInstance.getVatType(companyId, vatTypeId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getVatType");
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
 **vatTypeId** | **Integer**| The Referred Vat Type Id. |

### Return type

[**GetVatTypeResponse**](GetVatTypeResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## getVatTypeWithHttpInfo

> ApiResponse<GetVatTypeResponse> getVatType getVatTypeWithHttpInfo(companyId, vatTypeId)

Get Vat Type

Gets the specified vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer vatTypeId = 56; // Integer | The Referred Vat Type Id.
        try {
            ApiResponse<GetVatTypeResponse> response = apiInstance.getVatTypeWithHttpInfo(companyId, vatTypeId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getVatType");
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
 **vatTypeId** | **Integer**| The Referred Vat Type Id. |

### Return type

ApiResponse<[**GetVatTypeResponse**](GetVatTypeResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## modifyPaymentAccount

> ModifyPaymentAccountResponse modifyPaymentAccount(companyId, paymentAccountId, modifyPaymentAccountRequest)

Modify Payment Account

Modifies the specified payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentAccountId = 56; // Integer | The Referred Payment Account Id.
        ModifyPaymentAccountRequest modifyPaymentAccountRequest = new ModifyPaymentAccountRequest(); // ModifyPaymentAccountRequest | 
        try {
            ModifyPaymentAccountResponse result = apiInstance.modifyPaymentAccount(companyId, paymentAccountId, modifyPaymentAccountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#modifyPaymentAccount");
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
 **paymentAccountId** | **Integer**| The Referred Payment Account Id. |
 **modifyPaymentAccountRequest** | [**ModifyPaymentAccountRequest**](ModifyPaymentAccountRequest.md)|  | [optional]

### Return type

[**ModifyPaymentAccountResponse**](ModifyPaymentAccountResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## modifyPaymentAccountWithHttpInfo

> ApiResponse<ModifyPaymentAccountResponse> modifyPaymentAccount modifyPaymentAccountWithHttpInfo(companyId, paymentAccountId, modifyPaymentAccountRequest)

Modify Payment Account

Modifies the specified payment account.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentAccountId = 56; // Integer | The Referred Payment Account Id.
        ModifyPaymentAccountRequest modifyPaymentAccountRequest = new ModifyPaymentAccountRequest(); // ModifyPaymentAccountRequest | 
        try {
            ApiResponse<ModifyPaymentAccountResponse> response = apiInstance.modifyPaymentAccountWithHttpInfo(companyId, paymentAccountId, modifyPaymentAccountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#modifyPaymentAccount");
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
 **paymentAccountId** | **Integer**| The Referred Payment Account Id. |
 **modifyPaymentAccountRequest** | [**ModifyPaymentAccountRequest**](ModifyPaymentAccountRequest.md)|  | [optional]

### Return type

ApiResponse<[**ModifyPaymentAccountResponse**](ModifyPaymentAccountResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## modifyPaymentMethod

> ModifyPaymentMethodResponse modifyPaymentMethod(companyId, paymentMethodId, modifyPaymentMethodRequest)

Modify Payment Method

Modifies the specified payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentMethodId = 56; // Integer | The Referred Payment Method Id.
        ModifyPaymentMethodRequest modifyPaymentMethodRequest = new ModifyPaymentMethodRequest(); // ModifyPaymentMethodRequest | 
        try {
            ModifyPaymentMethodResponse result = apiInstance.modifyPaymentMethod(companyId, paymentMethodId, modifyPaymentMethodRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#modifyPaymentMethod");
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
 **paymentMethodId** | **Integer**| The Referred Payment Method Id. |
 **modifyPaymentMethodRequest** | [**ModifyPaymentMethodRequest**](ModifyPaymentMethodRequest.md)|  | [optional]

### Return type

[**ModifyPaymentMethodResponse**](ModifyPaymentMethodResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## modifyPaymentMethodWithHttpInfo

> ApiResponse<ModifyPaymentMethodResponse> modifyPaymentMethod modifyPaymentMethodWithHttpInfo(companyId, paymentMethodId, modifyPaymentMethodRequest)

Modify Payment Method

Modifies the specified payment method.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer paymentMethodId = 56; // Integer | The Referred Payment Method Id.
        ModifyPaymentMethodRequest modifyPaymentMethodRequest = new ModifyPaymentMethodRequest(); // ModifyPaymentMethodRequest | 
        try {
            ApiResponse<ModifyPaymentMethodResponse> response = apiInstance.modifyPaymentMethodWithHttpInfo(companyId, paymentMethodId, modifyPaymentMethodRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#modifyPaymentMethod");
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
 **paymentMethodId** | **Integer**| The Referred Payment Method Id. |
 **modifyPaymentMethodRequest** | [**ModifyPaymentMethodRequest**](ModifyPaymentMethodRequest.md)|  | [optional]

### Return type

ApiResponse<[**ModifyPaymentMethodResponse**](ModifyPaymentMethodResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## modifyVatType

> ModifyVatTypeResponse modifyVatType(companyId, vatTypeId, modifyVatTypeRequest)

Modify Vat Type

Modifies the specified vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer vatTypeId = 56; // Integer | The Referred Vat Type Id.
        ModifyVatTypeRequest modifyVatTypeRequest = new ModifyVatTypeRequest(); // ModifyVatTypeRequest | 
        try {
            ModifyVatTypeResponse result = apiInstance.modifyVatType(companyId, vatTypeId, modifyVatTypeRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#modifyVatType");
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
 **vatTypeId** | **Integer**| The Referred Vat Type Id. |
 **modifyVatTypeRequest** | [**ModifyVatTypeRequest**](ModifyVatTypeRequest.md)|  | [optional]

### Return type

[**ModifyVatTypeResponse**](ModifyVatTypeResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## modifyVatTypeWithHttpInfo

> ApiResponse<ModifyVatTypeResponse> modifyVatType modifyVatTypeWithHttpInfo(companyId, vatTypeId, modifyVatTypeRequest)

Modify Vat Type

Modifies the specified vat type.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer vatTypeId = 56; // Integer | The Referred Vat Type Id.
        ModifyVatTypeRequest modifyVatTypeRequest = new ModifyVatTypeRequest(); // ModifyVatTypeRequest | 
        try {
            ApiResponse<ModifyVatTypeResponse> response = apiInstance.modifyVatTypeWithHttpInfo(companyId, vatTypeId, modifyVatTypeRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#modifyVatType");
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
 **vatTypeId** | **Integer**| The Referred Vat Type Id. |
 **modifyVatTypeRequest** | [**ModifyVatTypeRequest**](ModifyVatTypeRequest.md)|  | [optional]

### Return type

ApiResponse<[**ModifyVatTypeResponse**](ModifyVatTypeResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

