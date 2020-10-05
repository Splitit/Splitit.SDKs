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
function ScheduleElementsFromJSON(json) {
    return ScheduleElementsFromJSONTyped(json, false);
}
exports.ScheduleElementsFromJSON = ScheduleElementsFromJSON;
function ScheduleElementsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'installmentNumber': json['InstallmentNumber'],
        'chargeDate': (new Date(json['ChargeDate'])),
        'chargeAmount': json['ChargeAmount'],
        'requiredCredit': json['RequiredCredit'],
    };
}
exports.ScheduleElementsFromJSONTyped = ScheduleElementsFromJSONTyped;
function ScheduleElementsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'InstallmentNumber': value.installmentNumber,
        'ChargeDate': (value.chargeDate.toISOString()),
        'ChargeAmount': value.chargeAmount,
        'RequiredCredit': value.requiredCredit,
    };
}
exports.ScheduleElementsToJSON = ScheduleElementsToJSON;