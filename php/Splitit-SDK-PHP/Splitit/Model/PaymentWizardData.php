<?php
/**
 * PaymentWizardData
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

use \ArrayAccess;
use \SplititSdkClient\ObjectSerializer;

/**
 * PaymentWizardData Class Doc Comment
 *
 * @category Class
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PaymentWizardData implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'PaymentWizardData';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'requested_number_of_installments' => 'string',
        'success_exit_url' => 'string',
        'error_exit_url' => 'string',
        'cancel_exit_url' => 'string',
        'success_async_url' => 'string',
        'view_name' => 'string',
        'is_opened_in_iframe' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'requested_number_of_installments' => null,
        'success_exit_url' => null,
        'error_exit_url' => null,
        'cancel_exit_url' => null,
        'success_async_url' => null,
        'view_name' => null,
        'is_opened_in_iframe' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'requested_number_of_installments' => 'RequestedNumberOfInstallments',
        'success_exit_url' => 'SuccessExitURL',
        'error_exit_url' => 'ErrorExitURL',
        'cancel_exit_url' => 'CancelExitURL',
        'success_async_url' => 'SuccessAsyncUrl',
        'view_name' => 'ViewName',
        'is_opened_in_iframe' => 'IsOpenedInIframe'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'requested_number_of_installments' => 'setRequestedNumberOfInstallments',
        'success_exit_url' => 'setSuccessExitUrl',
        'error_exit_url' => 'setErrorExitUrl',
        'cancel_exit_url' => 'setCancelExitUrl',
        'success_async_url' => 'setSuccessAsyncUrl',
        'view_name' => 'setViewName',
        'is_opened_in_iframe' => 'setIsOpenedInIframe'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'requested_number_of_installments' => 'getRequestedNumberOfInstallments',
        'success_exit_url' => 'getSuccessExitUrl',
        'error_exit_url' => 'getErrorExitUrl',
        'cancel_exit_url' => 'getCancelExitUrl',
        'success_async_url' => 'getSuccessAsyncUrl',
        'view_name' => 'getViewName',
        'is_opened_in_iframe' => 'getIsOpenedInIframe'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['requested_number_of_installments'] = isset($data['requested_number_of_installments']) ? $data['requested_number_of_installments'] : null;
        $this->container['success_exit_url'] = isset($data['success_exit_url']) ? $data['success_exit_url'] : null;
        $this->container['error_exit_url'] = isset($data['error_exit_url']) ? $data['error_exit_url'] : null;
        $this->container['cancel_exit_url'] = isset($data['cancel_exit_url']) ? $data['cancel_exit_url'] : null;
        $this->container['success_async_url'] = isset($data['success_async_url']) ? $data['success_async_url'] : null;
        $this->container['view_name'] = isset($data['view_name']) ? $data['view_name'] : null;
        $this->container['is_opened_in_iframe'] = isset($data['is_opened_in_iframe']) ? $data['is_opened_in_iframe'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['is_opened_in_iframe'] === null) {
            $invalidProperties[] = "'is_opened_in_iframe' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets requested_number_of_installments
     *
     * @return string
     */
    public function getRequestedNumberOfInstallments()
    {
        return $this->container['requested_number_of_installments'];
    }

    /**
     * Sets requested_number_of_installments
     *
     * @param string $requested_number_of_installments requested_number_of_installments
     *
     * @return $this
     */
    public function setRequestedNumberOfInstallments($requested_number_of_installments)
    {
        $this->container['requested_number_of_installments'] = $requested_number_of_installments;

        return $this;
    }

    /**
     * Gets success_exit_url
     *
     * @return string
     */
    public function getSuccessExitUrl()
    {
        return $this->container['success_exit_url'];
    }

    /**
     * Sets success_exit_url
     *
     * @param string $success_exit_url success_exit_url
     *
     * @return $this
     */
    public function setSuccessExitUrl($success_exit_url)
    {
        $this->container['success_exit_url'] = $success_exit_url;

        return $this;
    }

    /**
     * Gets error_exit_url
     *
     * @return string
     */
    public function getErrorExitUrl()
    {
        return $this->container['error_exit_url'];
    }

    /**
     * Sets error_exit_url
     *
     * @param string $error_exit_url error_exit_url
     *
     * @return $this
     */
    public function setErrorExitUrl($error_exit_url)
    {
        $this->container['error_exit_url'] = $error_exit_url;

        return $this;
    }

    /**
     * Gets cancel_exit_url
     *
     * @return string
     */
    public function getCancelExitUrl()
    {
        return $this->container['cancel_exit_url'];
    }

    /**
     * Sets cancel_exit_url
     *
     * @param string $cancel_exit_url cancel_exit_url
     *
     * @return $this
     */
    public function setCancelExitUrl($cancel_exit_url)
    {
        $this->container['cancel_exit_url'] = $cancel_exit_url;

        return $this;
    }

    /**
     * Gets success_async_url
     *
     * @return string
     */
    public function getSuccessAsyncUrl()
    {
        return $this->container['success_async_url'];
    }

    /**
     * Sets success_async_url
     *
     * @param string $success_async_url success_async_url
     *
     * @return $this
     */
    public function setSuccessAsyncUrl($success_async_url)
    {
        $this->container['success_async_url'] = $success_async_url;

        return $this;
    }

    /**
     * Gets view_name
     *
     * @return string
     */
    public function getViewName()
    {
        return $this->container['view_name'];
    }

    /**
     * Sets view_name
     *
     * @param string $view_name view_name
     *
     * @return $this
     */
    public function setViewName($view_name)
    {
        $this->container['view_name'] = $view_name;

        return $this;
    }

    /**
     * Gets is_opened_in_iframe
     *
     * @return bool
     */
    public function getIsOpenedInIframe()
    {
        return $this->container['is_opened_in_iframe'];
    }

    /**
     * Sets is_opened_in_iframe
     *
     * @param bool $is_opened_in_iframe is_opened_in_iframe
     *
     * @return $this
     */
    public function setIsOpenedInIframe($is_opened_in_iframe)
    {
        $this->container['is_opened_in_iframe'] = $is_opened_in_iframe;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


