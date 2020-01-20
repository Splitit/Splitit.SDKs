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
import DelayResolution from './DelayResolution';
import FraudCheckResult from './FraudCheckResult';
import InstallmentPlanDateInfo from './InstallmentPlanDateInfo';
import InstallmentPlanInitiatedStatuses from './InstallmentPlanInitiatedStatuses';
import InstallmentPlanStatus from './InstallmentPlanStatus';
import TestModes from './TestModes';
import TransactionInfo from './TransactionInfo';

/**
 * The InstallmentPlanQueryCriteria model module.
 * @module model/InstallmentPlanQueryCriteria
 * @version 1.3.12
 */
class InstallmentPlanQueryCriteria {
    /**
     * Constructs a new <code>InstallmentPlanQueryCriteria</code>.
     * @alias module:model/InstallmentPlanQueryCriteria
     * @param merchantId {Number} 
     * @param currencyId {Number} 
     * @param installmentPlanId {Number} 
     * @param installmentPlanAmount {Number} 
     * @param pisMemberId {Number} 
     * @param eula {Boolean} 
     * @param showChargebackPlans {Boolean} 
     */
    constructor(merchantId, currencyId, installmentPlanId, installmentPlanAmount, pisMemberId, eula, showChargebackPlans) { 
        
        InstallmentPlanQueryCriteria.initialize(this, merchantId, currencyId, installmentPlanId, installmentPlanAmount, pisMemberId, eula, showChargebackPlans);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merchantId, currencyId, installmentPlanId, installmentPlanAmount, pisMemberId, eula, showChargebackPlans) { 
        obj['MerchantId'] = merchantId;
        obj['CurrencyId'] = currencyId;
        obj['InstallmentPlanId'] = installmentPlanId;
        obj['InstallmentPlanAmount'] = installmentPlanAmount;
        obj['PisMemberId'] = pisMemberId;
        obj['Eula'] = eula;
        obj['ShowChargebackPlans'] = showChargebackPlans;
    }

