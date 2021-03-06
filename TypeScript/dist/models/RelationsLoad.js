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
var _1 = require("./");
function RelationsLoadFromJSON(json) {
    return RelationsLoadFromJSONTyped(json, false);
}
exports.RelationsLoadFromJSON = RelationsLoadFromJSON;
function RelationsLoadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'installments': _1.InstallmentPlanActivityStatusFromJSON(json['Installments']),
        'secureAuthorizations': _1.InstallmentPlanActivityStatusFromJSON(json['SecureAuthorizations']),
    };
}
exports.RelationsLoadFromJSONTyped = RelationsLoadFromJSONTyped;
function RelationsLoadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Installments': _1.InstallmentPlanActivityStatusToJSON(value.installments),
        'SecureAuthorizations': _1.InstallmentPlanActivityStatusToJSON(value.secureAuthorizations),
    };
}
exports.RelationsLoadToJSON = RelationsLoadToJSON;
