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
 * @interface CreateInstallmentsPlanResponseAllOf
 */
export interface CreateInstallmentsPlanResponseAllOf {
    /**
     *
     * @type {string}
     * @memberof CreateInstallmentsPlanResponseAllOf
     */
    approvalUrl?: string;
    /**
     *
     * @type {string}
     * @memberof CreateInstallmentsPlanResponseAllOf
     */
    threeDRedirectUrl?: string;
}
export declare function CreateInstallmentsPlanResponseAllOfFromJSON(json: any): CreateInstallmentsPlanResponseAllOf;
export declare function CreateInstallmentsPlanResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInstallmentsPlanResponseAllOf;
export declare function CreateInstallmentsPlanResponseAllOfToJSON(value?: CreateInstallmentsPlanResponseAllOf | null): any;