    /**
     * Constructs a <code>InstallmentPlanQueryCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallmentPlanQueryCriteria} obj Optional instance to populate.
     * @return {module:model/InstallmentPlanQueryCriteria} The populated <code>InstallmentPlanQueryCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallmentPlanQueryCriteria();

            if (data.hasOwnProperty('MerchantId')) {
                obj['MerchantId'] = ApiClient.convertToType(data['MerchantId'], 'Number');
            }
            if (data.hasOwnProperty('CurrencyId')) {
                obj['CurrencyId'] = ApiClient.convertToType(data['CurrencyId'], 'Number');
            }
            if (data.hasOwnProperty('InstallmentPlanId')) {
                obj['InstallmentPlanId'] = ApiClient.convertToType(data['InstallmentPlanId'], 'Number');
            }
            if (data.hasOwnProperty('InstallmentPlanNumber')) {
                obj['InstallmentPlanNumber'] = ApiClient.convertToType(data['InstallmentPlanNumber'], 'String');
            }
            if (data.hasOwnProperty('RefOrderNumber')) {
                obj['RefOrderNumber'] = ApiClient.convertToType(data['RefOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('InstallmentPlanAmount')) {
                obj['InstallmentPlanAmount'] = ApiClient.convertToType(data['InstallmentPlanAmount'], 'Number');
            }
            if (data.hasOwnProperty('CardNumber')) {
                obj['CardNumber'] = ApiClient.convertToType(data['CardNumber'], 'String');
            }
            if (data.hasOwnProperty('ConsumerName')) {
                obj['ConsumerName'] = ApiClient.convertToType(data['ConsumerName'], 'String');
            }
            if (data.hasOwnProperty('ConsumerEmail')) {
                obj['ConsumerEmail'] = ApiClient.convertToType(data['ConsumerEmail'], 'String');
            }
            if (data.hasOwnProperty('CardHolder')) {
                obj['CardHolder'] = ApiClient.convertToType(data['CardHolder'], 'String');
            }
            if (data.hasOwnProperty('PisMemberId')) {
                obj['PisMemberId'] = ApiClient.convertToType(data['PisMemberId'], 'Number');
            }
            if (data.hasOwnProperty('AnyFilter')) {
                obj['AnyFilter'] = ApiClient.convertToType(data['AnyFilter'], 'String');
            }
            if (data.hasOwnProperty('Eula')) {
                obj['Eula'] = ApiClient.convertToType(data['Eula'], 'Boolean');
            }
            if (data.hasOwnProperty('ShowChargebackPlans')) {
                obj['ShowChargebackPlans'] = ApiClient.convertToType(data['ShowChargebackPlans'], 'Boolean');
            }
            if (data.hasOwnProperty('InitiatedStatuses')) {
                obj['InitiatedStatuses'] = InstallmentPlanInitiatedStatuses.constructFromObject(data['InitiatedStatuses']);
            }
            if (data.hasOwnProperty('FraudCheckResult')) {
                obj['FraudCheckResult'] = FraudCheckResult.constructFromObject(data['FraudCheckResult']);
            }
            if (data.hasOwnProperty('InstallmentsPlanStatuses')) {
                obj['InstallmentsPlanStatuses'] = ApiClient.convertToType(data['InstallmentsPlanStatuses'], [InstallmentPlanStatus]);
            }
            if (data.hasOwnProperty('TestModes')) {
                obj['TestModes'] = ApiClient.convertToType(data['TestModes'], [TestModes]);
            }
            if (data.hasOwnProperty('DelayResolutions')) {
                obj['DelayResolutions'] = ApiClient.convertToType(data['DelayResolutions'], [DelayResolution]);
            }
            if (data.hasOwnProperty('TransactionInformation')) {
                obj['TransactionInformation'] = TransactionInfo.constructFromObject(data['TransactionInformation']);
            }
            if (data.hasOwnProperty('DateInfo')) {
                obj['DateInfo'] = InstallmentPlanDateInfo.constructFromObject(data['DateInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} MerchantId
 */
InstallmentPlanQueryCriteria.prototype['MerchantId'] = undefined;

/**
 * @member {Number} CurrencyId
 */
InstallmentPlanQueryCriteria.prototype['CurrencyId'] = undefined;

/**
 * @member {Number} InstallmentPlanId
 */
InstallmentPlanQueryCriteria.prototype['InstallmentPlanId'] = undefined;

/**
 * @member {String} InstallmentPlanNumber
 */
InstallmentPlanQueryCriteria.prototype['InstallmentPlanNumber'] = undefined;

/**
 * @member {String} RefOrderNumber
 */
InstallmentPlanQueryCriteria.prototype['RefOrderNumber'] = undefined;

/**
 * @member {Number} InstallmentPlanAmount
 */
InstallmentPlanQueryCriteria.prototype['InstallmentPlanAmount'] = undefined;

/**
 * @member {String} CardNumber
 */
InstallmentPlanQueryCriteria.prototype['CardNumber'] = undefined;

/**
 * @member {String} ConsumerName
 */
InstallmentPlanQueryCriteria.prototype['ConsumerName'] = undefined;

/**
 * @member {String} ConsumerEmail
 */
InstallmentPlanQueryCriteria.prototype['ConsumerEmail'] = undefined;

/**
 * @member {String} CardHolder
 */
InstallmentPlanQueryCriteria.prototype['CardHolder'] = undefined;

/**
 * @member {Number} PisMemberId
 */
InstallmentPlanQueryCriteria.prototype['PisMemberId'] = undefined;

/**
 * @member {String} AnyFilter
 */
InstallmentPlanQueryCriteria.prototype['AnyFilter'] = undefined;

/**
 * @member {Boolean} Eula
 */
InstallmentPlanQueryCriteria.prototype['Eula'] = undefined;

/**
 * @member {Boolean} ShowChargebackPlans
 */
InstallmentPlanQueryCriteria.prototype['ShowChargebackPlans'] = undefined;

/**
 * @member {module:model/InstallmentPlanInitiatedStatuses} InitiatedStatuses
 */
InstallmentPlanQueryCriteria.prototype['InitiatedStatuses'] = undefined;

/**
 * @member {module:model/FraudCheckResult} FraudCheckResult
 */
InstallmentPlanQueryCriteria.prototype['FraudCheckResult'] = undefined;

/**
 * @member {Array.<module:model/InstallmentPlanStatus>} InstallmentsPlanStatuses
 */
InstallmentPlanQueryCriteria.prototype['InstallmentsPlanStatuses'] = undefined;

/**
 * @member {Array.<module:model/TestModes>} TestModes
 */
InstallmentPlanQueryCriteria.prototype['TestModes'] = undefined;

/**
 * @member {Array.<module:model/DelayResolution>} DelayResolutions
 */
InstallmentPlanQueryCriteria.prototype['DelayResolutions'] = undefined;

/**
 * @member {module:model/TransactionInfo} TransactionInformation
 */
InstallmentPlanQueryCriteria.prototype['TransactionInformation'] = undefined;

/**
 * @member {module:model/InstallmentPlanDateInfo} DateInfo
 */
InstallmentPlanQueryCriteria.prototype['DateInfo'] = undefined;






export default InstallmentPlanQueryCriteria;

