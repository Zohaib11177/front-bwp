import { takeEvery, put } from "redux-saga/effects";
import SITE_V3 from "Redux/V3/Sites/SiteList/SiteListActionTypeV3";
import SiteActionV3 from "Redux/V3/Sites/SiteList/SiteListActionV3";
import SiteServiceV3 from "Services/V3/SiteServiceV3";
import ToastHelper from "Helpers/ToastHelper";
// import SiteBusiness from "Businesses/SiteBusiness";

function* siteGetV3(data) {
    try {
        const response = yield SiteServiceV3.siteGetV3(data.request);
        if (response.success) {
            yield put(SiteActionV3.siteGetSuccessV3(response.data));
            // window.analytics.track(
            //     "Active Sites Count",
            //     SiteBusiness.trackingSiteList(response.data.pagination.total)
            // );
        } else {
            yield put(SiteActionV3.siteGetFailedV3(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* SiteListSagaV3() {
    yield takeEvery(SITE_V3.SITE_V3_GET, siteGetV3);
}

export default SiteListSagaV3;
