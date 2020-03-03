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
import com.splitit.sdk.model.Error;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ResponseHeader
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-03T20:48:28.448Z")
public class ResponseHeader   {
  @SerializedName("Succeeded")
  private Boolean succeeded = null;

  @SerializedName("Errors")
  private List<Error> errors = null;

  public ResponseHeader succeeded(Boolean succeeded) {
    this.succeeded = succeeded;
    return this;
  }

   /**
   * Get succeeded
   * @return succeeded
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isSucceeded() {
    return succeeded;
  }

  public void setSucceeded(Boolean succeeded) {
    this.succeeded = succeeded;
  }

  public ResponseHeader errors(List<Error> errors) {
    this.errors = errors;
    return this;
  }

  public ResponseHeader addErrorsItem(Error errorsItem) {
    if (this.errors == null) {
      this.errors = new ArrayList<Error>();
    }
    this.errors.add(errorsItem);
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @ApiModelProperty(value = "")
  public List<Error> getErrors() {
    return errors;
  }

  public void setErrors(List<Error> errors) {
    this.errors = errors;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResponseHeader responseHeader = (ResponseHeader) o;
    return Objects.equals(this.succeeded, responseHeader.succeeded) &&
        Objects.equals(this.errors, responseHeader.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(succeeded, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResponseHeader {\n");
    
    sb.append("    succeeded: ").append(toIndentedString(succeeded)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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

