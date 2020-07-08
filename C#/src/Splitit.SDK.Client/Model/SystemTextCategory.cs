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
    /// Defines SystemTextCategory
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum SystemTextCategory
    {
        
        /// <summary>
        /// Enum TermsAndConditions for value: TermsAndConditions
        /// </summary>
        [EnumMember(Value = "TermsAndConditions")]
        TermsAndConditions = 1,
        
        /// <summary>
        /// Enum EmailContent for value: EmailContent
        /// </summary>
        [EnumMember(Value = "EmailContent")]
        EmailContent = 2,
        
        /// <summary>
        /// Enum Error for value: Error
        /// </summary>
        [EnumMember(Value = "Error")]
        Error = 3,
        
        /// <summary>
        /// Enum EmailTemplate for value: EmailTemplate
        /// </summary>
        [EnumMember(Value = "EmailTemplate")]
        EmailTemplate = 4,
        
        /// <summary>
        /// Enum AdministrationPotral for value: AdministrationPotral
        /// </summary>
        [EnumMember(Value = "AdministrationPotral")]
        AdministrationPotral = 5,
        
        /// <summary>
        /// Enum Receipt for value: Receipt
        /// </summary>
        [EnumMember(Value = "Receipt")]
        Receipt = 6,
        
        /// <summary>
        /// Enum InstallmentPlanStatus for value: InstallmentPlanStatus
        /// </summary>
        [EnumMember(Value = "InstallmentPlanStatus")]
        InstallmentPlanStatus = 7,
        
        /// <summary>
        /// Enum InstallmentStatus for value: InstallmentStatus
        /// </summary>
        [EnumMember(Value = "InstallmentStatus")]
        InstallmentStatus = 8,
        
        /// <summary>
        /// Enum PurchaseMethod for value: PurchaseMethod
        /// </summary>
        [EnumMember(Value = "PurchaseMethod")]
        PurchaseMethod = 9,
        
        /// <summary>
        /// Enum OperationType for value: OperationType
        /// </summary>
        [EnumMember(Value = "OperationType")]
        OperationType = 10,
        
        /// <summary>
        /// Enum CardBrand for value: CardBrand
        /// </summary>
        [EnumMember(Value = "CardBrand")]
        CardBrand = 11,
        
        /// <summary>
        /// Enum PaymentDetails for value: PaymentDetails
        /// </summary>
        [EnumMember(Value = "PaymentDetails")]
        PaymentDetails = 12,
        
        /// <summary>
        /// Enum Common for value: Common
        /// </summary>
        [EnumMember(Value = "Common")]
        Common = 13,
        
        /// <summary>
        /// Enum VPos for value: VPos
        /// </summary>
        [EnumMember(Value = "VPos")]
        VPos = 14,
        
        /// <summary>
        /// Enum PaymentTransactionShopperMessage for value: PaymentTransactionShopperMessage
        /// </summary>
        [EnumMember(Value = "PaymentTransactionShopperMessage")]
        PaymentTransactionShopperMessage = 15,
        
        /// <summary>
        /// Enum TermsAndConditionsLegal for value: TermsAndConditionsLegal
        /// </summary>
        [EnumMember(Value = "TermsAndConditionsLegal")]
        TermsAndConditionsLegal = 16,
        
        /// <summary>
        /// Enum Ecomm for value: Ecomm
        /// </summary>
        [EnumMember(Value = "Ecomm")]
        Ecomm = 17,
        
        /// <summary>
        /// Enum ShopperSplititAccount for value: ShopperSplititAccount
        /// </summary>
        [EnumMember(Value = "ShopperSplititAccount")]
        ShopperSplititAccount = 18,
        
        /// <summary>
        /// Enum SMSContent for value: SMSContent
        /// </summary>
        [EnumMember(Value = "SMSContent")]
        SMSContent = 19,
        
        /// <summary>
        /// Enum POS for value: POS
        /// </summary>
        [EnumMember(Value = "POS")]
        POS = 20,
        
        /// <summary>
        /// Enum FlexFields for value: FlexFields
        /// </summary>
        [EnumMember(Value = "FlexFields")]
        FlexFields = 21,
        
        /// <summary>
        /// Enum MessagingSystem for value: MessagingSystem
        /// </summary>
        [EnumMember(Value = "MessagingSystem")]
        MessagingSystem = 22,
        
        /// <summary>
        /// Enum PaymentFormV3 for value: PaymentFormV3
        /// </summary>
        [EnumMember(Value = "PaymentFormV3")]
        PaymentFormV3 = 23,
        
        /// <summary>
        /// Enum HowSplititWorks for value: HowSplititWorks
        /// </summary>
        [EnumMember(Value = "HowSplititWorks")]
        HowSplititWorks = 24,
        
        /// <summary>
        /// Enum UpstreamMessaging for value: UpstreamMessaging
        /// </summary>
        [EnumMember(Value = "UpstreamMessaging")]
        UpstreamMessaging = 25
    }

}
