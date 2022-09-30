import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/SiteVersion/ActionTypeV6";
import SiteVersionActionV6 from "Redux/V6/Sites/SiteVersion/Put/SitePutActionV6";
import SiteServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteVersionPut(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV6.siteVersionChange(data.request.host, data.request.value);
        console.log(response)
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteVersionActionV6.sitePutSuccess(response.data));
            setTimeout(function () {
                window.location.reload()
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteVersionActionV6.sitePutFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error)
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteVersionActionV6.sitePutFailed());
    }
}

export function* siteVersionPutSagaV6() {
    yield takeEvery(SITE.SITE_VERSION_PUT_V6, siteVersionPut);
}
