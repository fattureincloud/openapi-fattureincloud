# It.FattureInCloud.Sdk.Api.SuppliersApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateSupplier**](SuppliersApi.md#createsupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier |
| [**DeleteSupplier**](SuppliersApi.md#deletesupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier |
| [**GetSupplier**](SuppliersApi.md#getsupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier |
| [**ListSuppliers**](SuppliersApi.md#listsuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers |
| [**ModifySupplier**](SuppliersApi.md#modifysupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier |

<a id="createsupplier"></a>
# **CreateSupplier**
> CreateSupplierResponse CreateSupplier (int companyId, CreateSupplierRequest createSupplierRequest = null)

Create Supplier

Creates a new supplier.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createSupplierRequest** | [**CreateSupplierRequest**](CreateSupplierRequest.md) | The supplier to create | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletesupplier"></a>
# **DeleteSupplier**
> void DeleteSupplier (int companyId, int supplierId)

Delete Supplier

Deletes the specified supplier.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **supplierId** | **int** | The ID of the supplier. |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getsupplier"></a>
# **GetSupplier**
> GetSupplierResponse GetSupplier (int companyId, int supplierId, string fields = null, string fieldset = null)

Get Supplier

Gets the specified supplier.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **supplierId** | **int** | The ID of the supplier. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listsuppliers"></a>
# **ListSuppliers**
> ListSuppliersResponse ListSuppliers (int companyId, string fields = null, string fieldset = null, string sort = null, int page = null, int perPage = null, string q = null)

List Suppliers

Lists the suppliers.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |
| **sort** | **string** | List of comma-separated fields for result sorting (minus for desc sorting). | [optional]  |
| **page** | **int** | The page to retrieve. | [optional] [default to 1] |
| **perPage** | **int** | The size of the page. | [optional] [default to 5] |
| **q** | **string** | Query for filtering the results. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifysupplier"></a>
# **ModifySupplier**
> ModifySupplierResponse ModifySupplier (int companyId, int supplierId, ModifySupplierRequest modifySupplierRequest = null)

Modify Supplier

Modifies the specified supplier.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **supplierId** | **int** | The ID of the supplier. |  |
| **modifySupplierRequest** | [**ModifySupplierRequest**](ModifySupplierRequest.md) | The modified Supplier. First level parameters are managed in delta mode. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

