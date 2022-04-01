

# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique identifier. |  [optional]
**name** | **String** | Product name. |  [optional]
**code** | **String** | Product code. |  [optional]
**netPrice** | **BigDecimal** | Net sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically). |  [optional]
**grossPrice** | **BigDecimal** | Gross sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically). |  [optional]
**useGrossPrice** | **Boolean** | Determine which price to use for calculations. |  [optional]
**defaultVat** | [**VatType**](VatType.md) |  |  [optional]
**netCost** | **BigDecimal** | Net cost of the product (used for received documents). |  [optional]
**measure** | **String** | Unit of measure. |  [optional]
**description** | **String** | Product description. |  [optional]
**category** | **String** | Product category. |  [optional]
**notes** | **String** | Extra notes. |  [optional]
**inStock** | **Boolean** | Determine if the product is in stock. |  [optional]
**stockInitial** | **BigDecimal** | Product initial stock. |  [optional]
**stockCurrent** | **BigDecimal** | [Read Only] Product current stock. |  [optional] [readonly]
**averageCost** | **BigDecimal** | Product average cost. |  [optional]
**averagePrice** | **BigDecimal** | Product average price. |  [optional]
**createdAt** | **String** |  |  [optional]
**updatedAt** | **String** |  |  [optional]


## Implemented Interfaces

* Serializable


