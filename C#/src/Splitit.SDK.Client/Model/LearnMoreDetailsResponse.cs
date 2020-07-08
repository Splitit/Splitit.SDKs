/* 
 * splitit-web-api-public-sdk
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using SwaggerDateConverter = Splitit.SDK.Client.Client.SwaggerDateConverter;

namespace Splitit.SDK.Client.Model
{
    /// <summary>
    /// LearnMoreDetailsResponse
    /// </summary>
    [DataContract]
    public partial class LearnMoreDetailsResponse :  IEquatable<LearnMoreDetailsResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LearnMoreDetailsResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LearnMoreDetailsResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LearnMoreDetailsResponse" /> class.
        /// </summary>
        /// <param name="responseHeader">responseHeader.</param>
        /// <param name="supportsCreditCard">supportsCreditCard (required).</param>
        /// <param name="supportsDebitCard">supportsDebitCard (required).</param>
        /// <param name="showSecureStrategyInfo">showSecureStrategyInfo (required).</param>
        /// <param name="showNonSecureStrategyInfo">showNonSecureStrategyInfo (required).</param>
        /// <param name="total">total.</param>
        /// <param name="installments">installments.</param>
        /// <param name="numberOfInstallments">numberOfInstallments (required).</param>
        public LearnMoreDetailsResponse(ResponseHeader responseHeader = default(ResponseHeader), bool? supportsCreditCard = default(bool?), bool? supportsDebitCard = default(bool?), bool? showSecureStrategyInfo = default(bool?), bool? showNonSecureStrategyInfo = default(bool?), MoneyWithCurrencyCode total = default(MoneyWithCurrencyCode), List<Installment> installments = default(List<Installment>), int? numberOfInstallments = default(int?))
        {
            this.SupportsCreditCard = supportsCreditCard;
            this.SupportsDebitCard = supportsDebitCard;
            this.ShowSecureStrategyInfo = showSecureStrategyInfo;
            this.ShowNonSecureStrategyInfo = showNonSecureStrategyInfo;
            this.NumberOfInstallments = numberOfInstallments;
            this.ResponseHeader = responseHeader;
            this.Total = total;
            this.Installments = installments;
        }

        
        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Gets or Sets SupportsCreditCard
        /// </summary>
        [DataMember(Name="SupportsCreditCard", EmitDefaultValue=false)]
        public bool? SupportsCreditCard { get; set; }

        /// <summary>
        /// Gets or Sets SupportsDebitCard
        /// </summary>
        [DataMember(Name="SupportsDebitCard", EmitDefaultValue=false)]
        public bool? SupportsDebitCard { get; set; }

        /// <summary>
        /// Gets or Sets ShowSecureStrategyInfo
        /// </summary>
        [DataMember(Name="ShowSecureStrategyInfo", EmitDefaultValue=false)]
        public bool? ShowSecureStrategyInfo { get; set; }

        /// <summary>
        /// Gets or Sets ShowNonSecureStrategyInfo
        /// </summary>
        [DataMember(Name="ShowNonSecureStrategyInfo", EmitDefaultValue=false)]
        public bool? ShowNonSecureStrategyInfo { get; set; }

        /// <summary>
        /// Gets or Sets Total
        /// </summary>
        [DataMember(Name="Total", EmitDefaultValue=false)]
        public MoneyWithCurrencyCode Total { get; set; }

        /// <summary>
        /// Gets or Sets Installments
        /// </summary>
        [DataMember(Name="Installments", EmitDefaultValue=false)]
        public List<Installment> Installments { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfInstallments
        /// </summary>
        [DataMember(Name="NumberOfInstallments", EmitDefaultValue=false)]
        public int? NumberOfInstallments { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class LearnMoreDetailsResponse {\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
            sb.Append("  SupportsCreditCard: ").Append(SupportsCreditCard).Append("\n");
            sb.Append("  SupportsDebitCard: ").Append(SupportsDebitCard).Append("\n");
            sb.Append("  ShowSecureStrategyInfo: ").Append(ShowSecureStrategyInfo).Append("\n");
            sb.Append("  ShowNonSecureStrategyInfo: ").Append(ShowNonSecureStrategyInfo).Append("\n");
            sb.Append("  Total: ").Append(Total).Append("\n");
            sb.Append("  Installments: ").Append(Installments).Append("\n");
            sb.Append("  NumberOfInstallments: ").Append(NumberOfInstallments).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as LearnMoreDetailsResponse);
        }

        /// <summary>
        /// Returns true if LearnMoreDetailsResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of LearnMoreDetailsResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LearnMoreDetailsResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ResponseHeader == input.ResponseHeader ||
                    (this.ResponseHeader != null &&
                    this.ResponseHeader.Equals(input.ResponseHeader))
                ) && 
                (
                    this.SupportsCreditCard == input.SupportsCreditCard ||
                    (this.SupportsCreditCard != null &&
                    this.SupportsCreditCard.Equals(input.SupportsCreditCard))
                ) && 
                (
                    this.SupportsDebitCard == input.SupportsDebitCard ||
                    (this.SupportsDebitCard != null &&
                    this.SupportsDebitCard.Equals(input.SupportsDebitCard))
                ) && 
                (
                    this.ShowSecureStrategyInfo == input.ShowSecureStrategyInfo ||
                    (this.ShowSecureStrategyInfo != null &&
                    this.ShowSecureStrategyInfo.Equals(input.ShowSecureStrategyInfo))
                ) && 
                (
                    this.ShowNonSecureStrategyInfo == input.ShowNonSecureStrategyInfo ||
                    (this.ShowNonSecureStrategyInfo != null &&
                    this.ShowNonSecureStrategyInfo.Equals(input.ShowNonSecureStrategyInfo))
                ) && 
                (
                    this.Total == input.Total ||
                    (this.Total != null &&
                    this.Total.Equals(input.Total))
                ) && 
                (
                    this.Installments == input.Installments ||
                    this.Installments != null &&
                    this.Installments.SequenceEqual(input.Installments)
                ) && 
                (
                    this.NumberOfInstallments == input.NumberOfInstallments ||
                    (this.NumberOfInstallments != null &&
                    this.NumberOfInstallments.Equals(input.NumberOfInstallments))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ResponseHeader != null)
                    hashCode = hashCode * 59 + this.ResponseHeader.GetHashCode();
                if (this.SupportsCreditCard != null)
                    hashCode = hashCode * 59 + this.SupportsCreditCard.GetHashCode();
                if (this.SupportsDebitCard != null)
                    hashCode = hashCode * 59 + this.SupportsDebitCard.GetHashCode();
                if (this.ShowSecureStrategyInfo != null)
                    hashCode = hashCode * 59 + this.ShowSecureStrategyInfo.GetHashCode();
                if (this.ShowNonSecureStrategyInfo != null)
                    hashCode = hashCode * 59 + this.ShowNonSecureStrategyInfo.GetHashCode();
                if (this.Total != null)
                    hashCode = hashCode * 59 + this.Total.GetHashCode();
                if (this.Installments != null)
                    hashCode = hashCode * 59 + this.Installments.GetHashCode();
                if (this.NumberOfInstallments != null)
                    hashCode = hashCode * 59 + this.NumberOfInstallments.GetHashCode();
                return hashCode;
            }
        }
    }

}
