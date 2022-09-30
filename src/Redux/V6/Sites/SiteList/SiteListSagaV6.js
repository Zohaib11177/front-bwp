import { takeEvery, put } from 'redux-saga/effects';
import SITE_V6 from 'Redux/V6/Sites/SiteList/SiteListActionTypeV6';
import SiteActionV6 from 'Redux/V6/Sites/SiteList/SiteListActionV6';
import SiteServiceV6 from 'Services/V6/SiteServiceV6';
// import ToastHelper from "Helpers/ToastHelper";

function* siteGetV6(data) {
    try {
        const response = yield SiteServiceV6.siteGetV6(data.request);
        if (response.success) {
            yield put(SiteActionV6.siteGetSuccessV6(response.data));
        } else {
            yield put(SiteActionV6.siteGetFailedV6(response.error.message));
        }
    } catch (error) {
        // ToastHelper.error();
    }
}

export function* SiteListSagaV6() {
    yield takeEvery(SITE_V6.SITE_V6_GET, siteGetV6);
}

export default SiteListSagaV6;
