import { takeEvery, put } from 'redux-saga/effects';

import SITE from 'Redux/V6/Sites/Site/ActionTypeV6';
import SitePagespeedActionV6 from 'Redux/V6/Sites/Site/SitePagespeed/SitePagespeedActionV6';
import SiteSpeedServiceV6 from 'Services/V6/SiteServiceV6';
// import ToastHelper from "Helpers/ToastHelper";

function* sitePagespeed(data) {
    try {
        const response = yield SiteSpeedServiceV6.getPagespeed(data.request);
        if (response.success) {
            yield put(
                SitePagespeedActionV6.sitePagespeedSuccess(response.data)
            );
        } else {
            yield put(
                SitePagespeedActionV6.sitePagespeedFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        // ToastHelper.error();
    }
}

export function* SitePagespeedSagaV6() {
    yield takeEvery(SITE.SITE_PAGESPEED_V6, sitePagespeed);
}
