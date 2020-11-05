# coding: utf-8

"""
    splitit-web-api-public-sdk

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class TransactionInfo(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'transaction_id': 'str',
        'transaction_type': 'TransactionType',
        'transaction_status': 'TransactionStatus'
    }

    attribute_map = {
        'transaction_id': 'TransactionId',
        'transaction_type': 'TransactionType',
        'transaction_status': 'TransactionStatus'
    }

    def __init__(self, transaction_id=None, transaction_type=None, transaction_status=None):  # noqa: E501
        """TransactionInfo - a model defined in Swagger"""  # noqa: E501

        self._transaction_id = None
        self._transaction_type = None
        self._transaction_status = None
        self.discriminator = None

        if transaction_id is not None:
            self.transaction_id = transaction_id
        self.transaction_type = transaction_type
        self.transaction_status = transaction_status

    @property
    def transaction_id(self):
        """Gets the transaction_id of this TransactionInfo.  # noqa: E501


        :return: The transaction_id of this TransactionInfo.  # noqa: E501
        :rtype: str
        """
        return self._transaction_id

    @transaction_id.setter
    def transaction_id(self, transaction_id):
        """Sets the transaction_id of this TransactionInfo.


        :param transaction_id: The transaction_id of this TransactionInfo.  # noqa: E501
        :type: str
        """

        self._transaction_id = transaction_id

    @property
    def transaction_type(self):
        """Gets the transaction_type of this TransactionInfo.  # noqa: E501


        :return: The transaction_type of this TransactionInfo.  # noqa: E501
        :rtype: TransactionType
        """
        return self._transaction_type

    @transaction_type.setter
    def transaction_type(self, transaction_type):
        """Sets the transaction_type of this TransactionInfo.


        :param transaction_type: The transaction_type of this TransactionInfo.  # noqa: E501
        :type: TransactionType
        """
        
        if transaction_type is None:
            raise ValueError("Invalid value for `transaction_type`, must not be `None`")  # noqa: E501

        self._transaction_type = transaction_type

    @property
    def transaction_status(self):
        """Gets the transaction_status of this TransactionInfo.  # noqa: E501


        :return: The transaction_status of this TransactionInfo.  # noqa: E501
        :rtype: TransactionStatus
        """
        return self._transaction_status

    @transaction_status.setter
    def transaction_status(self, transaction_status):
        """Sets the transaction_status of this TransactionInfo.


        :param transaction_status: The transaction_status of this TransactionInfo.  # noqa: E501
        :type: TransactionStatus
        """
        
        if transaction_status is None:
            raise ValueError("Invalid value for `transaction_status`, must not be `None`")  # noqa: E501

        self._transaction_status = transaction_status

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(TransactionInfo, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, TransactionInfo):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other