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
import com.splitit.sdk.model.AddressData;
import com.splitit.sdk.model.ReferenceEntityBase;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * CardData
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-03T20:48:28.448Z")
public class CardData   {
  @SerializedName("CardId")
  private String cardId = null;

  @SerializedName("CardNumber")
  private String cardNumber = null;

  @SerializedName("CardExpMonth")
  private String cardExpMonth = null;

  @SerializedName("CardExpYear")
  private String cardExpYear = null;

  @SerializedName("CardBrand")
  private ReferenceEntityBase cardBrand = null;

  @SerializedName("CardType")
  private ReferenceEntityBase cardType = null;

  @SerializedName("Bin")
  private String bin = null;

  @SerializedName("CardHolderFullName")
  private String cardHolderFullName = null;

  @SerializedName("CardCvv")
  private String cardCvv = null;

  @SerializedName("Address")
  private AddressData address = null;

  @SerializedName("Token")
  private String token = null;

  public CardData cardId(String cardId) {
    this.cardId = cardId;
    return this;
  }

   /**
   * Get cardId
   * @return cardId
  **/
  @ApiModelProperty(value = "")
  public String getCardId() {
    return cardId;
  }

  public void setCardId(String cardId) {
    this.cardId = cardId;
  }

  public CardData cardNumber(String cardNumber) {
    this.cardNumber = cardNumber;
    return this;
  }

   /**
   * Get cardNumber
   * @return cardNumber
  **/
  @ApiModelProperty(value = "")
  public String getCardNumber() {
    return cardNumber;
  }

  public void setCardNumber(String cardNumber) {
    this.cardNumber = cardNumber;
  }

  public CardData cardExpMonth(String cardExpMonth) {
    this.cardExpMonth = cardExpMonth;
    return this;
  }

   /**
   * Get cardExpMonth
   * @return cardExpMonth
  **/
  @ApiModelProperty(value = "")
  public String getCardExpMonth() {
    return cardExpMonth;
  }

  public void setCardExpMonth(String cardExpMonth) {
    this.cardExpMonth = cardExpMonth;
  }

  public CardData cardExpYear(String cardExpYear) {
    this.cardExpYear = cardExpYear;
    return this;
  }

   /**
   * Get cardExpYear
   * @return cardExpYear
  **/
  @ApiModelProperty(value = "")
  public String getCardExpYear() {
    return cardExpYear;
  }

  public void setCardExpYear(String cardExpYear) {
    this.cardExpYear = cardExpYear;
  }

  public CardData cardBrand(ReferenceEntityBase cardBrand) {
    this.cardBrand = cardBrand;
    return this;
  }

   /**
   * Get cardBrand
   * @return cardBrand
  **/
  @ApiModelProperty(value = "")
  public ReferenceEntityBase getCardBrand() {
    return cardBrand;
  }

  public void setCardBrand(ReferenceEntityBase cardBrand) {
    this.cardBrand = cardBrand;
  }

  public CardData cardType(ReferenceEntityBase cardType) {
    this.cardType = cardType;
    return this;
  }

   /**
   * Get cardType
   * @return cardType
  **/
  @ApiModelProperty(value = "")
  public ReferenceEntityBase getCardType() {
    return cardType;
  }

  public void setCardType(ReferenceEntityBase cardType) {
    this.cardType = cardType;
  }

  public CardData bin(String bin) {
    this.bin = bin;
    return this;
  }

   /**
   * Get bin
   * @return bin
  **/
  @ApiModelProperty(value = "")
  public String getBin() {
    return bin;
  }

  public void setBin(String bin) {
    this.bin = bin;
  }

  public CardData cardHolderFullName(String cardHolderFullName) {
    this.cardHolderFullName = cardHolderFullName;
    return this;
  }

   /**
   * Get cardHolderFullName
   * @return cardHolderFullName
  **/
  @ApiModelProperty(value = "")
  public String getCardHolderFullName() {
    return cardHolderFullName;
  }

  public void setCardHolderFullName(String cardHolderFullName) {
    this.cardHolderFullName = cardHolderFullName;
  }

  public CardData cardCvv(String cardCvv) {
    this.cardCvv = cardCvv;
    return this;
  }

   /**
   * Get cardCvv
   * @return cardCvv
  **/
  @ApiModelProperty(value = "")
  public String getCardCvv() {
    return cardCvv;
  }

  public void setCardCvv(String cardCvv) {
    this.cardCvv = cardCvv;
  }

  public CardData address(AddressData address) {
    this.address = address;
    return this;
  }

   /**
   * Get address
   * @return address
  **/
  @ApiModelProperty(value = "")
  public AddressData getAddress() {
    return address;
  }

  public void setAddress(AddressData address) {
    this.address = address;
  }

  public CardData token(String token) {
    this.token = token;
    return this;
  }

   /**
   * Get token
   * @return token
  **/
  @ApiModelProperty(value = "")
  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CardData cardData = (CardData) o;
    return Objects.equals(this.cardId, cardData.cardId) &&
        Objects.equals(this.cardNumber, cardData.cardNumber) &&
        Objects.equals(this.cardExpMonth, cardData.cardExpMonth) &&
        Objects.equals(this.cardExpYear, cardData.cardExpYear) &&
        Objects.equals(this.cardBrand, cardData.cardBrand) &&
        Objects.equals(this.cardType, cardData.cardType) &&
        Objects.equals(this.bin, cardData.bin) &&
        Objects.equals(this.cardHolderFullName, cardData.cardHolderFullName) &&
        Objects.equals(this.cardCvv, cardData.cardCvv) &&
        Objects.equals(this.address, cardData.address) &&
        Objects.equals(this.token, cardData.token);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cardId, cardNumber, cardExpMonth, cardExpYear, cardBrand, cardType, bin, cardHolderFullName, cardCvv, address, token);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CardData {\n");
    
    sb.append("    cardId: ").append(toIndentedString(cardId)).append("\n");
    sb.append("    cardNumber: ").append(toIndentedString(cardNumber)).append("\n");
    sb.append("    cardExpMonth: ").append(toIndentedString(cardExpMonth)).append("\n");
    sb.append("    cardExpYear: ").append(toIndentedString(cardExpYear)).append("\n");
    sb.append("    cardBrand: ").append(toIndentedString(cardBrand)).append("\n");
    sb.append("    cardType: ").append(toIndentedString(cardType)).append("\n");
    sb.append("    bin: ").append(toIndentedString(bin)).append("\n");
    sb.append("    cardHolderFullName: ").append(toIndentedString(cardHolderFullName)).append("\n");
    sb.append("    cardCvv: ").append(toIndentedString(cardCvv)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    token: ").append(toIndentedString(token)).append("\n");
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

