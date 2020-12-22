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
    /// CreateInstallmentsPlanResponse
    /// </summary>
    [DataContract]
    public partial class CreateInstallmentsPlanResponse :  IEquatable<CreateInstallmentsPlanResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateInstallmentsPlanResponse" /> class.
        /// </summary>
        /// <param name="responseHeader">responseHeader.</param>
        /// <param name="installmentPlan">installmentPlan.</param>
        /// <param name="gatewayTransactionResults">gatewayTransactionResults.</param>
        /// <param name="approvalUrl">approvalUrl.</param>
        /// <param name="threeDRedirectUrl">threeDRedirectUrl.</param>
        public CreateInstallmentsPlanResponse(ResponseHeader responseHeader = default(ResponseHeader), InstallmentPlan installmentPlan = default(InstallmentPlan), List<TransactionResult> gatewayTransactionResults = default(List<TransactionResult>), string approvalUrl = default(string), string threeDRedirectUrl = default(string))
        {
            this.ResponseHeader = responseHeader;
            this.InstallmentPlan = installmentPlan;
            this.GatewayTransactionResults = gatewayTransactionResults;
            this.ApprovalUrl = approvalUrl;
            this.ThreeDRedirectUrl = threeDRedirectUrl;
        }

        
        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlan
        /// </summary>
        [DataMember(Name="InstallmentPlan", EmitDefaultValue=false)]
        public InstallmentPlan InstallmentPlan { get; set; }

        /// <summary>
        /// Gets or Sets GatewayTransactionResults
        /// </summary>
        [DataMember(Name="GatewayTransactionResults", EmitDefaultValue=false)]
        public List<TransactionResult> GatewayTransactionResults { get; set; }

        /// <summary>
        /// Gets or Sets ApprovalUrl
        /// </summary>
        [DataMember(Name="ApprovalUrl", EmitDefaultValue=false)]
        public string ApprovalUrl { get; set; }

        /// <summary>
        /// Gets or Sets ThreeDRedirectUrl
        /// </summary>
        [DataMember(Name="ThreeDRedirectUrl", EmitDefaultValue=false)]
        public string ThreeDRedirectUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateInstallmentsPlanResponse {\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
            sb.Append("  InstallmentPlan: ").Append(InstallmentPlan).Append("\n");
            sb.Append("  GatewayTransactionResults: ").Append(GatewayTransactionResults).Append("\n");
            sb.Append("  ApprovalUrl: ").Append(ApprovalUrl).Append("\n");
            sb.Append("  ThreeDRedirectUrl: ").Append(ThreeDRedirectUrl).Append("\n");
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
            return this.Equals(input as CreateInstallmentsPlanResponse);
        }

        /// <summary>
        /// Returns true if CreateInstallmentsPlanResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateInstallmentsPlanResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateInstallmentsPlanResponse input)
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
                    this.InstallmentPlan == input.InstallmentPlan ||
                    (this.InstallmentPlan != null &&
                    this.InstallmentPlan.Equals(input.InstallmentPlan))
                ) && 
                (
                    this.GatewayTransactionResults == input.GatewayTransactionResults ||
                    this.GatewayTransactionResults != null &&
                    this.GatewayTransactionResults.SequenceEqual(input.GatewayTransactionResults)
                ) && 
                (
                    this.ApprovalUrl == input.ApprovalUrl ||
                    (this.ApprovalUrl != null &&
                    this.ApprovalUrl.Equals(input.ApprovalUrl))
                ) && 
                (
                    this.ThreeDRedirectUrl == input.ThreeDRedirectUrl ||
                    (this.ThreeDRedirectUrl != null &&
                    this.ThreeDRedirectUrl.Equals(input.ThreeDRedirectUrl))
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
                if (this.InstallmentPlan != null)
                    hashCode = hashCode * 59 + this.InstallmentPlan.GetHashCode();
                if (this.GatewayTransactionResults != null)
                    hashCode = hashCode * 59 + this.GatewayTransactionResults.GetHashCode();
                if (this.ApprovalUrl != null)
                    hashCode = hashCode * 59 + this.ApprovalUrl.GetHashCode();
                if (this.ThreeDRedirectUrl != null)
                    hashCode = hashCode * 59 + this.ThreeDRedirectUrl.GetHashCode();
                return hashCode;
            }
        }
    }

}
