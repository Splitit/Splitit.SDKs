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
 * @interface InstallmentPlanInitiatedStatuses
 */
export interface InstallmentPlanInitiatedStatuses {
    /**
     *
     * @type {boolean}
     * @memberof InstallmentPlanInitiatedStatuses
     */
    showInitiatedPlansPaymentRequestSent: boolean;
}
export declare function InstallmentPlanInitiatedStatusesFromJSON(json: any): InstallmentPlanInitiatedStatuses;
export declare function InstallmentPlanInitiatedStatusesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanInitiatedStatuses;
export declare function InstallmentPlanInitiatedStatusesToJSON(value?: InstallmentPlanInitiatedStatuses | null): any;
