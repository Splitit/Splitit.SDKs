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
import { GetResourcesRequest, GetResourcesResponse, SystemTextCategory } from '../models';
export interface InfrastructureGetResourcesRequest {
    request: GetResourcesRequest;
}
export interface InfrastructureGetResources2Request {
    apiKey?: string | null;
    sessionId?: string | null;
    merchantCode?: string | null;
    cultureName?: string | null;
    touchPointCode?: string | null;
    systemTextCategories?: Array<SystemTextCategory> | null;
}
/**
 * no description
 */
export declare class InfrastructureApi extends runtime.BaseAPI {
    /**
     */
    infrastructureGetResourcesRaw(requestParameters: InfrastructureGetResourcesRequest): Promise<runtime.ApiResponse<GetResourcesResponse>>;
    /**
     */
    infrastructureGetResources(requestParameters: InfrastructureGetResourcesRequest): Promise<GetResourcesResponse>;
    /**
     */
    infrastructureGetResources2Raw(requestParameters: InfrastructureGetResources2Request): Promise<runtime.ApiResponse<GetResourcesResponse>>;
    /**
     */
    infrastructureGetResources2(requestParameters: InfrastructureGetResources2Request): Promise<GetResourcesResponse>;
}
