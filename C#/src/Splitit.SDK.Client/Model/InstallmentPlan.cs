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
    /// InstallmentPlan
    /// </summary>
    [DataContract]
    public partial class InstallmentPlan :  IEquatable<InstallmentPlan>
    {
        /// <summary>
        /// Gets or Sets TestMode
        /// </summary>
        [DataMember(Name="TestMode", EmitDefaultValue=false)]
        public TestModes TestMode { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlan" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstallmentPlan() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlan" /> class.
        /// </summary>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="installmentPlanStatus">installmentPlanStatus.</param>
        /// <param name="amount">amount.</param>
        /// <param name="outstandingAmount">outstandingAmount.</param>
        /// <param name="numberOfInstallments">numberOfInstallments (required).</param>
        /// <param name="numberOfProcessedInstallments">numberOfProcessedInstallments (required).</param>
        /// <param name="originalAmount">originalAmount.</param>
        /// <param name="refundAmount">refundAmount.</param>
        /// <param name="consumer">consumer.</param>
        /// <param name="activeCard">activeCard.</param>
        /// <param name="fraudCheck">fraudCheck.</param>
        /// <param name="merchant">merchant.</param>
        /// <param name="refOrderNumber">refOrderNumber.</param>
        /// <param name="purchaseMethod">purchaseMethod.</param>
        /// <param name="strategy">strategy.</param>
        /// <param name="delayResolution">delayResolution.</param>
        /// <param name="extendedParams">extendedParams.</param>
        /// <param name="isFullCaptured">isFullCaptured (required).</param>
        /// <param name="isChargedBack">isChargedBack (required).</param>
        /// <param name="arePaymentsOnHold">arePaymentsOnHold (required).</param>
        /// <param name="scpFundingPercent">scpFundingPercent (required).</param>
        /// <param name="testMode">testMode (required).</param>
        /// <param name="creationDateTime">creationDateTime (required).</param>
        /// <param name="installments">installments.</param>
        /// <param name="secureAuthorizations">secureAuthorizations.</param>
        public InstallmentPlan(string installmentPlanNumber = default(string), ReferenceEntityBase installmentPlanStatus = default(ReferenceEntityBase), Money amount = default(Money), Money outstandingAmount = default(Money), int? numberOfInstallments = default(int?), int? numberOfProcessedInstallments = default(int?), Money originalAmount = default(Money), Money refundAmount = default(Money), ConsumerData consumer = default(ConsumerData), CardData activeCard = default(CardData), FraudCheck fraudCheck = default(FraudCheck), MerchantRef merchant = default(MerchantRef), string refOrderNumber = default(string), ReferenceEntityBase purchaseMethod = default(ReferenceEntityBase), ReferenceEntityBase strategy = default(ReferenceEntityBase), ReferenceEntityBase delayResolution = default(ReferenceEntityBase), Dictionary<string, string> extendedParams = default(Dictionary<string, string>), bool? isFullCaptured = default(bool?), bool? isChargedBack = default(bool?), bool? arePaymentsOnHold = default(bool?), decimal? scpFundingPercent = default(decimal?), TestModes testMode = default(TestModes), DateTime? creationDateTime = default(DateTime?), List<Installment2> installments = default(List<Installment2>), List<ReAuthorization> secureAuthorizations = default(List<ReAuthorization>))
        {
            this.NumberOfInstallments = numberOfInstallments;
            this.NumberOfProcessedInstallments = numberOfProcessedInstallments;
            this.IsFullCaptured = isFullCaptured;
            this.IsChargedBack = isChargedBack;
            this.ArePaymentsOnHold = arePaymentsOnHold;
            this.ScpFundingPercent = scpFundingPercent;
            this.TestMode = testMode;
            this.CreationDateTime = creationDateTime;
            this.InstallmentPlanNumber = installmentPlanNumber;
            this.InstallmentPlanStatus = installmentPlanStatus;
            this.Amount = amount;
            this.OutstandingAmount = outstandingAmount;
            this.OriginalAmount = originalAmount;
            this.RefundAmount = refundAmount;
            this.Consumer = consumer;
            this.ActiveCard = activeCard;
            this.FraudCheck = fraudCheck;
            this.Merchant = merchant;
            this.RefOrderNumber = refOrderNumber;
            this.PurchaseMethod = purchaseMethod;
            this.Strategy = strategy;
            this.DelayResolution = delayResolution;
            this.ExtendedParams = extendedParams;
            this.Installments = installments;
            this.SecureAuthorizations = secureAuthorizations;
        }

        
        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanStatus
        /// </summary>
        [DataMember(Name="InstallmentPlanStatus", EmitDefaultValue=false)]
        public ReferenceEntityBase InstallmentPlanStatus { get; set; }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name="Amount", EmitDefaultValue=false)]
        public Money Amount { get; set; }

        /// <summary>
        /// Gets or Sets OutstandingAmount
        /// </summary>
        [DataMember(Name="OutstandingAmount", EmitDefaultValue=false)]
        public Money OutstandingAmount { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfInstallments
        /// </summary>
        [DataMember(Name="NumberOfInstallments", EmitDefaultValue=false)]
        public int? NumberOfInstallments { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfProcessedInstallments
        /// </summary>
        [DataMember(Name="NumberOfProcessedInstallments", EmitDefaultValue=false)]
        public int? NumberOfProcessedInstallments { get; set; }

        /// <summary>
        /// Gets or Sets OriginalAmount
        /// </summary>
        [DataMember(Name="OriginalAmount", EmitDefaultValue=false)]
        public Money OriginalAmount { get; set; }

        /// <summary>
        /// Gets or Sets RefundAmount
        /// </summary>
        [DataMember(Name="RefundAmount", EmitDefaultValue=false)]
        public Money RefundAmount { get; set; }

        /// <summary>
        /// Gets or Sets Consumer
        /// </summary>
        [DataMember(Name="Consumer", EmitDefaultValue=false)]
        public ConsumerData Consumer { get; set; }

        /// <summary>
        /// Gets or Sets ActiveCard
        /// </summary>
        [DataMember(Name="ActiveCard", EmitDefaultValue=false)]
        public CardData ActiveCard { get; set; }

        /// <summary>
        /// Gets or Sets FraudCheck
        /// </summary>
        [DataMember(Name="FraudCheck", EmitDefaultValue=false)]
        public FraudCheck FraudCheck { get; set; }

        /// <summary>
        /// Gets or Sets Merchant
        /// </summary>
        [DataMember(Name="Merchant", EmitDefaultValue=false)]
        public MerchantRef Merchant { get; set; }

        /// <summary>
        /// Gets or Sets RefOrderNumber
        /// </summary>
        [DataMember(Name="RefOrderNumber", EmitDefaultValue=false)]
        public string RefOrderNumber { get; set; }

        /// <summary>
        /// Gets or Sets PurchaseMethod
        /// </summary>
        [DataMember(Name="PurchaseMethod", EmitDefaultValue=false)]
        public ReferenceEntityBase PurchaseMethod { get; set; }

        /// <summary>
        /// Gets or Sets Strategy
        /// </summary>
        [DataMember(Name="Strategy", EmitDefaultValue=false)]
        public ReferenceEntityBase Strategy { get; set; }

        /// <summary>
        /// Gets or Sets DelayResolution
        /// </summary>
        [DataMember(Name="DelayResolution", EmitDefaultValue=false)]
        public ReferenceEntityBase DelayResolution { get; set; }

        /// <summary>
        /// Gets or Sets ExtendedParams
        /// </summary>
        [DataMember(Name="ExtendedParams", EmitDefaultValue=false)]
        public Dictionary<string, string> ExtendedParams { get; set; }

        /// <summary>
        /// Gets or Sets IsFullCaptured
        /// </summary>
        [DataMember(Name="IsFullCaptured", EmitDefaultValue=false)]
        public bool? IsFullCaptured { get; set; }

        /// <summary>
        /// Gets or Sets IsChargedBack
        /// </summary>
        [DataMember(Name="IsChargedBack", EmitDefaultValue=false)]
        public bool? IsChargedBack { get; set; }

        /// <summary>
        /// Gets or Sets ArePaymentsOnHold
        /// </summary>
        [DataMember(Name="ArePaymentsOnHold", EmitDefaultValue=false)]
        public bool? ArePaymentsOnHold { get; set; }

        /// <summary>
        /// Gets or Sets ScpFundingPercent
        /// </summary>
        [DataMember(Name="ScpFundingPercent", EmitDefaultValue=false)]
        public decimal? ScpFundingPercent { get; set; }


        /// <summary>
        /// Gets or Sets CreationDateTime
        /// </summary>
        [DataMember(Name="CreationDateTime", EmitDefaultValue=false)]
        public DateTime? CreationDateTime { get; set; }

        /// <summary>
        /// Gets or Sets Installments
        /// </summary>
        [DataMember(Name="Installments", EmitDefaultValue=false)]
        public List<Installment2> Installments { get; set; }

        /// <summary>
        /// Gets or Sets SecureAuthorizations
        /// </summary>
        [DataMember(Name="SecureAuthorizations", EmitDefaultValue=false)]
        public List<ReAuthorization> SecureAuthorizations { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InstallmentPlan {\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  InstallmentPlanStatus: ").Append(InstallmentPlanStatus).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  OutstandingAmount: ").Append(OutstandingAmount).Append("\n");
            sb.Append("  NumberOfInstallments: ").Append(NumberOfInstallments).Append("\n");
            sb.Append("  NumberOfProcessedInstallments: ").Append(NumberOfProcessedInstallments).Append("\n");
            sb.Append("  OriginalAmount: ").Append(OriginalAmount).Append("\n");
            sb.Append("  RefundAmount: ").Append(RefundAmount).Append("\n");
            sb.Append("  Consumer: ").Append(Consumer).Append("\n");
            sb.Append("  ActiveCard: ").Append(ActiveCard).Append("\n");
            sb.Append("  FraudCheck: ").Append(FraudCheck).Append("\n");
            sb.Append("  Merchant: ").Append(Merchant).Append("\n");
            sb.Append("  RefOrderNumber: ").Append(RefOrderNumber).Append("\n");
            sb.Append("  PurchaseMethod: ").Append(PurchaseMethod).Append("\n");
            sb.Append("  Strategy: ").Append(Strategy).Append("\n");
            sb.Append("  DelayResolution: ").Append(DelayResolution).Append("\n");
            sb.Append("  ExtendedParams: ").Append(ExtendedParams).Append("\n");
            sb.Append("  IsFullCaptured: ").Append(IsFullCaptured).Append("\n");
            sb.Append("  IsChargedBack: ").Append(IsChargedBack).Append("\n");
            sb.Append("  ArePaymentsOnHold: ").Append(ArePaymentsOnHold).Append("\n");
            sb.Append("  ScpFundingPercent: ").Append(ScpFundingPercent).Append("\n");
            sb.Append("  TestMode: ").Append(TestMode).Append("\n");
            sb.Append("  CreationDateTime: ").Append(CreationDateTime).Append("\n");
            sb.Append("  Installments: ").Append(Installments).Append("\n");
            sb.Append("  SecureAuthorizations: ").Append(SecureAuthorizations).Append("\n");
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
            return this.Equals(input as InstallmentPlan);
        }

        /// <summary>
        /// Returns true if InstallmentPlan instances are equal
        /// </summary>
        /// <param name="input">Instance of InstallmentPlan to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstallmentPlan input)
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
                    this.InstallmentPlanStatus == input.InstallmentPlanStatus ||
                    (this.InstallmentPlanStatus != null &&
                    this.InstallmentPlanStatus.Equals(input.InstallmentPlanStatus))
                ) && 
                (
                    this.Amount == input.Amount ||
                    (this.Amount != null &&
                    this.Amount.Equals(input.Amount))
                ) && 
                (
                    this.OutstandingAmount == input.OutstandingAmount ||
                    (this.OutstandingAmount != null &&
                    this.OutstandingAmount.Equals(input.OutstandingAmount))
                ) && 
                (
                    this.NumberOfInstallments == input.NumberOfInstallments ||
                    (this.NumberOfInstallments != null &&
                    this.NumberOfInstallments.Equals(input.NumberOfInstallments))
                ) && 
                (
                    this.NumberOfProcessedInstallments == input.NumberOfProcessedInstallments ||
                    (this.NumberOfProcessedInstallments != null &&
                    this.NumberOfProcessedInstallments.Equals(input.NumberOfProcessedInstallments))
                ) && 
                (
                    this.OriginalAmount == input.OriginalAmount ||
                    (this.OriginalAmount != null &&
                    this.OriginalAmount.Equals(input.OriginalAmount))
                ) && 
                (
                    this.RefundAmount == input.RefundAmount ||
                    (this.RefundAmount != null &&
                    this.RefundAmount.Equals(input.RefundAmount))
                ) && 
                (
                    this.Consumer == input.Consumer ||
                    (this.Consumer != null &&
                    this.Consumer.Equals(input.Consumer))
                ) && 
                (
                    this.ActiveCard == input.ActiveCard ||
                    (this.ActiveCard != null &&
                    this.ActiveCard.Equals(input.ActiveCard))
                ) && 
                (
                    this.FraudCheck == input.FraudCheck ||
                    (this.FraudCheck != null &&
                    this.FraudCheck.Equals(input.FraudCheck))
                ) && 
                (
                    this.Merchant == input.Merchant ||
                    (this.Merchant != null &&
                    this.Merchant.Equals(input.Merchant))
                ) && 
                (
                    this.RefOrderNumber == input.RefOrderNumber ||
                    (this.RefOrderNumber != null &&
                    this.RefOrderNumber.Equals(input.RefOrderNumber))
                ) && 
                (
                    this.PurchaseMethod == input.PurchaseMethod ||
                    (this.PurchaseMethod != null &&
                    this.PurchaseMethod.Equals(input.PurchaseMethod))
                ) && 
                (
                    this.Strategy == input.Strategy ||
                    (this.Strategy != null &&
                    this.Strategy.Equals(input.Strategy))
                ) && 
                (
                    this.DelayResolution == input.DelayResolution ||
                    (this.DelayResolution != null &&
                    this.DelayResolution.Equals(input.DelayResolution))
                ) && 
                (
                    this.ExtendedParams == input.ExtendedParams ||
                    this.ExtendedParams != null &&
                    this.ExtendedParams.SequenceEqual(input.ExtendedParams)
                ) && 
                (
                    this.IsFullCaptured == input.IsFullCaptured ||
                    (this.IsFullCaptured != null &&
                    this.IsFullCaptured.Equals(input.IsFullCaptured))
                ) && 
                (
                    this.IsChargedBack == input.IsChargedBack ||
                    (this.IsChargedBack != null &&
                    this.IsChargedBack.Equals(input.IsChargedBack))
                ) && 
                (
                    this.ArePaymentsOnHold == input.ArePaymentsOnHold ||
                    (this.ArePaymentsOnHold != null &&
                    this.ArePaymentsOnHold.Equals(input.ArePaymentsOnHold))
                ) && 
                (
                    this.ScpFundingPercent == input.ScpFundingPercent ||
                    (this.ScpFundingPercent != null &&
                    this.ScpFundingPercent.Equals(input.ScpFundingPercent))
                ) && 
                (
                    this.TestMode == input.TestMode ||
                    (this.TestMode != null &&
                    this.TestMode.Equals(input.TestMode))
                ) && 
                (
                    this.CreationDateTime == input.CreationDateTime ||
                    (this.CreationDateTime != null &&
                    this.CreationDateTime.Equals(input.CreationDateTime))
                ) && 
                (
                    this.Installments == input.Installments ||
                    this.Installments != null &&
                    this.Installments.SequenceEqual(input.Installments)
                ) && 
                (
                    this.SecureAuthorizations == input.SecureAuthorizations ||
                    this.SecureAuthorizations != null &&
                    this.SecureAuthorizations.SequenceEqual(input.SecureAuthorizations)
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
                if (this.InstallmentPlanStatus != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanStatus.GetHashCode();
                if (this.Amount != null)
                    hashCode = hashCode * 59 + this.Amount.GetHashCode();
                if (this.OutstandingAmount != null)
                    hashCode = hashCode * 59 + this.OutstandingAmount.GetHashCode();
                if (this.NumberOfInstallments != null)
                    hashCode = hashCode * 59 + this.NumberOfInstallments.GetHashCode();
                if (this.NumberOfProcessedInstallments != null)
                    hashCode = hashCode * 59 + this.NumberOfProcessedInstallments.GetHashCode();
                if (this.OriginalAmount != null)
                    hashCode = hashCode * 59 + this.OriginalAmount.GetHashCode();
                if (this.RefundAmount != null)
                    hashCode = hashCode * 59 + this.RefundAmount.GetHashCode();
                if (this.Consumer != null)
                    hashCode = hashCode * 59 + this.Consumer.GetHashCode();
                if (this.ActiveCard != null)
                    hashCode = hashCode * 59 + this.ActiveCard.GetHashCode();
                if (this.FraudCheck != null)
                    hashCode = hashCode * 59 + this.FraudCheck.GetHashCode();
                if (this.Merchant != null)
                    hashCode = hashCode * 59 + this.Merchant.GetHashCode();
                if (this.RefOrderNumber != null)
                    hashCode = hashCode * 59 + this.RefOrderNumber.GetHashCode();
                if (this.PurchaseMethod != null)
                    hashCode = hashCode * 59 + this.PurchaseMethod.GetHashCode();
                if (this.Strategy != null)
                    hashCode = hashCode * 59 + this.Strategy.GetHashCode();
                if (this.DelayResolution != null)
                    hashCode = hashCode * 59 + this.DelayResolution.GetHashCode();
                if (this.ExtendedParams != null)
                    hashCode = hashCode * 59 + this.ExtendedParams.GetHashCode();
                if (this.IsFullCaptured != null)
                    hashCode = hashCode * 59 + this.IsFullCaptured.GetHashCode();
                if (this.IsChargedBack != null)
                    hashCode = hashCode * 59 + this.IsChargedBack.GetHashCode();
                if (this.ArePaymentsOnHold != null)
                    hashCode = hashCode * 59 + this.ArePaymentsOnHold.GetHashCode();
                if (this.ScpFundingPercent != null)
                    hashCode = hashCode * 59 + this.ScpFundingPercent.GetHashCode();
                if (this.TestMode != null)
                    hashCode = hashCode * 59 + this.TestMode.GetHashCode();
                if (this.CreationDateTime != null)
                    hashCode = hashCode * 59 + this.CreationDateTime.GetHashCode();
                if (this.Installments != null)
                    hashCode = hashCode * 59 + this.Installments.GetHashCode();
                if (this.SecureAuthorizations != null)
                    hashCode = hashCode * 59 + this.SecureAuthorizations.GetHashCode();
                return hashCode;
            }
        }
    }

}
