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
import InstallmentPlan from './InstallmentPlan';
import ResponseHeader from './ResponseHeader';

/**
 * The InstallmentPlanResponse model module.
 * @module model/InstallmentPlanResponse
 * @version 1.3.12
 */
class InstallmentPlanResponse {
    /**
     * Constructs a new <code>InstallmentPlanResponse</code>.
     * @alias module:model/InstallmentPlanResponse
     */
    constructor() { 
        
        InstallmentPlanResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstallmentPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallmentPlanResponse} obj Optional instance to populate.
     * @return {module:model/InstallmentPlanResponse} The populated <code>InstallmentPlanResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallmentPlanResponse();

            if (data.hasOwnProperty('ResponseHeader')) {
                obj['ResponseHeader'] = ResponseHeader.constructFromObject(data['ResponseHeader']);
            }
            if (data.hasOwnProperty('InstallmentPlan')) {
                obj['InstallmentPlan'] = InstallmentPlan.constructFromObject(data['InstallmentPlan']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseHeader} ResponseHeader
 */
InstallmentPlanResponse.prototype['ResponseHeader'] = undefined;

/**
 * @member {module:model/InstallmentPlan} InstallmentPlan
 */
InstallmentPlanResponse.prototype['InstallmentPlan'] = undefined;






export default InstallmentPlanResponse;

