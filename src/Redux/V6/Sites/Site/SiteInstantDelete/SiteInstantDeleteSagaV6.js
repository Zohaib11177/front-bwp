import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteInstantDeleteActionV6 from "Redux/V6/Sites/Site/SiteInstantDelete/SiteInstantDeleteActionV6";
import InstantDeleteServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteInstantDelete(data) {
    try {
        ToastHelper.info();
        const response = yield InstantDeleteServiceV6.siteDeleteInstant(
            data.request.host
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                SiteInstantDeleteActionV6.siteInstantDeleteSuccess(
                    response.data
                )
            );
            setTimeout(function () {
                window.location.href = "/sites/" + data.request.primary_domain;
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteInstantDeleteActionV6.siteInstantDeleteFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteInstantDeleteSagaV6() {
    yield takeEvery(SITE.SITE_INSTANT_DELETE_V6, siteInstantDelete);
}
