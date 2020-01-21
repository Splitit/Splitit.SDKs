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
function ResponseErrorFromJSON(json) {
    return ResponseErrorFromJSONTyped(json, false);
}
exports.ResponseErrorFromJSON = ResponseErrorFromJSON;
function ResponseErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': !runtime_1.exists(json, 'ErrorCode') ? undefined : json['ErrorCode'],
        'fieldName': !runtime_1.exists(json, 'FieldName') ? undefined : json['FieldName'],
        'message': !runtime_1.exists(json, 'Message') ? undefined : json['Message'],
    };
}
exports.ResponseErrorFromJSONTyped = ResponseErrorFromJSONTyped;
function ResponseErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ErrorCode': value.errorCode,
        'FieldName': value.fieldName,
        'Message': value.message,
    };
}
exports.ResponseErrorToJSON = ResponseErrorToJSON;
