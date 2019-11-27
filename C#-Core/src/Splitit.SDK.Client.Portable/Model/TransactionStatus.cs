/* 
 * splitit-web-api-public
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
using SwaggerDateConverter = Splitit.SDK.Client.Portable.Client.SwaggerDateConverter;

namespace Splitit.SDK.Client.Portable.Model
{
    /// <summary>
    /// Defines TransactionStatus
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum TransactionStatus
    {
        
        /// <summary>
        /// Enum Pending for value: Pending
        /// </summary>
        [EnumMember(Value = "Pending")]
        Pending = 1,
        
        /// <summary>
        /// Enum FinishedSuccessfully for value: FinishedSuccessfully
        /// </summary>
        [EnumMember(Value = "FinishedSuccessfully")]
        FinishedSuccessfully = 2,
        
        /// <summary>
        /// Enum Failed for value: Failed
        /// </summary>
        [EnumMember(Value = "Failed")]
        Failed = 3,
        
        /// <summary>
        /// Enum AllStatuses for value: AllStatuses
        /// </summary>
        [EnumMember(Value = "AllStatuses")]
        AllStatuses = 4
    }

}