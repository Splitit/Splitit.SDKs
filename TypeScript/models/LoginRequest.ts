/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    TouchPoint,
    TouchPointFromJSON,
    TouchPointFromJSONTyped,
    TouchPointToJSON,
} from './';

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

export function LoginRequestFromJSON(json: any): LoginRequest {
    return LoginRequestFromJSONTyped(json, false);
}

export function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userName': !exists(json, 'UserName') ? undefined : json['UserName'],
        'password': !exists(json, 'Password') ? undefined : json['Password'],
        'touchPoint': !exists(json, 'TouchPoint') ? undefined : TouchPointFromJSON(json['TouchPoint']),
    };
}

export function LoginRequestToJSON(value?: LoginRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'UserName': value.userName,
        'Password': value.password,
        'TouchPoint': TouchPointToJSON(value.touchPoint),
    };
}


