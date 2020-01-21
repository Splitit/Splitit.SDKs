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
var RefundUnderCancelation;
(function (RefundUnderCancelation) {
    RefundUnderCancelation["None"] = "None";
    RefundUnderCancelation["NoRefunds"] = "NoRefunds";
    RefundUnderCancelation["OnlyIfAFullRefundIsPossible"] = "OnlyIfAFullRefundIsPossible";
    RefundUnderCancelation["Choose"] = "Choose";
})(RefundUnderCancelation = exports.RefundUnderCancelation || (exports.RefundUnderCancelation = {}));
function RefundUnderCancelationFromJSON(json) {
    return RefundUnderCancelationFromJSONTyped(json, false);
}
exports.RefundUnderCancelationFromJSON = RefundUnderCancelationFromJSON;
function RefundUnderCancelationFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RefundUnderCancelationFromJSONTyped = RefundUnderCancelationFromJSONTyped;
function RefundUnderCancelationToJSON(value) {
    return value;
}
exports.RefundUnderCancelationToJSON = RefundUnderCancelationToJSON;
