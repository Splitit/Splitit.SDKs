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
 * @interface TestCardRequest
 */
export interface TestCardRequest {
    /**
     *
     * @type {string}
     * @memberof TestCardRequest
     */
    installmentPlanNumber?: string;
    /**
     *
     * @type {boolean}
     * @memberof TestCardRequest
     */
    doVoid?: boolean;
}
export declare function TestCardRequestFromJSON(json: any): TestCardRequest;
export declare function TestCardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestCardRequest;
export declare function TestCardRequestToJSON(value?: TestCardRequest | null): any;
