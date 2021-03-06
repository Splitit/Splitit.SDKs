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
    /// GetInstallmentsPlanExtendedResponse
    /// </summary>
    [DataContract]
    public partial class GetInstallmentsPlanExtendedResponse :  IEquatable<GetInstallmentsPlanExtendedResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetInstallmentsPlanExtendedResponse" /> class.
        /// </summary>
        /// <param name="plansList">plansList.</param>
        /// <param name="responseHeader">responseHeader.</param>
        /// <param name="pagingResponseHeader">pagingResponseHeader.</param>
        public GetInstallmentsPlanExtendedResponse(List<InstallmentPlan> plansList = default(List<InstallmentPlan>), ResponseHeader responseHeader = default(ResponseHeader), PagingResponseHeader pagingResponseHeader = default(PagingResponseHeader))
        {
            this.PlansList = plansList;
            this.ResponseHeader = responseHeader;
            this.PagingResponseHeader = pagingResponseHeader;
        }

        
        /// <summary>
        /// Gets or Sets PlansList
        /// </summary>
        [DataMember(Name="PlansList", EmitDefaultValue=false)]
        public List<InstallmentPlan> PlansList { get; set; }

        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Gets or Sets PagingResponseHeader
        /// </summary>
        [DataMember(Name="PagingResponseHeader", EmitDefaultValue=false)]
        public PagingResponseHeader PagingResponseHeader { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GetInstallmentsPlanExtendedResponse {\n");
            sb.Append("  PlansList: ").Append(PlansList).Append("\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
            sb.Append("  PagingResponseHeader: ").Append(PagingResponseHeader).Append("\n");
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
            return this.Equals(input as GetInstallmentsPlanExtendedResponse);
        }

        /// <summary>
        /// Returns true if GetInstallmentsPlanExtendedResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetInstallmentsPlanExtendedResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetInstallmentsPlanExtendedResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.PlansList == input.PlansList ||
                    this.PlansList != null &&
                    this.PlansList.SequenceEqual(input.PlansList)
                ) && 
                (
                    this.ResponseHeader == input.ResponseHeader ||
                    (this.ResponseHeader != null &&
                    this.ResponseHeader.Equals(input.ResponseHeader))
                ) && 
                (
                    this.PagingResponseHeader == input.PagingResponseHeader ||
                    (this.PagingResponseHeader != null &&
                    this.PagingResponseHeader.Equals(input.PagingResponseHeader))
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
                if (this.PlansList != null)
                    hashCode = hashCode * 59 + this.PlansList.GetHashCode();
                if (this.ResponseHeader != null)
                    hashCode = hashCode * 59 + this.ResponseHeader.GetHashCode();
                if (this.PagingResponseHeader != null)
                    hashCode = hashCode * 59 + this.PagingResponseHeader.GetHashCode();
                return hashCode;
            }
        }
    }

}
