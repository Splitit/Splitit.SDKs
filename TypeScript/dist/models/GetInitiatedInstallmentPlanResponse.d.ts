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
import { AddressData, CartData, ConsumerData, Merchant, PaymentWizardDataResponse, PlanData, ResponseHeader } from './';
/**
 *
 * @export
 * @interface GetInitiatedInstallmentPlanResponse
 */
export interface GetInitiatedInstallmentPlanResponse {
    /**
     *
     * @type {ResponseHeader}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    responseHeader?: ResponseHeader;
    /**
     *
     * @type {string}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    installmentPlanNumber?: string;
    /**
     *
     * @type {PlanData}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    planData?: PlanData;
    /**
     *
     * @type {CartData}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    cartData?: CartData;
    /**
     *
     * @type {ConsumerData}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    consumerData?: ConsumerData;
    /**
     *
     * @type {Merchant}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    merchantData?: Merchant;
    /**
     *
     * @type {AddressData}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    billingAddress?: AddressData;
    /**
     *
     * @type {PaymentWizardDataResponse}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    paymentWizardDataResponse?: PaymentWizardDataResponse;
    /**
     *
     * @type {Error}
     * @memberof GetInitiatedInstallmentPlanResponse
     */
    errorIndicator?: Error;
}
export declare function GetInitiatedInstallmentPlanResponseFromJSON(json: any): GetInitiatedInstallmentPlanResponse;
export declare function GetInitiatedInstallmentPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInitiatedInstallmentPlanResponse;
export declare function GetInitiatedInstallmentPlanResponseToJSON(value?: GetInitiatedInstallmentPlanResponse | null): any;