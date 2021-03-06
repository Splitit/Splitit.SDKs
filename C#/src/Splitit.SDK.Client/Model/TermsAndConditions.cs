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
    /// TermsAndConditions
    /// </summary>
    [DataContract]
    public partial class TermsAndConditions :  IEquatable<TermsAndConditions>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TermsAndConditions" /> class.
        /// </summary>
        /// <param name="agreement">agreement.</param>
        /// <param name="importantNote">importantNote.</param>
        /// <param name="fullContent">fullContent.</param>
        /// <param name="privacyPolicy">privacyPolicy.</param>
        /// <param name="whatYouNeedToKnowAuthHoldDefine">whatYouNeedToKnowAuthHoldDefine.</param>
        /// <param name="whatYouNeedToKnowBudgetManagement">whatYouNeedToKnowBudgetManagement.</param>
        /// <param name="whatYouNeedToKnowCardTypeDetails">whatYouNeedToKnowCardTypeDetails.</param>
        public TermsAndConditions(string agreement = default(string), string importantNote = default(string), string fullContent = default(string), string privacyPolicy = default(string), string whatYouNeedToKnowAuthHoldDefine = default(string), string whatYouNeedToKnowBudgetManagement = default(string), string whatYouNeedToKnowCardTypeDetails = default(string))
        {
            this.Agreement = agreement;
            this.ImportantNote = importantNote;
            this.FullContent = fullContent;
            this.PrivacyPolicy = privacyPolicy;
            this.WhatYouNeedToKnowAuthHoldDefine = whatYouNeedToKnowAuthHoldDefine;
            this.WhatYouNeedToKnowBudgetManagement = whatYouNeedToKnowBudgetManagement;
            this.WhatYouNeedToKnowCardTypeDetails = whatYouNeedToKnowCardTypeDetails;
        }

        
        /// <summary>
        /// Gets or Sets Agreement
        /// </summary>
        [DataMember(Name="Agreement", EmitDefaultValue=false)]
        public string Agreement { get; set; }

        /// <summary>
        /// Gets or Sets ImportantNote
        /// </summary>
        [DataMember(Name="ImportantNote", EmitDefaultValue=false)]
        public string ImportantNote { get; set; }

        /// <summary>
        /// Gets or Sets FullContent
        /// </summary>
        [DataMember(Name="FullContent", EmitDefaultValue=false)]
        public string FullContent { get; set; }

        /// <summary>
        /// Gets or Sets PrivacyPolicy
        /// </summary>
        [DataMember(Name="PrivacyPolicy", EmitDefaultValue=false)]
        public string PrivacyPolicy { get; set; }

        /// <summary>
        /// Gets or Sets WhatYouNeedToKnowAuthHoldDefine
        /// </summary>
        [DataMember(Name="WhatYouNeedToKnow_AuthHoldDefine", EmitDefaultValue=false)]
        public string WhatYouNeedToKnowAuthHoldDefine { get; set; }

        /// <summary>
        /// Gets or Sets WhatYouNeedToKnowBudgetManagement
        /// </summary>
        [DataMember(Name="WhatYouNeedToKnow_BudgetManagement", EmitDefaultValue=false)]
        public string WhatYouNeedToKnowBudgetManagement { get; set; }

        /// <summary>
        /// Gets or Sets WhatYouNeedToKnowCardTypeDetails
        /// </summary>
        [DataMember(Name="WhatYouNeedToKnow_CardTypeDetails", EmitDefaultValue=false)]
        public string WhatYouNeedToKnowCardTypeDetails { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TermsAndConditions {\n");
            sb.Append("  Agreement: ").Append(Agreement).Append("\n");
            sb.Append("  ImportantNote: ").Append(ImportantNote).Append("\n");
            sb.Append("  FullContent: ").Append(FullContent).Append("\n");
            sb.Append("  PrivacyPolicy: ").Append(PrivacyPolicy).Append("\n");
            sb.Append("  WhatYouNeedToKnowAuthHoldDefine: ").Append(WhatYouNeedToKnowAuthHoldDefine).Append("\n");
            sb.Append("  WhatYouNeedToKnowBudgetManagement: ").Append(WhatYouNeedToKnowBudgetManagement).Append("\n");
            sb.Append("  WhatYouNeedToKnowCardTypeDetails: ").Append(WhatYouNeedToKnowCardTypeDetails).Append("\n");
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
            return this.Equals(input as TermsAndConditions);
        }

        /// <summary>
        /// Returns true if TermsAndConditions instances are equal
        /// </summary>
        /// <param name="input">Instance of TermsAndConditions to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TermsAndConditions input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Agreement == input.Agreement ||
                    (this.Agreement != null &&
                    this.Agreement.Equals(input.Agreement))
                ) && 
                (
                    this.ImportantNote == input.ImportantNote ||
                    (this.ImportantNote != null &&
                    this.ImportantNote.Equals(input.ImportantNote))
                ) && 
                (
                    this.FullContent == input.FullContent ||
                    (this.FullContent != null &&
                    this.FullContent.Equals(input.FullContent))
                ) && 
                (
                    this.PrivacyPolicy == input.PrivacyPolicy ||
                    (this.PrivacyPolicy != null &&
                    this.PrivacyPolicy.Equals(input.PrivacyPolicy))
                ) && 
                (
                    this.WhatYouNeedToKnowAuthHoldDefine == input.WhatYouNeedToKnowAuthHoldDefine ||
                    (this.WhatYouNeedToKnowAuthHoldDefine != null &&
                    this.WhatYouNeedToKnowAuthHoldDefine.Equals(input.WhatYouNeedToKnowAuthHoldDefine))
                ) && 
                (
                    this.WhatYouNeedToKnowBudgetManagement == input.WhatYouNeedToKnowBudgetManagement ||
                    (this.WhatYouNeedToKnowBudgetManagement != null &&
                    this.WhatYouNeedToKnowBudgetManagement.Equals(input.WhatYouNeedToKnowBudgetManagement))
                ) && 
                (
                    this.WhatYouNeedToKnowCardTypeDetails == input.WhatYouNeedToKnowCardTypeDetails ||
                    (this.WhatYouNeedToKnowCardTypeDetails != null &&
                    this.WhatYouNeedToKnowCardTypeDetails.Equals(input.WhatYouNeedToKnowCardTypeDetails))
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
                if (this.Agreement != null)
                    hashCode = hashCode * 59 + this.Agreement.GetHashCode();
                if (this.ImportantNote != null)
                    hashCode = hashCode * 59 + this.ImportantNote.GetHashCode();
                if (this.FullContent != null)
                    hashCode = hashCode * 59 + this.FullContent.GetHashCode();
                if (this.PrivacyPolicy != null)
                    hashCode = hashCode * 59 + this.PrivacyPolicy.GetHashCode();
                if (this.WhatYouNeedToKnowAuthHoldDefine != null)
                    hashCode = hashCode * 59 + this.WhatYouNeedToKnowAuthHoldDefine.GetHashCode();
                if (this.WhatYouNeedToKnowBudgetManagement != null)
                    hashCode = hashCode * 59 + this.WhatYouNeedToKnowBudgetManagement.GetHashCode();
                if (this.WhatYouNeedToKnowCardTypeDetails != null)
                    hashCode = hashCode * 59 + this.WhatYouNeedToKnowCardTypeDetails.GetHashCode();
                return hashCode;
            }
        }
    }

}
