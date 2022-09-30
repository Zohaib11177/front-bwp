import { put, takeLatest } from "redux-saga/effects";
import SITE from "Redux/V2/Sites/Site/ActionTypeV2";
import SiteCostingActionV2 from "Redux/V2/Sites/Site/SiteCosting/SiteCostingActionV2";
import SiteServiceV2 from "Services/V2/SiteServiceV2";

function* siteCosting(data) {
    try {
        const response = yield SiteServiceV2.siteCosting(data.request);
        if (response.success) {
            yield put(
                SiteCostingActionV2.siteCostingSuccess(
                    response.data.product_costing
                )
            );
        } else {
            yield put(
                SiteCostingActionV2.siteCostingFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        yield put(SiteCostingActionV2.siteCostingFailed());
    }
}

export function* SiteCostingSagaV2() {
    yield takeLatest(SITE.SITE_COSTING_V2, siteCosting);
}
