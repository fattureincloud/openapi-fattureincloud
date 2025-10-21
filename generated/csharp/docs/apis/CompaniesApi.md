# It.FattureInCloud.Sdk.Api.CompaniesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCompanyInfo**](CompaniesApi.md#getcompanyinfo) | **GET** /c/{company_id}/company/info | Get Company Info |
| [**GetCompanyPlanUsage**](CompaniesApi.md#getcompanyplanusage) | **GET** /c/{company_id}/company/plan_usage | Get Company Plan Usage |

<a id="getcompanyinfo"></a>
# **GetCompanyInfo**
> GetCompanyInfoResponse GetCompanyInfo (int companyId)

Get Company Info

Gets the company detailed info.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getcompanyplanusage"></a>
# **GetCompanyPlanUsage**
> GetCompanyPlanUsageResponse GetCompanyPlanUsage (int companyId, string category)

Get Company Plan Usage

Gets the company limits usage.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **category** | **string** | Category |  |

### Return type

[**GetCompanyPlanUsageResponse**](GetCompanyPlanUsageResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Example response |  -  |
| **401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

