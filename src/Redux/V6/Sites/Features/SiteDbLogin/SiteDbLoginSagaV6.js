import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Features/ActionTypeV6";
import SiteDbLoginActionV6 from "Redux/V6/Sites/Features/SiteDbLogin/SiteDbLoginActionV6";
import DbLoginServiceV6 from "Services/V6/SiteFeatureServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteLogin(data) {
    try {
        ToastHelper.info();
        const response = yield DbLoginServiceV6.Dblogin(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                SiteDbLoginActionV6.siteDbLoginSuccess(response.data.one_click)
            );
            window.open(response.data.one_click.url, "_blank");
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteDbLoginActionV6.siteDbLoginFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteDbLoginSagaV6() {
    yield takeEvery(SITE.SITE_DB_LOGIN_V6, siteLogin);
}
