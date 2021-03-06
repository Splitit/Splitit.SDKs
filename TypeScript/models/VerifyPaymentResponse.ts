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
import {
    ResponseHeader,
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './';

/**
 * 
 * @export
 * @interface VerifyPaymentResponse
 */
export interface VerifyPaymentResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof VerifyPaymentResponse
     */
    responseHeader?: ResponseHeader;
    /**
     * 
     * @type {boolean}
     * @memberof VerifyPaymentResponse
     */
    isPaid: boolean;
    /**
     * 
     * @type {number}
     * @memberof VerifyPaymentResponse
     */
    originalAmountPaid?: number;
}

export function VerifyPaymentResponseFromJSON(json: any): VerifyPaymentResponse {
    return VerifyPaymentResponseFromJSONTyped(json, false);
}

export function VerifyPaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyPaymentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'isPaid': json['IsPaid'],
        'originalAmountPaid': !exists(json, 'OriginalAmountPaid') ? undefined : json['OriginalAmountPaid'],
    };
}

export function VerifyPaymentResponseToJSON(value?: VerifyPaymentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.responseHeader),
        'IsPaid': value.isPaid,
        'OriginalAmountPaid': value.originalAmountPaid,
    };
}


