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
import { InstallmentPlanQueryCriteria, PagingRequestHeader, RelationsLoad } from './';
/**
 *
 * @export
 * @interface GetInstallmentsPlanSearchCriteriaRequest
 */
export interface GetInstallmentsPlanSearchCriteriaRequest {
    /**
     *
     * @type {InstallmentPlanQueryCriteria}
     * @memberof GetInstallmentsPlanSearchCriteriaRequest
     */
    queryCriteria?: InstallmentPlanQueryCriteria;
    /**
     *
     * @type {RelationsLoad}
     * @memberof GetInstallmentsPlanSearchCriteriaRequest
     */
    loadRelated?: RelationsLoad;
    /**
     *
     * @type {PagingRequestHeader}
     * @memberof GetInstallmentsPlanSearchCriteriaRequest
     */
    pagingRequest?: PagingRequestHeader;
}
export declare function GetInstallmentsPlanSearchCriteriaRequestFromJSON(json: any): GetInstallmentsPlanSearchCriteriaRequest;
export declare function GetInstallmentsPlanSearchCriteriaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInstallmentsPlanSearchCriteriaRequest;
export declare function GetInstallmentsPlanSearchCriteriaRequestToJSON(value?: GetInstallmentsPlanSearchCriteriaRequest | null): any;
