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
    /// Defines DelayResolution
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum DelayResolution
    {
        
        /// <summary>
        /// Enum Unknown for value: Unknown
        /// </summary>
        [EnumMember(Value = "Unknown")]
        Unknown = 1,
        
        /// <summary>
        /// Enum PendingTechnicalVerification for value: PendingTechnicalVerification
        /// </summary>
        [EnumMember(Value = "PendingTechnicalVerification")]
        PendingTechnicalVerification = 2,
        
        /// <summary>
        /// Enum PendingBankTransferConfirmation for value: PendingBankTransferConfirmation
        /// </summary>
        [EnumMember(Value = "PendingBankTransferConfirmation")]
        PendingBankTransferConfirmation = 3,
        
        /// <summary>
        /// Enum PendingMidIssueResolution for value: PendingMidIssueResolution
        /// </summary>
        [EnumMember(Value = "PendingMidIssueResolution")]
        PendingMidIssueResolution = 4,
        
        /// <summary>
        /// Enum PendingSuspiciousReview for value: PendingSuspiciousReview
        /// </summary>
        [EnumMember(Value = "PendingSuspiciousReview")]
        PendingSuspiciousReview = 5,
        
        /// <summary>
        /// Enum DefaultedInCollection for value: DefaultedInCollection
        /// </summary>
        [EnumMember(Value = "DefaultedInCollection")]
        DefaultedInCollection = 6,
        
        /// <summary>
        /// Enum DefaultedPermanently for value: DefaultedPermanently
        /// </summary>
        [EnumMember(Value = "DefaultedPermanently")]
        DefaultedPermanently = 7,
        
        /// <summary>
        /// Enum DefaultedCollectedFromMerchant for value: DefaultedCollectedFromMerchant
        /// </summary>
        [EnumMember(Value = "DefaultedCollectedFromMerchant")]
        DefaultedCollectedFromMerchant = 8
    }

}
