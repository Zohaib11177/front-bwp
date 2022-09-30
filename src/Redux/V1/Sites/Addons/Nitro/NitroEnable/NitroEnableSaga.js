import { takeEvery, put } from 'redux-saga/effects';
import NITRO from 'Redux/V1/Sites/Addons/Nitro/ActionType';
import NitroEnableAction from 'Redux/V1/Sites/Addons/Nitro/NitroEnable/NitroEnableAction';
import NitroDetailAction from 'Redux/V1/Sites/Addons/Nitro/First/NitroFirstAction';
import NitroService from 'Services/V1/NitroService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* nitroEnable(data) {
    try {
        ToastHelper.info();
        const response = yield NitroService.nitroEnable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(NitroEnableAction.nitroEnableSuccess(response.data));
            yield put(NitroDetailAction.nitroFirst(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                NitroEnableAction.nitroEnableFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(NitroEnableAction.nitroEnableFailed());
    }
}

export function* NitroEnableSaga() {
    yield takeEvery(NITRO.NITRO_ENABLE, nitroEnable);
}
