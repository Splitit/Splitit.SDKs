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
 * @interface AmountDetails2
 */
export interface AmountDetails2 {
    /**
     *
     * @type {number}
     * @memberof AmountDetails2
     */
    subTotal: number;
    /**
     *
     * @type {number}
     * @memberof AmountDetails2
     */
    tax: number;
    /**
     *
     * @type {number}
     * @memberof AmountDetails2
     */
    shipping: number;
}
export declare function AmountDetails2FromJSON(json: any): AmountDetails2;
export declare function AmountDetails2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountDetails2;
export declare function AmountDetails2ToJSON(value?: AmountDetails2 | null): any;
