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
import { InstallmentPlan, Money, ResponseHeader, TransactionResult } from './';
/**
 *
 * @export
 * @interface RefundInstallmentPlanResponse
 */
export interface RefundInstallmentPlanResponse {
    /**
     *
     * @type {ResponseHeader}
     * @memberof RefundInstallmentPlanResponse
     */
    responseHeader?: ResponseHeader;
    /**
     *
     * @type {InstallmentPlan}
     * @memberof RefundInstallmentPlanResponse
     */
    installmentPlan?: InstallmentPlan;
    /**
     *
     * @type {Array<TransactionResult>}
     * @memberof RefundInstallmentPlanResponse
     */
    gatewayTransactionResults?: Array<TransactionResult>;
    /**
     *
     * @type {Money}
     * @memberof RefundInstallmentPlanResponse
     */
    currentRefundAmount?: Money;
}
export declare function RefundInstallmentPlanResponseFromJSON(json: any): RefundInstallmentPlanResponse;
export declare function RefundInstallmentPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundInstallmentPlanResponse;
export declare function RefundInstallmentPlanResponseToJSON(value?: RefundInstallmentPlanResponse | null): any;
