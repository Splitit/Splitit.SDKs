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
 * @interface EventsEndpoints
 */
export interface EventsEndpoints {
    /**
     *
     * @type {string}
     * @memberof EventsEndpoints
     */
    createSucceeded?: string;
}
export declare function EventsEndpointsFromJSON(json: any): EventsEndpoints;
export declare function EventsEndpointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsEndpoints;
export declare function EventsEndpointsToJSON(value?: EventsEndpoints | null): any;
