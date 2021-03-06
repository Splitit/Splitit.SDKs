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
import { MerchantRefAllOf } from './merchantRefAllOf';
import { ReferenceEntityBase } from './referenceEntityBase';

export class MerchantRef {
    'id': number;
    'code'?: string;
    'description'?: string;
    'name'?: string;

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
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantRef.attributeTypeMap;
    }
}

