import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WpUpdateAllActionV1 from "Redux/V1/Sites/Wordpress/WordpressUpdateAllV1/WordpressUpdateAllActionV1";
import WordpressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";

function* wpUpdateAllV1(data) {
    try {
        ToastHelper.info();
        const response = yield WordpressService.wordpressUpdateAllV1(
            data.request
        );
        if (response.success) {
            ToastHelper.success("Wordpress Update has been queued.");
            yield put(WpUpdateAllActionV1.wpUpdateAllSuccess(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WpUpdateAllActionV1.wpUpdateAllFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WpUpdateAllActionV1.wpUpdateAllFailed());
    }
}

export function* WpUpdateAllSagaV1() {
    yield takeEvery(WORDPRESS.WORDPRESS_UPDATE_ALL_V1, wpUpdateAllV1);
}
