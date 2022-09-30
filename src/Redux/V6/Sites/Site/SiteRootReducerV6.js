import { combineReducers } from "redux";
import SiteCreateReducerV6 from "Redux/V6/Sites/Site/Post/SitePostReducerV6";
import RegionReducerV6 from "Redux/V6/Sites/Site/SiteRegion/SiteRegionReducerV6";
import PlanReducerV6 from "Redux/V6/Sites/Site/SitePlan/SitePlanReducerV6";
import SiteAddonReducerV6 from "Redux/V6/Sites/Site/SiteAddon/SiteAddonReducerV6";
import SiteDomainReducerV6 from "Redux/V6/Sites/Site/SiteDomain/SiteDomainReducerV6";
import SiteResourceReducerV6 from "Redux/V6/Sites/Site/SiteResource/SiteResourceReducerV6";
import SiteDetailReducerV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailReducerV6";
import SiteDatabaseReducerV6 from "Redux/V6/Sites/Site/SiteDatabase/SiteDatabaseReducerV6";
import SiteWordpressReducerV6 from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressReducerV6";
import SitePagespeedReducerV6 from "Redux/V6/Sites/Site/SitePagespeed/SitePagespeedReducerV6";
import SiteLoginReducerV6 from "Redux/V6/Sites/Site/SiteLogin/SiteLoginReducerV6";
import SiteDeleteReducerV6 from "Redux/V6/Sites/Site/SiteDelete/SiteDeleteReducerV6";
import SiteCancelDeleteReducerV6 from "Redux/V6/Sites/Site/SiteCancelDelete/SiteCancelDeleteReducerV6";
import SiteInstantDeleteReducerV6 from "Redux/V6/Sites/Site/SiteInstantDelete/SiteInstantDeleteReducerV6";
import RefreshPagespeedReducerV6 from "Redux/V6/Sites/Site/RefreshPagespeed/RefreshPagespeedReducerV6";
import PagespeedEnableReducerV6 from "Redux/V6/Sites/Site/SitePagespeed/Put/PagespeedEnableReducerV6";
import SiteCustomerDetailReducerV6 from "Redux/V6/Sites/Site/SiteCustomerDetail/SiteCustomerDetailReducerV6";

const SiteSubRootReducerV6 = combineReducers({
    createV6: SiteCreateReducerV6,
    region: RegionReducerV6,
    plan: PlanReducerV6,
    siteAddon: SiteAddonReducerV6,
    domain: SiteDomainReducerV6,
    resource: SiteResourceReducerV6,
    detail: SiteDetailReducerV6,
    database: SiteDatabaseReducerV6,
    wordpress: SiteWordpressReducerV6,
    pagespeed: SitePagespeedReducerV6,
    login: SiteLoginReducerV6,
    delete: SiteDeleteReducerV6,
    canceldelete: SiteCancelDeleteReducerV6,
    instantdelete: SiteInstantDeleteReducerV6,
    refresh_pagespeed: RefreshPagespeedReducerV6,
    enable_pagespeed: PagespeedEnableReducerV6,
    customer_detail:SiteCustomerDetailReducerV6,
});
export default SiteSubRootReducerV6;
