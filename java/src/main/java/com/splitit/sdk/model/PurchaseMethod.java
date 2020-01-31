/*
 * splitit-web-api-public-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.splitit.sdk.model;

import java.util.Objects;
import java.util.Arrays;
import io.swagger.annotations.ApiModel;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * 
 */
@JsonAdapter(PurchaseMethod.Adapter.class)
public enum PurchaseMethod {
  
  INSTORE("InStore"),
  
  PHONEORDER("PhoneOrder"),
  
  ECOMMERCE("ECommerce");

  private String value;

  PurchaseMethod(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static PurchaseMethod fromValue(String text) {
    for (PurchaseMethod b : PurchaseMethod.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<PurchaseMethod> {
    @Override
    public void write(final JsonWriter jsonWriter, final PurchaseMethod enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public PurchaseMethod read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return PurchaseMethod.fromValue(String.valueOf(value));
    }
  }
}

