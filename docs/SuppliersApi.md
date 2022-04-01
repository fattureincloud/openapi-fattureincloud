# SuppliersApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSupplier**](SuppliersApi.md#createSupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
[**createSupplierWithHttpInfo**](SuppliersApi.md#createSupplierWithHttpInfo) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
[**deleteSupplier**](SuppliersApi.md#deleteSupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
[**deleteSupplierWithHttpInfo**](SuppliersApi.md#deleteSupplierWithHttpInfo) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
[**getSupplier**](SuppliersApi.md#getSupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
[**getSupplierWithHttpInfo**](SuppliersApi.md#getSupplierWithHttpInfo) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
[**listSuppliers**](SuppliersApi.md#listSuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
[**listSuppliersWithHttpInfo**](SuppliersApi.md#listSuppliersWithHttpInfo) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
[**modifySupplier**](SuppliersApi.md#modifySupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier
[**modifySupplierWithHttpInfo**](SuppliersApi.md#modifySupplierWithHttpInfo) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier



## createSupplier

> CreateSupplierResponse createSupplier(companyId, createSupplierRequest)

Create Supplier

Creates a new supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateSupplierRequest createSupplierRequest = new CreateSupplierRequest(); // CreateSupplierRequest | The supplier to create
        try {
            CreateSupplierResponse result = apiInstance.createSupplier(companyId, createSupplierRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#createSupplier");
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
 **createSupplierRequest** | [**CreateSupplierRequest**](CreateSupplierRequest.md)| The supplier to create | [optional]

### Return type

[**CreateSupplierResponse**](CreateSupplierResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## createSupplierWithHttpInfo

> ApiResponse<CreateSupplierResponse> createSupplier createSupplierWithHttpInfo(companyId, createSupplierRequest)

Create Supplier

Creates a new supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateSupplierRequest createSupplierRequest = new CreateSupplierRequest(); // CreateSupplierRequest | The supplier to create
        try {
            ApiResponse<CreateSupplierResponse> response = apiInstance.createSupplierWithHttpInfo(companyId, createSupplierRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#createSupplier");
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
 **createSupplierRequest** | [**CreateSupplierRequest**](CreateSupplierRequest.md)| The supplier to create | [optional]

### Return type

ApiResponse<[**CreateSupplierResponse**](CreateSupplierResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## deleteSupplier

> void deleteSupplier(companyId, supplierId)

Delete Supplier

Deletes the specified supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer supplierId = 56; // Integer | The ID of the supplier.
        try {
            apiInstance.deleteSupplier(companyId, supplierId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#deleteSupplier");
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
 **supplierId** | **Integer**| The ID of the supplier. |

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
| **200** | Entity Removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## deleteSupplierWithHttpInfo

> ApiResponse<Void> deleteSupplier deleteSupplierWithHttpInfo(companyId, supplierId)

Delete Supplier

Deletes the specified supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer supplierId = 56; // Integer | The ID of the supplier.
        try {
            ApiResponse<Void> response = apiInstance.deleteSupplierWithHttpInfo(companyId, supplierId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#deleteSupplier");
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
 **supplierId** | **Integer**| The ID of the supplier. |

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
| **200** | Entity Removed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## getSupplier

> GetSupplierResponse getSupplier(companyId, supplierId, fields, fieldset)

Get Supplier

Gets the specified supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer supplierId = 56; // Integer | The ID of the supplier.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetSupplierResponse result = apiInstance.getSupplier(companyId, supplierId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#getSupplier");
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
 **supplierId** | **Integer**| The ID of the supplier. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

[**GetSupplierResponse**](GetSupplierResponse.md)


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

## getSupplierWithHttpInfo

> ApiResponse<GetSupplierResponse> getSupplier getSupplierWithHttpInfo(companyId, supplierId, fields, fieldset)

Get Supplier

Gets the specified supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer supplierId = 56; // Integer | The ID of the supplier.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetSupplierResponse> response = apiInstance.getSupplierWithHttpInfo(companyId, supplierId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#getSupplier");
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
 **supplierId** | **Integer**| The ID of the supplier. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

ApiResponse<[**GetSupplierResponse**](GetSupplierResponse.md)>


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


## listSuppliers

> ListSuppliersResponse listSuppliers(companyId, fields, fieldset, sort, page, perPage, q)

List Suppliers

Lists the suppliers.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListSuppliersResponse result = apiInstance.listSuppliers(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#listSuppliers");
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

[**ListSuppliersResponse**](ListSuppliersResponse.md)


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

## listSuppliersWithHttpInfo

> ApiResponse<ListSuppliersResponse> listSuppliers listSuppliersWithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q)

List Suppliers

Lists the suppliers.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListSuppliersResponse> response = apiInstance.listSuppliersWithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#listSuppliers");
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

ApiResponse<[**ListSuppliersResponse**](ListSuppliersResponse.md)>


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


## modifySupplier

> ModifySupplierResponse modifySupplier(companyId, supplierId, modifySupplierRequest)

Modify Supplier

Modifies the specified supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer supplierId = 56; // Integer | The ID of the supplier.
        ModifySupplierRequest modifySupplierRequest = new ModifySupplierRequest(); // ModifySupplierRequest | The modified Supplier. First level parameters are managed in delta mode.
        try {
            ModifySupplierResponse result = apiInstance.modifySupplier(companyId, supplierId, modifySupplierRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#modifySupplier");
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
 **supplierId** | **Integer**| The ID of the supplier. |
 **modifySupplierRequest** | [**ModifySupplierRequest**](ModifySupplierRequest.md)| The modified Supplier. First level parameters are managed in delta mode. | [optional]

### Return type

[**ModifySupplierResponse**](ModifySupplierResponse.md)


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

## modifySupplierWithHttpInfo

> ApiResponse<ModifySupplierResponse> modifySupplier modifySupplierWithHttpInfo(companyId, supplierId, modifySupplierRequest)

Modify Supplier

Modifies the specified supplier.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.SuppliersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        SuppliersApi apiInstance = new SuppliersApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer supplierId = 56; // Integer | The ID of the supplier.
        ModifySupplierRequest modifySupplierRequest = new ModifySupplierRequest(); // ModifySupplierRequest | The modified Supplier. First level parameters are managed in delta mode.
        try {
            ApiResponse<ModifySupplierResponse> response = apiInstance.modifySupplierWithHttpInfo(companyId, supplierId, modifySupplierRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppliersApi#modifySupplier");
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
 **supplierId** | **Integer**| The ID of the supplier. |
 **modifySupplierRequest** | [**ModifySupplierRequest**](ModifySupplierRequest.md)| The modified Supplier. First level parameters are managed in delta mode. | [optional]

### Return type

ApiResponse<[**ModifySupplierResponse**](ModifySupplierResponse.md)>


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

