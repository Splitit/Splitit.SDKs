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
    /// Defines InstallmentPlanStatus
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum InstallmentPlanStatus
    {
        
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,
        
        /// <summary>
        /// Enum PendingApproval for value: PendingApproval
        /// </summary>
        [EnumMember(Value = "PendingApproval")]
        PendingApproval = 2,
        
        /// <summary>
        /// Enum PendingMerchantShipmentNotice for value: PendingMerchantShipmentNotice
        /// </summary>
        [EnumMember(Value = "PendingMerchantShipmentNotice")]
        PendingMerchantShipmentNotice = 3,
        
        /// <summary>
        /// Enum InProgress for value: InProgress
        /// </summary>
        [EnumMember(Value = "InProgress")]
        InProgress = 4,
        
        /// <summary>
        /// Enum Deleted for value: Deleted
        /// </summary>
        [EnumMember(Value = "Deleted")]
        Deleted = 5,
        
        /// <summary>
        /// Enum Cleared for value: Cleared
        /// </summary>
        [EnumMember(Value = "Cleared")]
        Cleared = 6,
        
        /// <summary>
        /// Enum PendingPaymentUpdate for value: PendingPaymentUpdate
        /// </summary>
        [EnumMember(Value = "PendingPaymentUpdate")]
        PendingPaymentUpdate = 7,
        
        /// <summary>
        /// Enum Canceled for value: Canceled
        /// </summary>
        [EnumMember(Value = "Canceled")]
        Canceled = 8,
        
        /// <summary>
        /// Enum Delayed for value: Delayed
        /// </summary>
        [EnumMember(Value = "Delayed")]
        Delayed = 9,
        
        /// <summary>
        /// Enum Initializing for value: Initializing
        /// </summary>
        [EnumMember(Value = "Initializing")]
        Initializing = 10,
        
        /// <summary>
        /// Enum AllStatuses for value: AllStatuses
        /// </summary>
        [EnumMember(Value = "AllStatuses")]
        AllStatuses = 11
    }

}
