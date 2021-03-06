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
    RefundStrategy,
    RefundStrategyFromJSON,
    RefundStrategyFromJSONTyped,
    RefundStrategyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RefundPlanRequest
 */
export interface RefundPlanRequest {
    /**
     * 
     * @type {string}
     * @memberof RefundPlanRequest
     */
    installmentPlanNumber?: string;
    /**
     * 
     * @type {MoneyWithCurrencyCode}
     * @memberof RefundPlanRequest
     */
    amount?: MoneyWithCurrencyCode;
    /**
     * 
     * @type {RefundStrategy}
     * @memberof RefundPlanRequest
     */
    refundStrategy?: RefundStrategy;
}

export function RefundPlanRequestFromJSON(json: any): RefundPlanRequest {
    return RefundPlanRequestFromJSONTyped(json, false);
}

export function RefundPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundPlanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'installmentPlanNumber': !exists(json, 'InstallmentPlanNumber') ? undefined : json['InstallmentPlanNumber'],
        'amount': !exists(json, 'Amount') ? undefined : MoneyWithCurrencyCodeFromJSON(json['Amount']),
        'refundStrategy': !exists(json, 'RefundStrategy') ? undefined : RefundStrategyFromJSON(json['RefundStrategy']),
    };
}

export function RefundPlanRequestToJSON(value?: RefundPlanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'InstallmentPlanNumber': value.installmentPlanNumber,
        'Amount': MoneyWithCurrencyCodeToJSON(value.amount),
        'RefundStrategy': RefundStrategyToJSON(value.refundStrategy),
    };
}


