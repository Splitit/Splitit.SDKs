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
 * @interface CurrencyAllOf
 */
export interface CurrencyAllOf {
    /**
     * 
     * @type {string}
     * @memberof CurrencyAllOf
     */
    symbol?: string;
}

export function CurrencyAllOfFromJSON(json: any): CurrencyAllOf {
    return CurrencyAllOfFromJSONTyped(json, false);
}

export function CurrencyAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': !exists(json, 'Symbol') ? undefined : json['Symbol'],
    };
}

export function CurrencyAllOfToJSON(value?: CurrencyAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Symbol': value.symbol,
    };
}


