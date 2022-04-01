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

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Objects;

/** PermissionsFicIssuedDocumentsDetailed */
@javax.annotation.Generated(
    value = "org.openapitools.codegen.languages.JavaClientCodegen",
    date = "2022-04-01T08:02:21.025696Z[GMT]")
public class PermissionsFicIssuedDocumentsDetailed implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_QUOTES = "quotes";

  @SerializedName(SERIALIZED_NAME_QUOTES)
  private PermissionLevel quotes;

  public static final String SERIALIZED_NAME_PROFORMAS = "proformas";

  @SerializedName(SERIALIZED_NAME_PROFORMAS)
  private PermissionLevel proformas;

  public static final String SERIALIZED_NAME_INVOICES = "invoices";

  @SerializedName(SERIALIZED_NAME_INVOICES)
  private PermissionLevel invoices;

  public static final String SERIALIZED_NAME_RECEIPTS = "receipts";

  @SerializedName(SERIALIZED_NAME_RECEIPTS)
  private PermissionLevel receipts;

  public static final String SERIALIZED_NAME_DELIVERY_NOTES = "delivery_notes";

  @SerializedName(SERIALIZED_NAME_DELIVERY_NOTES)
  private PermissionLevel deliveryNotes;

  public static final String SERIALIZED_NAME_CREDIT_NOTES = "credit_notes";

  @SerializedName(SERIALIZED_NAME_CREDIT_NOTES)
  private PermissionLevel creditNotes;

  public static final String SERIALIZED_NAME_ORDERS = "orders";

  @SerializedName(SERIALIZED_NAME_ORDERS)
  private PermissionLevel orders;

  public static final String SERIALIZED_NAME_WORK_REPORTS = "work_reports";

  @SerializedName(SERIALIZED_NAME_WORK_REPORTS)
  private PermissionLevel workReports;

  public static final String SERIALIZED_NAME_SUPPLIER_ORDERS = "supplier_orders";

  @SerializedName(SERIALIZED_NAME_SUPPLIER_ORDERS)
  private PermissionLevel supplierOrders;

  public static final String SERIALIZED_NAME_SELF_INVOICES = "self_invoices";

  @SerializedName(SERIALIZED_NAME_SELF_INVOICES)
  private PermissionLevel selfInvoices;

  public PermissionsFicIssuedDocumentsDetailed() {}

  public PermissionsFicIssuedDocumentsDetailed quotes(PermissionLevel quotes) {

    this.quotes = quotes;
    return this;
  }

  /**
   * Get quotes
   *
   * @return quotes
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getQuotes() {
    return quotes;
  }

  public void setQuotes(PermissionLevel quotes) {
    this.quotes = quotes;
  }

  public PermissionsFicIssuedDocumentsDetailed proformas(PermissionLevel proformas) {

    this.proformas = proformas;
    return this;
  }

  /**
   * Get proformas
   *
   * @return proformas
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getProformas() {
    return proformas;
  }

  public void setProformas(PermissionLevel proformas) {
    this.proformas = proformas;
  }

  public PermissionsFicIssuedDocumentsDetailed invoices(PermissionLevel invoices) {

    this.invoices = invoices;
    return this;
  }

  /**
   * Get invoices
   *
   * @return invoices
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getInvoices() {
    return invoices;
  }

  public void setInvoices(PermissionLevel invoices) {
    this.invoices = invoices;
  }

  public PermissionsFicIssuedDocumentsDetailed receipts(PermissionLevel receipts) {

    this.receipts = receipts;
    return this;
  }

  /**
   * Get receipts
   *
   * @return receipts
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getReceipts() {
    return receipts;
  }

  public void setReceipts(PermissionLevel receipts) {
    this.receipts = receipts;
  }

  public PermissionsFicIssuedDocumentsDetailed deliveryNotes(PermissionLevel deliveryNotes) {

    this.deliveryNotes = deliveryNotes;
    return this;
  }

  /**
   * Get deliveryNotes
   *
   * @return deliveryNotes
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getDeliveryNotes() {
    return deliveryNotes;
  }

  public void setDeliveryNotes(PermissionLevel deliveryNotes) {
    this.deliveryNotes = deliveryNotes;
  }

  public PermissionsFicIssuedDocumentsDetailed creditNotes(PermissionLevel creditNotes) {

    this.creditNotes = creditNotes;
    return this;
  }

  /**
   * Get creditNotes
   *
   * @return creditNotes
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getCreditNotes() {
    return creditNotes;
  }

  public void setCreditNotes(PermissionLevel creditNotes) {
    this.creditNotes = creditNotes;
  }

  public PermissionsFicIssuedDocumentsDetailed orders(PermissionLevel orders) {

    this.orders = orders;
    return this;
  }

  /**
   * Get orders
   *
   * @return orders
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getOrders() {
    return orders;
  }

  public void setOrders(PermissionLevel orders) {
    this.orders = orders;
  }

  public PermissionsFicIssuedDocumentsDetailed workReports(PermissionLevel workReports) {

    this.workReports = workReports;
    return this;
  }

  /**
   * Get workReports
   *
   * @return workReports
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getWorkReports() {
    return workReports;
  }

  public void setWorkReports(PermissionLevel workReports) {
    this.workReports = workReports;
  }

  public PermissionsFicIssuedDocumentsDetailed supplierOrders(PermissionLevel supplierOrders) {

    this.supplierOrders = supplierOrders;
    return this;
  }

  /**
   * Get supplierOrders
   *
   * @return supplierOrders
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getSupplierOrders() {
    return supplierOrders;
  }

  public void setSupplierOrders(PermissionLevel supplierOrders) {
    this.supplierOrders = supplierOrders;
  }

  public PermissionsFicIssuedDocumentsDetailed selfInvoices(PermissionLevel selfInvoices) {

    this.selfInvoices = selfInvoices;
    return this;
  }

  /**
   * Get selfInvoices
   *
   * @return selfInvoices
   */
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  public PermissionLevel getSelfInvoices() {
    return selfInvoices;
  }

  public void setSelfInvoices(PermissionLevel selfInvoices) {
    this.selfInvoices = selfInvoices;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PermissionsFicIssuedDocumentsDetailed permissionsFicIssuedDocumentsDetailed =
        (PermissionsFicIssuedDocumentsDetailed) o;
    return Objects.equals(this.quotes, permissionsFicIssuedDocumentsDetailed.quotes)
        && Objects.equals(this.proformas, permissionsFicIssuedDocumentsDetailed.proformas)
        && Objects.equals(this.invoices, permissionsFicIssuedDocumentsDetailed.invoices)
        && Objects.equals(this.receipts, permissionsFicIssuedDocumentsDetailed.receipts)
        && Objects.equals(this.deliveryNotes, permissionsFicIssuedDocumentsDetailed.deliveryNotes)
        && Objects.equals(this.creditNotes, permissionsFicIssuedDocumentsDetailed.creditNotes)
        && Objects.equals(this.orders, permissionsFicIssuedDocumentsDetailed.orders)
        && Objects.equals(this.workReports, permissionsFicIssuedDocumentsDetailed.workReports)
        && Objects.equals(this.supplierOrders, permissionsFicIssuedDocumentsDetailed.supplierOrders)
        && Objects.equals(this.selfInvoices, permissionsFicIssuedDocumentsDetailed.selfInvoices);
  }

  @Override
  public int hashCode() {
    return Objects.hash(
        quotes,
        proformas,
        invoices,
        receipts,
        deliveryNotes,
        creditNotes,
        orders,
        workReports,
        supplierOrders,
        selfInvoices);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PermissionsFicIssuedDocumentsDetailed {\n");
    sb.append("    quotes: ").append(toIndentedString(quotes)).append("\n");
    sb.append("    proformas: ").append(toIndentedString(proformas)).append("\n");
    sb.append("    invoices: ").append(toIndentedString(invoices)).append("\n");
    sb.append("    receipts: ").append(toIndentedString(receipts)).append("\n");
    sb.append("    deliveryNotes: ").append(toIndentedString(deliveryNotes)).append("\n");
    sb.append("    creditNotes: ").append(toIndentedString(creditNotes)).append("\n");
    sb.append("    orders: ").append(toIndentedString(orders)).append("\n");
    sb.append("    workReports: ").append(toIndentedString(workReports)).append("\n");
    sb.append("    supplierOrders: ").append(toIndentedString(supplierOrders)).append("\n");
    sb.append("    selfInvoices: ").append(toIndentedString(selfInvoices)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
