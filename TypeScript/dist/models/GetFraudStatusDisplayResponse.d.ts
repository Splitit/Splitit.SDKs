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
 * @interface GetFraudStatusDisplayResponse
 */
export interface GetFraudStatusDisplayResponse {
    /**
     *
     * @type {ResponseHeader}
     * @memberof GetFraudStatusDisplayResponse
     */
    responseHeader?: ResponseHeader;
    /**
     *
     * @type {string}
     * @memberof GetFraudStatusDisplayResponse
     */
    provider?: string;
    /**
     *
     * @type {string}
     * @memberof GetFraudStatusDisplayResponse
     */
    fullLog?: string;
    /**
     *
     * @type {string}
     * @memberof GetFraudStatusDisplayResponse
     */
    providerResultDescription?: string;
    /**
     *
     * @type {number}
     * @memberof GetFraudStatusDisplayResponse
     */
    installmentPlanId: number;
    /**
     *
     * @type {string}
     * @memberof GetFraudStatusDisplayResponse
     */
    providerResultCode?: string;
}
export declare function GetFraudStatusDisplayResponseFromJSON(json: any): GetFraudStatusDisplayResponse;
export declare function GetFraudStatusDisplayResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFraudStatusDisplayResponse;
export declare function GetFraudStatusDisplayResponseToJSON(value?: GetFraudStatusDisplayResponse | null): any;
