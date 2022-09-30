import { put, takeLatest } from "redux-saga/effects";
import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteAddonAction from "Redux/V1/Sites/Site/SiteAddon/SiteAddonAction";
import SiteService from "Services/V1/SiteService";

function* siteAddon(data) {
    try {
        const response = yield SiteService.siteAddon(data.request);
        if (response.success) {
            yield put(SiteAddonAction.siteAddonSuccess(response.data));
        } else {
            yield put(SiteAddonAction.siteAddonFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SiteAddonSaga() {
    yield takeLatest(SITE.SITE_ADDON, siteAddon);
}
