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
    /// InstallmentPlanQueryCriteria
    /// </summary>
    [DataContract]
    public partial class InstallmentPlanQueryCriteria :  IEquatable<InstallmentPlanQueryCriteria>
    {
        /// <summary>
        /// Gets or Sets FraudCheckResult
        /// </summary>
        [DataMember(Name="FraudCheckResult", EmitDefaultValue=false)]
        public FraudCheckResult? FraudCheckResult { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanQueryCriteria" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstallmentPlanQueryCriteria() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanQueryCriteria" /> class.
        /// </summary>
        /// <param name="merchantId">merchantId (required).</param>
        /// <param name="currencyId">currencyId (required).</param>
        /// <param name="terminalId">terminalId.</param>
        /// <param name="installmentPlanId">installmentPlanId (required).</param>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="refOrderNumber">refOrderNumber.</param>
        /// <param name="installmentPlanAmount">installmentPlanAmount (required).</param>
        /// <param name="cardNumber">cardNumber.</param>
        /// <param name="consumerName">consumerName.</param>
        /// <param name="consumerEmail">consumerEmail.</param>
        /// <param name="cardHolder">cardHolder.</param>
        /// <param name="pisMemberId">pisMemberId (required).</param>
        /// <param name="anyFilter">anyFilter.</param>
        /// <param name="eula">eula (required).</param>
        /// <param name="initiatedStatuses">initiatedStatuses.</param>
        /// <param name="fraudCheckResult">fraudCheckResult.</param>
        /// <param name="installmentsPlanStatuses">installmentsPlanStatuses.</param>
        /// <param name="testModes">testModes.</param>
        /// <param name="delayResolutions">delayResolutions.</param>
        /// <param name="transactionInformation">transactionInformation.</param>
        /// <param name="dateInfo">dateInfo.</param>
        public InstallmentPlanQueryCriteria(long? merchantId = default(long?), long? currencyId = default(long?), string terminalId = default(string), long? installmentPlanId = default(long?), string installmentPlanNumber = default(string), string refOrderNumber = default(string), decimal? installmentPlanAmount = default(decimal?), string cardNumber = default(string), string consumerName = default(string), string consumerEmail = default(string), string cardHolder = default(string), long? pisMemberId = default(long?), string anyFilter = default(string), bool? eula = default(bool?), InstallmentPlanInitiatedStatuses initiatedStatuses = default(InstallmentPlanInitiatedStatuses), FraudCheckResult? fraudCheckResult = default(FraudCheckResult?), List<InstallmentPlanStatus> installmentsPlanStatuses = default(List<InstallmentPlanStatus>), List<TestModes> testModes = default(List<TestModes>), List<DelayResolution> delayResolutions = default(List<DelayResolution>), TransactionInfo transactionInformation = default(TransactionInfo), InstallmentPlanDateInfo dateInfo = default(InstallmentPlanDateInfo))
        {
            // to ensure "merchantId" is required (not null)
            if (merchantId == null)
            {
                throw new InvalidDataException("merchantId is a required property for InstallmentPlanQueryCriteria and cannot be null");
            }
            else
            {
                this.MerchantId = merchantId;
            }
            // to ensure "currencyId" is required (not null)
            if (currencyId == null)
            {
                throw new InvalidDataException("currencyId is a required property for InstallmentPlanQueryCriteria and cannot be null");
            }
            else
            {
                this.CurrencyId = currencyId;
            }
            // to ensure "installmentPlanId" is required (not null)
            if (installmentPlanId == null)
            {
                throw new InvalidDataException("installmentPlanId is a required property for InstallmentPlanQueryCriteria and cannot be null");
            }
            else
            {
                this.InstallmentPlanId = installmentPlanId;
            }
            // to ensure "installmentPlanAmount" is required (not null)
            if (installmentPlanAmount == null)
            {
                throw new InvalidDataException("installmentPlanAmount is a required property for InstallmentPlanQueryCriteria and cannot be null");
            }
            else
            {
                this.InstallmentPlanAmount = installmentPlanAmount;
            }
            // to ensure "pisMemberId" is required (not null)
            if (pisMemberId == null)
            {
                throw new InvalidDataException("pisMemberId is a required property for InstallmentPlanQueryCriteria and cannot be null");
            }
            else
            {
                this.PisMemberId = pisMemberId;
            }
            // to ensure "eula" is required (not null)
            if (eula == null)
            {
                throw new InvalidDataException("eula is a required property for InstallmentPlanQueryCriteria and cannot be null");
            }
            else
            {
                this.Eula = eula;
            }
            this.TerminalId = terminalId;
            this.InstallmentPlanNumber = installmentPlanNumber;
            this.RefOrderNumber = refOrderNumber;
            this.CardNumber = cardNumber;
            this.ConsumerName = consumerName;
            this.ConsumerEmail = consumerEmail;
            this.CardHolder = cardHolder;
            this.AnyFilter = anyFilter;
            this.InitiatedStatuses = initiatedStatuses;
            this.FraudCheckResult = fraudCheckResult;
            this.InstallmentsPlanStatuses = installmentsPlanStatuses;
            this.TestModes = testModes;
            this.DelayResolutions = delayResolutions;
            this.TransactionInformation = transactionInformation;
            this.DateInfo = dateInfo;
        }
        
        /// <summary>
        /// Gets or Sets MerchantId
        /// </summary>
        [DataMember(Name="MerchantId", EmitDefaultValue=false)]
        public long? MerchantId { get; set; }

        /// <summary>
        /// Gets or Sets CurrencyId
        /// </summary>
        [DataMember(Name="CurrencyId", EmitDefaultValue=false)]
        public long? CurrencyId { get; set; }

        /// <summary>
        /// Gets or Sets TerminalId
        /// </summary>
        [DataMember(Name="TerminalId", EmitDefaultValue=false)]
        public string TerminalId { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanId
        /// </summary>
        [DataMember(Name="InstallmentPlanId", EmitDefaultValue=false)]
        public long? InstallmentPlanId { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }

        /// <summary>
        /// Gets or Sets RefOrderNumber
        /// </summary>
        [DataMember(Name="RefOrderNumber", EmitDefaultValue=false)]
        public string RefOrderNumber { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanAmount
        /// </summary>
        [DataMember(Name="InstallmentPlanAmount", EmitDefaultValue=false)]
        public decimal? InstallmentPlanAmount { get; set; }

        /// <summary>
        /// Gets or Sets CardNumber
        /// </summary>
        [DataMember(Name="CardNumber", EmitDefaultValue=false)]
        public string CardNumber { get; set; }

        /// <summary>
        /// Gets or Sets ConsumerName
        /// </summary>
        [DataMember(Name="ConsumerName", EmitDefaultValue=false)]
        public string ConsumerName { get; set; }

        /// <summary>
        /// Gets or Sets ConsumerEmail
        /// </summary>
        [DataMember(Name="ConsumerEmail", EmitDefaultValue=false)]
        public string ConsumerEmail { get; set; }

        /// <summary>
        /// Gets or Sets CardHolder
        /// </summary>
        [DataMember(Name="CardHolder", EmitDefaultValue=false)]
        public string CardHolder { get; set; }

        /// <summary>
        /// Gets or Sets PisMemberId
        /// </summary>
        [DataMember(Name="PisMemberId", EmitDefaultValue=false)]
        public long? PisMemberId { get; set; }

        /// <summary>
        /// Gets or Sets AnyFilter
        /// </summary>
        [DataMember(Name="AnyFilter", EmitDefaultValue=false)]
        public string AnyFilter { get; set; }

        /// <summary>
        /// Gets or Sets Eula
        /// </summary>
        [DataMember(Name="Eula", EmitDefaultValue=false)]
        public bool? Eula { get; set; }

        /// <summary>
        /// Gets or Sets InitiatedStatuses
        /// </summary>
        [DataMember(Name="InitiatedStatuses", EmitDefaultValue=false)]
        public InstallmentPlanInitiatedStatuses InitiatedStatuses { get; set; }


        /// <summary>
        /// Gets or Sets InstallmentsPlanStatuses
        /// </summary>
        [DataMember(Name="InstallmentsPlanStatuses", EmitDefaultValue=false)]
        public List<InstallmentPlanStatus> InstallmentsPlanStatuses { get; set; }

        /// <summary>
        /// Gets or Sets TestModes
        /// </summary>
        [DataMember(Name="TestModes", EmitDefaultValue=false)]
        public List<TestModes> TestModes { get; set; }

        /// <summary>
        /// Gets or Sets DelayResolutions
        /// </summary>
        [DataMember(Name="DelayResolutions", EmitDefaultValue=false)]
        public List<DelayResolution> DelayResolutions { get; set; }

        /// <summary>
        /// Gets or Sets TransactionInformation
        /// </summary>
        [DataMember(Name="TransactionInformation", EmitDefaultValue=false)]
        public TransactionInfo TransactionInformation { get; set; }

        /// <summary>
        /// Gets or Sets DateInfo
        /// </summary>
        [DataMember(Name="DateInfo", EmitDefaultValue=false)]
        public InstallmentPlanDateInfo DateInfo { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InstallmentPlanQueryCriteria {\n");
            sb.Append("  MerchantId: ").Append(MerchantId).Append("\n");
            sb.Append("  CurrencyId: ").Append(CurrencyId).Append("\n");
            sb.Append("  TerminalId: ").Append(TerminalId).Append("\n");
            sb.Append("  InstallmentPlanId: ").Append(InstallmentPlanId).Append("\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  RefOrderNumber: ").Append(RefOrderNumber).Append("\n");
            sb.Append("  InstallmentPlanAmount: ").Append(InstallmentPlanAmount).Append("\n");
            sb.Append("  CardNumber: ").Append(CardNumber).Append("\n");
            sb.Append("  ConsumerName: ").Append(ConsumerName).Append("\n");
            sb.Append("  ConsumerEmail: ").Append(ConsumerEmail).Append("\n");
            sb.Append("  CardHolder: ").Append(CardHolder).Append("\n");
            sb.Append("  PisMemberId: ").Append(PisMemberId).Append("\n");
            sb.Append("  AnyFilter: ").Append(AnyFilter).Append("\n");
            sb.Append("  Eula: ").Append(Eula).Append("\n");
            sb.Append("  InitiatedStatuses: ").Append(InitiatedStatuses).Append("\n");
            sb.Append("  FraudCheckResult: ").Append(FraudCheckResult).Append("\n");
            sb.Append("  InstallmentsPlanStatuses: ").Append(InstallmentsPlanStatuses).Append("\n");
            sb.Append("  TestModes: ").Append(TestModes).Append("\n");
            sb.Append("  DelayResolutions: ").Append(DelayResolutions).Append("\n");
            sb.Append("  TransactionInformation: ").Append(TransactionInformation).Append("\n");
            sb.Append("  DateInfo: ").Append(DateInfo).Append("\n");
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
            return this.Equals(input as InstallmentPlanQueryCriteria);
        }

        /// <summary>
        /// Returns true if InstallmentPlanQueryCriteria instances are equal
        /// </summary>
        /// <param name="input">Instance of InstallmentPlanQueryCriteria to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstallmentPlanQueryCriteria input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MerchantId == input.MerchantId ||
                    (this.MerchantId != null &&
                    this.MerchantId.Equals(input.MerchantId))
                ) && 
                (
                    this.CurrencyId == input.CurrencyId ||
                    (this.CurrencyId != null &&
                    this.CurrencyId.Equals(input.CurrencyId))
                ) && 
                (
                    this.TerminalId == input.TerminalId ||
                    (this.TerminalId != null &&
                    this.TerminalId.Equals(input.TerminalId))
                ) && 
                (
                    this.InstallmentPlanId == input.InstallmentPlanId ||
                    (this.InstallmentPlanId != null &&
                    this.InstallmentPlanId.Equals(input.InstallmentPlanId))
                ) && 
                (
                    this.InstallmentPlanNumber == input.InstallmentPlanNumber ||
                    (this.InstallmentPlanNumber != null &&
                    this.InstallmentPlanNumber.Equals(input.InstallmentPlanNumber))
                ) && 
                (
                    this.RefOrderNumber == input.RefOrderNumber ||
                    (this.RefOrderNumber != null &&
                    this.RefOrderNumber.Equals(input.RefOrderNumber))
                ) && 
                (
                    this.InstallmentPlanAmount == input.InstallmentPlanAmount ||
                    (this.InstallmentPlanAmount != null &&
                    this.InstallmentPlanAmount.Equals(input.InstallmentPlanAmount))
                ) && 
                (
                    this.CardNumber == input.CardNumber ||
                    (this.CardNumber != null &&
                    this.CardNumber.Equals(input.CardNumber))
                ) && 
                (
                    this.ConsumerName == input.ConsumerName ||
                    (this.ConsumerName != null &&
                    this.ConsumerName.Equals(input.ConsumerName))
                ) && 
                (
                    this.ConsumerEmail == input.ConsumerEmail ||
                    (this.ConsumerEmail != null &&
                    this.ConsumerEmail.Equals(input.ConsumerEmail))
                ) && 
                (
                    this.CardHolder == input.CardHolder ||
                    (this.CardHolder != null &&
                    this.CardHolder.Equals(input.CardHolder))
                ) && 
                (
                    this.PisMemberId == input.PisMemberId ||
                    (this.PisMemberId != null &&
                    this.PisMemberId.Equals(input.PisMemberId))
                ) && 
                (
                    this.AnyFilter == input.AnyFilter ||
                    (this.AnyFilter != null &&
                    this.AnyFilter.Equals(input.AnyFilter))
                ) && 
                (
                    this.Eula == input.Eula ||
                    (this.Eula != null &&
                    this.Eula.Equals(input.Eula))
                ) && 
                (
                    this.InitiatedStatuses == input.InitiatedStatuses ||
                    (this.InitiatedStatuses != null &&
                    this.InitiatedStatuses.Equals(input.InitiatedStatuses))
                ) && 
                (
                    this.FraudCheckResult == input.FraudCheckResult ||
                    (this.FraudCheckResult != null &&
                    this.FraudCheckResult.Equals(input.FraudCheckResult))
                ) && 
                (
                    this.InstallmentsPlanStatuses == input.InstallmentsPlanStatuses ||
                    this.InstallmentsPlanStatuses != null &&
                    this.InstallmentsPlanStatuses.SequenceEqual(input.InstallmentsPlanStatuses)
                ) && 
                (
                    this.TestModes == input.TestModes ||
                    this.TestModes != null &&
                    this.TestModes.SequenceEqual(input.TestModes)
                ) && 
                (
                    this.DelayResolutions == input.DelayResolutions ||
                    this.DelayResolutions != null &&
                    this.DelayResolutions.SequenceEqual(input.DelayResolutions)
                ) && 
                (
                    this.TransactionInformation == input.TransactionInformation ||
                    (this.TransactionInformation != null &&
                    this.TransactionInformation.Equals(input.TransactionInformation))
                ) && 
                (
                    this.DateInfo == input.DateInfo ||
                    (this.DateInfo != null &&
                    this.DateInfo.Equals(input.DateInfo))
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
                if (this.MerchantId != null)
                    hashCode = hashCode * 59 + this.MerchantId.GetHashCode();
                if (this.CurrencyId != null)
                    hashCode = hashCode * 59 + this.CurrencyId.GetHashCode();
                if (this.TerminalId != null)
                    hashCode = hashCode * 59 + this.TerminalId.GetHashCode();
                if (this.InstallmentPlanId != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanId.GetHashCode();
                if (this.InstallmentPlanNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanNumber.GetHashCode();
                if (this.RefOrderNumber != null)
                    hashCode = hashCode * 59 + this.RefOrderNumber.GetHashCode();
                if (this.InstallmentPlanAmount != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanAmount.GetHashCode();
                if (this.CardNumber != null)
                    hashCode = hashCode * 59 + this.CardNumber.GetHashCode();
                if (this.ConsumerName != null)
                    hashCode = hashCode * 59 + this.ConsumerName.GetHashCode();
                if (this.ConsumerEmail != null)
                    hashCode = hashCode * 59 + this.ConsumerEmail.GetHashCode();
                if (this.CardHolder != null)
                    hashCode = hashCode * 59 + this.CardHolder.GetHashCode();
                if (this.PisMemberId != null)
                    hashCode = hashCode * 59 + this.PisMemberId.GetHashCode();
                if (this.AnyFilter != null)
                    hashCode = hashCode * 59 + this.AnyFilter.GetHashCode();
                if (this.Eula != null)
                    hashCode = hashCode * 59 + this.Eula.GetHashCode();
                if (this.InitiatedStatuses != null)
                    hashCode = hashCode * 59 + this.InitiatedStatuses.GetHashCode();
                if (this.FraudCheckResult != null)
                    hashCode = hashCode * 59 + this.FraudCheckResult.GetHashCode();
                if (this.InstallmentsPlanStatuses != null)
                    hashCode = hashCode * 59 + this.InstallmentsPlanStatuses.GetHashCode();
                if (this.TestModes != null)
                    hashCode = hashCode * 59 + this.TestModes.GetHashCode();
                if (this.DelayResolutions != null)
                    hashCode = hashCode * 59 + this.DelayResolutions.GetHashCode();
                if (this.TransactionInformation != null)
                    hashCode = hashCode * 59 + this.TransactionInformation.GetHashCode();
                if (this.DateInfo != null)
                    hashCode = hashCode * 59 + this.DateInfo.GetHashCode();
                return hashCode;
            }
        }
    }

}