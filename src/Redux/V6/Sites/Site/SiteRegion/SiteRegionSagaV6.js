import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteRegionActionV6 from "Redux/V6/Sites/Site/SiteRegion/SiteRegionActionV6";
import RegionServiceV6 from "Services/V6/SiteLaunchServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteRegion(data) {
    try {
        const response = yield RegionServiceV6.getRegions(data.request);
        if (response.success) {
            yield put(SiteRegionActionV6.siteRegionSuccess(response.data));
        } else {
            yield put(
                SiteRegionActionV6.siteRegionFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteRegionSagaV6() {
    yield takeEvery(SITE.SITE_REGION_V6, siteRegion);
}
