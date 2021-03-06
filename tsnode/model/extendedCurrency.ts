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

import { RequestFile } from '../api';
import { Currency } from './currency';
import { ExtendedCurrencyAllOf } from './extendedCurrencyAllOf';

export class ExtendedCurrency {
    'id': number;
    'code'?: string;
    'description'?: string;
    'symbol'?: string;
    'decimalPlaces': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "code",
            "baseName": "Code",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "symbol",
            "baseName": "Symbol",
            "type": "string"
        },
        {
            "name": "decimalPlaces",
            "baseName": "DecimalPlaces",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExtendedCurrency.attributeTypeMap;
    }
}

