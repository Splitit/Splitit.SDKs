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
 * @interface TermsAndConditions
 */
export interface TermsAndConditions {
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    agreement?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    importantNote?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    fullContent?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    privacyPolicy?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    whatYouNeedToKnowAuthHoldDefine?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    whatYouNeedToKnowBudgetManagement?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsAndConditions
     */
    whatYouNeedToKnowCardTypeDetails?: string;
}

export function TermsAndConditionsFromJSON(json: any): TermsAndConditions {
    return TermsAndConditionsFromJSONTyped(json, false);
}

export function TermsAndConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TermsAndConditions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agreement': !exists(json, 'Agreement') ? undefined : json['Agreement'],
        'importantNote': !exists(json, 'ImportantNote') ? undefined : json['ImportantNote'],
        'fullContent': !exists(json, 'FullContent') ? undefined : json['FullContent'],
        'privacyPolicy': !exists(json, 'PrivacyPolicy') ? undefined : json['PrivacyPolicy'],
        'whatYouNeedToKnowAuthHoldDefine': !exists(json, 'WhatYouNeedToKnow_AuthHoldDefine') ? undefined : json['WhatYouNeedToKnow_AuthHoldDefine'],
        'whatYouNeedToKnowBudgetManagement': !exists(json, 'WhatYouNeedToKnow_BudgetManagement') ? undefined : json['WhatYouNeedToKnow_BudgetManagement'],
        'whatYouNeedToKnowCardTypeDetails': !exists(json, 'WhatYouNeedToKnow_CardTypeDetails') ? undefined : json['WhatYouNeedToKnow_CardTypeDetails'],
    };
}

export function TermsAndConditionsToJSON(value?: TermsAndConditions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Agreement': value.agreement,
        'ImportantNote': value.importantNote,
        'FullContent': value.fullContent,
        'PrivacyPolicy': value.privacyPolicy,
        'WhatYouNeedToKnow_AuthHoldDefine': value.whatYouNeedToKnowAuthHoldDefine,
        'WhatYouNeedToKnow_BudgetManagement': value.whatYouNeedToKnowBudgetManagement,
        'WhatYouNeedToKnow_CardTypeDetails': value.whatYouNeedToKnowCardTypeDetails,
    };
}


