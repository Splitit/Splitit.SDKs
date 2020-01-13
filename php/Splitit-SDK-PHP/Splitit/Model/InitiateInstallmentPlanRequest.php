<?php
/**
 * InitiateInstallmentPlanRequest
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
 * InitiateInstallmentPlanRequest Class Doc Comment
 *
 * @category Class
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class InitiateInstallmentPlanRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'InitiateInstallmentPlanRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'plan_data' => '\SplititSdkClient\Model\PlanData',
        'cart_data' => '\SplititSdkClient\Model\CartData',
        'consumer_data' => '\SplititSdkClient\Model\ConsumerData',
        'billing_address' => '\SplititSdkClient\Model\AddressData',
        'installment_plan_number' => 'string',
        'payment_wizard_data' => '\SplititSdkClient\Model\PaymentWizardData',
        'redirect_urls' => '\SplititSdkClient\Model\RedirectUrls',
        'events_endpoints' => '\SplititSdkClient\Model\EventsEndpoints',
        'credit_card_details' => '\SplititSdkClient\Model\CardData'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'plan_data' => null,
        'cart_data' => null,
        'consumer_data' => null,
        'billing_address' => null,
        'installment_plan_number' => null,
        'payment_wizard_data' => null,
        'redirect_urls' => null,
        'events_endpoints' => null,
        'credit_card_details' => null
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
        'plan_data' => 'PlanData',
        'cart_data' => 'CartData',
        'consumer_data' => 'ConsumerData',
        'billing_address' => 'BillingAddress',
        'installment_plan_number' => 'InstallmentPlanNumber',
        'payment_wizard_data' => 'PaymentWizardData',
        'redirect_urls' => 'RedirectUrls',
        'events_endpoints' => 'EventsEndpoints',
        'credit_card_details' => 'CreditCardDetails'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'plan_data' => 'setPlanData',
        'cart_data' => 'setCartData',
        'consumer_data' => 'setConsumerData',
        'billing_address' => 'setBillingAddress',
        'installment_plan_number' => 'setInstallmentPlanNumber',
        'payment_wizard_data' => 'setPaymentWizardData',
        'redirect_urls' => 'setRedirectUrls',
        'events_endpoints' => 'setEventsEndpoints',
        'credit_card_details' => 'setCreditCardDetails'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'plan_data' => 'getPlanData',
        'cart_data' => 'getCartData',
        'consumer_data' => 'getConsumerData',
        'billing_address' => 'getBillingAddress',
        'installment_plan_number' => 'getInstallmentPlanNumber',
        'payment_wizard_data' => 'getPaymentWizardData',
        'redirect_urls' => 'getRedirectUrls',
        'events_endpoints' => 'getEventsEndpoints',
        'credit_card_details' => 'getCreditCardDetails'
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
        $this->container['plan_data'] = isset($data['plan_data']) ? $data['plan_data'] : null;
        $this->container['cart_data'] = isset($data['cart_data']) ? $data['cart_data'] : null;
        $this->container['consumer_data'] = isset($data['consumer_data']) ? $data['consumer_data'] : null;
        $this->container['billing_address'] = isset($data['billing_address']) ? $data['billing_address'] : null;
        $this->container['installment_plan_number'] = isset($data['installment_plan_number']) ? $data['installment_plan_number'] : null;
        $this->container['payment_wizard_data'] = isset($data['payment_wizard_data']) ? $data['payment_wizard_data'] : null;
        $this->container['redirect_urls'] = isset($data['redirect_urls']) ? $data['redirect_urls'] : null;
        $this->container['events_endpoints'] = isset($data['events_endpoints']) ? $data['events_endpoints'] : null;
        $this->container['credit_card_details'] = isset($data['credit_card_details']) ? $data['credit_card_details'] : null;
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
     * Gets plan_data
     *
     * @return \SplititSdkClient\Model\PlanData
     */
    public function getPlanData()
    {
        return $this->container['plan_data'];
    }

    /**
     * Sets plan_data
     *
     * @param \SplititSdkClient\Model\PlanData $plan_data plan_data
     *
     * @return $this
     */
    public function setPlanData($plan_data)
    {
        $this->container['plan_data'] = $plan_data;

        return $this;
    }

    /**
     * Gets cart_data
     *
     * @return \SplititSdkClient\Model\CartData
     */
    public function getCartData()
    {
        return $this->container['cart_data'];
    }

    /**
     * Sets cart_data
     *
     * @param \SplititSdkClient\Model\CartData $cart_data cart_data
     *
     * @return $this
     */
    public function setCartData($cart_data)
    {
        $this->container['cart_data'] = $cart_data;

        return $this;
    }

    /**
     * Gets consumer_data
     *
     * @return \SplititSdkClient\Model\ConsumerData
     */
    public function getConsumerData()
    {
        return $this->container['consumer_data'];
    }

    /**
     * Sets consumer_data
     *
     * @param \SplititSdkClient\Model\ConsumerData $consumer_data consumer_data
     *
     * @return $this
     */
    public function setConsumerData($consumer_data)
    {
        $this->container['consumer_data'] = $consumer_data;

        return $this;
    }

    /**
     * Gets billing_address
     *
     * @return \SplititSdkClient\Model\AddressData
     */
    public function getBillingAddress()
    {
        return $this->container['billing_address'];
    }

    /**
     * Sets billing_address
     *
     * @param \SplititSdkClient\Model\AddressData $billing_address billing_address
     *
     * @return $this
     */
    public function setBillingAddress($billing_address)
    {
        $this->container['billing_address'] = $billing_address;

        return $this;
    }

    /**
     * Gets installment_plan_number
     *
     * @return string
     */
    public function getInstallmentPlanNumber()
    {
        return $this->container['installment_plan_number'];
    }

    /**
     * Sets installment_plan_number
     *
     * @param string $installment_plan_number installment_plan_number
     *
     * @return $this
     */
    public function setInstallmentPlanNumber($installment_plan_number)
    {
        $this->container['installment_plan_number'] = $installment_plan_number;

        return $this;
    }

    /**
     * Gets payment_wizard_data
     *
     * @return \SplititSdkClient\Model\PaymentWizardData
     */
    public function getPaymentWizardData()
    {
        return $this->container['payment_wizard_data'];
    }

    /**
     * Sets payment_wizard_data
     *
     * @param \SplititSdkClient\Model\PaymentWizardData $payment_wizard_data payment_wizard_data
     *
     * @return $this
     */
    public function setPaymentWizardData($payment_wizard_data)
    {
        $this->container['payment_wizard_data'] = $payment_wizard_data;

        return $this;
    }

    /**
     * Gets redirect_urls
     *
     * @return \SplititSdkClient\Model\RedirectUrls
     */
    public function getRedirectUrls()
    {
        return $this->container['redirect_urls'];
    }

    /**
     * Sets redirect_urls
     *
     * @param \SplititSdkClient\Model\RedirectUrls $redirect_urls redirect_urls
     *
     * @return $this
     */
    public function setRedirectUrls($redirect_urls)
    {
        $this->container['redirect_urls'] = $redirect_urls;

        return $this;
    }

    /**
     * Gets events_endpoints
     *
     * @return \SplititSdkClient\Model\EventsEndpoints
     */
    public function getEventsEndpoints()
    {
        return $this->container['events_endpoints'];
    }

    /**
     * Sets events_endpoints
     *
     * @param \SplititSdkClient\Model\EventsEndpoints $events_endpoints events_endpoints
     *
     * @return $this
     */
    public function setEventsEndpoints($events_endpoints)
    {
        $this->container['events_endpoints'] = $events_endpoints;

        return $this;
    }

    /**
     * Gets credit_card_details
     *
     * @return \SplititSdkClient\Model\CardData
     */
    public function getCreditCardDetails()
    {
        return $this->container['credit_card_details'];
    }

    /**
     * Sets credit_card_details
     *
     * @param \SplititSdkClient\Model\CardData $credit_card_details credit_card_details
     *
     * @return $this
     */
    public function setCreditCardDetails($credit_card_details)
    {
        $this->container['credit_card_details'] = $credit_card_details;

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


