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


class InitiateInstallmentsPlanResponse(object):
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
        'response_header': 'ResponseHeader',
        'installment_plan': 'InstallmentPlan',
        'checkout_url': 'str',
        'approval_url': 'str',
        'terms_and_conditions_url': 'str',
        'privacy_policy_url': 'str',
        'installment_plan_info_url': 'str',
        'public_token': 'str'
    }

    attribute_map = {
        'response_header': 'ResponseHeader',
        'installment_plan': 'InstallmentPlan',
        'checkout_url': 'CheckoutUrl',
        'approval_url': 'ApprovalUrl',
        'terms_and_conditions_url': 'TermsAndConditionsUrl',
        'privacy_policy_url': 'PrivacyPolicyUrl',
        'installment_plan_info_url': 'InstallmentPlanInfoUrl',
        'public_token': 'PublicToken'
    }

    def __init__(self, response_header=None, installment_plan=None, checkout_url=None, approval_url=None, terms_and_conditions_url=None, privacy_policy_url=None, installment_plan_info_url=None, public_token=None):  # noqa: E501
        """InitiateInstallmentsPlanResponse - a model defined in Swagger"""  # noqa: E501

        self._response_header = None
        self._installment_plan = None
        self._checkout_url = None
        self._approval_url = None
        self._terms_and_conditions_url = None
        self._privacy_policy_url = None
        self._installment_plan_info_url = None
        self._public_token = None
        self.discriminator = None

        if response_header is not None:
            self.response_header = response_header
        if installment_plan is not None:
            self.installment_plan = installment_plan
        if checkout_url is not None:
            self.checkout_url = checkout_url
        if approval_url is not None:
            self.approval_url = approval_url
        if terms_and_conditions_url is not None:
            self.terms_and_conditions_url = terms_and_conditions_url
        if privacy_policy_url is not None:
            self.privacy_policy_url = privacy_policy_url
        if installment_plan_info_url is not None:
            self.installment_plan_info_url = installment_plan_info_url
        if public_token is not None:
            self.public_token = public_token

    @property
    def response_header(self):
        """Gets the response_header of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The response_header of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: ResponseHeader
        """
        return self._response_header

    @response_header.setter
    def response_header(self, response_header):
        """Sets the response_header of this InitiateInstallmentsPlanResponse.


        :param response_header: The response_header of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: ResponseHeader
        """

        self._response_header = response_header

    @property
    def installment_plan(self):
        """Gets the installment_plan of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The installment_plan of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: InstallmentPlan
        """
        return self._installment_plan

    @installment_plan.setter
    def installment_plan(self, installment_plan):
        """Sets the installment_plan of this InitiateInstallmentsPlanResponse.


        :param installment_plan: The installment_plan of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: InstallmentPlan
        """

        self._installment_plan = installment_plan

    @property
    def checkout_url(self):
        """Gets the checkout_url of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The checkout_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: str
        """
        return self._checkout_url

    @checkout_url.setter
    def checkout_url(self, checkout_url):
        """Sets the checkout_url of this InitiateInstallmentsPlanResponse.


        :param checkout_url: The checkout_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: str
        """

        self._checkout_url = checkout_url

    @property
    def approval_url(self):
        """Gets the approval_url of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The approval_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: str
        """
        return self._approval_url

    @approval_url.setter
    def approval_url(self, approval_url):
        """Sets the approval_url of this InitiateInstallmentsPlanResponse.


        :param approval_url: The approval_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: str
        """

        self._approval_url = approval_url

    @property
    def terms_and_conditions_url(self):
        """Gets the terms_and_conditions_url of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The terms_and_conditions_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: str
        """
        return self._terms_and_conditions_url

    @terms_and_conditions_url.setter
    def terms_and_conditions_url(self, terms_and_conditions_url):
        """Sets the terms_and_conditions_url of this InitiateInstallmentsPlanResponse.


        :param terms_and_conditions_url: The terms_and_conditions_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: str
        """

        self._terms_and_conditions_url = terms_and_conditions_url

    @property
    def privacy_policy_url(self):
        """Gets the privacy_policy_url of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The privacy_policy_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: str
        """
        return self._privacy_policy_url

    @privacy_policy_url.setter
    def privacy_policy_url(self, privacy_policy_url):
        """Sets the privacy_policy_url of this InitiateInstallmentsPlanResponse.


        :param privacy_policy_url: The privacy_policy_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: str
        """

        self._privacy_policy_url = privacy_policy_url

    @property
    def installment_plan_info_url(self):
        """Gets the installment_plan_info_url of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The installment_plan_info_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: str
        """
        return self._installment_plan_info_url

    @installment_plan_info_url.setter
    def installment_plan_info_url(self, installment_plan_info_url):
        """Sets the installment_plan_info_url of this InitiateInstallmentsPlanResponse.


        :param installment_plan_info_url: The installment_plan_info_url of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: str
        """

        self._installment_plan_info_url = installment_plan_info_url

    @property
    def public_token(self):
        """Gets the public_token of this InitiateInstallmentsPlanResponse.  # noqa: E501


        :return: The public_token of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :rtype: str
        """
        return self._public_token

    @public_token.setter
    def public_token(self, public_token):
        """Sets the public_token of this InitiateInstallmentsPlanResponse.


        :param public_token: The public_token of this InitiateInstallmentsPlanResponse.  # noqa: E501
        :type: str
        """

        self._public_token = public_token

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
        if issubclass(InitiateInstallmentsPlanResponse, dict):
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
        if not isinstance(other, InitiateInstallmentsPlanResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
