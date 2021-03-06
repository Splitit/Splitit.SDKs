/* 
 * splitit-web-api-public-sdk
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Splitit.SDK.Client.Client;
using Splitit.SDK.Client.Model;

namespace Splitit.SDK.Client.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IInfrastructureApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="request"></param>
        /// <returns>GetResourcesResponse</returns>
        GetResourcesResponse InfrastructureGetResources (GetResourcesRequest request);
       
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="apiKey"> (optional)</param>
        /// <param name="sessionId"> (optional)</param>
        /// <param name="merchantCode"> (optional)</param>
        /// <param name="cultureName"> (optional)</param>
        /// <param name="touchPointCode"> (optional)</param>
        /// <param name="systemTextCategories"> (optional)</param>
        /// <returns>GetResourcesResponse</returns>
        GetResourcesResponse InfrastructureGetResources2 (string apiKey = null, string sessionId = null, string merchantCode = null, string cultureName = null, string touchPointCode = null, List<SystemTextCategory> systemTextCategories = null);
       
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="request"></param>
        /// <returns>Task of GetResourcesResponse</returns>
        System.Threading.Tasks.Task<GetResourcesResponse> InfrastructureGetResourcesAsync (GetResourcesRequest request);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="request"></param>
        /// <returns>Task of ApiResponse (GetResourcesResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetResourcesResponse>> InfrastructureGetResourcesAsyncWithHttpInfo (GetResourcesRequest request);
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="apiKey"> (optional)</param>
        /// <param name="sessionId"> (optional)</param>
        /// <param name="merchantCode"> (optional)</param>
        /// <param name="cultureName"> (optional)</param>
        /// <param name="touchPointCode"> (optional)</param>
        /// <param name="systemTextCategories"> (optional)</param>
        /// <returns>Task of GetResourcesResponse</returns>
        System.Threading.Tasks.Task<GetResourcesResponse> InfrastructureGetResources2Async (string apiKey = null, string sessionId = null, string merchantCode = null, string cultureName = null, string touchPointCode = null, List<SystemTextCategory> systemTextCategories = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="apiKey"> (optional)</param>
        /// <param name="sessionId"> (optional)</param>
        /// <param name="merchantCode"> (optional)</param>
        /// <param name="cultureName"> (optional)</param>
        /// <param name="touchPointCode"> (optional)</param>
        /// <param name="systemTextCategories"> (optional)</param>
        /// <returns>Task of ApiResponse (GetResourcesResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetResourcesResponse>> InfrastructureGetResources2AsyncWithHttpInfo (string apiKey = null, string sessionId = null, string merchantCode = null, string cultureName = null, string touchPointCode = null, List<SystemTextCategory> systemTextCategories = null);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class InfrastructureApi : IInfrastructureApi
    {
		private string _apiKey;
		private string _sessionId;

        public string Culture { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="InfrastructureApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public InfrastructureApi(Splitit.SDK.Client.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Splitit.SDK.Client.Client.Configuration.Default;
            else
                this.Configuration = configuration;

			this._apiKey = this.Configuration.ApiKey;
        }
		
		/// <summary>
        /// Initializes a new instance of the <see cref="InfrastructureApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public InfrastructureApi(
			Splitit.SDK.Client.Client.Configuration configuration = null,
			string sessionId = null)
			: this(configuration)
        {
			this._sessionId = sessionId;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.BasePath.ToString();
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Splitit.SDK.Client.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="request"></param>
        /// <returns>GetResourcesResponse</returns>
        public GetResourcesResponse InfrastructureGetResources (GetResourcesRequest request)
        {
            return System.Threading.Tasks.Task.Run(async () => await InfrastructureGetResourcesAsync(request)).ConfigureAwait(true).GetAwaiter().GetResult();
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="request"></param>
        /// <returns>Task of GetResourcesResponse</returns>
        public async System.Threading.Tasks.Task<GetResourcesResponse> InfrastructureGetResourcesAsync (GetResourcesRequest request)
        {
             ApiResponse<GetResourcesResponse> localVarResponse = await InfrastructureGetResourcesAsyncWithHttpInfo(request);
             localVarResponse.Validate();
             return localVarResponse.Data;

        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="request"></param>
        /// <returns>Task of ApiResponse (GetResourcesResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<GetResourcesResponse>> InfrastructureGetResourcesAsyncWithHttpInfo (GetResourcesRequest request)
        {
            // verify the required parameter 'request' is set
            if (request == null)
                throw new ApiException(400, "Missing required parameter 'request' when calling InfrastructureApi->InfrastructureGetResources");

            var localVarPath = "./api/Infrastructure/GetResources";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json-patch+json", 
                "application/json", 
                "text/json", 
                "application/_*+json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "text/plain",
                "application/json",
                "text/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (request != null && request.GetType() != typeof(byte[]))
            {
				this.Configuration.ApiClient.InjectAuthIfNotExists(apiKey: this._apiKey, sessionId: this._sessionId, culture: this.Culture, request: request);
            }

            localVarPostBody = request;



            // make the HTTP request
            var localVarResponse = await this.Configuration.ApiClient.CallApiAsync<GetResourcesResponse>(localVarPath,
                System.Net.Http.HttpMethod.Post, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, 
                localVarPathParams, localVarHttpContentType);

          
            return localVarResponse;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="apiKey"> (optional)</param>
        /// <param name="sessionId"> (optional)</param>
        /// <param name="merchantCode"> (optional)</param>
        /// <param name="cultureName"> (optional)</param>
        /// <param name="touchPointCode"> (optional)</param>
        /// <param name="systemTextCategories"> (optional)</param>
        /// <returns>GetResourcesResponse</returns>
        public GetResourcesResponse InfrastructureGetResources2 (string apiKey = null, string sessionId = null, string merchantCode = null, string cultureName = null, string touchPointCode = null, List<SystemTextCategory> systemTextCategories = null)
        {
            return System.Threading.Tasks.Task.Run(async () => await InfrastructureGetResources2Async(apiKey, sessionId, merchantCode, cultureName, touchPointCode, systemTextCategories)).ConfigureAwait(true).GetAwaiter().GetResult();
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="apiKey"> (optional)</param>
        /// <param name="sessionId"> (optional)</param>
        /// <param name="merchantCode"> (optional)</param>
        /// <param name="cultureName"> (optional)</param>
        /// <param name="touchPointCode"> (optional)</param>
        /// <param name="systemTextCategories"> (optional)</param>
        /// <returns>Task of GetResourcesResponse</returns>
        public async System.Threading.Tasks.Task<GetResourcesResponse> InfrastructureGetResources2Async (string apiKey = null, string sessionId = null, string merchantCode = null, string cultureName = null, string touchPointCode = null, List<SystemTextCategory> systemTextCategories = null)
        {
             ApiResponse<GetResourcesResponse> localVarResponse = await InfrastructureGetResources2AsyncWithHttpInfo(apiKey, sessionId, merchantCode, cultureName, touchPointCode, systemTextCategories);
             localVarResponse.Validate();
             return localVarResponse.Data;

        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Splitit.SDK.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="apiKey"> (optional)</param>
        /// <param name="sessionId"> (optional)</param>
        /// <param name="merchantCode"> (optional)</param>
        /// <param name="cultureName"> (optional)</param>
        /// <param name="touchPointCode"> (optional)</param>
        /// <param name="systemTextCategories"> (optional)</param>
        /// <returns>Task of ApiResponse (GetResourcesResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<GetResourcesResponse>> InfrastructureGetResources2AsyncWithHttpInfo (string apiKey = null, string sessionId = null, string merchantCode = null, string cultureName = null, string touchPointCode = null, List<SystemTextCategory> systemTextCategories = null)
        {

            var localVarPath = "./api/Infrastructure/GetResources";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "text/plain",
                "application/json",
                "text/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (apiKey != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "apiKey", apiKey)); // query parameter
            if (sessionId != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "sessionId", sessionId)); // query parameter
            if (merchantCode != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "merchantCode", merchantCode)); // query parameter
            if (cultureName != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "cultureName", cultureName)); // query parameter
            if (touchPointCode != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "touchPointCode", touchPointCode)); // query parameter
            if (systemTextCategories != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("multi", "systemTextCategories", systemTextCategories)); // query parameter


            // make the HTTP request
            var localVarResponse = await this.Configuration.ApiClient.CallApiAsync<GetResourcesResponse>(localVarPath,
                System.Net.Http.HttpMethod.Get, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, 
                localVarPathParams, localVarHttpContentType);

          
            return localVarResponse;
        }

    }
}
