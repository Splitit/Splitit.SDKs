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
import { User } from './';
/**
 *
 * @export
 * @interface ConsumerData
 */
export interface ConsumerData extends User {
}
export declare function ConsumerDataFromJSON(json: any): ConsumerData;
export declare function ConsumerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsumerData;
export declare function ConsumerDataToJSON(value?: ConsumerData | null): any;
