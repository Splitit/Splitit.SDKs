/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PaymentToken
 */
export interface PaymentToken {
    /**
     * 
     * @type {string}
     * @memberof PaymentToken
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentToken
     */
    type?: string;
}

export function PaymentTokenFromJSON(json: any): PaymentToken {
    return PaymentTokenFromJSONTyped(json, false);
}

export function PaymentTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'Token') ? undefined : json['Token'],
        'type': !exists(json, 'Type') ? undefined : json['Type'],
    };
}

export function PaymentTokenToJSON(value?: PaymentToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Token': value.token,
        'Type': value.type,
    };
}


