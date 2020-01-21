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
import { InstallmentsPlanDateType } from './';
/**
 *
 * @export
 * @interface InstallmentPlanDateInfo
 */
export interface InstallmentPlanDateInfo {
    /**
     *
     * @type {InstallmentsPlanDateType}
     * @memberof InstallmentPlanDateInfo
     */
    installmentsPlanDateType: InstallmentsPlanDateType;
    /**
     *
     * @type {string}
     * @memberof InstallmentPlanDateInfo
     */
    startDate?: string;
    /**
     *
     * @type {string}
     * @memberof InstallmentPlanDateInfo
     */
    endDate?: string;
    /**
     *
     * @type {boolean}
     * @memberof InstallmentPlanDateInfo
     */
    allDates: boolean;
}
export declare function InstallmentPlanDateInfoFromJSON(json: any): InstallmentPlanDateInfo;
export declare function InstallmentPlanDateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanDateInfo;
export declare function InstallmentPlanDateInfoToJSON(value?: InstallmentPlanDateInfo | null): any;