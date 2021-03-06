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
import { AddressData, CardData, CartData, ConsumerData, EventsEndpoints, PaymentWizardData, PlanData, RedirectUrls } from './';
/**
 *
 * @export
 * @interface InitiateInstallmentPlanRequest
 */
export interface InitiateInstallmentPlanRequest {
    /**
     *
     * @type {PlanData}
     * @memberof InitiateInstallmentPlanRequest
     */
    planData?: PlanData;
    /**
     *
     * @type {CartData}
     * @memberof InitiateInstallmentPlanRequest
     */
    cartData?: CartData;
    /**
     *
     * @type {ConsumerData}
     * @memberof InitiateInstallmentPlanRequest
     */
    consumerData?: ConsumerData;
    /**
     *
     * @type {AddressData}
     * @memberof InitiateInstallmentPlanRequest
     */
    billingAddress?: AddressData;
    /**
     *
     * @type {string}
     * @memberof InitiateInstallmentPlanRequest
     */
    installmentPlanNumber?: string;
    /**
     *
     * @type {PaymentWizardData}
     * @memberof InitiateInstallmentPlanRequest
     */
    paymentWizardData?: PaymentWizardData;
    /**
     *
     * @type {RedirectUrls}
     * @memberof InitiateInstallmentPlanRequest
     */
    redirectUrls?: RedirectUrls;
    /**
     *
     * @type {EventsEndpoints}
     * @memberof InitiateInstallmentPlanRequest
     */
    eventsEndpoints?: EventsEndpoints;
    /**
     *
     * @type {CardData}
     * @memberof InitiateInstallmentPlanRequest
     */
    creditCardDetails?: CardData;
}
export declare function InitiateInstallmentPlanRequestFromJSON(json: any): InitiateInstallmentPlanRequest;
export declare function InitiateInstallmentPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiateInstallmentPlanRequest;
export declare function InitiateInstallmentPlanRequestToJSON(value?: InitiateInstallmentPlanRequest | null): any;
