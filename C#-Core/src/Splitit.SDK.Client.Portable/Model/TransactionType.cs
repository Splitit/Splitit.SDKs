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
    /// Defines TransactionType
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum TransactionType
    {
        
        /// <summary>
        /// Enum Installments for value: Installments
        /// </summary>
        [EnumMember(Value = "Installments")]
        Installments = 1,
        
        /// <summary>
        /// Enum Authorizations for value: Authorizations
        /// </summary>
        [EnumMember(Value = "Authorizations")]
        Authorizations = 2,
        
        /// <summary>
        /// Enum Refunds for value: Refunds
        /// </summary>
        [EnumMember(Value = "Refunds")]
        Refunds = 3,
        
        /// <summary>
        /// Enum Chb for value: Chb
        /// </summary>
        [EnumMember(Value = "Chb")]
        Chb = 4,
        
        /// <summary>
        /// Enum AllTypes for value: AllTypes
        /// </summary>
        [EnumMember(Value = "AllTypes")]
        AllTypes = 5
    }

}