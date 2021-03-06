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
    CurrencyAllOf,
    CurrencyAllOfFromJSON,
    CurrencyAllOfFromJSONTyped,
    CurrencyAllOfToJSON,
    ReferenceEntityBase,
    ReferenceEntityBaseFromJSON,
    ReferenceEntityBaseFromJSONTyped,
    ReferenceEntityBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * 
     * @type {number}
     * @memberof Currency
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Currency
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof Currency
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Currency
     */
    symbol?: string;
}

export function CurrencyFromJSON(json: any): Currency {
    return CurrencyFromJSONTyped(json, false);
}

export function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'code': !exists(json, 'Code') ? undefined : json['Code'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'symbol': !exists(json, 'Symbol') ? undefined : json['Symbol'],
    };
}

export function CurrencyToJSON(value?: Currency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Code': value.code,
        'Description': value.description,
        'Symbol': value.symbol,
    };
}


