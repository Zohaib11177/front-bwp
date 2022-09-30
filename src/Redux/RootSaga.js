import { all } from 'redux-saga/effects';
import { getDashboardSaga } from 'Redux/V1/Dashboard/DashboardSaga';
import { getSiteDetailSaga } from 'Redux/V1/Sites/Detail/SiteDetailSaga';
import { postDomainSaga } from 'Redux/V1/Sites/Domain/Post/Saga';
import { deleteDomainSaga } from 'Redux/V1/Sites/Domain/Delete/Saga';
import { getSslSaga } from 'Redux/V1/Sites/Ssl/Get/Saga';
import { sslEnableSaga } from 'Redux/V1/Ssl/Put/SslPutSaga';
import { disableSslSaga } from 'Redux/V1/Sites/Ssl/Delete/Saga';
import { forceRedirectSaga } from 'Redux/V1/ForceRedirect/ForcePutSaga';
import { topupSaga } from 'Redux/V1/Topup/TopupPutSaga';
import { domainGetSaga } from 'Redux/V1/Domain/Get/DomainGetSaga';
import { domainPutSaga } from 'Redux/V1/Domain/Put/DomainPutSaga';
import { sslDeleteSaga } from 'Redux/V1/Ssl/Delete/SslDeleteSaga';
import BillingRootSaga from 'Redux/V1/Billing/BillingRootSaga';
import AuthRootSaga from 'Redux/V1/Auth/AuthRootSaga';
import AuthRootSaga3 from 'Redux/V3/Auth/AuthRootSaga3';
import AffiliateRootSaga from 'Redux/V1/Affiliate/AffiliateRootSaga';
import { searchGetSaga } from 'Redux/V1/Domain/SmartSearch/SearchGetSaga';
import ProfileRootSaga from 'Redux/V1/Profiles/ProfileRootSaga';
import SiteRootSaga from 'Redux/V1/Sites/SiteRootSaga';
import NotificationRootSaga from 'Redux/V1/Notification/NotificationRootSaga';
import SiteRootSagaV2 from 'Redux/V2/Sites/SiteRootSagaV2';
import StagingRootSaga from 'Redux/V1/Staging/StagingRootSaga';
import ProfileRootSagaV2 from 'Redux/V2/Profiles/ProfileRootSagaV2';
import AuthRootSagaV4 from 'Redux/V4/Auth/AuthRootSagaV4';
import AuthRootSagaV2 from 'Redux/V2/Auth/AuthRootSagaV2';
import SiteRootSagaV3 from 'Redux/V3/Sites/SiteRootSagaV3';
import { SslRenewSaga } from 'Redux/V1/Ssl/SslRenew/SslRenewSaga';
import SettingsRootSaga from './V1/Settings/SettingsRootSaga';
import { ChangePasswordPutSaga } from 'Redux/V1/ChangePassword/ChangePasswordSaga';
import { newDesignSaga } from 'Redux/V3/Sites/NewDesign/NewDesignSaga';
import AlertRootSagaV3 from 'Redux/V3/SystemAlerts/AlertRootSagaV3';
import SiteRootSagaV6 from 'Redux/V6/Sites/SiteRootSagaV6';
import StagingRootSagaV6 from 'Redux/V6/Staging/StagingRootSagaV6';
import { BillingRootSagaV6 } from 'Redux/V6/Billing/BillingRootSagaV6';
import SiteOtpRootSagaV6 from 'Redux/V6/Sites/SiteOtp/SiteOtpRootSagaV6';
import SitesVersionRootSagaV6 from 'Redux/V6/Sites/SiteVersion/SiteVersionRootSagaV6';
import SiteWLRootSagaV6 from 'Redux/V6/Sites/SiteWhiteLabel/SiteWLRootSagaV6';
import AuthRootSagaV6 from 'Redux/V6/Auth/AuthRootSagaV6';
import SitePSRootSagaV6 from 'Redux/V6/Sites/SitePortalSettings/SitePSRootSagaV6';
import CustomPlanRootSaga from 'Redux/V6/CustomPlan/CustomPlanRootSaga';
import StripeRootSaga from 'Redux/V6/Stripe/StripeRootSaga';

export default function* rootSaga() {
    yield all([
        BillingRootSaga(),
        AuthRootSaga(),
        AuthRootSaga3(),
        AffiliateRootSaga(),
        getSiteDetailSaga(),
        getDashboardSaga(),
        postDomainSaga(),
        deleteDomainSaga(),
        getSslSaga(),
        sslEnableSaga(),
        disableSslSaga(),
        forceRedirectSaga(),
        topupSaga(),
        domainGetSaga(),
        domainPutSaga(),
        sslDeleteSaga(),
        searchGetSaga(),
        ProfileRootSaga(),
        SiteRootSaga(),
        SiteRootSagaV2(),
        StagingRootSaga(),
        AuthRootSagaV4(),
        ProfileRootSagaV2(),
        NotificationRootSaga(),
        AuthRootSagaV2(),
        SiteRootSagaV3(),
        SslRenewSaga(),
        SettingsRootSaga(),
        ChangePasswordPutSaga(),
        newDesignSaga(),
        AlertRootSagaV3(),
        SiteRootSagaV6(),
        StagingRootSagaV6(),
        BillingRootSagaV6(),
        SiteOtpRootSagaV6(),
        SitesVersionRootSagaV6(),
        SiteWLRootSagaV6(),
        AuthRootSagaV6(),
        SitePSRootSagaV6(),
        CustomPlanRootSaga(),
        StripeRootSaga()
    ]);
}
