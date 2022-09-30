import { takeEvery, put } from "redux-saga/effects";

import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WordpressLockAction from "Redux/V1/Sites/Wordpress/WordpressLock/WordpressLockAction";
import WordpressService from "Services/V1/WordpressService";
import WordpressListAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import SiteWordpressActionV6 from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressActionV6";
import ToastHelper from "Helpers/ToastHelper";

function* wordpressLock(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressService.wordpressLock(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(WordpressLockAction.wordpressLockSuccess(response.data));
            yield put(WordpressListAction.wordpressGet(data.request.identity));
            if (data.request.host) {
                yield put(
                    SiteWordpressActionV6.siteWordpress(data.request.host)
                );
            }
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressLockAction.wordpressLockFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WordpressLockAction.wordpressLockFailed());
    }
}

export function* WordpressLockSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_LOCK, wordpressLock);
}
