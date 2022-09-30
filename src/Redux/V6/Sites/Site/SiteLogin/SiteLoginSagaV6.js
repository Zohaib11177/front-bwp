import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteLoginActionV6 from "Redux/V6/Sites/Site/SiteLogin/SiteLoginActionV6";
import LoginServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteLogin(data) {
    try {
        ToastHelper.info();
        const response = yield LoginServiceV6.login(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                SiteLoginActionV6.siteLoginSuccess(response.data.one_click)
            );
            window.open(response.data.one_click.url, "_blank");
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteLoginActionV6.siteLoginFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteLoginSagaV6() {
    yield takeEvery(SITE.SITE_LOGIN_V6, siteLogin);
}
