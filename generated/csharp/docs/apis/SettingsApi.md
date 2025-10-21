# It.FattureInCloud.Sdk.Api.SettingsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreatePaymentAccount**](SettingsApi.md#createpaymentaccount) | **POST** /c/{company_id}/settings/payment_accounts | Create Payment Account |
| [**CreatePaymentMethod**](SettingsApi.md#createpaymentmethod) | **POST** /c/{company_id}/settings/payment_methods | Create Payment Method |
| [**CreateVatType**](SettingsApi.md#createvattype) | **POST** /c/{company_id}/settings/vat_types | Create Vat Type |
| [**DeletePaymentAccount**](SettingsApi.md#deletepaymentaccount) | **DELETE** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Delete Payment Account |
| [**DeletePaymentMethod**](SettingsApi.md#deletepaymentmethod) | **DELETE** /c/{company_id}/settings/payment_methods/{payment_method_id} | Delete Payment Method |
| [**DeleteVatType**](SettingsApi.md#deletevattype) | **DELETE** /c/{company_id}/settings/vat_types/{vat_type_id} | Delete Vat Type |
| [**GetPaymentAccount**](SettingsApi.md#getpaymentaccount) | **GET** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Get Payment Account |
| [**GetPaymentMethod**](SettingsApi.md#getpaymentmethod) | **GET** /c/{company_id}/settings/payment_methods/{payment_method_id} | Get Payment Method |
| [**GetTaxProfile**](SettingsApi.md#gettaxprofile) | **GET** /c/{company_id}/settings/tax_profile | Get Tax Profile |
| [**GetVatType**](SettingsApi.md#getvattype) | **GET** /c/{company_id}/settings/vat_types/{vat_type_id} | Get Vat Type |
| [**ModifyPaymentAccount**](SettingsApi.md#modifypaymentaccount) | **PUT** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Modify Payment Account |
| [**ModifyPaymentMethod**](SettingsApi.md#modifypaymentmethod) | **PUT** /c/{company_id}/settings/payment_methods/{payment_method_id} | Modify Payment Method |
| [**ModifyVatType**](SettingsApi.md#modifyvattype) | **PUT** /c/{company_id}/settings/vat_types/{vat_type_id} | Modify Vat Type |

<a id="createpaymentaccount"></a>
# **CreatePaymentAccount**
> CreatePaymentAccountResponse CreatePaymentAccount (int companyId, CreatePaymentAccountRequest createPaymentAccountRequest = null)

Create Payment Account

Creates a new payment account.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createPaymentAccountRequest** | [**CreatePaymentAccountRequest**](CreatePaymentAccountRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="createpaymentmethod"></a>
# **CreatePaymentMethod**
> CreatePaymentMethodResponse CreatePaymentMethod (int companyId, CreatePaymentMethodRequest createPaymentMethodRequest = null)

Create Payment Method

Creates a new payment method.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createPaymentMethodRequest** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="createvattype"></a>
# **CreateVatType**
> CreateVatTypeResponse CreateVatType (int companyId, CreateVatTypeRequest createVatTypeRequest = null)

Create Vat Type

Creates a vat type.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createVatTypeRequest** | [**CreateVatTypeRequest**](CreateVatTypeRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletepaymentaccount"></a>
# **DeletePaymentAccount**
> void DeletePaymentAccount (int companyId, int paymentAccountId)

Delete Payment Account

Deletes the specified payment account.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **paymentAccountId** | **int** | The Referred Payment Account Id. |  |

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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletepaymentmethod"></a>
# **DeletePaymentMethod**
> void DeletePaymentMethod (int companyId, int paymentMethodId)

Delete Payment Method

Deletes the specified payment method.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **paymentMethodId** | **int** | The Referred Payment Method Id. |  |

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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletevattype"></a>
# **DeleteVatType**
> void DeleteVatType (int companyId, int vatTypeId)

Delete Vat Type

Deletes the specified vat type.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **vatTypeId** | **int** | The Referred Vat Type Id. |  |

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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getpaymentaccount"></a>
# **GetPaymentAccount**
> GetPaymentAccountResponse GetPaymentAccount (int companyId, int paymentAccountId, string fields = null, string fieldset = null)

Get Payment Account

Gets the specified payment account.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **paymentAccountId** | **int** | The Referred Payment Account Id. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getpaymentmethod"></a>
# **GetPaymentMethod**
> GetPaymentMethodResponse GetPaymentMethod (int companyId, int paymentMethodId, string fields = null, string fieldset = null)

Get Payment Method

Gets the specified payment method.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **paymentMethodId** | **int** | The Referred Payment Method Id. |  |
| **fields** | **string** | List of comma-separated fields. | [optional]  |
| **fieldset** | **string** | Name of the fieldset. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="gettaxprofile"></a>
# **GetTaxProfile**
> GetTaxProfileResponse GetTaxProfile (int companyId)

Get Tax Profile

Gets the Tax Profile


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |

### Return type

[**GetTaxProfileResponse**](GetTaxProfileResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getvattype"></a>
# **GetVatType**
> GetVatTypeResponse GetVatType (int companyId, int vatTypeId)

Get Vat Type

Gets the specified vat type.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **vatTypeId** | **int** | The Referred Vat Type Id. |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifypaymentaccount"></a>
# **ModifyPaymentAccount**
> ModifyPaymentAccountResponse ModifyPaymentAccount (int companyId, int paymentAccountId, ModifyPaymentAccountRequest modifyPaymentAccountRequest = null)

Modify Payment Account

Modifies the specified payment account.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **paymentAccountId** | **int** | The Referred Payment Account Id. |  |
| **modifyPaymentAccountRequest** | [**ModifyPaymentAccountRequest**](ModifyPaymentAccountRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifypaymentmethod"></a>
# **ModifyPaymentMethod**
> ModifyPaymentMethodResponse ModifyPaymentMethod (int companyId, int paymentMethodId, ModifyPaymentMethodRequest modifyPaymentMethodRequest = null)

Modify Payment Method

Modifies the specified payment method.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **paymentMethodId** | **int** | The Referred Payment Method Id. |  |
| **modifyPaymentMethodRequest** | [**ModifyPaymentMethodRequest**](ModifyPaymentMethodRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="modifyvattype"></a>
# **ModifyVatType**
> ModifyVatTypeResponse ModifyVatType (int companyId, int vatTypeId, ModifyVatTypeRequest modifyVatTypeRequest = null)

Modify Vat Type

Modifies the specified vat type.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **vatTypeId** | **int** | The Referred Vat Type Id. |  |
| **modifyVatTypeRequest** | [**ModifyVatTypeRequest**](ModifyVatTypeRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

