import { takeEvery, put } from "redux-saga/effects";
import SETTINGS from "Redux/V1/Settings/ActionType";
import WhiteLabelCreateAction from "Redux/V1/Settings/WhiteLabel/Post/WhiteLabelPostAction";
import SETTINGS_SERVICE from "Services/V1/SettingsService";
import ToastHelper from "Helpers/ToastHelper";

function* whiteLabelPost(data) {
    try {
        ToastHelper.info();
        const response = yield SETTINGS_SERVICE.whiteLabelPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WhiteLabelCreateAction.whiteLabelPostSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WhiteLabelCreateAction.whiteLabelPostFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(WhiteLabelCreateAction.whiteLabelPostFailed());
    }
}

export function* whiteLabelPostSaga() {
    yield takeEvery(SETTINGS.WHITE_LABEL_POST, whiteLabelPost);
}
