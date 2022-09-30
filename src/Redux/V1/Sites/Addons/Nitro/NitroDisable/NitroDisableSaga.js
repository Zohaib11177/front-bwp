import { takeEvery, put } from 'redux-saga/effects';
import NITRO from 'Redux/V1/Sites/Addons/Nitro/ActionType';
import NitroDisableAction from 'Redux/V1/Sites/Addons/Nitro/NitroDisable/NitroDisableAction';
import NitroDetailAction from 'Redux/V1/Sites/Addons/Nitro/First/NitroFirstAction';
import NitroService from 'Services/V1/NitroService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* nitroDisable(data) {
    try {
        ToastHelper.info();
        const response = yield NitroService.nitroDisable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(NitroDisableAction.nitroDisableSuccess(response.data));
            yield put(NitroDetailAction.nitroFirst(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                NitroDisableAction.nitroDisableFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(NitroDisableAction.nitroDisableFailed());
    }
}

export function* NitroDisableSaga() {
    yield takeEvery(NITRO.NITRO_DISABLE, nitroDisable);
}
