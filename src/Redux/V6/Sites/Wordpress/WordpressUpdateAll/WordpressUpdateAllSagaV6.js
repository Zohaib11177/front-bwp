import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";
import WordpressUpdateAllActionV6 from "Redux/V6/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllActionV6";
import WordpressServiceV6 from "Services/V6/WordpressServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* wpUpdateAll(data) {
    try {
        ToastHelper.info();
        let data_new = {};
        data_new.identities = data.request;
        data_new.slug = "theme_all";
        data_new.type = "theme";
        let response = yield WordpressServiceV6.wordpressUpdate(data_new);
        data_new.slug = "plugin_all";
        data_new.type = "plugin";
        response = yield WordpressServiceV6.wordpressUpdate(data_new);
        data_new.type = "core";
        data_new.slug = "core";
        response = yield WordpressServiceV6.wordpressUpdate(data_new);
        if (response.success) {
            ToastHelper.success("Wordpress Update has been queued.");
            yield put(WordpressUpdateAllActionV6.wpUpdateAllSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressUpdateAllActionV6.wpUpdateAllFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WordpressUpdateAllActionV6.wpUpdateAllFailed());
    }
}

export function* WpUpdateAllSagaV6() {
    yield takeEvery(WORDPRESS.WORDPRESS_UPDATE_ALL_V6, wpUpdateAll);
}
