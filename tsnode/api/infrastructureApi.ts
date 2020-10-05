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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { GetResourcesRequest } from '../model/getResourcesRequest';
import { GetResourcesResponse } from '../model/getResourcesResponse';
import { SystemTextCategory } from '../model/systemTextCategory';

import { ObjectSerializer, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';
import { Configuration } from '../runtime';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class InfrastructureApi {
    protected _config: Configuration;
    protected _sessionId?: string;
    protected _culture?: string;
    protected _defaultHeaders : any = {};

    protected interceptors: Interceptor[] = [];

    constructor(config: Configuration, sessionId?: string) {
        this._config = config;
        this._defaultHeaders = {
            "Splitit-SDK": "NodeJS-1.5.13"
        };
        this._sessionId = sessionId;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._config.basePath;
    }

    public setCulture(culture){
        this._culture = culture;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @param request 
     */
    public async infrastructureGetResources (request: GetResourcesRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetResourcesResponse;  }> {
        const localVarPath = this.basePath + '/api/Infrastructure/GetResources';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling infrastructureGetResources.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: false,
            json: true,
            body: ObjectSerializer.serialize(request, "GetResourcesRequest")
        };

        if (this._config.touchPoint || this._sessionId){
            localVarRequestOptions.body.requestHeader = {};
            if (this._config.touchPoint){
                localVarRequestOptions.body.requestHeader.touchPoint = this._config.touchPoint;
            }

            if (this._sessionId){
                localVarRequestOptions.body.requestHeader.sessionId = this._sessionId;
                localVarRequestOptions.body.requestHeader.apiKey = this._config.apiKey;
            }

            if (this._culture){
                localVarRequestOptions.body.requestHeader.cultureName = this._culture;
            }
        }

        let interceptorPromise = Promise.resolve();
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetResourcesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetResourcesResponse");

                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            if (body && body.responseHeader && !body.responseHeader.succeeded){
                                reject(body.responseHeader);
                            } else {
                                resolve({ response: response, body: body });
                            }                            
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param apiKey 
     * @param sessionId 
     * @param merchantCode 
     * @param cultureName 
     * @param touchPointCode 
     * @param systemTextCategories 
     */
    public async infrastructureGetResources2 (apiKey?: string, sessionId?: string, merchantCode?: string, cultureName?: string, touchPointCode?: string, systemTextCategories?: Array<SystemTextCategory>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetResourcesResponse;  }> {
        const localVarPath = this.basePath + '/api/Infrastructure/GetResources';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (apiKey !== undefined) {
            localVarQueryParameters['apiKey'] = ObjectSerializer.serialize(apiKey, "string");
        }

        if (sessionId !== undefined) {
            localVarQueryParameters['sessionId'] = ObjectSerializer.serialize(sessionId, "string");
        }

        if (merchantCode !== undefined) {
            localVarQueryParameters['merchantCode'] = ObjectSerializer.serialize(merchantCode, "string");
        }

        if (cultureName !== undefined) {
            localVarQueryParameters['cultureName'] = ObjectSerializer.serialize(cultureName, "string");
        }

        if (touchPointCode !== undefined) {
            localVarQueryParameters['touchPointCode'] = ObjectSerializer.serialize(touchPointCode, "string");
        }

        if (systemTextCategories !== undefined) {
            localVarQueryParameters['systemTextCategories'] = ObjectSerializer.serialize(systemTextCategories, "Array<SystemTextCategory>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: false,
            json: true,
        };

        if (this._config.touchPoint || this._sessionId){
            localVarRequestOptions.body.requestHeader = {};
            if (this._config.touchPoint){
                localVarRequestOptions.body.requestHeader.touchPoint = this._config.touchPoint;
            }

            if (this._sessionId){
                localVarRequestOptions.body.requestHeader.sessionId = this._sessionId;
                localVarRequestOptions.body.requestHeader.apiKey = this._config.apiKey;
            }

            if (this._culture){
                localVarRequestOptions.body.requestHeader.cultureName = this._culture;
            }
        }

        let interceptorPromise = Promise.resolve();
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetResourcesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetResourcesResponse");

                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            if (body && body.responseHeader && !body.responseHeader.succeeded){
                                reject(body.responseHeader);
                            } else {
                                resolve({ response: response, body: body });
                            }                            
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
