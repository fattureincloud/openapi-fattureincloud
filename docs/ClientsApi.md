# ClientsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClient**](ClientsApi.md#createClient) | **POST** /c/{company_id}/entities/clients | Create Client
[**createClientWithHttpInfo**](ClientsApi.md#createClientWithHttpInfo) | **POST** /c/{company_id}/entities/clients | Create Client
[**deleteClient**](ClientsApi.md#deleteClient) | **DELETE** /c/{company_id}/entities/clients/{client_id} | Delete Client
[**deleteClientWithHttpInfo**](ClientsApi.md#deleteClientWithHttpInfo) | **DELETE** /c/{company_id}/entities/clients/{client_id} | Delete Client
[**getClient**](ClientsApi.md#getClient) | **GET** /c/{company_id}/entities/clients/{client_id} | Get Client
[**getClientWithHttpInfo**](ClientsApi.md#getClientWithHttpInfo) | **GET** /c/{company_id}/entities/clients/{client_id} | Get Client
[**listClients**](ClientsApi.md#listClients) | **GET** /c/{company_id}/entities/clients | List Clients
[**listClientsWithHttpInfo**](ClientsApi.md#listClientsWithHttpInfo) | **GET** /c/{company_id}/entities/clients | List Clients
[**modifyClient**](ClientsApi.md#modifyClient) | **PUT** /c/{company_id}/entities/clients/{client_id} | Modify Client
[**modifyClientWithHttpInfo**](ClientsApi.md#modifyClientWithHttpInfo) | **PUT** /c/{company_id}/entities/clients/{client_id} | Modify Client



## createClient

> CreateClientResponse createClient(companyId, createClientRequest)

Create Client

Creates a new client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateClientRequest createClientRequest = new CreateClientRequest(); // CreateClientRequest | The client to create
        try {
            CreateClientResponse result = apiInstance.createClient(companyId, createClientRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#createClient");
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
 **createClientRequest** | [**CreateClientRequest**](CreateClientRequest.md)| The client to create | [optional]

### Return type

[**CreateClientResponse**](CreateClientResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

## createClientWithHttpInfo

> ApiResponse<CreateClientResponse> createClient createClientWithHttpInfo(companyId, createClientRequest)

Create Client

Creates a new client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        CreateClientRequest createClientRequest = new CreateClientRequest(); // CreateClientRequest | The client to create
        try {
            ApiResponse<CreateClientResponse> response = apiInstance.createClientWithHttpInfo(companyId, createClientRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#createClient");
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
 **createClientRequest** | [**CreateClientRequest**](CreateClientRequest.md)| The client to create | [optional]

### Return type

ApiResponse<[**CreateClientResponse**](CreateClientResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |


## deleteClient

> void deleteClient(companyId, clientId)

Delete Client

Deletes the specified client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer clientId = 56; // Integer | The ID of the client.
        try {
            apiInstance.deleteClient(companyId, clientId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#deleteClient");
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
 **clientId** | **Integer**| The ID of the client. |

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

## deleteClientWithHttpInfo

> ApiResponse<Void> deleteClient deleteClientWithHttpInfo(companyId, clientId)

Delete Client

Deletes the specified client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer clientId = 56; // Integer | The ID of the client.
        try {
            ApiResponse<Void> response = apiInstance.deleteClientWithHttpInfo(companyId, clientId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#deleteClient");
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
 **clientId** | **Integer**| The ID of the client. |

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


## getClient

> GetClientResponse getClient(companyId, clientId, fields, fieldset)

Get Client

Gets the specified client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer clientId = 56; // Integer | The ID of the client.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            GetClientResponse result = apiInstance.getClient(companyId, clientId, fields, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#getClient");
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
 **clientId** | **Integer**| The ID of the client. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

[**GetClientResponse**](GetClientResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Client Details. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## getClientWithHttpInfo

> ApiResponse<GetClientResponse> getClient getClientWithHttpInfo(companyId, clientId, fields, fieldset)

Get Client

Gets the specified client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer clientId = 56; // Integer | The ID of the client.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<GetClientResponse> response = apiInstance.getClientWithHttpInfo(companyId, clientId, fields, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#getClient");
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
 **clientId** | **Integer**| The ID of the client. |
 **fields** | **String**| List of comma-separated fields. | [optional]
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

ApiResponse<[**GetClientResponse**](GetClientResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Client Details. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listClients

> ListClientsResponse listClients(companyId, fields, fieldset, sort, page, perPage, q)

List Clients

Lists the clients.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ListClientsResponse result = apiInstance.listClients(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#listClients");
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

[**ListClientsResponse**](ListClientsResponse.md)


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

## listClientsWithHttpInfo

> ApiResponse<ListClientsResponse> listClients listClientsWithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q)

List Clients

Lists the clients.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        Integer page = 1; // Integer | The page to retrieve.
        Integer perPage = 5; // Integer | The size of the page.
        String q = "q_example"; // String | Query for filtering the results.
        try {
            ApiResponse<ListClientsResponse> response = apiInstance.listClientsWithHttpInfo(companyId, fields, fieldset, sort, page, perPage, q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#listClients");
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

ApiResponse<[**ListClientsResponse**](ListClientsResponse.md)>


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


## modifyClient

> ModifyClientResponse modifyClient(companyId, clientId, modifyClientRequest)

Modify Client

Modifies the specified client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer clientId = 56; // Integer | The ID of the client.
        ModifyClientRequest modifyClientRequest = new ModifyClientRequest(); // ModifyClientRequest | The modified Client. First level parameters are managed in delta mode.
        try {
            ModifyClientResponse result = apiInstance.modifyClient(companyId, clientId, modifyClientRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#modifyClient");
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
 **clientId** | **Integer**| The ID of the client. |
 **modifyClientRequest** | [**ModifyClientRequest**](ModifyClientRequest.md)| The modified Client. First level parameters are managed in delta mode. | [optional]

### Return type

[**ModifyClientResponse**](ModifyClientResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Client modified. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## modifyClientWithHttpInfo

> ApiResponse<ModifyClientResponse> modifyClient modifyClientWithHttpInfo(companyId, clientId, modifyClientRequest)

Modify Client

Modifies the specified client.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.ClientsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        ClientsApi apiInstance = new ClientsApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        Integer clientId = 56; // Integer | The ID of the client.
        ModifyClientRequest modifyClientRequest = new ModifyClientRequest(); // ModifyClientRequest | The modified Client. First level parameters are managed in delta mode.
        try {
            ApiResponse<ModifyClientResponse> response = apiInstance.modifyClientWithHttpInfo(companyId, clientId, modifyClientRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ClientsApi#modifyClient");
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
 **clientId** | **Integer**| The ID of the client. |
 **modifyClientRequest** | [**ModifyClientRequest**](ModifyClientRequest.md)| The modified Client. First level parameters are managed in delta mode. | [optional]

### Return type

ApiResponse<[**ModifyClientResponse**](ModifyClientResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Client modified. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

