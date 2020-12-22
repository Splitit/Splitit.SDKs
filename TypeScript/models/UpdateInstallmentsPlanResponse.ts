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

import { exists, mapValues } from '../runtime';
import {
    InstallmentPlan,
    InstallmentPlanFromJSON,
    InstallmentPlanFromJSONTyped,
    InstallmentPlanToJSON,
    InstallmentPlanResponse,
    InstallmentPlanResponseFromJSON,
    InstallmentPlanResponseFromJSONTyped,
    InstallmentPlanResponseToJSON,
    ResponseHeader,
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
    TransactionResult,
    TransactionResultFromJSON,
    TransactionResultFromJSONTyped,
    TransactionResultToJSON,
    UpdateInstallmentsPlanResponseAllOf,
    UpdateInstallmentsPlanResponseAllOfFromJSON,
    UpdateInstallmentsPlanResponseAllOfFromJSONTyped,
    UpdateInstallmentsPlanResponseAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateInstallmentsPlanResponse
 */
export interface UpdateInstallmentsPlanResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof UpdateInstallmentsPlanResponse
     */
    responseHeader?: ResponseHeader;
    /**
     * 
     * @type {InstallmentPlan}
     * @memberof UpdateInstallmentsPlanResponse
     */
    installmentPlan?: InstallmentPlan;
    /**
     * 
     * @type {Array<TransactionResult>}
     * @memberof UpdateInstallmentsPlanResponse
     */
    gatewayTransactionResults?: Array<TransactionResult>;
    /**
     * 
     * @type {string}
     * @memberof UpdateInstallmentsPlanResponse
     */
    approvalUrl?: string;
}

export function UpdateInstallmentsPlanResponseFromJSON(json: any): UpdateInstallmentsPlanResponse {
    return UpdateInstallmentsPlanResponseFromJSONTyped(json, false);
}

export function UpdateInstallmentsPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInstallmentsPlanResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'installmentPlan': !exists(json, 'InstallmentPlan') ? undefined : InstallmentPlanFromJSON(json['InstallmentPlan']),
        'gatewayTransactionResults': !exists(json, 'GatewayTransactionResults') ? undefined : ((json['GatewayTransactionResults'] as Array<any>).map(TransactionResultFromJSON)),
        'approvalUrl': !exists(json, 'ApprovalUrl') ? undefined : json['ApprovalUrl'],
    };
}

export function UpdateInstallmentsPlanResponseToJSON(value?: UpdateInstallmentsPlanResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.responseHeader),
        'InstallmentPlan': InstallmentPlanToJSON(value.installmentPlan),
        'GatewayTransactionResults': value.gatewayTransactionResults === undefined ? undefined : ((value.gatewayTransactionResults as Array<any>).map(TransactionResultToJSON)),
        'ApprovalUrl': value.approvalUrl,
    };
}


