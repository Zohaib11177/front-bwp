import { all } from "redux-saga/effects";
import { SiteCreateSagaV6 } from "Redux/V6/Sites/Site/Post/SitePostSagaV6";
import { SiteRegionSagaV6 } from "Redux/V6/Sites/Site/SiteRegion/SiteRegionSagaV6";
import { SitePlanSagaV6 } from "Redux/V6/Sites/Site/SitePlan/SitePlanSagaV6";
import { SiteAddonSagaV6 } from "Redux/V6/Sites/Site/SiteAddon/SiteAddonSagaV6";
import { SiteDomainSagaV6 } from "Redux/V6/Sites/Site/SiteDomain/SiteDomainSagaV6";
import { SiteResourceSagaV6 } from "Redux/V6/Sites/Site/SiteResource/SiteResourceSagaV6";
import { SiteDetailSagaV6 } from "Redux/V6/Sites/Site/SiteDetail/SiteDetailSagaV6";
import { SiteDatabaseSagaV6 } from "Redux/V6/Sites/Site/SiteDatabase/SiteDatabaseSagaV6";
import { SiteWordpressSagaV6 } from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressSagaV6";
import { SitePagespeedSagaV6 } from "Redux/V6/Sites/Site/SitePagespeed/SitePagespeedSagaV6";
import { SiteLoginSagaV6 } from "Redux/V6/Sites/Site/SiteLogin/SiteLoginSagaV6";
import { SiteDeleteSagaV6 } from "Redux/V6/Sites/Site/SiteDelete/SiteDeleteSagaV6";
import { SiteCancelDeleteSagaV6 } from "Redux/V6/Sites/Site/SiteCancelDelete/SiteCancelDeleteSagaV6";
import { SiteInstantDeleteSagaV6 } from "Redux/V6/Sites/Site/SiteInstantDelete/SiteInstantDeleteSagaV6";
import { RefreshPagespeedSagaV6 } from "Redux/V6/Sites/Site/RefreshPagespeed/RefreshPagespeedSagaV6";
import { PagespeedEnableSagaV6 } from "Redux/V6/Sites/Site/SitePagespeed/Put/PagespeedEnableSagaV6";
import { SiteCustomerDetailSagaV6 } from "Redux/V6/Sites/Site/SiteCustomerDetail/SiteCustomerDetailSagaV6";
export default function* SiteSubRootSagaV6() {
    yield all([
        SiteCreateSagaV6(),
        SiteRegionSagaV6(),
        SitePlanSagaV6(),
        SiteAddonSagaV6(),
        SiteDomainSagaV6(),
        SiteResourceSagaV6(),
        SiteDetailSagaV6(),
        SiteDatabaseSagaV6(),
        SiteWordpressSagaV6(),
        SitePagespeedSagaV6(),
        SiteLoginSagaV6(),
        SiteDeleteSagaV6(),
        SiteCancelDeleteSagaV6(),
        SiteInstantDeleteSagaV6(),
        RefreshPagespeedSagaV6(),
        PagespeedEnableSagaV6(),
        SiteCustomerDetailSagaV6(),
    ]);
}
