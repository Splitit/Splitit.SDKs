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
function CreateInstallmentPlanLegacyResponseFromJSON(json) {
    return CreateInstallmentPlanLegacyResponseFromJSONTyped(json, false);
}
exports.CreateInstallmentPlanLegacyResponseFromJSON = CreateInstallmentPlanLegacyResponseFromJSON;
function CreateInstallmentPlanLegacyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiKey': !runtime_1.exists(json, 'ApiKey') ? undefined : json['ApiKey'],
        'installmentPlanStatus': json['InstallmentPlanStatus'],
        'result': json['Result'],
        'paymentGateway': !runtime_1.exists(json, 'PaymentGateway') ? undefined : json['PaymentGateway'],
        'email': !runtime_1.exists(json, 'Email') ? undefined : json['Email'],
        'consumerFullName': !runtime_1.exists(json, 'ConsumerFullName') ? undefined : json['ConsumerFullName'],
        'paramX': !runtime_1.exists(json, 'ParamX') ? undefined : json['ParamX'],
        'installmentNumber': json['InstallmentNumber'],
        'amount': json['Amount'],
        'currencyName': !runtime_1.exists(json, 'CurrencyName') ? undefined : json['CurrencyName'],
        'currencySymbol': !runtime_1.exists(json, 'CurrencySymbol') ? undefined : json['CurrencySymbol'],
        'installmentPlanNumber': !runtime_1.exists(json, 'InstallmentPlanNumber') ? undefined : json['InstallmentPlanNumber'],
        'responseHeader': !runtime_1.exists(json, 'ResponseHeader') ? undefined : _1.ResponseHeaderFromJSON(json['ResponseHeader']),
    };
}
exports.CreateInstallmentPlanLegacyResponseFromJSONTyped = CreateInstallmentPlanLegacyResponseFromJSONTyped;
function CreateInstallmentPlanLegacyResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ApiKey': value.apiKey,
        'InstallmentPlanStatus': value.installmentPlanStatus,
        'Result': value.result,
        'PaymentGateway': value.paymentGateway,
        'Email': value.email,
        'ConsumerFullName': value.consumerFullName,
        'ParamX': value.paramX,
        'InstallmentNumber': value.installmentNumber,
        'Amount': value.amount,
        'CurrencyName': value.currencyName,
        'CurrencySymbol': value.currencySymbol,
        'InstallmentPlanNumber': value.installmentPlanNumber,
        'ResponseHeader': _1.ResponseHeaderToJSON(value.responseHeader),
    };
}
exports.CreateInstallmentPlanLegacyResponseToJSON = CreateInstallmentPlanLegacyResponseToJSON;
