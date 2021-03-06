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
import { ResponseHeader } from './';
/**
 *
 * @export
 * @interface GetResourcesResponse
 */
export interface GetResourcesResponse {
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof GetResourcesResponse
     */
    logos?: {
        [key: string]: string;
    };
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof GetResourcesResponse
     */
    touchPointColors?: {
        [key: string]: string;
    };
    /**
     *
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof GetResourcesResponse
     */
    resourcesGroupedByCategories?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     *
     * @type {ResponseHeader}
     * @memberof GetResourcesResponse
     */
    responseHeader?: ResponseHeader;
}
export declare function GetResourcesResponseFromJSON(json: any): GetResourcesResponse;
export declare function GetResourcesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetResourcesResponse;
export declare function GetResourcesResponseToJSON(value?: GetResourcesResponse | null): any;
