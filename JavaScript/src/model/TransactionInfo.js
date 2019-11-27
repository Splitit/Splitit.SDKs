/**
 * splitit-web-api-public
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
import TransactionStatus from './TransactionStatus';
import TransactionType from './TransactionType';

/**
 * The TransactionInfo model module.
 * @module model/TransactionInfo
 * @version 1.0.0
 */
class TransactionInfo {
    /**
     * Constructs a new <code>TransactionInfo</code>.
     * @alias module:model/TransactionInfo
     * @param transactionType {module:model/TransactionType} 
     * @param transactionStatus {module:model/TransactionStatus} 
     */
    constructor(transactionType, transactionStatus) { 
        
        TransactionInfo.initialize(this, transactionType, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionType, transactionStatus) { 
        obj['TransactionType'] = transactionType;
        obj['TransactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>TransactionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionInfo} obj Optional instance to populate.
     * @return {module:model/TransactionInfo} The populated <code>TransactionInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionInfo();

            if (data.hasOwnProperty('TransactionId')) {
                obj['TransactionId'] = ApiClient.convertToType(data['TransactionId'], 'String');
            }
            if (data.hasOwnProperty('TransactionType')) {
                obj['TransactionType'] = TransactionType.constructFromObject(data['TransactionType']);
            }
            if (data.hasOwnProperty('TransactionStatus')) {
                obj['TransactionStatus'] = TransactionStatus.constructFromObject(data['TransactionStatus']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} TransactionId
 */
TransactionInfo.prototype['TransactionId'] = undefined;

/**
 * @member {module:model/TransactionType} TransactionType
 */
TransactionInfo.prototype['TransactionType'] = undefined;

/**
 * @member {module:model/TransactionStatus} TransactionStatus
 */
TransactionInfo.prototype['TransactionStatus'] = undefined;






export default TransactionInfo;
