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
function PlanApprovalEvidenceFromJSON(json) {
    return PlanApprovalEvidenceFromJSONTyped(json, false);
}
exports.PlanApprovalEvidenceFromJSON = PlanApprovalEvidenceFromJSON;
function PlanApprovalEvidenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerSignaturePngAsBase64': !runtime_1.exists(json, 'CustomerSignaturePngAsBase64') ? undefined : json['CustomerSignaturePngAsBase64'],
        'areTermsAndConditionsApproved': json['AreTermsAndConditionsApproved'],
        'shopperApprovalDateTime': !runtime_1.exists(json, 'ShopperApprovalDateTime') ? undefined : (new Date(json['ShopperApprovalDateTime'])),
    };
}
exports.PlanApprovalEvidenceFromJSONTyped = PlanApprovalEvidenceFromJSONTyped;
function PlanApprovalEvidenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'CustomerSignaturePngAsBase64': value.customerSignaturePngAsBase64,
        'AreTermsAndConditionsApproved': value.areTermsAndConditionsApproved,
        'ShopperApprovalDateTime': value.shopperApprovalDateTime === undefined ? undefined : (value.shopperApprovalDateTime.toISOString()),
    };
}
exports.PlanApprovalEvidenceToJSON = PlanApprovalEvidenceToJSON;
