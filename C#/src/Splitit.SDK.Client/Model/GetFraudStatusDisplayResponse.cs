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
    /// GetFraudStatusDisplayResponse
    /// </summary>
    [DataContract]
    public partial class GetFraudStatusDisplayResponse :  IEquatable<GetFraudStatusDisplayResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetFraudStatusDisplayResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GetFraudStatusDisplayResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GetFraudStatusDisplayResponse" /> class.
        /// </summary>
        /// <param name="responseHeader">responseHeader.</param>
        /// <param name="provider">provider.</param>
        /// <param name="fullLog">fullLog.</param>
        /// <param name="providerResultDescription">providerResultDescription.</param>
        /// <param name="installmentPlanId">installmentPlanId (required).</param>
        /// <param name="providerResultCode">providerResultCode.</param>
        public GetFraudStatusDisplayResponse(ResponseHeader responseHeader = default(ResponseHeader), string provider = default(string), string fullLog = default(string), string providerResultDescription = default(string), long? installmentPlanId = default(long?), string providerResultCode = default(string))
        {
            this.InstallmentPlanId = installmentPlanId;
            this.ResponseHeader = responseHeader;
            this.Provider = provider;
            this.FullLog = fullLog;
            this.ProviderResultDescription = providerResultDescription;
            this.ProviderResultCode = providerResultCode;
        }

        
        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Gets or Sets Provider
        /// </summary>
        [DataMember(Name="Provider", EmitDefaultValue=false)]
        public string Provider { get; set; }

        /// <summary>
        /// Gets or Sets FullLog
        /// </summary>
        [DataMember(Name="FullLog", EmitDefaultValue=false)]
        public string FullLog { get; set; }

        /// <summary>
        /// Gets or Sets ProviderResultDescription
        /// </summary>
        [DataMember(Name="ProviderResultDescription", EmitDefaultValue=false)]
        public string ProviderResultDescription { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanId
        /// </summary>
        [DataMember(Name="InstallmentPlanId", EmitDefaultValue=false)]
        public long? InstallmentPlanId { get; set; }

        /// <summary>
        /// Gets or Sets ProviderResultCode
        /// </summary>
        [DataMember(Name="ProviderResultCode", EmitDefaultValue=false)]
        public string ProviderResultCode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GetFraudStatusDisplayResponse {\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
            sb.Append("  Provider: ").Append(Provider).Append("\n");
            sb.Append("  FullLog: ").Append(FullLog).Append("\n");
            sb.Append("  ProviderResultDescription: ").Append(ProviderResultDescription).Append("\n");
            sb.Append("  InstallmentPlanId: ").Append(InstallmentPlanId).Append("\n");
            sb.Append("  ProviderResultCode: ").Append(ProviderResultCode).Append("\n");
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
            return this.Equals(input as GetFraudStatusDisplayResponse);
        }

        /// <summary>
        /// Returns true if GetFraudStatusDisplayResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetFraudStatusDisplayResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetFraudStatusDisplayResponse input)
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
                    this.Provider == input.Provider ||
                    (this.Provider != null &&
                    this.Provider.Equals(input.Provider))
                ) && 
                (
                    this.FullLog == input.FullLog ||
                    (this.FullLog != null &&
                    this.FullLog.Equals(input.FullLog))
                ) && 
                (
                    this.ProviderResultDescription == input.ProviderResultDescription ||
                    (this.ProviderResultDescription != null &&
                    this.ProviderResultDescription.Equals(input.ProviderResultDescription))
                ) && 
                (
                    this.InstallmentPlanId == input.InstallmentPlanId ||
                    (this.InstallmentPlanId != null &&
                    this.InstallmentPlanId.Equals(input.InstallmentPlanId))
                ) && 
                (
                    this.ProviderResultCode == input.ProviderResultCode ||
                    (this.ProviderResultCode != null &&
                    this.ProviderResultCode.Equals(input.ProviderResultCode))
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
                if (this.Provider != null)
                    hashCode = hashCode * 59 + this.Provider.GetHashCode();
                if (this.FullLog != null)
                    hashCode = hashCode * 59 + this.FullLog.GetHashCode();
                if (this.ProviderResultDescription != null)
                    hashCode = hashCode * 59 + this.ProviderResultDescription.GetHashCode();
                if (this.InstallmentPlanId != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanId.GetHashCode();
                if (this.ProviderResultCode != null)
                    hashCode = hashCode * 59 + this.ProviderResultCode.GetHashCode();
                return hashCode;
            }
        }
    }

}
