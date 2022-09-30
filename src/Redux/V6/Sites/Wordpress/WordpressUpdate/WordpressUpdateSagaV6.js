import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";
import WordpressUpdateActionV6 from "Redux/V6/Sites/Wordpress/WordpressUpdate/WordpressUpdateActionV6";
import WordpressServiceV6 from "Services/V6/WordpressServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* wordpressUpdate(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressServiceV6.wordpressUpdate(data.request);
        if (response.success) {
            ToastHelper.success("Your request has been enqueued");
            yield put(
                WordpressUpdateActionV6.wordpressUpdateSuccess(data.request)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressUpdateActionV6.wordpressUpdateFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WordpressUpdateActionV6.wordpressUpdateFailed());
    }
}

export function* WordpressUpdateSagaV6() {
    yield takeEvery(WORDPRESS.WORDPRESS_UPDATE_V6, wordpressUpdate);
}
