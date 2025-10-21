# It.FattureInCloud.Sdk.Api.WebhooksApi

All URIs are relative to *https://api-v2.fattureincloud.it*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateWebhooksSubscription**](WebhooksApi.md#createwebhookssubscription) | **POST** /c/{company_id}/subscriptions | Create a Webhook Subscription |
| [**DeleteWebhooksSubscription**](WebhooksApi.md#deletewebhookssubscription) | **DELETE** /c/{company_id}/subscriptions/{subscription_id} | Delete Webhooks Subscription |
| [**GetWebhooksSubscription**](WebhooksApi.md#getwebhookssubscription) | **GET** /c/{company_id}/subscriptions/{subscription_id} | Get Webhooks Subscription |
| [**ListWebhooksSubscriptions**](WebhooksApi.md#listwebhookssubscriptions) | **GET** /c/{company_id}/subscriptions | List Webhooks Subscriptions |
| [**ModifyWebhooksSubscription**](WebhooksApi.md#modifywebhookssubscription) | **PUT** /c/{company_id}/subscriptions/{subscription_id} | Modify Webhooks Subscription |
| [**VerifyWebhooksSubscription**](WebhooksApi.md#verifywebhookssubscription) | **POST** /c/{company_id}/subscriptions/{subscription_id}/verify | Verify Webhooks Subscription |

<a id="createwebhookssubscription"></a>
# **CreateWebhooksSubscription**
> CreateWebhooksSubscriptionResponse CreateWebhooksSubscription (int companyId, CreateWebhooksSubscriptionRequest createWebhooksSubscriptionRequest = null)

Create a Webhook Subscription

Register some webhooks Subscriptions.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **createWebhooksSubscriptionRequest** | [**CreateWebhooksSubscriptionRequest**](CreateWebhooksSubscriptionRequest.md) |  | [optional]  |

### Return type

[**CreateWebhooksSubscriptionResponse**](CreateWebhooksSubscriptionResponse.md)

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

<a id="deletewebhookssubscription"></a>
# **DeleteWebhooksSubscription**
> void DeleteWebhooksSubscription (int companyId, string subscriptionId)

Delete Webhooks Subscription

Delete a webhooks subscription.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **subscriptionId** | **string** | The ID of the subscription. |  |

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

<a id="getwebhookssubscription"></a>
# **GetWebhooksSubscription**
> GetWebhooksSubscriptionResponse GetWebhooksSubscription (int companyId, string subscriptionId)

Get Webhooks Subscription

Get a webhooks subscription.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **subscriptionId** | **string** | The ID of the subscription. |  |

### Return type

[**GetWebhooksSubscriptionResponse**](GetWebhooksSubscriptionResponse.md)

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

<a id="listwebhookssubscriptions"></a>
# **ListWebhooksSubscriptions**
> ListWebhooksSubscriptionsResponse ListWebhooksSubscriptions (int companyId)

List Webhooks Subscriptions

List active webhooks subscriptions.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |

### Return type

[**ListWebhooksSubscriptionsResponse**](ListWebhooksSubscriptionsResponse.md)

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

<a id="modifywebhookssubscription"></a>
# **ModifyWebhooksSubscription**
> ModifyWebhooksSubscriptionResponse ModifyWebhooksSubscription (int companyId, string subscriptionId, ModifyWebhooksSubscriptionRequest modifyWebhooksSubscriptionRequest = null)

Modify Webhooks Subscription

Edit a webhooks subscription.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **subscriptionId** | **string** | The ID of the subscription. |  |
| **modifyWebhooksSubscriptionRequest** | [**ModifyWebhooksSubscriptionRequest**](ModifyWebhooksSubscriptionRequest.md) |  | [optional]  |

### Return type

[**ModifyWebhooksSubscriptionResponse**](ModifyWebhooksSubscriptionResponse.md)

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

<a id="verifywebhookssubscription"></a>
# **VerifyWebhooksSubscription**
> void VerifyWebhooksSubscription (int companyId, string subscriptionId, VerifyWebhooksSubscriptionRequest verifyWebhooksSubscriptionRequest = null)

Verify Webhooks Subscription

Verify a webhook subscription.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | The ID of the company. |  |
| **subscriptionId** | **string** | The ID of the subscription. |  |
| **verifyWebhooksSubscriptionRequest** | [**VerifyWebhooksSubscriptionRequest**](VerifyWebhooksSubscriptionRequest.md) |  | [optional]  |

### Return type

void (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

