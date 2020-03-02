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
    /// GetResourcesRequest
    /// </summary>
    [DataContract]
    public partial class GetResourcesRequest :  IEquatable<GetResourcesRequest>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetResourcesRequest" /> class.
        /// </summary>
        /// <param name="systemTextCategories">systemTextCategories.</param>
        /// <param name="requestContext">requestContext.</param>
        public GetResourcesRequest(List<SystemTextCategory> systemTextCategories = default(List<SystemTextCategory>), GetResourcesRequestContext requestContext = default(GetResourcesRequestContext))
        {
            this.SystemTextCategories = systemTextCategories;
            this.RequestContext = requestContext;
        }

        [DataMember(Name="RequestHeader", EmitDefaultValue=false)]
        internal RequestHeader RequestHeader { get; set; }
        
        /// <summary>
        /// Gets or Sets SystemTextCategories
        /// </summary>
        [DataMember(Name="SystemTextCategories", EmitDefaultValue=false)]
        public List<SystemTextCategory> SystemTextCategories { get; set; }

        /// <summary>
        /// Gets or Sets RequestContext
        /// </summary>
        [DataMember(Name="RequestContext", EmitDefaultValue=false)]
        public GetResourcesRequestContext RequestContext { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GetResourcesRequest {\n");
            sb.Append("  SystemTextCategories: ").Append(SystemTextCategories).Append("\n");
            sb.Append("  RequestContext: ").Append(RequestContext).Append("\n");
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
            return this.Equals(input as GetResourcesRequest);
        }

        /// <summary>
        /// Returns true if GetResourcesRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of GetResourcesRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetResourcesRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.SystemTextCategories == input.SystemTextCategories ||
                    this.SystemTextCategories != null &&
                    this.SystemTextCategories.SequenceEqual(input.SystemTextCategories)
                ) && 
                (
                    this.RequestContext == input.RequestContext ||
                    (this.RequestContext != null &&
                    this.RequestContext.Equals(input.RequestContext))
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
                if (this.SystemTextCategories != null)
                    hashCode = hashCode * 59 + this.SystemTextCategories.GetHashCode();
                if (this.RequestContext != null)
                    hashCode = hashCode * 59 + this.RequestContext.GetHashCode();
                return hashCode;
            }
        }
    }

}
