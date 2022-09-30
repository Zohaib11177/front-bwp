import { combineReducers } from 'redux';
import RegisterReducer from 'Redux/V1/Auth/Register/Post/RegisterPostReducer';
import LoginReducer from 'Redux/V1/Auth/Login/Post/LoginPostReducer';
import SiteDetailReducer from 'Redux/V1/Sites/Detail/SiteDetailReducer';
import invoiceListReducer from 'Redux/V1/Billing/Invoice/Get/InvoiceGetReducer';
import CardAddReducer from 'Redux/V1/Billing/Card/Post/CardPostReducer';
import CardListReducer from 'Redux/V1/Billing/Card/Get/CardGetReducer';
import DashboardReducer from 'Redux/V1/Dashboard/DashboardReducer';
import invoiceDetailReducer from 'Redux/V1/Billing/Invoice/First/InvoiceFirstReducer';
import invoicePaymentReducer from 'Redux/V1/Billing/Invoice/Put/InvoicePutReducer';
import RestartNginxReducer from 'Redux/V1/Sites/Operations/NginxRestart/NginxRestartReducer';
import RestartPhpReducer from 'Redux/V1/Sites/Operations/PHPRestart/PHPRestartReducer';
import ResetPermissionReducer from 'Redux/V1/Sites/Operations/PermissionReset/PermissionResetReducer';
import PostDomainReducer from 'Redux/V1/Sites/Domain/Post/Reducer';
import DeleteDomainReducer from 'Redux/V1/Sites/Domain/Delete/Reducer';
import GetSslReducer from 'Redux/V1/Sites/Ssl/Get/Reducers';
import SslEnableReducer from 'Redux/V1/Ssl/Put/SslPutReducer';
import DisableSsl from 'Redux/V1/Sites/Ssl/Delete/Reducers';
import clearCache from 'Redux/V1/Sites/Operations/CacheClear/CacheClearReducer';
import ForceRedirectReducer from 'Redux/V1/ForceRedirect/ForcePutReducers';
import CardDeleteReducer from 'Redux/V1/Billing/Card/Delete/CardDeleteReducer';
import CardPrimaryReducer from 'Redux/V1/Billing/Card/Put/CardPutReducer';
import TopupReducer from 'Redux/V1/Topup/TopupPutReducer';
import ForgotPasswordReducer from 'Redux/V1/Auth/PasswordForgot/Post/PasswordPostReducer';
import PasswordResetReducer from 'Redux/V1/Auth/PasswordReset/Put/PasswordPutReducer';
import DomainListReducer from 'Redux/V1/Domain/Get/DomainGetReducer';
import DomainPrimaryReducer from 'Redux/V1/Domain/Put/DomainPutReducer';
import SslRevokeReducer from 'Redux/V1/Ssl/Delete/SslDeleteReducer';
import CustomerReducer from 'Redux/V1/Customer/Get/CustomerGetReducer';
import StagingRootReducer from 'Redux/V1/Staging/StagingRootReducer';
import DomainSearchReducer from 'Redux/V1/Domain/SmartSearch/SearchGetReducer';
import SiteRootReducer from 'Redux/V1/Sites/SiteRootReducer';
import NotificationRootReducer from 'Redux/V1/Notification/NotificationRootReducer';
import SiteRootReducerV2 from 'Redux/V2/Sites/SiteRootReducerV2';
import AffiliateRootReducer from 'Redux/V1/Affiliate/AffiliateRootReducer';
import ProfileRootReducer from 'Redux/V1/Profiles/ProfileRootReducer';
import AuthRootReducerV4 from 'Redux/V4/Auth/AuthRootReducerV4';
import AuthRootReducer from 'Redux/V1/Auth/AuthRootReducer';
import ProfileRootReducerV2 from 'Redux/V2/Profiles/ProfileRootReducerV2';
import SiteRootReducerV3 from 'Redux/V3/Sites/SiteRootReducerV3';
import SslRenewReducer from 'Redux/V1/Ssl/SslRenew/SslRenewReducer';
import AuthRootReducerV2 from 'Redux/V2/Auth/AuthRootReducerV2';
import SettingsRootReducer from './V1/Settings/SettingsRootReducer';
import ChangePasswordPutReducer from 'Redux/V1/ChangePassword/ChangePasswordReducer';
import NewDesignReducer from 'Redux/V3/Sites/NewDesign/NewDesignReducer';
import AlertRootReducerV3 from 'Redux/V3/SystemAlerts/AlertRootReducerV3';
import SiteRootReducerV6 from 'Redux/V6/Sites/SiteRootReducerV6';
import StagingRootReducerV6 from 'Redux/V6/Staging/StagingRootReducerV6';
import BillingRootReducerV6 from 'Redux/V6/Billing/BillingRootReducerV6';
import SiteOtpRootReducerV6 from 'Redux/V6/Sites/SiteOtp/SiteOtpRootReducerV6';
import SiteVersionRootReducerV6 from 'Redux/V6/Sites/SiteVersion/SiteVersionRootReducerV6';
import SiteWLRootReducerV6 from 'Redux/V6/Sites/SiteWhiteLabel/SiteWLRootReducerV6';
import AuthRootReducerV6 from 'Redux/V6/Auth/AuthRootReducerV6';
import SitePSRootReducerV6 from 'Redux/V6/Sites/SitePortalSettings/SitePSRootReducerV6';
import CustomPlanRootReducer from 'Redux/V6/CustomPlan/CustomPlanRootReducer';
import StripeRootReducer from 'Redux/V6/Stripe/StripeRootReducer';

