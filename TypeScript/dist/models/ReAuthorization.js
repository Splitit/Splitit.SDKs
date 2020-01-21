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
function ReAuthorizationFromJSON(json) {
    return ReAuthorizationFromJSONTyped(json, false);
}
exports.ReAuthorizationFromJSON = ReAuthorizationFromJSON;
function ReAuthorizationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'processingDate': !runtime_1.exists(json, 'ProcessingDate') ? undefined : (new Date(json['ProcessingDate'])),
        'amount': !runtime_1.exists(json, 'Amount') ? undefined : _1.MoneyFromJSON(json['Amount']),
        'transactionResults': !runtime_1.exists(json, 'TransactionResults') ? undefined : (json['TransactionResults'].map(_1.TransactionResultFromJSON)),
        'cardDetails': !runtime_1.exists(json, 'CardDetails') ? undefined : _1.CardDataFromJSON(json['CardDetails']),
        'result': !runtime_1.exists(json, 'Result') ? undefined : json['Result'],
    };
}
exports.ReAuthorizationFromJSONTyped = ReAuthorizationFromJSONTyped;
function ReAuthorizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ProcessingDate': value.processingDate === undefined ? undefined : (value.processingDate.toISOString()),
        'Amount': _1.MoneyToJSON(value.amount),
        'TransactionResults': value.transactionResults === undefined ? undefined : (value.transactionResults.map(_1.TransactionResultToJSON)),
        'CardDetails': _1.CardDataToJSON(value.cardDetails),
        'Result': value.result,
    };
}
exports.ReAuthorizationToJSON = ReAuthorizationToJSON;
