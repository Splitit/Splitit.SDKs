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
 * @interface PublicTokenRequest
 */
export interface PublicTokenRequest {
    /**
     *
     * @type {MoneyWithCurrencyCode}
     * @memberof PublicTokenRequest
     */
    amount?: MoneyWithCurrencyCode;
}
export declare function PublicTokenRequestFromJSON(json: any): PublicTokenRequest;
export declare function PublicTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicTokenRequest;
export declare function PublicTokenRequestToJSON(value?: PublicTokenRequest | null): any;