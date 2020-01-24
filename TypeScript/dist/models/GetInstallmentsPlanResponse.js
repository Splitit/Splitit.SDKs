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
var _1 = require("./");
function GetInstallmentsPlanResponseFromJSON(json) {
    return GetInstallmentsPlanResponseFromJSONTyped(json, false);
}
exports.GetInstallmentsPlanResponseFromJSON = GetInstallmentsPlanResponseFromJSON;
function GetInstallmentsPlanResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'plansList': !runtime_1.exists(json, 'PlansList') ? undefined : (json['PlansList'].map(_1.InstallmentPlanFromJSON)),
        'responseHeader': !runtime_1.exists(json, 'ResponseHeader') ? undefined : _1.ResponseHeaderFromJSON(json['ResponseHeader']),
        'pagingResponseHeader': !runtime_1.exists(json, 'PagingResponseHeader') ? undefined : _1.PagingResponseHeaderFromJSON(json['PagingResponseHeader']),
    };
}
exports.GetInstallmentsPlanResponseFromJSONTyped = GetInstallmentsPlanResponseFromJSONTyped;
function GetInstallmentsPlanResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'PlansList': value.plansList === undefined ? undefined : (value.plansList.map(_1.InstallmentPlanToJSON)),
        'ResponseHeader': _1.ResponseHeaderToJSON(value.responseHeader),
        'PagingResponseHeader': _1.PagingResponseHeaderToJSON(value.pagingResponseHeader),
    };
}
exports.GetInstallmentsPlanResponseToJSON = GetInstallmentsPlanResponseToJSON;
