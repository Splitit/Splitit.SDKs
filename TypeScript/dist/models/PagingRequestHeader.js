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
function PagingRequestHeaderFromJSON(json) {
    return PagingRequestHeaderFromJSONTyped(json, false);
}
exports.PagingRequestHeaderFromJSON = PagingRequestHeaderFromJSON;
function PagingRequestHeaderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'skip': json['Skip'],
        'take': json['Take'],
    };
}
exports.PagingRequestHeaderFromJSONTyped = PagingRequestHeaderFromJSONTyped;
function PagingRequestHeaderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Skip': value.skip,
        'Take': value.take,
    };
}
exports.PagingRequestHeaderToJSON = PagingRequestHeaderToJSON;
