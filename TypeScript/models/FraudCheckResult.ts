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

/**
 * 
 * @export
 * @enum {string}
 */
export enum FraudCheckResult {
    Failed = 'Failed',
    Approved = 'Approved',
    Rejected = 'Rejected',
    NotReviewed = 'NotReviewed'
}

export function FraudCheckResultFromJSON(json: any): FraudCheckResult {
    return FraudCheckResultFromJSONTyped(json, false);
}

export function FraudCheckResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FraudCheckResult {
    return json as FraudCheckResult;
}

export function FraudCheckResultToJSON(value?: FraudCheckResult | null): any {
    return value as any;
}

