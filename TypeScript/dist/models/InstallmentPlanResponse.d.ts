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
import { InstallmentPlan, ResponseHeader } from './';
/**
 *
 * @export
 * @interface InstallmentPlanResponse
 */
export interface InstallmentPlanResponse {
    /**
     *
     * @type {ResponseHeader}
     * @memberof InstallmentPlanResponse
     */
    responseHeader?: ResponseHeader;
    /**
     *
     * @type {InstallmentPlan}
     * @memberof InstallmentPlanResponse
     */
    installmentPlan?: InstallmentPlan;
}
export declare function InstallmentPlanResponseFromJSON(json: any): InstallmentPlanResponse;
export declare function InstallmentPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanResponse;
export declare function InstallmentPlanResponseToJSON(value?: InstallmentPlanResponse | null): any;
