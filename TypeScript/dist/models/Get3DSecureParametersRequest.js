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
function Get3DSecureParametersRequestFromJSON(json) {
    return Get3DSecureParametersRequestFromJSONTyped(json, false);
}
exports.Get3DSecureParametersRequestFromJSON = Get3DSecureParametersRequestFromJSON;
function Get3DSecureParametersRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'installmentPlanNumber': !runtime_1.exists(json, 'InstallmentPlanNumber') ? undefined : json['InstallmentPlanNumber'],
    };
}
exports.Get3DSecureParametersRequestFromJSONTyped = Get3DSecureParametersRequestFromJSONTyped;
function Get3DSecureParametersRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'InstallmentPlanNumber': value.installmentPlanNumber,
    };
}
exports.Get3DSecureParametersRequestToJSON = Get3DSecureParametersRequestToJSON;
