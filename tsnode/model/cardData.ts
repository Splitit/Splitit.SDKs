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
import { AddressData } from './addressData';
import { ReferenceEntityBase } from './referenceEntityBase';

export class CardData {
    'cardId'?: string;
    'cardNumber'?: string;
    'cardExpMonth'?: string;
    'cardExpYear'?: string;
    'cardBrand'?: ReferenceEntityBase;
    'cardType'?: ReferenceEntityBase;
    'bin'?: string;
    'cardHolderFullName'?: string;
    'cardCvv'?: string;
    'address'?: AddressData;
    'token'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardId",
            "baseName": "CardId",
            "type": "string"
        },
        {
            "name": "cardNumber",
            "baseName": "CardNumber",
            "type": "string"
        },
        {
            "name": "cardExpMonth",
            "baseName": "CardExpMonth",
            "type": "string"
        },
        {
            "name": "cardExpYear",
            "baseName": "CardExpYear",
            "type": "string"
        },
        {
            "name": "cardBrand",
            "baseName": "CardBrand",
            "type": "ReferenceEntityBase"
        },
        {
            "name": "cardType",
            "baseName": "CardType",
            "type": "ReferenceEntityBase"
        },
        {
            "name": "bin",
            "baseName": "Bin",
            "type": "string"
        },
        {
            "name": "cardHolderFullName",
            "baseName": "CardHolderFullName",
            "type": "string"
        },
        {
            "name": "cardCvv",
            "baseName": "CardCvv",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "Address",
            "type": "AddressData"
        },
        {
            "name": "token",
            "baseName": "Token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardData.attributeTypeMap;
    }
}

