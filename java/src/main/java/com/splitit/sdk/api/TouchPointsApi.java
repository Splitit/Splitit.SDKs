/*
 * splitit-web-api-public-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.splitit.sdk.api;

import com.splitit.ApiCallback;
import com.splitit.ApiClient;
import com.splitit.ApiException;
import com.splitit.ApiResponse;
import com.splitit.Configuration;
import com.splitit.Pair;
import com.splitit.ProgressRequestBody;
import com.splitit.ProgressResponseBody;
import com.splitit.sdk.model.RequestWithHeader;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.splitit.sdk.model.FlexFieldsDataResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TouchPointsApi {
    private ApiClient apiClient;
    private String sessionId;
    private String culture;

    public TouchPointsApi() {
        this(Configuration.production());
    }

    public TouchPointsApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public TouchPointsApi withSessionId(String sessionId){
        this.sessionId = sessionId;
        return this;
    }

    public void setCulture(String culture) {
        this.culture = culture;
    }

    /**
     * Build call for touchPointsFlexFieldsData
     * @param apiKey  (optional)
     * @param requestedNumberOfInstallments  (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call touchPointsFlexFieldsDataCall(String apiKey, String requestedNumberOfInstallments, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/TouchPoints/SetupData/FlexFieldsData";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (apiKey != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("apiKey", apiKey));
        if (requestedNumberOfInstallments != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("requestedNumberOfInstallments", requestedNumberOfInstallments));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "text/plain", "application/json", "text/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call touchPointsFlexFieldsDataValidateBeforeCall(String apiKey, String requestedNumberOfInstallments, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = touchPointsFlexFieldsDataCall(apiKey, requestedNumberOfInstallments, progressListener, progressRequestListener);
        return call;

    }

    /**
     * 
     * 
     * @param apiKey  (optional)
     * @param requestedNumberOfInstallments  (optional)
     * @return FlexFieldsDataResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FlexFieldsDataResponse touchPointsFlexFieldsData(String apiKey, String requestedNumberOfInstallments) throws ApiException {
        ApiResponse<FlexFieldsDataResponse> resp = touchPointsFlexFieldsDataWithHttpInfo(apiKey, requestedNumberOfInstallments);
        return resp.getData();
    }

    /**
     * 
     * 
     * @param apiKey  (optional)
     * @param requestedNumberOfInstallments  (optional)
     * @return ApiResponse&lt;FlexFieldsDataResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FlexFieldsDataResponse> touchPointsFlexFieldsDataWithHttpInfo(String apiKey, String requestedNumberOfInstallments) throws ApiException {
        com.squareup.okhttp.Call call = touchPointsFlexFieldsDataValidateBeforeCall(apiKey, requestedNumberOfInstallments, null, null);
        Type localVarReturnType = new TypeToken<FlexFieldsDataResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * 
     * @param apiKey  (optional)
     * @param requestedNumberOfInstallments  (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call touchPointsFlexFieldsDataAsync(String apiKey, String requestedNumberOfInstallments, final ApiCallback<FlexFieldsDataResponse> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = touchPointsFlexFieldsDataValidateBeforeCall(apiKey, requestedNumberOfInstallments, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FlexFieldsDataResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}