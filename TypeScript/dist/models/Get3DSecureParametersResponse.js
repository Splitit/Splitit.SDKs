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
function Get3DSecureParametersResponseFromJSON(json) {
    return Get3DSecureParametersResponseFromJSONTyped(json, false);
}
exports.Get3DSecureParametersResponseFromJSON = Get3DSecureParametersResponseFromJSON;
function Get3DSecureParametersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'responseHeader': !runtime_1.exists(json, 'ResponseHeader') ? undefined : _1.ResponseHeaderFromJSON(json['ResponseHeader']),
        'issuerRedirectUrl': !runtime_1.exists(json, 'IssuerRedirectUrl') ? undefined : json['IssuerRedirectUrl'],
        'paReq': !runtime_1.exists(json, 'PaReq') ? undefined : json['PaReq'],
        'md': !runtime_1.exists(json, 'Md') ? undefined : json['Md'],
        'termUrl': !runtime_1.exists(json, 'TermUrl') ? undefined : json['TermUrl'],
        'threeDSecureParams': !runtime_1.exists(json, 'ThreeDSecureParams') ? undefined : json['ThreeDSecureParams'],
    };
}
exports.Get3DSecureParametersResponseFromJSONTyped = Get3DSecureParametersResponseFromJSONTyped;
function Get3DSecureParametersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ResponseHeader': _1.ResponseHeaderToJSON(value.responseHeader),
        'IssuerRedirectUrl': value.issuerRedirectUrl,
        'PaReq': value.paReq,
        'Md': value.md,
        'TermUrl': value.termUrl,
        'ThreeDSecureParams': value.threeDSecureParams,
    };
}
exports.Get3DSecureParametersResponseToJSON = Get3DSecureParametersResponseToJSON;
