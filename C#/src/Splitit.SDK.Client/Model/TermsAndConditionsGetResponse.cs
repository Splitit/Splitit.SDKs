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
    /// TermsAndConditionsGetResponse
    /// </summary>
    [DataContract]
    public partial class TermsAndConditionsGetResponse :  IEquatable<TermsAndConditionsGetResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TermsAndConditionsGetResponse" /> class.
        /// </summary>
        /// <param name="responseHeader">responseHeader.</param>
        /// <param name="termsAndConditions">termsAndConditions.</param>
        public TermsAndConditionsGetResponse(ResponseHeader responseHeader = default(ResponseHeader), TermsAndConditions termsAndConditions = default(TermsAndConditions))
        {
            this.ResponseHeader = responseHeader;
            this.TermsAndConditions = termsAndConditions;
        }

        
        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Gets or Sets TermsAndConditions
        /// </summary>
        [DataMember(Name="TermsAndConditions", EmitDefaultValue=false)]
        public TermsAndConditions TermsAndConditions { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TermsAndConditionsGetResponse {\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
            sb.Append("  TermsAndConditions: ").Append(TermsAndConditions).Append("\n");
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
            return this.Equals(input as TermsAndConditionsGetResponse);
        }

        /// <summary>
        /// Returns true if TermsAndConditionsGetResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of TermsAndConditionsGetResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TermsAndConditionsGetResponse input)
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
                    this.TermsAndConditions == input.TermsAndConditions ||
                    (this.TermsAndConditions != null &&
                    this.TermsAndConditions.Equals(input.TermsAndConditions))
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
                if (this.TermsAndConditions != null)
                    hashCode = hashCode * 59 + this.TermsAndConditions.GetHashCode();
                return hashCode;
            }
        }
    }

}
