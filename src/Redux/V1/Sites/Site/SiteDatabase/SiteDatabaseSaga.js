import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteDatabaseAction from "Redux/V1/Sites/Site/SiteDatabase/SiteDatabaseAction";
import SiteService from "Services/V1/SiteService";
import ToastHelper from "Helpers/ToastHelper";

function* siteDatabase(data) {
    try {
        const response = yield SiteService.siteDatabase(data.request);
        if (response.success) {
            yield put(SiteDatabaseAction.siteDatabaseSuccess(response.data));
        } else {
            yield put(
                SiteDatabaseAction.siteDatabaseFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* SiteDatabaseSaga() {
    yield takeEvery(SITE.SITE_DATABASE, siteDatabase);
}
