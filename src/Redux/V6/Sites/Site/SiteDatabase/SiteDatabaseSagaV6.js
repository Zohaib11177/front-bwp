import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteDatabaseActionV6 from "Redux/V6/Sites/Site/SiteDatabase/SiteDatabaseActionV6";
import DatabaseServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteDatabase(data) {
    try {
        const response = yield DatabaseServiceV6.getSiteDatabase(data.request);
        if (response.success) {
            yield put(SiteDatabaseActionV6.siteDatabaseSuccess(response.data));
        } else {
            yield put(
                SiteDatabaseActionV6.siteDatabaseFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteDatabaseSagaV6() {
    yield takeEvery(SITE.SITE_DATABASE_V6, siteDatabase);
}
