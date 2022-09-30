import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import { takeEvery } from "redux-saga/effects";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
import { put } from "redux-saga/effects";
import SiteDetailServiceV6 from "Services/V6/SiteServiceV6";

function* siteDetail(data) {
    try {
        const response = yield SiteDetailServiceV6.getSiteDetail(data.request);
        if (response.success) {
            yield put(SiteDetailActionV6.siteDetailSuccess(response.data.site));
        } else {
            yield put(SiteDetailActionV6.siteDetailFailed());
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SiteDetailSagaV6() {
    yield takeEvery(SITE.SITE_DETAIL_V6, siteDetail);
}
