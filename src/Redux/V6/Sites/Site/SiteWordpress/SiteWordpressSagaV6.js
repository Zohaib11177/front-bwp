import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteWordpressActionV6 from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressActionV6";
import WordpressServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteWordpress(data) {
    try {
        const response = yield WordpressServiceV6.getWordpress(data.request);
        if (response.success) {
            yield put(
                SiteWordpressActionV6.siteWordpressSuccess(
                    response.data.wordpress
                )
            );
        } else {
            yield put(
                SiteWordpressActionV6.siteWordpressFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteWordpressSagaV6() {
    yield takeEvery(SITE.SITE_WORDPRESS_V6, siteWordpress);
}
