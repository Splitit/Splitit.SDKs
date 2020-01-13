<?php
/**
 * GetInstallmentsPlanSearchCriteriaRequest
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
 * GetInstallmentsPlanSearchCriteriaRequest Class Doc Comment
 *
 * @category Class
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class GetInstallmentsPlanSearchCriteriaRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'GetInstallmentsPlanSearchCriteriaRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'query_criteria' => '\SplititSdkClient\Model\InstallmentPlanQueryCriteria',
        'load_related' => '\SplititSdkClient\Model\RelationsLoad',
        'paging_request' => '\SplititSdkClient\Model\PagingRequestHeader'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'query_criteria' => null,
        'load_related' => null,
        'paging_request' => null
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
        'query_criteria' => 'QueryCriteria',
        'load_related' => 'LoadRelated',
        'paging_request' => 'PagingRequest'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'query_criteria' => 'setQueryCriteria',
        'load_related' => 'setLoadRelated',
        'paging_request' => 'setPagingRequest'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'query_criteria' => 'getQueryCriteria',
        'load_related' => 'getLoadRelated',
        'paging_request' => 'getPagingRequest'
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
        $this->container['query_criteria'] = isset($data['query_criteria']) ? $data['query_criteria'] : null;
        $this->container['load_related'] = isset($data['load_related']) ? $data['load_related'] : null;
        $this->container['paging_request'] = isset($data['paging_request']) ? $data['paging_request'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

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
     * Gets query_criteria
     *
     * @return \SplititSdkClient\Model\InstallmentPlanQueryCriteria
     */
    public function getQueryCriteria()
    {
        return $this->container['query_criteria'];
    }

    /**
     * Sets query_criteria
     *
     * @param \SplititSdkClient\Model\InstallmentPlanQueryCriteria $query_criteria query_criteria
     *
     * @return $this
     */
    public function setQueryCriteria($query_criteria)
    {
        $this->container['query_criteria'] = $query_criteria;

        return $this;
    }

    /**
     * Gets load_related
     *
     * @return \SplititSdkClient\Model\RelationsLoad
     */
    public function getLoadRelated()
    {
        return $this->container['load_related'];
    }

    /**
     * Sets load_related
     *
     * @param \SplititSdkClient\Model\RelationsLoad $load_related load_related
     *
     * @return $this
     */
    public function setLoadRelated($load_related)
    {
        $this->container['load_related'] = $load_related;

        return $this;
    }

    /**
     * Gets paging_request
     *
     * @return \SplititSdkClient\Model\PagingRequestHeader
     */
    public function getPagingRequest()
    {
        return $this->container['paging_request'];
    }

    /**
     * Sets paging_request
     *
     * @param \SplititSdkClient\Model\PagingRequestHeader $paging_request paging_request
     *
     * @return $this
     */
    public function setPagingRequest($paging_request)
    {
        $this->container['paging_request'] = $paging_request;

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

