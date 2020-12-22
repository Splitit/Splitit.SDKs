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
function CreateInstallmentsPlanResponseAllOfFromJSON(json) {
    return CreateInstallmentsPlanResponseAllOfFromJSONTyped(json, false);
}
exports.CreateInstallmentsPlanResponseAllOfFromJSON = CreateInstallmentsPlanResponseAllOfFromJSON;
function CreateInstallmentsPlanResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'approvalUrl': !runtime_1.exists(json, 'ApprovalUrl') ? undefined : json['ApprovalUrl'],
        'threeDRedirectUrl': !runtime_1.exists(json, 'ThreeDRedirectUrl') ? undefined : json['ThreeDRedirectUrl'],
    };
}
exports.CreateInstallmentsPlanResponseAllOfFromJSONTyped = CreateInstallmentsPlanResponseAllOfFromJSONTyped;
function CreateInstallmentsPlanResponseAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ApprovalUrl': value.approvalUrl,
        'ThreeDRedirectUrl': value.threeDRedirectUrl,
    };
}
exports.CreateInstallmentsPlanResponseAllOfToJSON = CreateInstallmentsPlanResponseAllOfToJSON;
