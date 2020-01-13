<?php
/**
 * PlanStrategy
 *
 * PHP version 5
 *
 * @category Class
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * splitit-web-api-public-sdk
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.11
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace SplititSdkClient\Model;
use \SplititSdkClient\ObjectSerializer;

/**
 * PlanStrategy Class Doc Comment
 *
 * @category Class
 * @description 
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PlanStrategy
{
    /**
     * Possible values of this enum
     */
    const SECURED_PLAN = 'SecuredPlan';
    const NON_SECURED_PLAN = 'NonSecuredPlan';
    const SECURED_PLAN_CAPTURE_EXISTING_SECURITY_AUTH = 'SecuredPlanCaptureExistingSecurityAuth';
    const SECURED_PLAN3 = 'SecuredPlan3';
    const SINGLE_PAYMENT = 'SinglePayment';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::SECURED_PLAN,
            self::NON_SECURED_PLAN,
            self::SECURED_PLAN_CAPTURE_EXISTING_SECURITY_AUTH,
            self::SECURED_PLAN3,
            self::SINGLE_PAYMENT,
        ];
    }
}


