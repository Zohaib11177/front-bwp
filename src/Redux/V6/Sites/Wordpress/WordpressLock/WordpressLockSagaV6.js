import { takeEvery, put } from "redux-saga/effects";

import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";
import WordpressLockActionV6 from "Redux/V6/Sites/Wordpress/WordpressLock/WordpressLockActionV6";
import WordpressServiceV6 from "Services/V6/WordpressServiceV6";
import WordpressListAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import SiteWordpressActionV6 from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressActionV6";
import ToastHelper from "Helpers/ToastHelper";

function* wordpressLock(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressServiceV6.wordpressLock(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressLockActionV6.wordpressLockSuccess(response.data)
            );
            yield put(WordpressListAction.wordpressGet(data.request.identity));
            if (data.request.host) {
                yield put(
                    SiteWordpressActionV6.siteWordpress(data.request.host)
                );
            }
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressLockActionV6.wordpressLockFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WordpressLockActionV6.wordpressLockFailed());
    }
}

export function* WordpressLockSagaV6() {
    yield takeEvery(WORDPRESS.WORDPRESS_LOCK_V6, wordpressLock);
}
