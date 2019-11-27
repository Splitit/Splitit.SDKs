# Splitit.SDK.Client.Portable.Model.InstallmentPlan
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstallmentPlanNumber** | **string** |  | [optional] 
**InstallmentPlanStatus** | [**ReferenceEntityBase**](ReferenceEntityBase.md) |  | [optional] 
**Amount** | [**Money**](Money.md) |  | [optional] 
**OutstandingAmount** | [**Money**](Money.md) |  | [optional] 
**NumberOfInstallments** | **int?** |  | 
**NumberOfProcessedInstallments** | **int?** |  | 
**OriginalAmount** | [**Money**](Money.md) |  | [optional] 
**RefundAmount** | [**Money**](Money.md) |  | [optional] 
**Consumer** | [**ConsumerData**](ConsumerData.md) |  | [optional] 
**ActiveCard** | [**CardData**](CardData.md) |  | [optional] 
**FraudCheck** | [**FraudCheck**](FraudCheck.md) |  | [optional] 
**Terminal** | [**TerminalRef**](TerminalRef.md) |  | [optional] 
**Merchant** | [**MerchantRef**](MerchantRef.md) |  | [optional] 
**RefOrderNumber** | **string** |  | [optional] 
**PurchaseMethod** | [**ReferenceEntityBase**](ReferenceEntityBase.md) |  | [optional] 
**Strategy** | [**ReferenceEntityBase**](ReferenceEntityBase.md) |  | [optional] 
**DelayResolution** | [**ReferenceEntityBase**](ReferenceEntityBase.md) |  | [optional] 
**KeepNonApprovedPlanLive** | **string** |  | 
**ExtendPlanLiveTimeOnPaymentRequest** | **string** |  | 
**ExtendPlanLiveTimeOnApprovalRequest** | **string** |  | 
**ExtendedParams** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**IsFullCaptured** | **bool?** |  | 
**IsChargedBack** | **bool?** |  | 
**ArePaymentsOnHold** | **bool?** |  | 
**ScpFundingPercent** | **decimal?** |  | 
**TestMode** | **TestModes** |  | 
**CreationDateTime** | **DateTime?** |  | 
**Installments** | [**List&lt;Installment&gt;**](Installment.md) |  | [optional] 
**SecureAuthorizations** | [**List&lt;ReAuthorization&gt;**](ReAuthorization.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
