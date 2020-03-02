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
 * PaymentWizardData
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-02T08:02:37.421Z")
public class PaymentWizardData   {
  @SerializedName("RequestedNumberOfInstallments")
  private String requestedNumberOfInstallments = null;

  @SerializedName("SuccessExitURL")
  private String successExitURL = null;

  @SerializedName("ErrorExitURL")
  private String errorExitURL = null;

  @SerializedName("CancelExitURL")
  private String cancelExitURL = null;

  @SerializedName("SuccessAsyncUrl")
  private String successAsyncUrl = null;

  @SerializedName("ViewName")
  private String viewName = null;

  @SerializedName("IsOpenedInIframe")
  private Boolean isOpenedInIframe = null;

  @SerializedName("PaymentFormMessage")
  private String paymentFormMessage = null;

  public PaymentWizardData requestedNumberOfInstallments(String requestedNumberOfInstallments) {
    this.requestedNumberOfInstallments = requestedNumberOfInstallments;
    return this;
  }

   /**
   * Get requestedNumberOfInstallments
   * @return requestedNumberOfInstallments
  **/
  @ApiModelProperty(value = "")
  public String getRequestedNumberOfInstallments() {
    return requestedNumberOfInstallments;
  }

  public void setRequestedNumberOfInstallments(String requestedNumberOfInstallments) {
    this.requestedNumberOfInstallments = requestedNumberOfInstallments;
  }

  public PaymentWizardData successExitURL(String successExitURL) {
    this.successExitURL = successExitURL;
    return this;
  }

   /**
   * Get successExitURL
   * @return successExitURL
  **/
  @ApiModelProperty(value = "")
  public String getSuccessExitURL() {
    return successExitURL;
  }

  public void setSuccessExitURL(String successExitURL) {
    this.successExitURL = successExitURL;
  }

  public PaymentWizardData errorExitURL(String errorExitURL) {
    this.errorExitURL = errorExitURL;
    return this;
  }

   /**
   * Get errorExitURL
   * @return errorExitURL
  **/
  @ApiModelProperty(value = "")
  public String getErrorExitURL() {
    return errorExitURL;
  }

  public void setErrorExitURL(String errorExitURL) {
    this.errorExitURL = errorExitURL;
  }

  public PaymentWizardData cancelExitURL(String cancelExitURL) {
    this.cancelExitURL = cancelExitURL;
    return this;
  }

   /**
   * Get cancelExitURL
   * @return cancelExitURL
  **/
  @ApiModelProperty(value = "")
  public String getCancelExitURL() {
    return cancelExitURL;
  }

  public void setCancelExitURL(String cancelExitURL) {
    this.cancelExitURL = cancelExitURL;
  }

  public PaymentWizardData successAsyncUrl(String successAsyncUrl) {
    this.successAsyncUrl = successAsyncUrl;
    return this;
  }

   /**
   * Get successAsyncUrl
   * @return successAsyncUrl
  **/
  @ApiModelProperty(value = "")
  public String getSuccessAsyncUrl() {
    return successAsyncUrl;
  }

  public void setSuccessAsyncUrl(String successAsyncUrl) {
    this.successAsyncUrl = successAsyncUrl;
  }

  public PaymentWizardData viewName(String viewName) {
    this.viewName = viewName;
    return this;
  }

   /**
   * Get viewName
   * @return viewName
  **/
  @ApiModelProperty(value = "")
  public String getViewName() {
    return viewName;
  }

  public void setViewName(String viewName) {
    this.viewName = viewName;
  }

  public PaymentWizardData isOpenedInIframe(Boolean isOpenedInIframe) {
    this.isOpenedInIframe = isOpenedInIframe;
    return this;
  }

   /**
   * Get isOpenedInIframe
   * @return isOpenedInIframe
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsOpenedInIframe() {
    return isOpenedInIframe;
  }

  public void setIsOpenedInIframe(Boolean isOpenedInIframe) {
    this.isOpenedInIframe = isOpenedInIframe;
  }

  public PaymentWizardData paymentFormMessage(String paymentFormMessage) {
    this.paymentFormMessage = paymentFormMessage;
    return this;
  }

   /**
   * Get paymentFormMessage
   * @return paymentFormMessage
  **/
  @ApiModelProperty(value = "")
  public String getPaymentFormMessage() {
    return paymentFormMessage;
  }

  public void setPaymentFormMessage(String paymentFormMessage) {
    this.paymentFormMessage = paymentFormMessage;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentWizardData paymentWizardData = (PaymentWizardData) o;
    return Objects.equals(this.requestedNumberOfInstallments, paymentWizardData.requestedNumberOfInstallments) &&
        Objects.equals(this.successExitURL, paymentWizardData.successExitURL) &&
        Objects.equals(this.errorExitURL, paymentWizardData.errorExitURL) &&
        Objects.equals(this.cancelExitURL, paymentWizardData.cancelExitURL) &&
        Objects.equals(this.successAsyncUrl, paymentWizardData.successAsyncUrl) &&
        Objects.equals(this.viewName, paymentWizardData.viewName) &&
        Objects.equals(this.isOpenedInIframe, paymentWizardData.isOpenedInIframe) &&
        Objects.equals(this.paymentFormMessage, paymentWizardData.paymentFormMessage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestedNumberOfInstallments, successExitURL, errorExitURL, cancelExitURL, successAsyncUrl, viewName, isOpenedInIframe, paymentFormMessage);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentWizardData {\n");
    
    sb.append("    requestedNumberOfInstallments: ").append(toIndentedString(requestedNumberOfInstallments)).append("\n");
    sb.append("    successExitURL: ").append(toIndentedString(successExitURL)).append("\n");
    sb.append("    errorExitURL: ").append(toIndentedString(errorExitURL)).append("\n");
    sb.append("    cancelExitURL: ").append(toIndentedString(cancelExitURL)).append("\n");
    sb.append("    successAsyncUrl: ").append(toIndentedString(successAsyncUrl)).append("\n");
    sb.append("    viewName: ").append(toIndentedString(viewName)).append("\n");
    sb.append("    isOpenedInIframe: ").append(toIndentedString(isOpenedInIframe)).append("\n");
    sb.append("    paymentFormMessage: ").append(toIndentedString(paymentFormMessage)).append("\n");
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

