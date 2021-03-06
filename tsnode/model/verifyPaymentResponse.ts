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
import { ResponseHeader } from './responseHeader';

export class VerifyPaymentResponse {
    'responseHeader'?: ResponseHeader;
    'isPaid': boolean;
    'originalAmountPaid'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "responseHeader",
            "baseName": "ResponseHeader",
            "type": "ResponseHeader"
        },
        {
            "name": "isPaid",
            "baseName": "IsPaid",
            "type": "boolean"
        },
        {
            "name": "originalAmountPaid",
            "baseName": "OriginalAmountPaid",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return VerifyPaymentResponse.attributeTypeMap;
    }
}

