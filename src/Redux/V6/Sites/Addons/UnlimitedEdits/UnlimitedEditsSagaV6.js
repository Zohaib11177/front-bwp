import { takeEvery, put } from "redux-saga/effects";
import ADDON from "Redux/V6/Sites/Addons/ActionTypeV6";
import UnlimitedEditsActionV6 from "Redux/V6/Sites/Addons/UnlimitedEdits/UnlimitedEditsActionV6";
import AddonServiceV6 from "Services/V6/AddonServiceV6";
import ToastHelper from "Helpers/ToastHelper";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
function* addonToggle(data) {
    try {
        const response = yield AddonServiceV6.unlimitedEdits(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            console.log(data.request);
            yield put(
                UnlimitedEditsActionV6.unlimitedEditsSuccess(response.data)
            );
            yield put(SiteDetailActionV6.siteDetail(data.request.host));
        } else {
            yield put(
                UnlimitedEditsActionV6.unlimitedEditsFailed(
                    response.error.message
                )
            );
            ToastHelper.error(response.error.message);
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(UnlimitedEditsActionV6.unlimitedEditsFailed());
    }
}

export function* UnlimitedEditsSagaV6() {
    yield takeEvery(ADDON.UNLIMITED_EDITS_V6, addonToggle);
}
