import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WordpressRefreshAction from "Redux/V1/Sites/Wordpress/WordpressRefresh/WordpressRefreshAction";
import WordpressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";
import WordpressListAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";

function* wordpressRefresh(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressService.wordpressRefresh(
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressRefreshAction.wordpressRefreshSuccess(response.data)
            );
            yield put(WordpressListAction.wordpressGetSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressRefreshAction.wordpressRefreshFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WordpressRefreshAction.wordpressRefreshFailed());
    }
}

export function* WordpressRefreshSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_REFRESH, wordpressRefresh);
}
