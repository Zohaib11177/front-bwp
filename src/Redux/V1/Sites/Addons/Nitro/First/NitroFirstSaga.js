import { takeEvery, put } from "redux-saga/effects";
import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";
import NitroDetailAction from "Redux/V1/Sites/Addons/Nitro/First/NitroFirstAction";
import NitroService from "Services/V1/NitroService";
import ToastHelper from "Helpers/ToastHelper";

function* nitroFirst(data) {
    try {
        const response = yield NitroService.nitroFirst(data.request);
        if (response.success) {
            yield put(NitroDetailAction.nitroFirstSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                NitroDetailAction.nitroFirstFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* NitroDetailSaga() {
    yield takeEvery(NITRO.NITRO_FIRST, nitroFirst);
}
