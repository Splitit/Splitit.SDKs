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

/**
 * The ExtendedInstallmentPlanAllOf model module.
 * @module model/ExtendedInstallmentPlanAllOf
 * @version 1.3.11
 */
class ExtendedInstallmentPlanAllOf {
    /**
     * Constructs a new <code>ExtendedInstallmentPlanAllOf</code>.
     * @alias module:model/ExtendedInstallmentPlanAllOf
     */
    constructor() { 
        
        ExtendedInstallmentPlanAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtendedInstallmentPlanAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendedInstallmentPlanAllOf} obj Optional instance to populate.
     * @return {module:model/ExtendedInstallmentPlanAllOf} The populated <code>ExtendedInstallmentPlanAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedInstallmentPlanAllOf();

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
 * @member {module:model/BuRef} BusinessUnit
 */
ExtendedInstallmentPlanAllOf.prototype['BusinessUnit'] = undefined;

/**
 * @member {Date} ShopperPaymentRequestTime
 */
ExtendedInstallmentPlanAllOf.prototype['ShopperPaymentRequestTime'] = undefined;






export default ExtendedInstallmentPlanAllOf;
