# InfoApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listArchiveCategories**](InfoApi.md#listArchiveCategories) | **GET** /c/{company_id}/info/archive_categories | List Archive Categories
[**listArchiveCategoriesWithHttpInfo**](InfoApi.md#listArchiveCategoriesWithHttpInfo) | **GET** /c/{company_id}/info/archive_categories | List Archive Categories
[**listCities**](InfoApi.md#listCities) | **GET** /info/cities | List Cities
[**listCitiesWithHttpInfo**](InfoApi.md#listCitiesWithHttpInfo) | **GET** /info/cities | List Cities
[**listCostCenters**](InfoApi.md#listCostCenters) | **GET** /c/{company_id}/info/cost_centers | List Cost Centers
[**listCostCentersWithHttpInfo**](InfoApi.md#listCostCentersWithHttpInfo) | **GET** /c/{company_id}/info/cost_centers | List Cost Centers
[**listCountries**](InfoApi.md#listCountries) | **GET** /info/countries | List Countries
[**listCountriesWithHttpInfo**](InfoApi.md#listCountriesWithHttpInfo) | **GET** /info/countries | List Countries
[**listCurrencies**](InfoApi.md#listCurrencies) | **GET** /info/currencies | List Currencies
[**listCurrenciesWithHttpInfo**](InfoApi.md#listCurrenciesWithHttpInfo) | **GET** /info/currencies | List Currencies
[**listDeliveryNotesDefaultCausals**](InfoApi.md#listDeliveryNotesDefaultCausals) | **GET** /info/dn_causals | List Delivery Notes Default Causals
[**listDeliveryNotesDefaultCausalsWithHttpInfo**](InfoApi.md#listDeliveryNotesDefaultCausalsWithHttpInfo) | **GET** /info/dn_causals | List Delivery Notes Default Causals
[**listDetailedCountries**](InfoApi.md#listDetailedCountries) | **GET** /info/detailed_countries | List Detailed Countries
[**listDetailedCountriesWithHttpInfo**](InfoApi.md#listDetailedCountriesWithHttpInfo) | **GET** /info/detailed_countries | List Detailed Countries
[**listLanguages**](InfoApi.md#listLanguages) | **GET** /info/languages | List Languages
[**listLanguagesWithHttpInfo**](InfoApi.md#listLanguagesWithHttpInfo) | **GET** /info/languages | List Languages
[**listPaymentAccounts**](InfoApi.md#listPaymentAccounts) | **GET** /c/{company_id}/info/payment_accounts | List Payment Accounts
[**listPaymentAccountsWithHttpInfo**](InfoApi.md#listPaymentAccountsWithHttpInfo) | **GET** /c/{company_id}/info/payment_accounts | List Payment Accounts
[**listPaymentMethods**](InfoApi.md#listPaymentMethods) | **GET** /c/{company_id}/info/payment_methods | List Payment Methods
[**listPaymentMethodsWithHttpInfo**](InfoApi.md#listPaymentMethodsWithHttpInfo) | **GET** /c/{company_id}/info/payment_methods | List Payment Methods
[**listProductCategories**](InfoApi.md#listProductCategories) | **GET** /c/{company_id}/info/product_categories | List Product Categories
[**listProductCategoriesWithHttpInfo**](InfoApi.md#listProductCategoriesWithHttpInfo) | **GET** /c/{company_id}/info/product_categories | List Product Categories
[**listReceivedDocumentCategories**](InfoApi.md#listReceivedDocumentCategories) | **GET** /c/{company_id}/info/received_document_categories | List Received Document Categories
[**listReceivedDocumentCategoriesWithHttpInfo**](InfoApi.md#listReceivedDocumentCategoriesWithHttpInfo) | **GET** /c/{company_id}/info/received_document_categories | List Received Document Categories
[**listRevenueCenters**](InfoApi.md#listRevenueCenters) | **GET** /c/{company_id}/info/revenue_centers | List Revenue Centers
[**listRevenueCentersWithHttpInfo**](InfoApi.md#listRevenueCentersWithHttpInfo) | **GET** /c/{company_id}/info/revenue_centers | List Revenue Centers
[**listTemplates**](InfoApi.md#listTemplates) | **GET** /info/templates | List Templates
[**listTemplatesWithHttpInfo**](InfoApi.md#listTemplatesWithHttpInfo) | **GET** /info/templates | List Templates
[**listUnitsOfMeasure**](InfoApi.md#listUnitsOfMeasure) | **GET** /info/measures | List Units of Measure
[**listUnitsOfMeasureWithHttpInfo**](InfoApi.md#listUnitsOfMeasureWithHttpInfo) | **GET** /info/measures | List Units of Measure
[**listVatTypes**](InfoApi.md#listVatTypes) | **GET** /c/{company_id}/info/vat_types | List Vat Types
[**listVatTypesWithHttpInfo**](InfoApi.md#listVatTypesWithHttpInfo) | **GET** /c/{company_id}/info/vat_types | List Vat Types



## listArchiveCategories

> ListArchiveCategoriesResponse listArchiveCategories(companyId)

List Archive Categories

Lists the archive categories.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ListArchiveCategoriesResponse result = apiInstance.listArchiveCategories(companyId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listArchiveCategories");
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

[**ListArchiveCategoriesResponse**](ListArchiveCategoriesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Archive Categories list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listArchiveCategoriesWithHttpInfo

> ApiResponse<ListArchiveCategoriesResponse> listArchiveCategories listArchiveCategoriesWithHttpInfo(companyId)

List Archive Categories

Lists the archive categories.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ApiResponse<ListArchiveCategoriesResponse> response = apiInstance.listArchiveCategoriesWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listArchiveCategories");
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

ApiResponse<[**ListArchiveCategoriesResponse**](ListArchiveCategoriesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Archive Categories list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listCities

> ListCitiesResponse listCities(postalCode, city)

List Cities

Lists the Italian cities.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        String postalCode = "postalCode_example"; // String | Postal code for filtering.
        String city = "city_example"; // String | City for filtering (ignored if postal_code is passed).
        try {
            ListCitiesResponse result = apiInstance.listCities(postalCode, city);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCities");
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
 **postalCode** | **String**| Postal code for filtering. | [optional]
 **city** | **String**| City for filtering (ignored if postal_code is passed). | [optional]

### Return type

[**ListCitiesResponse**](ListCitiesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cities List. |  -  |

## listCitiesWithHttpInfo

> ApiResponse<ListCitiesResponse> listCities listCitiesWithHttpInfo(postalCode, city)

List Cities

Lists the Italian cities.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        String postalCode = "postalCode_example"; // String | Postal code for filtering.
        String city = "city_example"; // String | City for filtering (ignored if postal_code is passed).
        try {
            ApiResponse<ListCitiesResponse> response = apiInstance.listCitiesWithHttpInfo(postalCode, city);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCities");
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
 **postalCode** | **String**| Postal code for filtering. | [optional]
 **city** | **String**| City for filtering (ignored if postal_code is passed). | [optional]

### Return type

ApiResponse<[**ListCitiesResponse**](ListCitiesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cities List. |  -  |


## listCostCenters

> ListCostCentersResponse listCostCenters(companyId)

List Cost Centers

Lists the cost centers.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ListCostCentersResponse result = apiInstance.listCostCenters(companyId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCostCenters");
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

[**ListCostCentersResponse**](ListCostCentersResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Cost Centers |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listCostCentersWithHttpInfo

> ApiResponse<ListCostCentersResponse> listCostCenters listCostCentersWithHttpInfo(companyId)

List Cost Centers

Lists the cost centers.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ApiResponse<ListCostCentersResponse> response = apiInstance.listCostCentersWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCostCenters");
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

ApiResponse<[**ListCostCentersResponse**](ListCostCentersResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Cost Centers |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listCountries

> ListCountriesResponse listCountries()

List Countries

Lists the supported countries.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ListCountriesResponse result = apiInstance.listCountries();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCountries");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCountriesResponse**](ListCountriesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of countries |  -  |
| **401** | Unauthorized |  -  |

## listCountriesWithHttpInfo

> ApiResponse<ListCountriesResponse> listCountries listCountriesWithHttpInfo()

List Countries

Lists the supported countries.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ApiResponse<ListCountriesResponse> response = apiInstance.listCountriesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCountries");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListCountriesResponse**](ListCountriesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of countries |  -  |
| **401** | Unauthorized |  -  |


## listCurrencies

> ListCurrenciesResponse listCurrencies()

List Currencies

Lists the supported currencies.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ListCurrenciesResponse result = apiInstance.listCurrencies();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCurrencies");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCurrenciesResponse**](ListCurrenciesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Currencies List. |  -  |
| **401** | Unauthorized |  -  |

## listCurrenciesWithHttpInfo

> ApiResponse<ListCurrenciesResponse> listCurrencies listCurrenciesWithHttpInfo()

List Currencies

Lists the supported currencies.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ApiResponse<ListCurrenciesResponse> response = apiInstance.listCurrenciesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listCurrencies");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListCurrenciesResponse**](ListCurrenciesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Currencies List. |  -  |
| **401** | Unauthorized |  -  |


## listDeliveryNotesDefaultCausals

> ListDeliveryNotesDefaultCausalsResponse listDeliveryNotesDefaultCausals()

List Delivery Notes Default Causals

Lists the delivery note default causals.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ListDeliveryNotesDefaultCausalsResponse result = apiInstance.listDeliveryNotesDefaultCausals();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listDeliveryNotesDefaultCausals");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListDeliveryNotesDefaultCausalsResponse**](ListDeliveryNotesDefaultCausalsResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Delivery Notes Default Causals |  -  |
| **401** | Unauthorized |  -  |

## listDeliveryNotesDefaultCausalsWithHttpInfo

> ApiResponse<ListDeliveryNotesDefaultCausalsResponse> listDeliveryNotesDefaultCausals listDeliveryNotesDefaultCausalsWithHttpInfo()

List Delivery Notes Default Causals

Lists the delivery note default causals.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ApiResponse<ListDeliveryNotesDefaultCausalsResponse> response = apiInstance.listDeliveryNotesDefaultCausalsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listDeliveryNotesDefaultCausals");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListDeliveryNotesDefaultCausalsResponse**](ListDeliveryNotesDefaultCausalsResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Delivery Notes Default Causals |  -  |
| **401** | Unauthorized |  -  |


## listDetailedCountries

> ListDetailedCountriesResponse listDetailedCountries()

List Detailed Countries

Lists the supported countries.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ListDetailedCountriesResponse result = apiInstance.listDetailedCountries();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listDetailedCountries");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListDetailedCountriesResponse**](ListDetailedCountriesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of detailed countries |  -  |
| **401** | Unauthorized |  -  |

## listDetailedCountriesWithHttpInfo

> ApiResponse<ListDetailedCountriesResponse> listDetailedCountries listDetailedCountriesWithHttpInfo()

List Detailed Countries

Lists the supported countries.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ApiResponse<ListDetailedCountriesResponse> response = apiInstance.listDetailedCountriesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listDetailedCountries");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListDetailedCountriesResponse**](ListDetailedCountriesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of detailed countries |  -  |
| **401** | Unauthorized |  -  |


## listLanguages

> ListLanguagesResponse listLanguages()

List Languages

Lists the supported languages.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ListLanguagesResponse result = apiInstance.listLanguages();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listLanguages");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListLanguagesResponse**](ListLanguagesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | LanguagesList |  -  |
| **401** | Unauthorized |  -  |

## listLanguagesWithHttpInfo

> ApiResponse<ListLanguagesResponse> listLanguages listLanguagesWithHttpInfo()

List Languages

Lists the supported languages.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ApiResponse<ListLanguagesResponse> response = apiInstance.listLanguagesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listLanguages");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListLanguagesResponse**](ListLanguagesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | LanguagesList |  -  |
| **401** | Unauthorized |  -  |


## listPaymentAccounts

> ListPaymentAccountsResponse listPaymentAccounts(companyId, fields, fieldset, sort)

List Payment Accounts

Lists the available payment accounts.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        try {
            ListPaymentAccountsResponse result = apiInstance.listPaymentAccounts(companyId, fields, fieldset, sort);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listPaymentAccounts");
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

### Return type

[**ListPaymentAccountsResponse**](ListPaymentAccountsResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment accounts list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listPaymentAccountsWithHttpInfo

> ApiResponse<ListPaymentAccountsResponse> listPaymentAccounts listPaymentAccountsWithHttpInfo(companyId, fields, fieldset, sort)

List Payment Accounts

Lists the available payment accounts.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        try {
            ApiResponse<ListPaymentAccountsResponse> response = apiInstance.listPaymentAccountsWithHttpInfo(companyId, fields, fieldset, sort);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listPaymentAccounts");
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

### Return type

ApiResponse<[**ListPaymentAccountsResponse**](ListPaymentAccountsResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment accounts list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listPaymentMethods

> ListPaymentMethodsResponse listPaymentMethods(companyId, fields, fieldset, sort)

List Payment Methods

Lists the available payment methods.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        try {
            ListPaymentMethodsResponse result = apiInstance.listPaymentMethods(companyId, fields, fieldset, sort);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listPaymentMethods");
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

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment methods list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listPaymentMethodsWithHttpInfo

> ApiResponse<ListPaymentMethodsResponse> listPaymentMethods listPaymentMethodsWithHttpInfo(companyId, fields, fieldset, sort)

List Payment Methods

Lists the available payment methods.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fields = "fields_example"; // String | List of comma-separated fields.
        String fieldset = "basic"; // String | Name of the fieldset.
        String sort = "sort_example"; // String | List of comma-separated fields for result sorting (minus for desc sorting).
        try {
            ApiResponse<ListPaymentMethodsResponse> response = apiInstance.listPaymentMethodsWithHttpInfo(companyId, fields, fieldset, sort);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listPaymentMethods");
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

### Return type

ApiResponse<[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment methods list. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listProductCategories

> ListProductCategoriesResponse listProductCategories(companyId, context)

List Product Categories

Lists the product categories.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String context = "products"; // String | 
        try {
            ListProductCategoriesResponse result = apiInstance.listProductCategories(companyId, context);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listProductCategories");
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
 **context** | **String**|  | [enum: products, issued_documents, received_documents]

### Return type

[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product Categories List |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listProductCategoriesWithHttpInfo

> ApiResponse<ListProductCategoriesResponse> listProductCategories listProductCategoriesWithHttpInfo(companyId, context)

List Product Categories

Lists the product categories.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String context = "products"; // String | 
        try {
            ApiResponse<ListProductCategoriesResponse> response = apiInstance.listProductCategoriesWithHttpInfo(companyId, context);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listProductCategories");
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
 **context** | **String**|  | [enum: products, issued_documents, received_documents]

### Return type

ApiResponse<[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product Categories List |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listReceivedDocumentCategories

> ListReceivedDocumentCategoriesResponse listReceivedDocumentCategories(companyId)

List Received Document Categories

Lists the received document categories.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ListReceivedDocumentCategoriesResponse result = apiInstance.listReceivedDocumentCategories(companyId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listReceivedDocumentCategories");
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

[**ListReceivedDocumentCategoriesResponse**](ListReceivedDocumentCategoriesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Received Document Categories List |  -  |

## listReceivedDocumentCategoriesWithHttpInfo

> ApiResponse<ListReceivedDocumentCategoriesResponse> listReceivedDocumentCategories listReceivedDocumentCategoriesWithHttpInfo(companyId)

List Received Document Categories

Lists the received document categories.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ApiResponse<ListReceivedDocumentCategoriesResponse> response = apiInstance.listReceivedDocumentCategoriesWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listReceivedDocumentCategories");
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

ApiResponse<[**ListReceivedDocumentCategoriesResponse**](ListReceivedDocumentCategoriesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Received Document Categories List |  -  |


## listRevenueCenters

> ListRevenueCentersResponse listRevenueCenters(companyId)

List Revenue Centers

Lists the revenue centers.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ListRevenueCentersResponse result = apiInstance.listRevenueCenters(companyId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listRevenueCenters");
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

[**ListRevenueCentersResponse**](ListRevenueCentersResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Revenue Centers |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listRevenueCentersWithHttpInfo

> ApiResponse<ListRevenueCentersResponse> listRevenueCenters listRevenueCentersWithHttpInfo(companyId)

List Revenue Centers

Lists the revenue centers.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        try {
            ApiResponse<ListRevenueCentersResponse> response = apiInstance.listRevenueCentersWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listRevenueCenters");
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

ApiResponse<[**ListRevenueCentersResponse**](ListRevenueCentersResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Revenue Centers |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |


## listTemplates

> ListTemplatesResponse listTemplates(type, byType)

List Templates

Lists the available templates.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        String type = "all"; // String | Type of the templates.
        Boolean byType = false; // Boolean | [Only if type=all] If true, splits the list in objects, grouping templates by type.
        try {
            ListTemplatesResponse result = apiInstance.listTemplates(type, byType);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listTemplates");
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
 **type** | **String**| Type of the templates. | [optional] [default to all] [enum: all, standard, delivery_note, accompanying_invoice]
 **byType** | **Boolean**| [Only if type&#x3D;all] If true, splits the list in objects, grouping templates by type. | [optional] [default to false]

### Return type

[**ListTemplatesResponse**](ListTemplatesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Templates list. |  -  |
| **401** | Unauthorized |  -  |

## listTemplatesWithHttpInfo

> ApiResponse<ListTemplatesResponse> listTemplates listTemplatesWithHttpInfo(type, byType)

List Templates

Lists the available templates.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        String type = "all"; // String | Type of the templates.
        Boolean byType = false; // Boolean | [Only if type=all] If true, splits the list in objects, grouping templates by type.
        try {
            ApiResponse<ListTemplatesResponse> response = apiInstance.listTemplatesWithHttpInfo(type, byType);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listTemplates");
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
 **type** | **String**| Type of the templates. | [optional] [default to all] [enum: all, standard, delivery_note, accompanying_invoice]
 **byType** | **Boolean**| [Only if type&#x3D;all] If true, splits the list in objects, grouping templates by type. | [optional] [default to false]

### Return type

ApiResponse<[**ListTemplatesResponse**](ListTemplatesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Templates list. |  -  |
| **401** | Unauthorized |  -  |


## listUnitsOfMeasure

> ListUnitsOfMeasureResponse listUnitsOfMeasure()

List Units of Measure

Lists the units of measure.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ListUnitsOfMeasureResponse result = apiInstance.listUnitsOfMeasure();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listUnitsOfMeasure");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListUnitsOfMeasureResponse**](ListUnitsOfMeasureResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Units of measure. |  -  |
| **401** | Unauthorized |  -  |

## listUnitsOfMeasureWithHttpInfo

> ApiResponse<ListUnitsOfMeasureResponse> listUnitsOfMeasure listUnitsOfMeasureWithHttpInfo()

List Units of Measure

Lists the units of measure.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        try {
            ApiResponse<ListUnitsOfMeasureResponse> response = apiInstance.listUnitsOfMeasureWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listUnitsOfMeasure");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListUnitsOfMeasureResponse**](ListUnitsOfMeasureResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Units of measure. |  -  |
| **401** | Unauthorized |  -  |


## listVatTypes

> ListVatTypesResponse listVatTypes(companyId, fieldset)

List Vat Types

Lists the available vat types.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ListVatTypesResponse result = apiInstance.listVatTypes(companyId, fieldset);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listVatTypes");
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
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

[**ListVatTypesResponse**](ListVatTypesResponse.md)


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Vat Types. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

## listVatTypesWithHttpInfo

> ApiResponse<ListVatTypesResponse> listVatTypes listVatTypesWithHttpInfo(companyId, fieldset)

List Vat Types

Lists the available vat types.

### Example

```java
// Import classes:
import it.fattureincloud.sdk.ApiClient;
import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.ApiResponse;
import it.fattureincloud.sdk.Configuration;
import it.fattureincloud.sdk.auth.*;
import it.fattureincloud.sdk.model.*;
import it.fattureincloud.sdk.api.InfoApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-v2.fattureincloud.it");
        
        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow
        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");
        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");

        InfoApi apiInstance = new InfoApi(defaultClient);
        Integer companyId = 12345; // Integer | The ID of the company.
        String fieldset = "basic"; // String | Name of the fieldset.
        try {
            ApiResponse<ListVatTypesResponse> response = apiInstance.listVatTypesWithHttpInfo(companyId, fieldset);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfoApi#listVatTypes");
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
 **fieldset** | **String**| Name of the fieldset. | [optional] [enum: basic, detailed]

### Return type

ApiResponse<[**ListVatTypesResponse**](ListVatTypesResponse.md)>


### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Vat Types. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

