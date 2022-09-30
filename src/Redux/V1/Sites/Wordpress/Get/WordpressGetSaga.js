import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WordpressListAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import WordpressService from "Services/V1/WordpressService";

function* wordpressGet(data) {
    try {
        const response = yield WordpressService.wordpressGet(data.request);
        if (response.success) {
            yield put(WordpressListAction.wordpressGetSuccess(response.data));
        } else {
            yield put(
                WordpressListAction.wordpressGetFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* WordpressListSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_GET, wordpressGet);
}
