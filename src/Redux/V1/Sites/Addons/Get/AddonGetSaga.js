import { takeEvery, put } from "redux-saga/effects";
import ADDON from "Redux/V1/Sites/Addons/ActionType";
import AddonListAction from "Redux/V1/Sites/Addons/Get/AddonGetAction";
import AddonService from "Services/V1/AddonService";

function* addonGet(data) {
    try {
        const response = yield AddonService.addonGet(data.request);
        if (response.success) {
            yield put(AddonListAction.addonGetSuccess(response.data));
        } else {
            yield put(AddonListAction.addonGetFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* AddonListSaga() {
    yield takeEvery(ADDON.ADDON_GET, addonGet);
}
