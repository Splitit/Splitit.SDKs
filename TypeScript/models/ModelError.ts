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
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    errorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    additionalInfo?: string;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'ErrorCode') ? undefined : json['ErrorCode'],
        'message': !exists(json, 'Message') ? undefined : json['Message'],
        'additionalInfo': !exists(json, 'AdditionalInfo') ? undefined : json['AdditionalInfo'],
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ErrorCode': value.errorCode,
        'Message': value.message,
        'AdditionalInfo': value.additionalInfo,
    };
}

