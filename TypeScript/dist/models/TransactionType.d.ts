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
export declare enum TransactionType {
    Installments = "Installments",
    Authorizations = "Authorizations",
    Refunds = "Refunds",
    Chb = "Chb",
    AllTypes = "AllTypes"
}
export declare function TransactionTypeFromJSON(json: any): TransactionType;
export declare function TransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionType;
export declare function TransactionTypeToJSON(value?: TransactionType | null): any;