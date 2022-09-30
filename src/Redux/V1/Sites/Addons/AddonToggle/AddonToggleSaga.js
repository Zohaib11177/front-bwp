import { takeEvery, put } from "redux-saga/effects";
import ADDON from "Redux/V1/Sites/Addons/ActionType";
import AddonToggleAction from "Redux/V1/Sites/Addons/AddonToggle/AddonToggleAction";
import AddonService from "Services/V1/AddonService";
import ToastHelper from "Helpers/ToastHelper";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
function* addonToggle(data) {
    try {
        const response = yield AddonService.addonToggle(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            console.log(data.request);
            yield put(AddonToggleAction.addonToggleSuccess(response.data));
            yield put(SiteDetailActionV6.siteDetail(data.request.host));
        } else {
            yield put(
                AddonToggleAction.addonToggleFailed(response.error.message)
            );
            ToastHelper.error(response.error.message);
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(AddonToggleAction.addonToggleFailed());
    }
}

export function* AddonToggleSaga() {
    yield takeEvery(ADDON.ADDON_TOGGLE, addonToggle);
}
