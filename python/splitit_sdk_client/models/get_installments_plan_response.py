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


class GetInstallmentsPlanResponse(object):
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
        'plans_list': 'list[InstallmentPlan]',
        'response_header': 'ResponseHeader',
        'paging_response_header': 'PagingResponseHeader'
    }

    attribute_map = {
        'plans_list': 'PlansList',
        'response_header': 'ResponseHeader',
        'paging_response_header': 'PagingResponseHeader'
    }

    def __init__(self, plans_list=None, response_header=None, paging_response_header=None):  # noqa: E501
        """GetInstallmentsPlanResponse - a model defined in Swagger"""  # noqa: E501

        self._plans_list = None
        self._response_header = None
        self._paging_response_header = None
        self.discriminator = None

        if plans_list is not None:
            self.plans_list = plans_list
        if response_header is not None:
            self.response_header = response_header
        if paging_response_header is not None:
            self.paging_response_header = paging_response_header

    @property
    def plans_list(self):
        """Gets the plans_list of this GetInstallmentsPlanResponse.  # noqa: E501


        :return: The plans_list of this GetInstallmentsPlanResponse.  # noqa: E501
        :rtype: list[InstallmentPlan]
        """
        return self._plans_list

    @plans_list.setter
    def plans_list(self, plans_list):
        """Sets the plans_list of this GetInstallmentsPlanResponse.


        :param plans_list: The plans_list of this GetInstallmentsPlanResponse.  # noqa: E501
        :type: list[InstallmentPlan]
        """

        self._plans_list = plans_list

    @property
    def response_header(self):
        """Gets the response_header of this GetInstallmentsPlanResponse.  # noqa: E501


        :return: The response_header of this GetInstallmentsPlanResponse.  # noqa: E501
        :rtype: ResponseHeader
        """
        return self._response_header

    @response_header.setter
    def response_header(self, response_header):
        """Sets the response_header of this GetInstallmentsPlanResponse.


        :param response_header: The response_header of this GetInstallmentsPlanResponse.  # noqa: E501
        :type: ResponseHeader
        """

        self._response_header = response_header

    @property
    def paging_response_header(self):
        """Gets the paging_response_header of this GetInstallmentsPlanResponse.  # noqa: E501


        :return: The paging_response_header of this GetInstallmentsPlanResponse.  # noqa: E501
        :rtype: PagingResponseHeader
        """
        return self._paging_response_header

    @paging_response_header.setter
    def paging_response_header(self, paging_response_header):
        """Sets the paging_response_header of this GetInstallmentsPlanResponse.


        :param paging_response_header: The paging_response_header of this GetInstallmentsPlanResponse.  # noqa: E501
        :type: PagingResponseHeader
        """

        self._paging_response_header = paging_response_header

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
        if issubclass(GetInstallmentsPlanResponse, dict):
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
        if not isinstance(other, GetInstallmentsPlanResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other