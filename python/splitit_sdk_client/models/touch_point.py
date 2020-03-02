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


class TouchPoint(object):
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
        'code': 'str',
        'version': 'str',
        'sub_version': 'str',
        'versioned_touchpoint_id': 'int'
    }

    attribute_map = {
        'code': 'Code',
        'version': 'Version',
        'sub_version': 'SubVersion',
        'versioned_touchpoint_id': 'VersionedTouchpointId'
    }

    def __init__(self, code=None, version=None, sub_version=None, versioned_touchpoint_id=None):  # noqa: E501
        """TouchPoint - a model defined in Swagger"""  # noqa: E501

        self._code = None
        self._version = None
        self._sub_version = None
        self._versioned_touchpoint_id = None
        self.discriminator = None

        if code is not None:
            self.code = code
        if version is not None:
            self.version = version
        if sub_version is not None:
            self.sub_version = sub_version
        if versioned_touchpoint_id is not None:
            self.versioned_touchpoint_id = versioned_touchpoint_id

    @property
    def code(self):
        """Gets the code of this TouchPoint.  # noqa: E501


        :return: The code of this TouchPoint.  # noqa: E501
        :rtype: str
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this TouchPoint.


        :param code: The code of this TouchPoint.  # noqa: E501
        :type: str
        """

        self._code = code

    @property
    def version(self):
        """Gets the version of this TouchPoint.  # noqa: E501


        :return: The version of this TouchPoint.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this TouchPoint.


        :param version: The version of this TouchPoint.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def sub_version(self):
        """Gets the sub_version of this TouchPoint.  # noqa: E501


        :return: The sub_version of this TouchPoint.  # noqa: E501
        :rtype: str
        """
        return self._sub_version

    @sub_version.setter
    def sub_version(self, sub_version):
        """Sets the sub_version of this TouchPoint.


        :param sub_version: The sub_version of this TouchPoint.  # noqa: E501
        :type: str
        """

        self._sub_version = sub_version

    @property
    def versioned_touchpoint_id(self):
        """Gets the versioned_touchpoint_id of this TouchPoint.  # noqa: E501


        :return: The versioned_touchpoint_id of this TouchPoint.  # noqa: E501
        :rtype: int
        """
        return self._versioned_touchpoint_id

    @versioned_touchpoint_id.setter
    def versioned_touchpoint_id(self, versioned_touchpoint_id):
        """Sets the versioned_touchpoint_id of this TouchPoint.


        :param versioned_touchpoint_id: The versioned_touchpoint_id of this TouchPoint.  # noqa: E501
        :type: int
        """

        self._versioned_touchpoint_id = versioned_touchpoint_id

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
        if issubclass(TouchPoint, dict):
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
        if not isinstance(other, TouchPoint):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
