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
function AmountDetails2FromJSON(json) {
    return AmountDetails2FromJSONTyped(json, false);
}
exports.AmountDetails2FromJSON = AmountDetails2FromJSON;
function AmountDetails2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'subTotal': json['SubTotal'],
        'tax': json['Tax'],
        'shipping': json['Shipping'],
    };
}
exports.AmountDetails2FromJSONTyped = AmountDetails2FromJSONTyped;
function AmountDetails2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'SubTotal': value.subTotal,
        'Tax': value.tax,
        'Shipping': value.shipping,
    };
}
exports.AmountDetails2ToJSON = AmountDetails2ToJSON;
