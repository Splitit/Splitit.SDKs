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
import { LoginRequest } from '../model/loginRequest';
import { LoginResponse } from '../model/loginResponse';

import { ObjectSerializer, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';
import { Configuration } from '../runtime';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class LoginApi {
    protected _config: Configuration;
    protected _sessionId?: string;
    protected _culture?: string;
    protected _defaultHeaders : any = {};

    protected interceptors: Interceptor[] = [];

    constructor(config: Configuration, sessionId?: string) {
        this._config = config;
        this._defaultHeaders = {
            "Splitit-SDK": "NodeJS-1.6.0"
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
    public async loginPost (request: LoginRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LoginResponse;  }> {
        const localVarPath = this.basePath + '/api/login';
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
            throw new Error('Required parameter request was null or undefined when calling loginPost.');
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
            body: ObjectSerializer.serialize(request, "LoginRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: LoginResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "LoginResponse");

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
