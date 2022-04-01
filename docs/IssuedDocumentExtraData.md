

# IssuedDocumentExtraData

Extra data. TS fields follow the technical specifications provided by \"Sistema Tessera Sanitaria\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showSofortButton** | **Boolean** |  |  [optional]
**multifattureSent** | **Integer** |  |  [optional]
**tsCommunication** | **Boolean** |  |  [optional]
**tsFlagTipoSpesa** | **BigDecimal** | 1 &#x3D;&gt; TK (Ticket di pronto soccorso); 2 &#x3D;&gt; SR (Visita in intramoenia) |  [optional]
**tsPagamentoTracciato** | **Boolean** |  |  [optional]
**tsTipoSpesa** | **String** | Can be [ &#39;TK&#39;, &#39;FC&#39;, &#39;FV&#39;, &#39;SV&#39;, &#39;SP&#39;, &#39;AD&#39;, &#39;AS&#39;, &#39;SR&#39;, &#39;CT&#39;, &#39;PI&#39;, &#39;IC&#39;, &#39;AA&#39; ]. Refer to the technical specifications to learn more. |  [optional]
**tsOpposizione** | **Boolean** |  |  [optional]
**tsStatus** | **Integer** |  |  [optional]
**tsFileId** | **String** |  |  [optional]
**tsSentDate** | **LocalDate** |  |  [optional]
**tsFullAmount** | **Boolean** |  |  [optional]
**importedBy** | **String** |  |  [optional]
**tsSingleSending** | **Boolean** |  |  [optional]


## Implemented Interfaces

* Serializable


