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
 * @interface UpdateInstallmentsPlanResponseAllOf
 */
export interface UpdateInstallmentsPlanResponseAllOf {
    /**
     *
     * @type {string}
     * @memberof UpdateInstallmentsPlanResponseAllOf
     */
    approvalUrl?: string;
}
export declare function UpdateInstallmentsPlanResponseAllOfFromJSON(json: any): UpdateInstallmentsPlanResponseAllOf;
export declare function UpdateInstallmentsPlanResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInstallmentsPlanResponseAllOf;
export declare function UpdateInstallmentsPlanResponseAllOfToJSON(value?: UpdateInstallmentsPlanResponseAllOf | null): any;