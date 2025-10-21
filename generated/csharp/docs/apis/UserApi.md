# It.FattureInCloud.Sdk.Api.UserApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetUserInfo**](UserApi.md#getuserinfo) | **GET** /user/info | Get User Info |
| [**ListUserCompanies**](UserApi.md#listusercompanies) | **GET** /user/companies | List User Companies |

<a id="getuserinfo"></a>
# **GetUserInfo**
> GetUserInfoResponse GetUserInfo ()

Get User Info

Gets the current user's info.


### Parameters
This endpoint does not need any parameter.
### Return type

[**GetUserInfoResponse**](GetUserInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listusercompanies"></a>
# **ListUserCompanies**
> ListUserCompaniesResponse ListUserCompanies ()

List User Companies

Lists the companies controlled by the current user.


### Parameters
This endpoint does not need any parameter.
### Return type

[**ListUserCompaniesResponse**](ListUserCompaniesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User Companies. |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

