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


class GetInstallmentsPlanSearchCriteriaRequest(object):
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
        'query_criteria': 'InstallmentPlanQueryCriteria',
        'load_related': 'RelationsLoad',
        'paging_request': 'PagingRequestHeader'
    }

    attribute_map = {
        'query_criteria': 'QueryCriteria',
        'load_related': 'LoadRelated',
        'paging_request': 'PagingRequest'
    }

    def __init__(self, query_criteria=None, load_related=None, paging_request=None):  # noqa: E501
        """GetInstallmentsPlanSearchCriteriaRequest - a model defined in Swagger"""  # noqa: E501

        self._query_criteria = None
        self._load_related = None
        self._paging_request = None
        self.discriminator = None

        if query_criteria is not None:
            self.query_criteria = query_criteria
        if load_related is not None:
            self.load_related = load_related
        if paging_request is not None:
            self.paging_request = paging_request

    @property
    def query_criteria(self):
        """Gets the query_criteria of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501


        :return: The query_criteria of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501
        :rtype: InstallmentPlanQueryCriteria
        """
        return self._query_criteria

    @query_criteria.setter
    def query_criteria(self, query_criteria):
        """Sets the query_criteria of this GetInstallmentsPlanSearchCriteriaRequest.


        :param query_criteria: The query_criteria of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501
        :type: InstallmentPlanQueryCriteria
        """

        self._query_criteria = query_criteria

    @property
    def load_related(self):
        """Gets the load_related of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501


        :return: The load_related of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501
        :rtype: RelationsLoad
        """
        return self._load_related

    @load_related.setter
    def load_related(self, load_related):
        """Sets the load_related of this GetInstallmentsPlanSearchCriteriaRequest.


        :param load_related: The load_related of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501
        :type: RelationsLoad
        """

        self._load_related = load_related

    @property
    def paging_request(self):
        """Gets the paging_request of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501


        :return: The paging_request of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501
        :rtype: PagingRequestHeader
        """
        return self._paging_request

    @paging_request.setter
    def paging_request(self, paging_request):
        """Sets the paging_request of this GetInstallmentsPlanSearchCriteriaRequest.


        :param paging_request: The paging_request of this GetInstallmentsPlanSearchCriteriaRequest.  # noqa: E501
        :type: PagingRequestHeader
        """

        self._paging_request = paging_request

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
        if issubclass(GetInstallmentsPlanSearchCriteriaRequest, dict):
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
        if not isinstance(other, GetInstallmentsPlanSearchCriteriaRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
