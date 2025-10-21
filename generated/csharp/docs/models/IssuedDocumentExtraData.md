# It.FattureInCloud.Sdk.Model.IssuedDocumentExtraData
Issued document extra data [TS fields follow the technical specifications provided by \"Sistema Tessera Sanitaria\"]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultifattureSent** | **int** |  | [optional] 
**TsCommunication** | **bool** | Send issued document to \&quot;Sistema Tessera Sanitaria\&quot; | [optional] 
**TsFlagTipoSpesa** | **decimal** | Issued document ts \&quot;tipo spesa\&quot; [TK, FC, FV, SV,SP, AD, AS, ECG, SR] | [optional] 
**TsPagamentoTracciato** | **bool** | Issued document ts traced payment | [optional] 
**TsTipoSpesa** | **string** | Can be [ &#39;TK&#39;, &#39;FC&#39;, &#39;FV&#39;, &#39;SV&#39;, &#39;SP&#39;, &#39;AD&#39;, &#39;AS&#39;, &#39;SR&#39;, &#39;CT&#39;, &#39;PI&#39;, &#39;IC&#39;, &#39;AA&#39; ]. Refer to the technical specifications to learn more. | [optional] 
**TsOpposizione** | **bool** | Issued document ts \&quot;opposizione\&quot; | [optional] 
**TsStatus** | **int** | Issued document ts status | [optional] 
**TsFileId** | **string** | Issued document ts file id | [optional] 
**TsSentDate** | **DateOnly** | Issued document ts sent date | [optional] 
**TsFullAmount** | **bool** | Issued document ts total amount | [optional] 
**ImportedBy** | **string** | Issued document imported by software | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

