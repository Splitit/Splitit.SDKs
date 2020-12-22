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
export declare enum CardBrand {
    Mastercard = "Mastercard",
    Visa = "Visa",
    AmericanExpress = "AmericanExpress",
    Maestro = "Maestro",
    JCB = "JCB",
    CUP = "CUP",
    UPI = "UPI",
    Discover = "Discover",
    Other = "Other"
}
export declare function CardBrandFromJSON(json: any): CardBrand;
export declare function CardBrandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardBrand;
export declare function CardBrandToJSON(value?: CardBrand | null): any;
