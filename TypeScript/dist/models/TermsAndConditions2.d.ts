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
 * @interface TermsAndConditions2
 */
export interface TermsAndConditions2 {
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    agreement?: string;
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    importantNote?: string;
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    fullContent?: string;
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    privacyPolicy?: string;
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    whatYouNeedToKnowAuthHoldDefine?: string;
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    whatYouNeedToKnowBudgetManagement?: string;
    /**
     *
     * @type {string}
     * @memberof TermsAndConditions2
     */
    whatYouNeedToKnowCardTypeDetails?: string;
}
export declare function TermsAndConditions2FromJSON(json: any): TermsAndConditions2;
export declare function TermsAndConditions2FromJSONTyped(json: any, ignoreDiscriminator: boolean): TermsAndConditions2;
export declare function TermsAndConditions2ToJSON(value?: TermsAndConditions2 | null): any;