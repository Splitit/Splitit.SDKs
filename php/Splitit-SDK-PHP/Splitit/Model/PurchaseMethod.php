<?php
/**
 * PurchaseMethod
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
 * PurchaseMethod Class Doc Comment
 *
 * @category Class
 * @description 
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PurchaseMethod
{
    /**
     * Possible values of this enum
     */
    const IN_STORE = 'InStore';
    const PHONE_ORDER = 'PhoneOrder';
    const E_COMMERCE = 'ECommerce';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::IN_STORE,
            self::PHONE_ORDER,
            self::E_COMMERCE,
        ];
    }
}


