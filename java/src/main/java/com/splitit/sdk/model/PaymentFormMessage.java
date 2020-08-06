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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.splitit.sdk.model.PaymentFormMessageType;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * PaymentFormMessage
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-08-06T09:31:28.486Z")
public class PaymentFormMessage   {
  @SerializedName("Type")
  private PaymentFormMessageType type = null;

  @SerializedName("Code")
  private Integer code = null;

  @SerializedName("Message")
  private String message = null;

  @SerializedName("IsEmpty")
  private Boolean isEmpty = null;

  public PaymentFormMessage type(PaymentFormMessageType type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(required = true, value = "")
  public PaymentFormMessageType getType() {
    return type;
  }

  public void setType(PaymentFormMessageType type) {
    this.type = type;
  }

  public PaymentFormMessage code(Integer code) {
    this.code = code;
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getCode() {
    return code;
  }

  public void setCode(Integer code) {
    this.code = code;
  }

  public PaymentFormMessage message(String message) {
    this.message = message;
    return this;
  }

   /**
   * Get message
   * @return message
  **/
  @ApiModelProperty(value = "")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public PaymentFormMessage isEmpty(Boolean isEmpty) {
    this.isEmpty = isEmpty;
    return this;
  }

   /**
   * Get isEmpty
   * @return isEmpty
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsEmpty() {
    return isEmpty;
  }

  public void setIsEmpty(Boolean isEmpty) {
    this.isEmpty = isEmpty;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentFormMessage paymentFormMessage = (PaymentFormMessage) o;
    return Objects.equals(this.type, paymentFormMessage.type) &&
        Objects.equals(this.code, paymentFormMessage.code) &&
        Objects.equals(this.message, paymentFormMessage.message) &&
        Objects.equals(this.isEmpty, paymentFormMessage.isEmpty);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, code, message, isEmpty);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentFormMessage {\n");
    
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    isEmpty: ").append(toIndentedString(isEmpty)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

