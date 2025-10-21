# It.FattureInCloud.Sdk.Model.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** | Company id | [optional] 
**Name** | **string** | Company name | [optional] 
**Type** | **CompanyType** |  | [optional] 
**AccessToken** | **string** | Company authentication token for this company. [Only if type&#x3D;company] | [optional] 
**ControlledCompanies** | [**List&lt;ControlledCompany&gt;**](ControlledCompany.md) | Company list of controlled companies [Only if type&#x3D;accountant] | [optional] 
**FicLicenseExpire** | **DateOnly** |  | [optional] 
**FicPlan** | **FattureInCloudPlanType** |  | [optional] 
**ConnectionId** | **int** | Company connection id | [optional] 
**TaxCode** | **string** | Company tax code | [optional] 
**VatNumber** | **string** | Company vat number | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

