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
import com.splitit.sdk.model.ResponseHeader;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * GetResourcesResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-18T12:53:32.515Z")
public class GetResourcesResponse   {
  @SerializedName("Logos")
  private Map<String, String> logos = null;

  @SerializedName("TouchPointColors")
  private Map<String, String> touchPointColors = null;

  @SerializedName("ResourcesGroupedByCategories")
  private Map<String, Map<String, String>> resourcesGroupedByCategories = null;

  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  public GetResourcesResponse logos(Map<String, String> logos) {
    this.logos = logos;
    return this;
  }

  public GetResourcesResponse putLogosItem(String key, String logosItem) {
    if (this.logos == null) {
      this.logos = new HashMap<String, String>();
    }
    this.logos.put(key, logosItem);
    return this;
  }

   /**
   * Get logos
   * @return logos
  **/
  @ApiModelProperty(value = "")
  public Map<String, String> getLogos() {
    return logos;
  }

  public void setLogos(Map<String, String> logos) {
    this.logos = logos;
  }

  public GetResourcesResponse touchPointColors(Map<String, String> touchPointColors) {
    this.touchPointColors = touchPointColors;
    return this;
  }

  public GetResourcesResponse putTouchPointColorsItem(String key, String touchPointColorsItem) {
    if (this.touchPointColors == null) {
      this.touchPointColors = new HashMap<String, String>();
    }
    this.touchPointColors.put(key, touchPointColorsItem);
    return this;
  }

   /**
   * Get touchPointColors
   * @return touchPointColors
  **/
  @ApiModelProperty(value = "")
  public Map<String, String> getTouchPointColors() {
    return touchPointColors;
  }

  public void setTouchPointColors(Map<String, String> touchPointColors) {
    this.touchPointColors = touchPointColors;
  }

  public GetResourcesResponse resourcesGroupedByCategories(Map<String, Map<String, String>> resourcesGroupedByCategories) {
    this.resourcesGroupedByCategories = resourcesGroupedByCategories;
    return this;
  }

  public GetResourcesResponse putResourcesGroupedByCategoriesItem(String key, Map<String, String> resourcesGroupedByCategoriesItem) {
    if (this.resourcesGroupedByCategories == null) {
      this.resourcesGroupedByCategories = new HashMap<String, Map<String, String>>();
    }
    this.resourcesGroupedByCategories.put(key, resourcesGroupedByCategoriesItem);
    return this;
  }

   /**
   * Get resourcesGroupedByCategories
   * @return resourcesGroupedByCategories
  **/
  @ApiModelProperty(value = "")
  public Map<String, Map<String, String>> getResourcesGroupedByCategories() {
    return resourcesGroupedByCategories;
  }

  public void setResourcesGroupedByCategories(Map<String, Map<String, String>> resourcesGroupedByCategories) {
    this.resourcesGroupedByCategories = resourcesGroupedByCategories;
  }

  public GetResourcesResponse responseHeader(ResponseHeader responseHeader) {
    this.responseHeader = responseHeader;
    return this;
  }

   /**
   * Get responseHeader
   * @return responseHeader
  **/
  @ApiModelProperty(value = "")
  public ResponseHeader getResponseHeader() {
    return responseHeader;
  }

  public void setResponseHeader(ResponseHeader responseHeader) {
    this.responseHeader = responseHeader;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetResourcesResponse getResourcesResponse = (GetResourcesResponse) o;
    return Objects.equals(this.logos, getResourcesResponse.logos) &&
        Objects.equals(this.touchPointColors, getResourcesResponse.touchPointColors) &&
        Objects.equals(this.resourcesGroupedByCategories, getResourcesResponse.resourcesGroupedByCategories) &&
        Objects.equals(this.responseHeader, getResourcesResponse.responseHeader);
  }

  @Override
  public int hashCode() {
    return Objects.hash(logos, touchPointColors, resourcesGroupedByCategories, responseHeader);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetResourcesResponse {\n");
    
    sb.append("    logos: ").append(toIndentedString(logos)).append("\n");
    sb.append("    touchPointColors: ").append(toIndentedString(touchPointColors)).append("\n");
    sb.append("    resourcesGroupedByCategories: ").append(toIndentedString(resourcesGroupedByCategories)).append("\n");
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
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
