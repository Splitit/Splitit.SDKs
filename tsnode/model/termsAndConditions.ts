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

export class TermsAndConditions {
    'agreement'?: string;
    'importantNote'?: string;
    'fullContent'?: string;
    'privacyPolicy'?: string;
    'whatYouNeedToKnowAuthHoldDefine'?: string;
    'whatYouNeedToKnowBudgetManagement'?: string;
    'whatYouNeedToKnowCardTypeDetails'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "agreement",
            "baseName": "Agreement",
            "type": "string"
        },
        {
            "name": "importantNote",
            "baseName": "ImportantNote",
            "type": "string"
        },
        {
            "name": "fullContent",
            "baseName": "FullContent",
            "type": "string"
        },
        {
            "name": "privacyPolicy",
            "baseName": "PrivacyPolicy",
            "type": "string"
        },
        {
            "name": "whatYouNeedToKnowAuthHoldDefine",
            "baseName": "WhatYouNeedToKnow_AuthHoldDefine",
            "type": "string"
        },
        {
            "name": "whatYouNeedToKnowBudgetManagement",
            "baseName": "WhatYouNeedToKnow_BudgetManagement",
            "type": "string"
        },
        {
            "name": "whatYouNeedToKnowCardTypeDetails",
            "baseName": "WhatYouNeedToKnow_CardTypeDetails",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TermsAndConditions.attributeTypeMap;
    }
}
