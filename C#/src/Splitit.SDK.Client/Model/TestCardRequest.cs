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
    /// TestCardRequest
    /// </summary>
    [DataContract]
    public partial class TestCardRequest :  IEquatable<TestCardRequest>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TestCardRequest" /> class.
        /// </summary>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="doVoid">doVoid.</param>
        public TestCardRequest(string installmentPlanNumber = default(string), bool? doVoid = default(bool?))
        {
            this.InstallmentPlanNumber = installmentPlanNumber;
            this.DoVoid = doVoid;
        }

        [DataMember(Name="RequestHeader", EmitDefaultValue=false)]
        internal RequestHeader RequestHeader { get; set; }
        
        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }

        /// <summary>
        /// Gets or Sets DoVoid
        /// </summary>
        [DataMember(Name="DoVoid", EmitDefaultValue=false)]
        public bool? DoVoid { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TestCardRequest {\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  DoVoid: ").Append(DoVoid).Append("\n");
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
            return this.Equals(input as TestCardRequest);
        }

        /// <summary>
        /// Returns true if TestCardRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of TestCardRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TestCardRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InstallmentPlanNumber == input.InstallmentPlanNumber ||
                    (this.InstallmentPlanNumber != null &&
                    this.InstallmentPlanNumber.Equals(input.InstallmentPlanNumber))
                ) && 
                (
                    this.DoVoid == input.DoVoid ||
                    (this.DoVoid != null &&
                    this.DoVoid.Equals(input.DoVoid))
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
                if (this.InstallmentPlanNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanNumber.GetHashCode();
                if (this.DoVoid != null)
                    hashCode = hashCode * 59 + this.DoVoid.GetHashCode();
                return hashCode;
            }
        }
    }

}
