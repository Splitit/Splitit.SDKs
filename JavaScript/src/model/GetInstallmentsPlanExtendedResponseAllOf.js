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
import ExtendedInstallmentPlan from './ExtendedInstallmentPlan';

/**
 * The GetInstallmentsPlanExtendedResponseAllOf model module.
 * @module model/GetInstallmentsPlanExtendedResponseAllOf
 * @version 1.3.12
 */
class GetInstallmentsPlanExtendedResponseAllOf {
    /**
     * Constructs a new <code>GetInstallmentsPlanExtendedResponseAllOf</code>.
     * @alias module:model/GetInstallmentsPlanExtendedResponseAllOf
     */
    constructor() { 
        
        GetInstallmentsPlanExtendedResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInstallmentsPlanExtendedResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInstallmentsPlanExtendedResponseAllOf} obj Optional instance to populate.
     * @return {module:model/GetInstallmentsPlanExtendedResponseAllOf} The populated <code>GetInstallmentsPlanExtendedResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInstallmentsPlanExtendedResponseAllOf();

            if (data.hasOwnProperty('PlansList')) {
                obj['PlansList'] = ApiClient.convertToType(data['PlansList'], [ExtendedInstallmentPlan]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ExtendedInstallmentPlan>} PlansList
 */
GetInstallmentsPlanExtendedResponseAllOf.prototype['PlansList'] = undefined;






export default GetInstallmentsPlanExtendedResponseAllOf;

