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
import { Money } from './';
/**
 *
 * @export
 * @interface RefundInstallmentPlanResponseAllOf
 */
export interface RefundInstallmentPlanResponseAllOf {
    /**
     *
     * @type {Money}
     * @memberof RefundInstallmentPlanResponseAllOf
     */
    currentRefundAmount?: Money;
}
export declare function RefundInstallmentPlanResponseAllOfFromJSON(json: any): RefundInstallmentPlanResponseAllOf;
export declare function RefundInstallmentPlanResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundInstallmentPlanResponseAllOf;
export declare function RefundInstallmentPlanResponseAllOfToJSON(value?: RefundInstallmentPlanResponseAllOf | null): any;
