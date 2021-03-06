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
    /// ChargebackRequest
    /// </summary>
    [DataContract]
    public partial class ChargebackRequest :  IEquatable<ChargebackRequest>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ChargebackRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ChargebackRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ChargebackRequest" /> class.
        /// </summary>
        /// <param name="transactionIdsToMark">transactionIdsToMark.</param>
        /// <param name="transactionIdsToUnmark">transactionIdsToUnmark.</param>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="partialResponseMapping">partialResponseMapping (required).</param>
        public ChargebackRequest(List<long?> transactionIdsToMark = default(List<long?>), List<long?> transactionIdsToUnmark = default(List<long?>), string installmentPlanNumber = default(string), bool? partialResponseMapping = default(bool?))
        {
            this.PartialResponseMapping = partialResponseMapping;
            this.TransactionIdsToMark = transactionIdsToMark;
            this.TransactionIdsToUnmark = transactionIdsToUnmark;
            this.InstallmentPlanNumber = installmentPlanNumber;
        }

        [DataMember(Name="RequestHeader", EmitDefaultValue=false)]
        internal RequestHeader RequestHeader { get; set; }
        
        /// <summary>
        /// Gets or Sets TransactionIdsToMark
        /// </summary>
        [DataMember(Name="TransactionIdsToMark", EmitDefaultValue=false)]
        public List<long?> TransactionIdsToMark { get; set; }

        /// <summary>
        /// Gets or Sets TransactionIdsToUnmark
        /// </summary>
        [DataMember(Name="TransactionIdsToUnmark", EmitDefaultValue=false)]
        public List<long?> TransactionIdsToUnmark { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }

        /// <summary>
        /// Gets or Sets PartialResponseMapping
        /// </summary>
        [DataMember(Name="PartialResponseMapping", EmitDefaultValue=false)]
        public bool? PartialResponseMapping { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ChargebackRequest {\n");
            sb.Append("  TransactionIdsToMark: ").Append(TransactionIdsToMark).Append("\n");
            sb.Append("  TransactionIdsToUnmark: ").Append(TransactionIdsToUnmark).Append("\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  PartialResponseMapping: ").Append(PartialResponseMapping).Append("\n");
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
            return this.Equals(input as ChargebackRequest);
        }

        /// <summary>
        /// Returns true if ChargebackRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of ChargebackRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ChargebackRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.TransactionIdsToMark == input.TransactionIdsToMark ||
                    this.TransactionIdsToMark != null &&
                    this.TransactionIdsToMark.SequenceEqual(input.TransactionIdsToMark)
                ) && 
                (
                    this.TransactionIdsToUnmark == input.TransactionIdsToUnmark ||
                    this.TransactionIdsToUnmark != null &&
                    this.TransactionIdsToUnmark.SequenceEqual(input.TransactionIdsToUnmark)
                ) && 
                (
                    this.InstallmentPlanNumber == input.InstallmentPlanNumber ||
                    (this.InstallmentPlanNumber != null &&
                    this.InstallmentPlanNumber.Equals(input.InstallmentPlanNumber))
                ) && 
                (
                    this.PartialResponseMapping == input.PartialResponseMapping ||
                    (this.PartialResponseMapping != null &&
                    this.PartialResponseMapping.Equals(input.PartialResponseMapping))
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
                if (this.TransactionIdsToMark != null)
                    hashCode = hashCode * 59 + this.TransactionIdsToMark.GetHashCode();
                if (this.TransactionIdsToUnmark != null)
                    hashCode = hashCode * 59 + this.TransactionIdsToUnmark.GetHashCode();
                if (this.InstallmentPlanNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanNumber.GetHashCode();
                if (this.PartialResponseMapping != null)
                    hashCode = hashCode * 59 + this.PartialResponseMapping.GetHashCode();
                return hashCode;
            }
        }
    }

}
