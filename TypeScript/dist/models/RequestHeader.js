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
function RequestHeaderFromJSON(json) {
    return RequestHeaderFromJSONTyped(json, false);
}
exports.RequestHeaderFromJSON = RequestHeaderFromJSON;
function RequestHeaderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'touchPoint': !runtime_1.exists(json, 'TouchPoint') ? undefined : _1.TouchPointFromJSON(json['TouchPoint']),
        'sessionId': !runtime_1.exists(json, 'SessionId') ? undefined : json['SessionId'],
        'apiKey': !runtime_1.exists(json, 'ApiKey') ? undefined : json['ApiKey'],
        'cultureName': !runtime_1.exists(json, 'CultureName') ? undefined : json['CultureName'],
        'authenticationType': !runtime_1.exists(json, 'AuthenticationType') ? undefined : _1.AuthenticationTypeFromJSON(json['AuthenticationType']),
    };
}
exports.RequestHeaderFromJSONTyped = RequestHeaderFromJSONTyped;
function RequestHeaderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'TouchPoint': _1.TouchPointToJSON(value.touchPoint),
        'SessionId': value.sessionId,
        'ApiKey': value.apiKey,
        'CultureName': value.cultureName,
        'AuthenticationType': _1.AuthenticationTypeToJSON(value.authenticationType),
    };
}
exports.RequestHeaderToJSON = RequestHeaderToJSON;
