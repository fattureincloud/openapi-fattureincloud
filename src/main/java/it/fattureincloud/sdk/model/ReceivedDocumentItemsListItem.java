/*
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package it.fattureincloud.sdk.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import it.fattureincloud.sdk.model.VatType;
import java.io.IOException;
import java.math.BigDecimal;
import org.openapitools.jackson.nullable.JsonNullable;
import java.io.Serializable;

/**
 * ReceivedDocumentItemsListItem
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-04-01T07:52:35.364263Z[GMT]")
public class ReceivedDocumentItemsListItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Integer id;

  public static final String SERIALIZED_NAME_PRODUCT_ID = "product_id";
  @SerializedName(SERIALIZED_NAME_PRODUCT_ID)
  private Integer productId;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_MEASURE = "measure";
  @SerializedName(SERIALIZED_NAME_MEASURE)
  private String measure;

  public static final String SERIALIZED_NAME_NET_PRICE = "net_price";
  @SerializedName(SERIALIZED_NAME_NET_PRICE)
  private BigDecimal netPrice;

  public static final String SERIALIZED_NAME_CATEGORY = "category";
  @SerializedName(SERIALIZED_NAME_CATEGORY)
  private String category;

  public static final String SERIALIZED_NAME_QTY = "qty";
  @SerializedName(SERIALIZED_NAME_QTY)
  private BigDecimal qty;

  public static final String SERIALIZED_NAME_VAT = "vat";
  @SerializedName(SERIALIZED_NAME_VAT)
  private VatType vat;

  public static final String SERIALIZED_NAME_STOCK = "stock";
  @SerializedName(SERIALIZED_NAME_STOCK)
  private BigDecimal stock;

  public ReceivedDocumentItemsListItem() { 
  }

  public ReceivedDocumentItemsListItem id(Integer id) {
    
    this.id = id;
    return this;
  }

   /**
   * Unique identifier.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Unique identifier.")

  public Integer getId() {
    return id;
  }


  public void setId(Integer id) {
    this.id = id;
  }


  public ReceivedDocumentItemsListItem productId(Integer productId) {
    
    this.productId = productId;
    return this;
  }

   /**
   * Unique identifier of the product
   * @return productId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Unique identifier of the product")

  public Integer getProductId() {
    return productId;
  }


  public void setProductId(Integer productId) {
    this.productId = productId;
  }


  public ReceivedDocumentItemsListItem code(String code) {
    
    this.code = code;
    return this;
  }

   /**
   * Product code.
   * @return code
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product code.")

  public String getCode() {
    return code;
  }


  public void setCode(String code) {
    this.code = code;
  }


  public ReceivedDocumentItemsListItem name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Product name.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product name.")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public ReceivedDocumentItemsListItem measure(String measure) {
    
    this.measure = measure;
    return this;
  }

   /**
   * Product measure.
   * @return measure
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product measure.")

  public String getMeasure() {
    return measure;
  }


  public void setMeasure(String measure) {
    this.measure = measure;
  }


  public ReceivedDocumentItemsListItem netPrice(BigDecimal netPrice) {
    
    this.netPrice = netPrice;
    return this;
  }

   /**
   * Product net price.
   * @return netPrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product net price.")

  public BigDecimal getNetPrice() {
    return netPrice;
  }


  public void setNetPrice(BigDecimal netPrice) {
    this.netPrice = netPrice;
  }


  public ReceivedDocumentItemsListItem category(String category) {
    
    this.category = category;
    return this;
  }

   /**
   * Product category.
   * @return category
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product category.")

  public String getCategory() {
    return category;
  }


  public void setCategory(String category) {
    this.category = category;
  }


  public ReceivedDocumentItemsListItem qty(BigDecimal qty) {
    
    this.qty = qty;
    return this;
  }

   /**
   * Product quantity.
   * @return qty
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product quantity.")

  public BigDecimal getQty() {
    return qty;
  }


  public void setQty(BigDecimal qty) {
    this.qty = qty;
  }


  public ReceivedDocumentItemsListItem vat(VatType vat) {
    
    this.vat = vat;
    return this;
  }

   /**
   * Get vat
   * @return vat
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public VatType getVat() {
    return vat;
  }


  public void setVat(VatType vat) {
    this.vat = vat;
  }


  public ReceivedDocumentItemsListItem stock(BigDecimal stock) {
    
    this.stock = stock;
    return this;
  }

   /**
   * Number of items in stock
   * @return stock
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of items in stock")

  public BigDecimal getStock() {
    return stock;
  }


  public void setStock(BigDecimal stock) {
    this.stock = stock;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReceivedDocumentItemsListItem receivedDocumentItemsListItem = (ReceivedDocumentItemsListItem) o;
    return Objects.equals(this.id, receivedDocumentItemsListItem.id) &&
        Objects.equals(this.productId, receivedDocumentItemsListItem.productId) &&
        Objects.equals(this.code, receivedDocumentItemsListItem.code) &&
        Objects.equals(this.name, receivedDocumentItemsListItem.name) &&
        Objects.equals(this.measure, receivedDocumentItemsListItem.measure) &&
        Objects.equals(this.netPrice, receivedDocumentItemsListItem.netPrice) &&
        Objects.equals(this.category, receivedDocumentItemsListItem.category) &&
        Objects.equals(this.qty, receivedDocumentItemsListItem.qty) &&
        Objects.equals(this.vat, receivedDocumentItemsListItem.vat) &&
        Objects.equals(this.stock, receivedDocumentItemsListItem.stock);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, productId, code, name, measure, netPrice, category, qty, vat, stock);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReceivedDocumentItemsListItem {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    measure: ").append(toIndentedString(measure)).append("\n");
    sb.append("    netPrice: ").append(toIndentedString(netPrice)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    qty: ").append(toIndentedString(qty)).append("\n");
    sb.append("    vat: ").append(toIndentedString(vat)).append("\n");
    sb.append("    stock: ").append(toIndentedString(stock)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

