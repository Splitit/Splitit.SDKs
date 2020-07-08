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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * RedirectUrls
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-07-08T07:06:50.696Z")
public class RedirectUrls   {
  @SerializedName("Succeeded")
  private String succeeded = null;

  @SerializedName("Canceled")
  private String canceled = null;

  @SerializedName("Failed")
  private String failed = null;

  public RedirectUrls succeeded(String succeeded) {
    this.succeeded = succeeded;
    return this;
  }

   /**
   * Get succeeded
   * @return succeeded
  **/
  @ApiModelProperty(value = "")
  public String getSucceeded() {
    return succeeded;
  }

  public void setSucceeded(String succeeded) {
    this.succeeded = succeeded;
  }

  public RedirectUrls canceled(String canceled) {
    this.canceled = canceled;
    return this;
  }

   /**
   * Get canceled
   * @return canceled
  **/
  @ApiModelProperty(value = "")
  public String getCanceled() {
    return canceled;
  }

  public void setCanceled(String canceled) {
    this.canceled = canceled;
  }

  public RedirectUrls failed(String failed) {
    this.failed = failed;
    return this;
  }

   /**
   * Get failed
   * @return failed
  **/
  @ApiModelProperty(value = "")
  public String getFailed() {
    return failed;
  }

  public void setFailed(String failed) {
    this.failed = failed;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RedirectUrls redirectUrls = (RedirectUrls) o;
    return Objects.equals(this.succeeded, redirectUrls.succeeded) &&
        Objects.equals(this.canceled, redirectUrls.canceled) &&
        Objects.equals(this.failed, redirectUrls.failed);
  }

  @Override
  public int hashCode() {
    return Objects.hash(succeeded, canceled, failed);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RedirectUrls {\n");
    
    sb.append("    succeeded: ").append(toIndentedString(succeeded)).append("\n");
    sb.append("    canceled: ").append(toIndentedString(canceled)).append("\n");
    sb.append("    failed: ").append(toIndentedString(failed)).append("\n");
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

