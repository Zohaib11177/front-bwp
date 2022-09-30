import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WpUpdateAllAction from "Redux/V1/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllAction";
import WordpressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";

function* wpUpdateAll(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressService.wordpressUpdateAll(
            data.request
        );
        if (response.success) {
            ToastHelper.success("Wordpress Update has been queued.");
            yield put(WpUpdateAllAction.wpUpdateAllSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WpUpdateAllAction.wpUpdateAllFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WpUpdateAllAction.wpUpdateAllFailed());
    }
}

export function* WpUpdateAllSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_UPDATE_ALL, wpUpdateAll);
}
