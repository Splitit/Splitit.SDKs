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


class Error(object):
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
        'error_code': 'str',
        'message': 'str',
        'additional_info': 'str'
    }

    attribute_map = {
        'error_code': 'ErrorCode',
        'message': 'Message',
        'additional_info': 'AdditionalInfo'
    }

    def __init__(self, error_code=None, message=None, additional_info=None):  # noqa: E501
        """Error - a model defined in Swagger"""  # noqa: E501

        self._error_code = None
        self._message = None
        self._additional_info = None
        self.discriminator = None

        if error_code is not None:
            self.error_code = error_code
        if message is not None:
            self.message = message
        if additional_info is not None:
            self.additional_info = additional_info

    @property
    def error_code(self):
        """Gets the error_code of this Error.  # noqa: E501


        :return: The error_code of this Error.  # noqa: E501
        :rtype: str
        """
        return self._error_code

    @error_code.setter
    def error_code(self, error_code):
        """Sets the error_code of this Error.


        :param error_code: The error_code of this Error.  # noqa: E501
        :type: str
        """

        self._error_code = error_code

    @property
    def message(self):
        """Gets the message of this Error.  # noqa: E501


        :return: The message of this Error.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this Error.


        :param message: The message of this Error.  # noqa: E501
        :type: str
        """

        self._message = message

    @property
    def additional_info(self):
        """Gets the additional_info of this Error.  # noqa: E501


        :return: The additional_info of this Error.  # noqa: E501
        :rtype: str
        """
        return self._additional_info

    @additional_info.setter
    def additional_info(self, additional_info):
        """Sets the additional_info of this Error.


        :param additional_info: The additional_info of this Error.  # noqa: E501
        :type: str
        """

        self._additional_info = additional_info

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
        if issubclass(Error, dict):
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
        if not isinstance(other, Error):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
