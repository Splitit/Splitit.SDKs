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
import * as runtime from '../runtime';
import { ApproveInstallmentPlanRequest, CancelInstallmentPlanRequest, CreateInstallmentPlanRequest, CreateInstallmentsPlanResponse, Get3DSecureParametersRequest, Get3DSecureParametersResponse, GetInstallmentsPlanExtendedResponse, GetInstallmentsPlanResponse, GetInstallmentsPlanSearchCriteriaRequest, InitiateInstallmentPlanRequest, InitiateInstallmentsPlanResponse, InstallmentPlanResponse, RefundInstallmentPlanResponse, RefundPlanRequest, StartInstallmentsRequest, UpdateInstallmentPlanRequest, UpdateInstallmentsPlanResponse, VerifyPaymentRequest, VerifyPaymentResponse } from '../models';
export interface InstallmentPlanApproveRequest {
    request: ApproveInstallmentPlanRequest;
}
export interface InstallmentPlanCancelRequest {
    request: CancelInstallmentPlanRequest;
}
export interface InstallmentPlanCreateRequest {
    request: CreateInstallmentPlanRequest;
}
export interface InstallmentPlanGetRequest {
    request: GetInstallmentsPlanSearchCriteriaRequest;
}
export interface InstallmentPlanGet3DSecureParametersRequest {
    request: Get3DSecureParametersRequest;
}
export interface InstallmentPlanGetExtendedRequest {
    request: GetInstallmentsPlanSearchCriteriaRequest;
}
export interface InstallmentPlanInitiateRequest {
    request: InitiateInstallmentPlanRequest;
}
export interface InstallmentPlanRefundRequest {
    request: RefundPlanRequest;
}
export interface InstallmentPlanStartInstallmentsRequest {
    request: StartInstallmentsRequest;
}
export interface InstallmentPlanUpdateRequest {
    request: UpdateInstallmentPlanRequest;
}
export interface InstallmentPlanVerifyPaymentRequest {
    request: VerifyPaymentRequest;
}
/**
 * no description
 */
export declare class InstallmentPlanApi extends runtime.BaseAPI {
    /**
     */
    installmentPlanApproveRaw(requestParameters: InstallmentPlanApproveRequest): Promise<runtime.ApiResponse<InstallmentPlanResponse>>;
    /**
     */
    installmentPlanApprove(requestParameters: InstallmentPlanApproveRequest): Promise<InstallmentPlanResponse>;
    /**
     */
    installmentPlanCancelRaw(requestParameters: InstallmentPlanCancelRequest): Promise<runtime.ApiResponse<InstallmentPlanResponse>>;
    /**
     */
    installmentPlanCancel(requestParameters: InstallmentPlanCancelRequest): Promise<InstallmentPlanResponse>;
    /**
     */
    installmentPlanCreateRaw(requestParameters: InstallmentPlanCreateRequest): Promise<runtime.ApiResponse<CreateInstallmentsPlanResponse>>;
    /**
     */
    installmentPlanCreate(requestParameters: InstallmentPlanCreateRequest): Promise<CreateInstallmentsPlanResponse>;
    /**
     */
    installmentPlanGetRaw(requestParameters: InstallmentPlanGetRequest): Promise<runtime.ApiResponse<GetInstallmentsPlanResponse>>;
    /**
     */
    installmentPlanGet(requestParameters: InstallmentPlanGetRequest): Promise<GetInstallmentsPlanResponse>;
    /**
     */
    installmentPlanGet3DSecureParametersRaw(requestParameters: InstallmentPlanGet3DSecureParametersRequest): Promise<runtime.ApiResponse<Get3DSecureParametersResponse>>;
    /**
     */
    installmentPlanGet3DSecureParameters(requestParameters: InstallmentPlanGet3DSecureParametersRequest): Promise<Get3DSecureParametersResponse>;
    /**
     */
    installmentPlanGetExtendedRaw(requestParameters: InstallmentPlanGetExtendedRequest): Promise<runtime.ApiResponse<GetInstallmentsPlanExtendedResponse>>;
    /**
     */
    installmentPlanGetExtended(requestParameters: InstallmentPlanGetExtendedRequest): Promise<GetInstallmentsPlanExtendedResponse>;
    /**
     */
    installmentPlanInitiateRaw(requestParameters: InstallmentPlanInitiateRequest): Promise<runtime.ApiResponse<InitiateInstallmentsPlanResponse>>;
    /**
     */
    installmentPlanInitiate(requestParameters: InstallmentPlanInitiateRequest): Promise<InitiateInstallmentsPlanResponse>;
    /**
     */
    installmentPlanRefundRaw(requestParameters: InstallmentPlanRefundRequest): Promise<runtime.ApiResponse<RefundInstallmentPlanResponse>>;
    /**
     */
    installmentPlanRefund(requestParameters: InstallmentPlanRefundRequest): Promise<RefundInstallmentPlanResponse>;
    /**
     */
    installmentPlanStartInstallmentsRaw(requestParameters: InstallmentPlanStartInstallmentsRequest): Promise<runtime.ApiResponse<InstallmentPlanResponse>>;
    /**
     */
    installmentPlanStartInstallments(requestParameters: InstallmentPlanStartInstallmentsRequest): Promise<InstallmentPlanResponse>;
    /**
     */
    installmentPlanUpdateRaw(requestParameters: InstallmentPlanUpdateRequest): Promise<runtime.ApiResponse<UpdateInstallmentsPlanResponse>>;
    /**
     */
    installmentPlanUpdate(requestParameters: InstallmentPlanUpdateRequest): Promise<UpdateInstallmentsPlanResponse>;
    /**
     */
    installmentPlanVerifyPaymentRaw(requestParameters: InstallmentPlanVerifyPaymentRequest): Promise<runtime.ApiResponse<VerifyPaymentResponse>>;
    /**
     */
    installmentPlanVerifyPayment(requestParameters: InstallmentPlanVerifyPaymentRequest): Promise<VerifyPaymentResponse>;
}
