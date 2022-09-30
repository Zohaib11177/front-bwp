import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WordpressContainerActionV1 from "Redux/V1/Sites/Wordpress/WordpressContainerV1/WordpressContainerActionV1";
import WordpressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";

function* wordpressContainerV1(data) {
    try {
        const response = yield WordpressService.wordpressContainerV1(
            data.request
        );
        if (response.success) {
            yield put(
                WordpressContainerActionV1.wordpressContainerSuccess(
                    response.data
                )
            );
        } else {
            yield put(
                WordpressContainerActionV1.wordpressContainerFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* WordpressContainerSagaV1() {
    yield takeEvery(WORDPRESS.WORDPRESS_CONTAINER_V1, wordpressContainerV1);
}
