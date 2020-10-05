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
    MoneyWithCurrencyCode,
    MoneyWithCurrencyCodeFromJSON,
    MoneyWithCurrencyCodeFromJSONTyped,
    MoneyWithCurrencyCodeToJSON,
} from './';

/**
 * 
 * @export
 * @interface LearnMoreDetailsRequest
 */
export interface LearnMoreDetailsRequest {
    /**
     * 
     * @type {MoneyWithCurrencyCode}
     * @memberof LearnMoreDetailsRequest
     */
    amount?: MoneyWithCurrencyCode;
    /**
     * 
     * @type {number}
     * @memberof LearnMoreDetailsRequest
     */
    numberOfInstallments?: number;
}

export function LearnMoreDetailsRequestFromJSON(json: any): LearnMoreDetailsRequest {
    return LearnMoreDetailsRequestFromJSONTyped(json, false);
}

export function LearnMoreDetailsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LearnMoreDetailsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'Amount') ? undefined : MoneyWithCurrencyCodeFromJSON(json['Amount']),
        'numberOfInstallments': !exists(json, 'NumberOfInstallments') ? undefined : json['NumberOfInstallments'],
    };
}

export function LearnMoreDetailsRequestToJSON(value?: LearnMoreDetailsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Amount': MoneyWithCurrencyCodeToJSON(value.amount),
        'NumberOfInstallments': value.numberOfInstallments,
    };
}

