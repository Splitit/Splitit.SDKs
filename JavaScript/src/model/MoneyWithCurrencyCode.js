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

/**
 * The MoneyWithCurrencyCode model module.
 * @module model/MoneyWithCurrencyCode
 * @version 1.3.12
 */
class MoneyWithCurrencyCode {
    /**
     * Constructs a new <code>MoneyWithCurrencyCode</code>.
     * @alias module:model/MoneyWithCurrencyCode
     * @param value {Number} 
     */
    constructor(value) { 
        
        MoneyWithCurrencyCode.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['Value'] = value;
    }

    /**
     * Constructs a <code>MoneyWithCurrencyCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MoneyWithCurrencyCode} obj Optional instance to populate.
     * @return {module:model/MoneyWithCurrencyCode} The populated <code>MoneyWithCurrencyCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MoneyWithCurrencyCode();

            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'Number');
            }
            if (data.hasOwnProperty('CurrencyCode')) {
                obj['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Value
 */
MoneyWithCurrencyCode.prototype['Value'] = undefined;

/**
 * @member {String} CurrencyCode
 */
MoneyWithCurrencyCode.prototype['CurrencyCode'] = undefined;






export default MoneyWithCurrencyCode;

