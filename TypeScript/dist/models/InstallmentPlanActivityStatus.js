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
/**
 *
 * @export
 * @enum {string}
 */
var InstallmentPlanActivityStatus;
(function (InstallmentPlanActivityStatus) {
    InstallmentPlanActivityStatus["None"] = "None";
    InstallmentPlanActivityStatus["All"] = "All";
    InstallmentPlanActivityStatus["Processed"] = "Processed";
    InstallmentPlanActivityStatus["Planned"] = "Planned";
})(InstallmentPlanActivityStatus = exports.InstallmentPlanActivityStatus || (exports.InstallmentPlanActivityStatus = {}));
function InstallmentPlanActivityStatusFromJSON(json) {
    return InstallmentPlanActivityStatusFromJSONTyped(json, false);
}
exports.InstallmentPlanActivityStatusFromJSON = InstallmentPlanActivityStatusFromJSON;
function InstallmentPlanActivityStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.InstallmentPlanActivityStatusFromJSONTyped = InstallmentPlanActivityStatusFromJSONTyped;
function InstallmentPlanActivityStatusToJSON(value) {
    return value;
}
exports.InstallmentPlanActivityStatusToJSON = InstallmentPlanActivityStatusToJSON;