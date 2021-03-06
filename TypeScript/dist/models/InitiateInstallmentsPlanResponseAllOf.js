"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("../runtime");
function InitiateInstallmentsPlanResponseAllOfFromJSON(json) {
    return InitiateInstallmentsPlanResponseAllOfFromJSONTyped(json, false);
}
exports.InitiateInstallmentsPlanResponseAllOfFromJSON = InitiateInstallmentsPlanResponseAllOfFromJSON;
function InitiateInstallmentsPlanResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'checkoutUrl': !runtime_1.exists(json, 'CheckoutUrl') ? undefined : json['CheckoutUrl'],
        'approvalUrl': !runtime_1.exists(json, 'ApprovalUrl') ? undefined : json['ApprovalUrl'],
        'termsAndConditionsUrl': !runtime_1.exists(json, 'TermsAndConditionsUrl') ? undefined : json['TermsAndConditionsUrl'],
        'privacyPolicyUrl': !runtime_1.exists(json, 'PrivacyPolicyUrl') ? undefined : json['PrivacyPolicyUrl'],
        'installmentPlanInfoUrl': !runtime_1.exists(json, 'InstallmentPlanInfoUrl') ? undefined : json['InstallmentPlanInfoUrl'],
        'publicToken': !runtime_1.exists(json, 'PublicToken') ? undefined : json['PublicToken'],
        'learnMoreUrl': !runtime_1.exists(json, 'LearnMoreUrl') ? undefined : json['LearnMoreUrl'],
    };
}
exports.InitiateInstallmentsPlanResponseAllOfFromJSONTyped = InitiateInstallmentsPlanResponseAllOfFromJSONTyped;
function InitiateInstallmentsPlanResponseAllOfToJSON(value) {
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
exports.InitiateInstallmentsPlanResponseAllOfToJSON = InitiateInstallmentsPlanResponseAllOfToJSON;
