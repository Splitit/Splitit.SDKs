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
 * @interface ReferenceEntityBase
 */
export interface ReferenceEntityBase {
    /**
     *
     * @type {number}
     * @memberof ReferenceEntityBase
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof ReferenceEntityBase
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof ReferenceEntityBase
     */
    description?: string;
}
export declare function ReferenceEntityBaseFromJSON(json: any): ReferenceEntityBase;
export declare function ReferenceEntityBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntityBase;
export declare function ReferenceEntityBaseToJSON(value?: ReferenceEntityBase | null): any;