export default combineReducers({
    cardList: CardListReducer,
    cardAdd: CardAddReducer,
    invoiceList: invoiceListReducer,
    invoiceDetail: invoiceDetailReducer,
    invoicePayment: invoicePaymentReducer,
    login: LoginReducer,
    register: RegisterReducer,
    forgotPassword: ForgotPasswordReducer,
    passwordReset: PasswordResetReducer,
    DashboardReducer,
    SiteDetailReducer,
    RestartNginxReducer,
    RestartPhpReducer,
    ResetPermissionReducer,
    PostDomainReducer,
    DeleteDomainReducer,
    PostSslReducer: SslEnableReducer,
    GetSslReducer,
    DisableSsl,
    clearCache,
    forceRedirect: ForceRedirectReducer,
    cardDelete: CardDeleteReducer,
    cardPrimary: CardPrimaryReducer,
    topupReducer: TopupReducer,
    domainList: DomainListReducer,
    domainPrimary: DomainPrimaryReducer,
    sslRevoke: SslRevokeReducer,
    customer: CustomerReducer,
    staging: StagingRootReducer,
    domainSearch: DomainSearchReducer,
    site: SiteRootReducer,
    notification: NotificationRootReducer,
    siteV2: SiteRootReducerV2,
    affiliate: AffiliateRootReducer,
    profile: ProfileRootReducer,
    authV4: AuthRootReducerV4,
    profileV2: ProfileRootReducerV2,
    auth: AuthRootReducer,
    authV2: AuthRootReducerV2,
    siteV3: SiteRootReducerV3,
    sslRenew: SslRenewReducer,
    settings: SettingsRootReducer,
    changePassword: ChangePasswordPutReducer,
    NewDesign: NewDesignReducer,
    systemAlerts: AlertRootReducerV3,
    siteV6: SiteRootReducerV6,
    stagingV6: StagingRootReducerV6,
    billingV6: BillingRootReducerV6,
    siteOtp: SiteOtpRootReducerV6,
    siteVersionV6: SiteVersionRootReducerV6,
    whiteLabelV6: SiteWLRootReducerV6,
    authV6 : AuthRootReducerV6,
    portalSettingsV6 : SitePSRootReducerV6,
    CustomPlanV6 : CustomPlanRootReducer,
    StripeV6 : StripeRootReducer
});
