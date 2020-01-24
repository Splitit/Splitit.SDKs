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
import { TouchPoint } from './';
/**
 *
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     *
     * @type {string}
     * @memberof LoginRequest
     */
    userName?: string;
    /**
     *
     * @type {string}
     * @memberof LoginRequest
     */
    password?: string;
    /**
     *
     * @type {TouchPoint}
     * @memberof LoginRequest
     */
    touchPoint?: TouchPoint;
}
export declare function LoginRequestFromJSON(json: any): LoginRequest;
export declare function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest;
export declare function LoginRequestToJSON(value?: LoginRequest | null): any;
