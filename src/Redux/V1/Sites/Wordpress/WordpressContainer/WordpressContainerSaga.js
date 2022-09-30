import { takeEvery, put } from "redux-saga/effects";

import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WordpressContainerAction from "Redux/V1/Sites/Wordpress/WordpressContainer/WordpressContainerAction";
import WordpressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";

function* wordpressContainer(data) {
    try {
        const response = yield WordpressService.wordpressContainer(
            data.request
        );
        if (response.success) {
            yield put(
                WordpressContainerAction.wordpressContainerSuccess(
                    response.data
                )
            );
        } else {
            yield put(
                WordpressContainerAction.wordpressContainerFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* WordpressContainerSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_CONTAINER, wordpressContainer);
}
