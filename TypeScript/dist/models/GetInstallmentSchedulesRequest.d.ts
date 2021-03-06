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
import { MoneyWithCurrencyCode } from './';
/**
 *
 * @export
 * @interface GetInstallmentSchedulesRequest
 */
export interface GetInstallmentSchedulesRequest {
    /**
     *
     * @type {string}
     * @memberof GetInstallmentSchedulesRequest
     */
    installmentPlanNumber?: string;
    /**
     *
     * @type {MoneyWithCurrencyCode}
     * @memberof GetInstallmentSchedulesRequest
     */
    amount?: MoneyWithCurrencyCode;
    /**
     *
     * @type {string}
     * @memberof GetInstallmentSchedulesRequest
     */
    cardNumber?: string;
}
export declare function GetInstallmentSchedulesRequestFromJSON(json: any): GetInstallmentSchedulesRequest;
export declare function GetInstallmentSchedulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInstallmentSchedulesRequest;
export declare function GetInstallmentSchedulesRequestToJSON(value?: GetInstallmentSchedulesRequest | null): any;
