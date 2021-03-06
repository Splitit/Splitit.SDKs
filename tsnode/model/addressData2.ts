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

export class AddressData2 {
    'addressLine'?: string;
    'addressLine2'?: string;
    'city'?: string;
    'country'?: string;
    'state'?: string;
    'zip'?: string;
    'fullAddressLine'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLine",
            "baseName": "AddressLine",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "AddressLine2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "City",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "State",
            "type": "string"
        },
        {
            "name": "zip",
            "baseName": "Zip",
            "type": "string"
        },
        {
            "name": "fullAddressLine",
            "baseName": "FullAddressLine",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressData2.attributeTypeMap;
    }
}

