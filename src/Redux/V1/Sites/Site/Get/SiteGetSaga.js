import { takeEvery, put } from "redux-saga/effects";
import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteAction from "Redux/V1/Sites/Site/Get/SiteGetAction";
import SiteService from "Services/V1/SiteService";
import ToastHelper from "Helpers/ToastHelper";
// import SiteBusiness from "Businesses/SiteBusiness";

function* siteGet(data) {
    try {
        const response = yield SiteService.siteGet(data.request);
        if (response.success) {
            yield put(SiteAction.siteGetSuccess(response.data));
            // window.analytics.track(
            //     "Active Sites Count",
            //     SiteBusiness.trackingSiteList(response.data.pagination.total)
            // );
        } else {
            yield put(SiteAction.siteGetFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* SiteListSaga() {
    yield takeEvery(SITE.SITE_GET, siteGet);
}
