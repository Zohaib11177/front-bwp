import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteRegionAction from "Redux/V1/Sites/Site/SiteRegion/SiteRegionAction";
import SiteService from "Services/V1/SiteService";
import ToastHelper from "Helpers/ToastHelper";

function* siteRegion(data) {
    try {
        const response = yield SiteService.siteRegion(data.request);
        if (response.success) {
            yield put(SiteRegionAction.siteRegionSuccess(response.data));
        } else {
            yield put(
                SiteRegionAction.siteRegionFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteRegionSaga() {
    yield takeEvery(SITE.SITE_REGION, siteRegion);
}
