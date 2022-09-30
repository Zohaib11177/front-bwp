import { put, takeLatest } from "redux-saga/effects";
import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteCostingAction from "Redux/V1/Sites/Site/SiteCosting/SiteCostingAction";
import SiteService from "Services/V1/SiteService";

function* siteCosting(data) {
    try {
        const response = yield SiteService.siteCosting(data.request);
        if (response.success) {
            yield put(
                SiteCostingAction.siteCostingSuccess(
                    response.data.prodcut_costing
                )
            );
        } else {
            yield put(
                SiteCostingAction.siteCostingFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SiteCostingSaga() {
    yield takeLatest(SITE.SITE_COSTING, siteCosting);
}
