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
 * @interface MoneyWithCurrencyCode
 */
export interface MoneyWithCurrencyCode {
    /**
     *
     * @type {number}
     * @memberof MoneyWithCurrencyCode
     */
    value: number;
    /**
     *
     * @type {string}
     * @memberof MoneyWithCurrencyCode
     */
    currencyCode?: string;
}
export declare function MoneyWithCurrencyCodeFromJSON(json: any): MoneyWithCurrencyCode;
export declare function MoneyWithCurrencyCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyWithCurrencyCode;
export declare function MoneyWithCurrencyCodeToJSON(value?: MoneyWithCurrencyCode | null): any;
