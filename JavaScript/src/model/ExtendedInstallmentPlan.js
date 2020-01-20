/**
 * splitit-web-api-public-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BuRef from './BuRef';
import CardData from './CardData';
import ConsumerData from './ConsumerData';
import ExtendedInstallmentPlanAllOf from './ExtendedInstallmentPlanAllOf';
import FraudCheck from './FraudCheck';
import Installment from './Installment';
import InstallmentPlan from './InstallmentPlan';
import MerchantRef from './MerchantRef';
import Money from './Money';
import ReAuthorization from './ReAuthorization';
import ReferenceEntityBase from './ReferenceEntityBase';
import TestModes from './TestModes';

/**
 * The ExtendedInstallmentPlan model module.
 * @module model/ExtendedInstallmentPlan
 * @version 1.3.12
 */
class ExtendedInstallmentPlan {
    /**
     * Constructs a new <code>ExtendedInstallmentPlan</code>.
     * @alias module:model/ExtendedInstallmentPlan
     * @implements module:model/InstallmentPlan
     * @implements module:model/ExtendedInstallmentPlanAllOf
     * @param numberOfInstallments {Number} 
     * @param numberOfProcessedInstallments {Number} 
     * @param isFullCaptured {Boolean} 
     * @param isChargedBack {Boolean} 
     * @param arePaymentsOnHold {Boolean} 
     * @param scpFundingPercent {Number} 
     * @param testMode {module:model/TestModes} 
     * @param creationDateTime {Date} 
     */
    constructor(numberOfInstallments, numberOfProcessedInstallments, isFullCaptured, isChargedBack, arePaymentsOnHold, scpFundingPercent, testMode, creationDateTime) { 
        InstallmentPlan.initialize(this, numberOfInstallments, numberOfProcessedInstallments, isFullCaptured, isChargedBack, arePaymentsOnHold, scpFundingPercent, testMode, creationDateTime);ExtendedInstallmentPlanAllOf.initialize(this);
        ExtendedInstallmentPlan.initialize(this, numberOfInstallments, numberOfProcessedInstallments, isFullCaptured, isChargedBack, arePaymentsOnHold, scpFundingPercent, testMode, creationDateTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, numberOfInstallments, numberOfProcessedInstallments, isFullCaptured, isChargedBack, arePaymentsOnHold, scpFundingPercent, testMode, creationDateTime) { 
        obj['NumberOfInstallments'] = numberOfInstallments;
        obj['NumberOfProcessedInstallments'] = numberOfProcessedInstallments;
        obj['IsFullCaptured'] = isFullCaptured;
        obj['IsChargedBack'] = isChargedBack;
        obj['ArePaymentsOnHold'] = arePaymentsOnHold;
        obj['ScpFundingPercent'] = scpFundingPercent;
        obj['TestMode'] = testMode;
        obj['CreationDateTime'] = creationDateTime;
    }

    /**
     * Constructs a <code>ExtendedInstallmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendedInstallmentPlan} obj Optional instance to populate.
     * @return {module:model/ExtendedInstallmentPlan} The populated <code>ExtendedInstallmentPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedInstallmentPlan();
            InstallmentPlan.constructFromObject(data, obj);
            ExtendedInstallmentPlanAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('InstallmentPlanNumber')) {
                obj['InstallmentPlanNumber'] = ApiClient.convertToType(data['InstallmentPlanNumber'], 'String');
            }
            if (data.hasOwnProperty('InstallmentPlanStatus')) {
                obj['InstallmentPlanStatus'] = ReferenceEntityBase.constructFromObject(data['InstallmentPlanStatus']);
            }
            if (data.hasOwnProperty('Amount')) {
                obj['Amount'] = Money.constructFromObject(data['Amount']);
            }
            if (data.hasOwnProperty('OutstandingAmount')) {
                obj['OutstandingAmount'] = Money.constructFromObject(data['OutstandingAmount']);
            }
            if (data.hasOwnProperty('NumberOfInstallments')) {
                obj['NumberOfInstallments'] = ApiClient.convertToType(data['NumberOfInstallments'], 'Number');
            }
            if (data.hasOwnProperty('NumberOfProcessedInstallments')) {
                obj['NumberOfProcessedInstallments'] = ApiClient.convertToType(data['NumberOfProcessedInstallments'], 'Number');
            }
            if (data.hasOwnProperty('OriginalAmount')) {
                obj['OriginalAmount'] = Money.constructFromObject(data['OriginalAmount']);
            }
            if (data.hasOwnProperty('RefundAmount')) {
                obj['RefundAmount'] = Money.constructFromObject(data['RefundAmount']);
            }
            if (data.hasOwnProperty('Consumer')) {
                obj['Consumer'] = ConsumerData.constructFromObject(data['Consumer']);
            }
            if (data.hasOwnProperty('ActiveCard')) {
                obj['ActiveCard'] = CardData.constructFromObject(data['ActiveCard']);
            }
            if (data.hasOwnProperty('FraudCheck')) {
                obj['FraudCheck'] = FraudCheck.constructFromObject(data['FraudCheck']);
            }
            if (data.hasOwnProperty('Merchant')) {
                obj['Merchant'] = MerchantRef.constructFromObject(data['Merchant']);
            }
            if (data.hasOwnProperty('RefOrderNumber')) {
                obj['RefOrderNumber'] = ApiClient.convertToType(data['RefOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('PurchaseMethod')) {
                obj['PurchaseMethod'] = ReferenceEntityBase.constructFromObject(data['PurchaseMethod']);
            }
            if (data.hasOwnProperty('Strategy')) {
                obj['Strategy'] = ReferenceEntityBase.constructFromObject(data['Strategy']);
            }
            if (data.hasOwnProperty('DelayResolution')) {
                obj['DelayResolution'] = ReferenceEntityBase.constructFromObject(data['DelayResolution']);
            }
            if (data.hasOwnProperty('ExtendedParams')) {
                obj['ExtendedParams'] = ApiClient.convertToType(data['ExtendedParams'], {'String': 'String'});
            }
            if (data.hasOwnProperty('IsFullCaptured')) {
                obj['IsFullCaptured'] = ApiClient.convertToType(data['IsFullCaptured'], 'Boolean');
            }
            if (data.hasOwnProperty('IsChargedBack')) {
                obj['IsChargedBack'] = ApiClient.convertToType(data['IsChargedBack'], 'Boolean');
            }
            if (data.hasOwnProperty('ArePaymentsOnHold')) {
                obj['ArePaymentsOnHold'] = ApiClient.convertToType(data['ArePaymentsOnHold'], 'Boolean');
            }
            if (data.hasOwnProperty('ScpFundingPercent')) {
                obj['ScpFundingPercent'] = ApiClient.convertToType(data['ScpFundingPercent'], 'Number');
            }
            if (data.hasOwnProperty('TestMode')) {
                obj['TestMode'] = TestModes.constructFromObject(data['TestMode']);
            }
            if (data.hasOwnProperty('CreationDateTime')) {
                obj['CreationDateTime'] = ApiClient.convertToType(data['CreationDateTime'], 'Date');
            }
            if (data.hasOwnProperty('Installments')) {
                obj['Installments'] = ApiClient.convertToType(data['Installments'], [Installment]);
            }
            if (data.hasOwnProperty('SecureAuthorizations')) {
                obj['SecureAuthorizations'] = ApiClient.convertToType(data['SecureAuthorizations'], [ReAuthorization]);
            }
            if (data.hasOwnProperty('BusinessUnit')) {
                obj['BusinessUnit'] = BuRef.constructFromObject(data['BusinessUnit']);
            }
            if (data.hasOwnProperty('ShopperPaymentRequestTime')) {
                obj['ShopperPaymentRequestTime'] = ApiClient.convertToType(data['ShopperPaymentRequestTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} InstallmentPlanNumber
 */
ExtendedInstallmentPlan.prototype['InstallmentPlanNumber'] = undefined;

/**
 * @member {module:model/ReferenceEntityBase} InstallmentPlanStatus
 */
ExtendedInstallmentPlan.prototype['InstallmentPlanStatus'] = undefined;

/**
 * @member {module:model/Money} Amount
 */
ExtendedInstallmentPlan.prototype['Amount'] = undefined;

/**
 * @member {module:model/Money} OutstandingAmount
 */
ExtendedInstallmentPlan.prototype['OutstandingAmount'] = undefined;

/**
 * @member {Number} NumberOfInstallments
 */
ExtendedInstallmentPlan.prototype['NumberOfInstallments'] = undefined;

/**
 * @member {Number} NumberOfProcessedInstallments
 */
ExtendedInstallmentPlan.prototype['NumberOfProcessedInstallments'] = undefined;

/**
 * @member {module:model/Money} OriginalAmount
 */
ExtendedInstallmentPlan.prototype['OriginalAmount'] = undefined;

/**
 * @member {module:model/Money} RefundAmount
 */
ExtendedInstallmentPlan.prototype['RefundAmount'] = undefined;

/**
 * @member {module:model/ConsumerData} Consumer
 */
ExtendedInstallmentPlan.prototype['Consumer'] = undefined;

/**
 * @member {module:model/CardData} ActiveCard
 */
ExtendedInstallmentPlan.prototype['ActiveCard'] = undefined;

/**
 * @member {module:model/FraudCheck} FraudCheck
 */
ExtendedInstallmentPlan.prototype['FraudCheck'] = undefined;

/**
 * @member {module:model/MerchantRef} Merchant
 */
ExtendedInstallmentPlan.prototype['Merchant'] = undefined;

/**
 * @member {String} RefOrderNumber
 */
ExtendedInstallmentPlan.prototype['RefOrderNumber'] = undefined;

/**
 * @member {module:model/ReferenceEntityBase} PurchaseMethod
 */
ExtendedInstallmentPlan.prototype['PurchaseMethod'] = undefined;

/**
 * @member {module:model/ReferenceEntityBase} Strategy
 */
ExtendedInstallmentPlan.prototype['Strategy'] = undefined;

/**
 * @member {module:model/ReferenceEntityBase} DelayResolution
 */
ExtendedInstallmentPlan.prototype['DelayResolution'] = undefined;

/**
 * @member {Object.<String, String>} ExtendedParams
 */
ExtendedInstallmentPlan.prototype['ExtendedParams'] = undefined;

/**
 * @member {Boolean} IsFullCaptured
 */
ExtendedInstallmentPlan.prototype['IsFullCaptured'] = undefined;

/**
 * @member {Boolean} IsChargedBack
 */
ExtendedInstallmentPlan.prototype['IsChargedBack'] = undefined;

/**
 * @member {Boolean} ArePaymentsOnHold
 */
ExtendedInstallmentPlan.prototype['ArePaymentsOnHold'] = undefined;

/**
 * @member {Number} ScpFundingPercent
 */
ExtendedInstallmentPlan.prototype['ScpFundingPercent'] = undefined;

/**
 * @member {module:model/TestModes} TestMode
 */
ExtendedInstallmentPlan.prototype['TestMode'] = undefined;

/**
 * @member {Date} CreationDateTime
 */
ExtendedInstallmentPlan.prototype['CreationDateTime'] = undefined;

/**
 * @member {Array.<module:model/Installment>} Installments
 */
ExtendedInstallmentPlan.prototype['Installments'] = undefined;

/**
 * @member {Array.<module:model/ReAuthorization>} SecureAuthorizations
 */
ExtendedInstallmentPlan.prototype['SecureAuthorizations'] = undefined;

/**
 * @member {module:model/BuRef} BusinessUnit
 */
ExtendedInstallmentPlan.prototype['BusinessUnit'] = undefined;

/**
 * @member {Date} ShopperPaymentRequestTime
 */
ExtendedInstallmentPlan.prototype['ShopperPaymentRequestTime'] = undefined;


// Implement InstallmentPlan interface:
/**
 * @member {String} InstallmentPlanNumber
 */
InstallmentPlan.prototype['InstallmentPlanNumber'] = undefined;
/**
 * @member {module:model/ReferenceEntityBase} InstallmentPlanStatus
 */
InstallmentPlan.prototype['InstallmentPlanStatus'] = undefined;
/**
 * @member {module:model/Money} Amount
 */
InstallmentPlan.prototype['Amount'] = undefined;
/**
 * @member {module:model/Money} OutstandingAmount
 */
InstallmentPlan.prototype['OutstandingAmount'] = undefined;
/**
 * @member {Number} NumberOfInstallments
 */
InstallmentPlan.prototype['NumberOfInstallments'] = undefined;
/**
 * @member {Number} NumberOfProcessedInstallments
 */
InstallmentPlan.prototype['NumberOfProcessedInstallments'] = undefined;
/**
 * @member {module:model/Money} OriginalAmount
 */
InstallmentPlan.prototype['OriginalAmount'] = undefined;
/**
 * @member {module:model/Money} RefundAmount
 */
InstallmentPlan.prototype['RefundAmount'] = undefined;
/**
 * @member {module:model/ConsumerData} Consumer
 */
InstallmentPlan.prototype['Consumer'] = undefined;
/**
 * @member {module:model/CardData} ActiveCard
 */
InstallmentPlan.prototype['ActiveCard'] = undefined;
/**
 * @member {module:model/FraudCheck} FraudCheck
 */
InstallmentPlan.prototype['FraudCheck'] = undefined;
/**
 * @member {module:model/MerchantRef} Merchant
 */
InstallmentPlan.prototype['Merchant'] = undefined;
/**
 * @member {String} RefOrderNumber
 */
InstallmentPlan.prototype['RefOrderNumber'] = undefined;
/**
 * @member {module:model/ReferenceEntityBase} PurchaseMethod
 */
InstallmentPlan.prototype['PurchaseMethod'] = undefined;
/**
 * @member {module:model/ReferenceEntityBase} Strategy
 */
InstallmentPlan.prototype['Strategy'] = undefined;
/**
 * @member {module:model/ReferenceEntityBase} DelayResolution
 */
InstallmentPlan.prototype['DelayResolution'] = undefined;
/**
 * @member {Object.<String, String>} ExtendedParams
 */
InstallmentPlan.prototype['ExtendedParams'] = undefined;
/**
 * @member {Boolean} IsFullCaptured
 */
InstallmentPlan.prototype['IsFullCaptured'] = undefined;
/**
 * @member {Boolean} IsChargedBack
 */
InstallmentPlan.prototype['IsChargedBack'] = undefined;
/**
 * @member {Boolean} ArePaymentsOnHold
 */
InstallmentPlan.prototype['ArePaymentsOnHold'] = undefined;
/**
 * @member {Number} ScpFundingPercent
 */
InstallmentPlan.prototype['ScpFundingPercent'] = undefined;
/**
 * @member {module:model/TestModes} TestMode
 */
InstallmentPlan.prototype['TestMode'] = undefined;
/**
 * @member {Date} CreationDateTime
 */
InstallmentPlan.prototype['CreationDateTime'] = undefined;
/**
 * @member {Array.<module:model/Installment>} Installments
 */
InstallmentPlan.prototype['Installments'] = undefined;
/**
 * @member {Array.<module:model/ReAuthorization>} SecureAuthorizations
 */
InstallmentPlan.prototype['SecureAuthorizations'] = undefined;
// Implement ExtendedInstallmentPlanAllOf interface:
/**
 * @member {module:model/BuRef} BusinessUnit
 */
ExtendedInstallmentPlanAllOf.prototype['BusinessUnit'] = undefined;
/**
 * @member {Date} ShopperPaymentRequestTime
 */
ExtendedInstallmentPlanAllOf.prototype['ShopperPaymentRequestTime'] = undefined;




export default ExtendedInstallmentPlan;

