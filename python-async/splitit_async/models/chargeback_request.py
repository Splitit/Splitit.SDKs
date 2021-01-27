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


class ChargebackRequest(object):
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
        'transaction_ids_to_mark': 'list[int]',
        'transaction_ids_to_unmark': 'list[int]',
        'installment_plan_number': 'str',
        'partial_response_mapping': 'bool'
    }

    attribute_map = {
        'transaction_ids_to_mark': 'TransactionIdsToMark',
        'transaction_ids_to_unmark': 'TransactionIdsToUnmark',
        'installment_plan_number': 'InstallmentPlanNumber',
        'partial_response_mapping': 'PartialResponseMapping'
    }

    def __init__(self, transaction_ids_to_mark=None, transaction_ids_to_unmark=None, installment_plan_number=None, partial_response_mapping=None):  # noqa: E501
        """ChargebackRequest - a model defined in Swagger"""  # noqa: E501

        self._transaction_ids_to_mark = None
        self._transaction_ids_to_unmark = None
        self._installment_plan_number = None
        self._partial_response_mapping = None
        self.discriminator = None

        if transaction_ids_to_mark is not None:
            self.transaction_ids_to_mark = transaction_ids_to_mark
        if transaction_ids_to_unmark is not None:
            self.transaction_ids_to_unmark = transaction_ids_to_unmark
        if installment_plan_number is not None:
            self.installment_plan_number = installment_plan_number
        self.partial_response_mapping = partial_response_mapping

    @property
    def transaction_ids_to_mark(self):
        """Gets the transaction_ids_to_mark of this ChargebackRequest.  # noqa: E501


        :return: The transaction_ids_to_mark of this ChargebackRequest.  # noqa: E501
        :rtype: list[int]
        """
        return self._transaction_ids_to_mark

    @transaction_ids_to_mark.setter
    def transaction_ids_to_mark(self, transaction_ids_to_mark):
        """Sets the transaction_ids_to_mark of this ChargebackRequest.


        :param transaction_ids_to_mark: The transaction_ids_to_mark of this ChargebackRequest.  # noqa: E501
        :type: list[int]
        """

        self._transaction_ids_to_mark = transaction_ids_to_mark

    @property
    def transaction_ids_to_unmark(self):
        """Gets the transaction_ids_to_unmark of this ChargebackRequest.  # noqa: E501


        :return: The transaction_ids_to_unmark of this ChargebackRequest.  # noqa: E501
        :rtype: list[int]
        """
        return self._transaction_ids_to_unmark

    @transaction_ids_to_unmark.setter
    def transaction_ids_to_unmark(self, transaction_ids_to_unmark):
        """Sets the transaction_ids_to_unmark of this ChargebackRequest.


        :param transaction_ids_to_unmark: The transaction_ids_to_unmark of this ChargebackRequest.  # noqa: E501
        :type: list[int]
        """

        self._transaction_ids_to_unmark = transaction_ids_to_unmark

    @property
    def installment_plan_number(self):
        """Gets the installment_plan_number of this ChargebackRequest.  # noqa: E501


        :return: The installment_plan_number of this ChargebackRequest.  # noqa: E501
        :rtype: str
        """
        return self._installment_plan_number

    @installment_plan_number.setter
    def installment_plan_number(self, installment_plan_number):
        """Sets the installment_plan_number of this ChargebackRequest.


        :param installment_plan_number: The installment_plan_number of this ChargebackRequest.  # noqa: E501
        :type: str
        """

        self._installment_plan_number = installment_plan_number

    @property
    def partial_response_mapping(self):
        """Gets the partial_response_mapping of this ChargebackRequest.  # noqa: E501


        :return: The partial_response_mapping of this ChargebackRequest.  # noqa: E501
        :rtype: bool
        """
        return self._partial_response_mapping

    @partial_response_mapping.setter
    def partial_response_mapping(self, partial_response_mapping):
        """Sets the partial_response_mapping of this ChargebackRequest.


        :param partial_response_mapping: The partial_response_mapping of this ChargebackRequest.  # noqa: E501
        :type: bool
        """
        partial_response_mapping = bool(partial_response_mapping)
        if partial_response_mapping is None:
            raise ValueError("Invalid value for `partial_response_mapping`, must not be `None`")  # noqa: E501

        self._partial_response_mapping = partial_response_mapping

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
        if issubclass(ChargebackRequest, dict):
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
        if not isinstance(other, ChargebackRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other