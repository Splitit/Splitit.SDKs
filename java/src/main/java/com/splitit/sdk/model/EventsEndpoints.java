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
 * EventsEndpoints
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-02T08:02:37.421Z")
public class EventsEndpoints   {
  @SerializedName("CreateSucceeded")
  private String createSucceeded = null;

  public EventsEndpoints createSucceeded(String createSucceeded) {
    this.createSucceeded = createSucceeded;
    return this;
  }

   /**
   * Get createSucceeded
   * @return createSucceeded
  **/
  @ApiModelProperty(value = "")
  public String getCreateSucceeded() {
    return createSucceeded;
  }

  public void setCreateSucceeded(String createSucceeded) {
    this.createSucceeded = createSucceeded;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventsEndpoints eventsEndpoints = (EventsEndpoints) o;
    return Objects.equals(this.createSucceeded, eventsEndpoints.createSucceeded);
  }

  @Override
  public int hashCode() {
    return Objects.hash(createSucceeded);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventsEndpoints {\n");
    
    sb.append("    createSucceeded: ").append(toIndentedString(createSucceeded)).append("\n");
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

