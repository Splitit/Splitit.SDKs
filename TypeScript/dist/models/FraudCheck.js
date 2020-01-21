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
function FraudCheckFromJSON(json) {
    return FraudCheckFromJSONTyped(json, false);
}
exports.FraudCheckFromJSON = FraudCheckFromJSON;
function FraudCheckFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fraudCheckResult': !runtime_1.exists(json, 'FraudCheckResult') ? undefined : _1.ReferenceEntityBaseFromJSON(json['FraudCheckResult']),
        'providerResultCode': !runtime_1.exists(json, 'ProviderResultCode') ? undefined : json['ProviderResultCode'],
        'providerResultDesc': !runtime_1.exists(json, 'ProviderResultDesc') ? undefined : json['ProviderResultDesc'],
        'providerReferenceId': !runtime_1.exists(json, 'ProviderReferenceId') ? undefined : json['ProviderReferenceId'],
    };
}
exports.FraudCheckFromJSONTyped = FraudCheckFromJSONTyped;
function FraudCheckToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'FraudCheckResult': _1.ReferenceEntityBaseToJSON(value.fraudCheckResult),
        'ProviderResultCode': value.providerResultCode,
        'ProviderResultDesc': value.providerResultDesc,
        'ProviderReferenceId': value.providerReferenceId,
    };
}
exports.FraudCheckToJSON = FraudCheckToJSON;
