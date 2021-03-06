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
    /// Installment
    /// </summary>
    [DataContract]
    public partial class Installment :  IEquatable<Installment>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Installment" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Installment() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Installment" /> class.
        /// </summary>
        /// <param name="date">date.</param>
        /// <param name="amount">amount.</param>
        /// <param name="heldAmount">heldAmount (required).</param>
        public Installment(DateTime? date = default(DateTime?), MoneyWithCurrencyCode amount = default(MoneyWithCurrencyCode), decimal? heldAmount = default(decimal?))
        {
            this.HeldAmount = heldAmount;
            this.Date = date;
            this.Amount = amount;
        }

        
        /// <summary>
        /// Gets or Sets Date
        /// </summary>
        [DataMember(Name="Date", EmitDefaultValue=false)]
        public DateTime? Date { get; set; }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name="Amount", EmitDefaultValue=false)]
        public MoneyWithCurrencyCode Amount { get; set; }

        /// <summary>
        /// Gets or Sets HeldAmount
        /// </summary>
        [DataMember(Name="HeldAmount", EmitDefaultValue=false)]
        public decimal? HeldAmount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Installment {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  HeldAmount: ").Append(HeldAmount).Append("\n");
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
            return this.Equals(input as Installment);
        }

        /// <summary>
        /// Returns true if Installment instances are equal
        /// </summary>
        /// <param name="input">Instance of Installment to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Installment input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.Amount == input.Amount ||
                    (this.Amount != null &&
                    this.Amount.Equals(input.Amount))
                ) && 
                (
                    this.HeldAmount == input.HeldAmount ||
                    (this.HeldAmount != null &&
                    this.HeldAmount.Equals(input.HeldAmount))
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
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.Amount != null)
                    hashCode = hashCode * 59 + this.Amount.GetHashCode();
                if (this.HeldAmount != null)
                    hashCode = hashCode * 59 + this.HeldAmount.GetHashCode();
                return hashCode;
            }
        }
    }

}
