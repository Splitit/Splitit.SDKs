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
/**
 *
 * @export
 * @enum {string}
 */
export declare enum InstallmentPlanActivityStatus {
    None = "None",
    All = "All",
    Processed = "Processed",
    Planned = "Planned"
}
export declare function InstallmentPlanActivityStatusFromJSON(json: any): InstallmentPlanActivityStatus;
export declare function InstallmentPlanActivityStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanActivityStatus;
export declare function InstallmentPlanActivityStatusToJSON(value?: InstallmentPlanActivityStatus | null): any;
