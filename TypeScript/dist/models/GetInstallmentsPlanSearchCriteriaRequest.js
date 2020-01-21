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
function GetInstallmentsPlanSearchCriteriaRequestFromJSON(json) {
    return GetInstallmentsPlanSearchCriteriaRequestFromJSONTyped(json, false);
}
exports.GetInstallmentsPlanSearchCriteriaRequestFromJSON = GetInstallmentsPlanSearchCriteriaRequestFromJSON;
function GetInstallmentsPlanSearchCriteriaRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'queryCriteria': !runtime_1.exists(json, 'QueryCriteria') ? undefined : _1.InstallmentPlanQueryCriteriaFromJSON(json['QueryCriteria']),
        'loadRelated': !runtime_1.exists(json, 'LoadRelated') ? undefined : _1.RelationsLoadFromJSON(json['LoadRelated']),
        'pagingRequest': !runtime_1.exists(json, 'PagingRequest') ? undefined : _1.PagingRequestHeaderFromJSON(json['PagingRequest']),
    };
}
exports.GetInstallmentsPlanSearchCriteriaRequestFromJSONTyped = GetInstallmentsPlanSearchCriteriaRequestFromJSONTyped;
function GetInstallmentsPlanSearchCriteriaRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'QueryCriteria': _1.InstallmentPlanQueryCriteriaToJSON(value.queryCriteria),
        'LoadRelated': _1.RelationsLoadToJSON(value.loadRelated),
        'PagingRequest': _1.PagingRequestHeaderToJSON(value.pagingRequest),
    };
}
exports.GetInstallmentsPlanSearchCriteriaRequestToJSON = GetInstallmentsPlanSearchCriteriaRequestToJSON;
