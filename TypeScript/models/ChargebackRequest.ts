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
 * @interface ChargebackRequest
 */
export interface ChargebackRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof ChargebackRequest
     */
    transactionIdsToMark?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ChargebackRequest
     */
    transactionIdsToUnmark?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ChargebackRequest
     */
    installmentPlanNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChargebackRequest
     */
    partialResponseMapping: boolean;
}

export function ChargebackRequestFromJSON(json: any): ChargebackRequest {
    return ChargebackRequestFromJSONTyped(json, false);
}

export function ChargebackRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargebackRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionIdsToMark': !exists(json, 'TransactionIdsToMark') ? undefined : json['TransactionIdsToMark'],
        'transactionIdsToUnmark': !exists(json, 'TransactionIdsToUnmark') ? undefined : json['TransactionIdsToUnmark'],
        'installmentPlanNumber': !exists(json, 'InstallmentPlanNumber') ? undefined : json['InstallmentPlanNumber'],
        'partialResponseMapping': json['PartialResponseMapping'],
    };
}

export function ChargebackRequestToJSON(value?: ChargebackRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TransactionIdsToMark': value.transactionIdsToMark,
        'TransactionIdsToUnmark': value.transactionIdsToUnmark,
        'InstallmentPlanNumber': value.installmentPlanNumber,
        'PartialResponseMapping': value.partialResponseMapping,
    };
}


