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
 * @interface InitiateInstallmentsPlanResponseAllOf
 */
export interface InitiateInstallmentsPlanResponseAllOf {
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    checkoutUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    approvalUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    termsAndConditionsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    installmentPlanInfoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    publicToken?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateInstallmentsPlanResponseAllOf
     */
    learnMoreUrl?: string;
}

export function InitiateInstallmentsPlanResponseAllOfFromJSON(json: any): InitiateInstallmentsPlanResponseAllOf {
    return InitiateInstallmentsPlanResponseAllOfFromJSONTyped(json, false);
}

export function InitiateInstallmentsPlanResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiateInstallmentsPlanResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkoutUrl': !exists(json, 'CheckoutUrl') ? undefined : json['CheckoutUrl'],
        'approvalUrl': !exists(json, 'ApprovalUrl') ? undefined : json['ApprovalUrl'],
        'termsAndConditionsUrl': !exists(json, 'TermsAndConditionsUrl') ? undefined : json['TermsAndConditionsUrl'],
        'privacyPolicyUrl': !exists(json, 'PrivacyPolicyUrl') ? undefined : json['PrivacyPolicyUrl'],
        'installmentPlanInfoUrl': !exists(json, 'InstallmentPlanInfoUrl') ? undefined : json['InstallmentPlanInfoUrl'],
        'publicToken': !exists(json, 'PublicToken') ? undefined : json['PublicToken'],
        'learnMoreUrl': !exists(json, 'LearnMoreUrl') ? undefined : json['LearnMoreUrl'],
    };
}

export function InitiateInstallmentsPlanResponseAllOfToJSON(value?: InitiateInstallmentsPlanResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CheckoutUrl': value.checkoutUrl,
        'ApprovalUrl': value.approvalUrl,
        'TermsAndConditionsUrl': value.termsAndConditionsUrl,
        'PrivacyPolicyUrl': value.privacyPolicyUrl,
        'InstallmentPlanInfoUrl': value.installmentPlanInfoUrl,
        'PublicToken': value.publicToken,
        'LearnMoreUrl': value.learnMoreUrl,
    };
}


