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
 * @interface MerchantRefAllOf
 */
export interface MerchantRefAllOf {
    /**
     * 
     * @type {string}
     * @memberof MerchantRefAllOf
     */
    name?: string;
}

export function MerchantRefAllOfFromJSON(json: any): MerchantRefAllOf {
    return MerchantRefAllOfFromJSONTyped(json, false);
}

export function MerchantRefAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantRefAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
    };
}

export function MerchantRefAllOfToJSON(value?: MerchantRefAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
    };
}


