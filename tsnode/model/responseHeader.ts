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

export class ResponseHeader {
    'succeeded': boolean;
    'errors'?: Array<Error>;
    'traceId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "succeeded",
            "baseName": "Succeeded",
            "type": "boolean"
        },
        {
            "name": "errors",
            "baseName": "Errors",
            "type": "Array<Error>"
        },
        {
            "name": "traceId",
            "baseName": "TraceId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseHeader.attributeTypeMap;
    }
}

