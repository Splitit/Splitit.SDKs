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
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Pending"] = "Pending";
    TransactionStatus["FinishedSuccessfully"] = "FinishedSuccessfully";
    TransactionStatus["Failed"] = "Failed";
    TransactionStatus["AllStatuses"] = "AllStatuses";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
function TransactionStatusFromJSON(json) {
    return TransactionStatusFromJSONTyped(json, false);
}
exports.TransactionStatusFromJSON = TransactionStatusFromJSON;
function TransactionStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TransactionStatusFromJSONTyped = TransactionStatusFromJSONTyped;
function TransactionStatusToJSON(value) {
    return value;
}
exports.TransactionStatusToJSON = TransactionStatusToJSON;