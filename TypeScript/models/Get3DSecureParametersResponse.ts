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
    ResponseHeader,
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './';

/**
 * 
 * @export
 * @interface Get3DSecureParametersResponse
 */
export interface Get3DSecureParametersResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof Get3DSecureParametersResponse
     */
    responseHeader?: ResponseHeader;
    /**
     * 
     * @type {string}
     * @memberof Get3DSecureParametersResponse
     */
    issuerRedirectUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof Get3DSecureParametersResponse
     */
    paReq?: string;
    /**
     * 
     * @type {string}
     * @memberof Get3DSecureParametersResponse
     */
    md?: string;
    /**
     * 
     * @type {string}
     * @memberof Get3DSecureParametersResponse
     */
    termUrl?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Get3DSecureParametersResponse
     */
    threeDSecureParams?: { [key: string]: string; };
}

export function Get3DSecureParametersResponseFromJSON(json: any): Get3DSecureParametersResponse {
    return Get3DSecureParametersResponseFromJSONTyped(json, false);
}

export function Get3DSecureParametersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get3DSecureParametersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'issuerRedirectUrl': !exists(json, 'IssuerRedirectUrl') ? undefined : json['IssuerRedirectUrl'],
        'paReq': !exists(json, 'PaReq') ? undefined : json['PaReq'],
        'md': !exists(json, 'Md') ? undefined : json['Md'],
        'termUrl': !exists(json, 'TermUrl') ? undefined : json['TermUrl'],
        'threeDSecureParams': !exists(json, 'ThreeDSecureParams') ? undefined : json['ThreeDSecureParams'],
    };
}

export function Get3DSecureParametersResponseToJSON(value?: Get3DSecureParametersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.responseHeader),
        'IssuerRedirectUrl': value.issuerRedirectUrl,
        'PaReq': value.paReq,
        'Md': value.md,
        'TermUrl': value.termUrl,
        'ThreeDSecureParams': value.threeDSecureParams,
    };
}


