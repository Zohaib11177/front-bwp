import { takeEvery, put } from 'redux-saga/effects';
import SETTINGS from 'Redux/V1/Settings/ActionType';
import NerdModeAction from 'Redux/V1/Settings/NerdMode/NerdModeAction';
import SETTINGS_SERVICE from 'Services/V1/SettingsService';
import ToastHelper from 'Helpers/ToastHelper';
// import AccountBusiness from "Businesses/AccountBusiness";

function* nerdMode(data) {
    try {
        ToastHelper.info();
        const response = yield SETTINGS_SERVICE.nerdMode(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(NerdModeAction.nerdModeSuccess(response.data));
            localStorage.setItem(
                'permissions',
                JSON.stringify(response.data.permissions)
            );
            // const index =
            //     response.data.permissions.indexOf('account_nerd_mode');
            // const operation = index > -1 ? "Enable" : "Disable";

            setInterval(() => {
                window.location.reload();
            }, 1500);
        } else {
            ToastHelper.error(response.error.message);
            yield put(NerdModeAction.nerdModeFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(NerdModeAction.nerdModeFailed());
    }
}

export function* NerdModeSaga() {
    yield takeEvery(SETTINGS.NERD_MODE, nerdMode);
}
