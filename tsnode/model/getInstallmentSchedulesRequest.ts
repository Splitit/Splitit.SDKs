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
import { MoneyWithCurrencyCode } from './moneyWithCurrencyCode';

export class GetInstallmentSchedulesRequest {
    'installmentPlanNumber'?: string;
    'amount'?: MoneyWithCurrencyCode;
    'cardNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "installmentPlanNumber",
            "baseName": "InstallmentPlanNumber",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "MoneyWithCurrencyCode"
        },
        {
            "name": "cardNumber",
            "baseName": "CardNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetInstallmentSchedulesRequest.attributeTypeMap;
    }
}

