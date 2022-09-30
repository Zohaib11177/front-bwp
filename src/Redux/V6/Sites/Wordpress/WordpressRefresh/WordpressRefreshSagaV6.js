import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";
import WordpressRefreshActionV6 from "Redux/V6/Sites/Wordpress/WordpressRefresh/WordpressRefreshActionV6";
import WordpressServiceV6 from "Services/V6/WordpressServiceV6";
import ToastHelper from "Helpers/ToastHelper";
import SiteWordpressActionV6 from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressActionV6";

function* wordpressRefresh(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressServiceV6.wordpressRefresh(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressRefreshActionV6.wordpressRefreshSuccess(response.data)
            );
            yield put(
                SiteWordpressActionV6.siteWordpressSuccess(
                    response.data.wordpress
                )
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressRefreshActionV6.wordpressRefreshFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WordpressRefreshActionV6.wordpressRefreshFailed());
    }
}

export function* WordpressRefreshSagaV6() {
    yield takeEvery(WORDPRESS.WORDPRESS_REFRESH_V6, wordpressRefresh);
}
