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


import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Cashbook type. */
@JsonAdapter(CashbookEntryType.Adapter.class)
public enum CashbookEntryType {
  IN("in"),

  OUT("out");

  private String value;

  CashbookEntryType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static CashbookEntryType fromValue(String value) {
    for (CashbookEntryType b : CashbookEntryType.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<CashbookEntryType> {
    @Override
    public void write(final JsonWriter jsonWriter, final CashbookEntryType enumeration)
        throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public CashbookEntryType read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return CashbookEntryType.fromValue(value);
    }
  }
}
