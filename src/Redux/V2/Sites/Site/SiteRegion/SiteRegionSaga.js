import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V2/Sites/Site/ActionTypeV2";
import SiteRegionAction from "Redux/V2/Sites/Site/SiteRegion/SiteRegionAction";
import RegionService from "Services/V2/RegionService";
import ToastHelper from "Helpers/ToastHelper";

function* siteRegion(data) {
    try {
        const response = yield RegionService.getRegions(data.request);
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

export function* SiteRegionSagaV2() {
    yield takeEvery(SITE.SITE_REGION_V2, siteRegion);
}
