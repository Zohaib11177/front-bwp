import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteIdentityAction from "Redux/V1/Sites/Site/SiteIdentity/SiteIdentityAction";
import SiteService from "Services/V1/SiteService";
import ToastHelper from "Helpers/ToastHelper";

function* siteIdentity(data) {
    try {
        const response = yield SiteService.siteIdentity(data.request);
        if (response.success) {
            yield put(SiteIdentityAction.siteIdentitySuccess(response.data));
        } else {
            yield put(
                SiteIdentityAction.siteIdentityFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* SiteIdentitySaga() {
    yield takeEvery(SITE.SITE_IDENTITY, siteIdentity);
}
