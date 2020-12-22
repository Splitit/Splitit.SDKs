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
    /// Get3DSecureParametersResponse
    /// </summary>
    [DataContract]
    public partial class Get3DSecureParametersResponse :  IEquatable<Get3DSecureParametersResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Get3DSecureParametersResponse" /> class.
        /// </summary>
        /// <param name="responseHeader">responseHeader.</param>
        /// <param name="issuerRedirectUrl">issuerRedirectUrl.</param>
        /// <param name="paReq">paReq.</param>
        /// <param name="md">md.</param>
        /// <param name="termUrl">termUrl.</param>
        /// <param name="threeDSecureParams">threeDSecureParams.</param>
        public Get3DSecureParametersResponse(ResponseHeader responseHeader = default(ResponseHeader), string issuerRedirectUrl = default(string), string paReq = default(string), string md = default(string), string termUrl = default(string), Dictionary<string, string> threeDSecureParams = default(Dictionary<string, string>))
        {
            this.ResponseHeader = responseHeader;
            this.IssuerRedirectUrl = issuerRedirectUrl;
            this.PaReq = paReq;
            this.Md = md;
            this.TermUrl = termUrl;
            this.ThreeDSecureParams = threeDSecureParams;
        }

        
        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Gets or Sets IssuerRedirectUrl
        /// </summary>
        [DataMember(Name="IssuerRedirectUrl", EmitDefaultValue=false)]
        public string IssuerRedirectUrl { get; set; }

        /// <summary>
        /// Gets or Sets PaReq
        /// </summary>
        [DataMember(Name="PaReq", EmitDefaultValue=false)]
        public string PaReq { get; set; }

        /// <summary>
        /// Gets or Sets Md
        /// </summary>
        [DataMember(Name="Md", EmitDefaultValue=false)]
        public string Md { get; set; }

        /// <summary>
        /// Gets or Sets TermUrl
        /// </summary>
        [DataMember(Name="TermUrl", EmitDefaultValue=false)]
        public string TermUrl { get; set; }

        /// <summary>
        /// Gets or Sets ThreeDSecureParams
        /// </summary>
        [DataMember(Name="ThreeDSecureParams", EmitDefaultValue=false)]
        public Dictionary<string, string> ThreeDSecureParams { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Get3DSecureParametersResponse {\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
            sb.Append("  IssuerRedirectUrl: ").Append(IssuerRedirectUrl).Append("\n");
            sb.Append("  PaReq: ").Append(PaReq).Append("\n");
            sb.Append("  Md: ").Append(Md).Append("\n");
            sb.Append("  TermUrl: ").Append(TermUrl).Append("\n");
            sb.Append("  ThreeDSecureParams: ").Append(ThreeDSecureParams).Append("\n");
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
            return this.Equals(input as Get3DSecureParametersResponse);
        }

        /// <summary>
        /// Returns true if Get3DSecureParametersResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of Get3DSecureParametersResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Get3DSecureParametersResponse input)
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
                    this.IssuerRedirectUrl == input.IssuerRedirectUrl ||
                    (this.IssuerRedirectUrl != null &&
                    this.IssuerRedirectUrl.Equals(input.IssuerRedirectUrl))
                ) && 
                (
                    this.PaReq == input.PaReq ||
                    (this.PaReq != null &&
                    this.PaReq.Equals(input.PaReq))
                ) && 
                (
                    this.Md == input.Md ||
                    (this.Md != null &&
                    this.Md.Equals(input.Md))
                ) && 
                (
                    this.TermUrl == input.TermUrl ||
                    (this.TermUrl != null &&
                    this.TermUrl.Equals(input.TermUrl))
                ) && 
                (
                    this.ThreeDSecureParams == input.ThreeDSecureParams ||
                    this.ThreeDSecureParams != null &&
                    this.ThreeDSecureParams.SequenceEqual(input.ThreeDSecureParams)
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
                if (this.IssuerRedirectUrl != null)
                    hashCode = hashCode * 59 + this.IssuerRedirectUrl.GetHashCode();
                if (this.PaReq != null)
                    hashCode = hashCode * 59 + this.PaReq.GetHashCode();
                if (this.Md != null)
                    hashCode = hashCode * 59 + this.Md.GetHashCode();
                if (this.TermUrl != null)
                    hashCode = hashCode * 59 + this.TermUrl.GetHashCode();
                if (this.ThreeDSecureParams != null)
                    hashCode = hashCode * 59 + this.ThreeDSecureParams.GetHashCode();
                return hashCode;
            }
        }
    }

}
