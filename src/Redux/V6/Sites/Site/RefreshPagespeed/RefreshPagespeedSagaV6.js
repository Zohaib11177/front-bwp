import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import RefreshPagespeedActionV6 from "Redux/V6/Sites/Site/RefreshPagespeed/RefreshPagespeedActionV6";
import RefreshSpeedServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* refreshPagespeed(data) {
    try {
        const response = yield RefreshSpeedServiceV6.refreshPagespeed(
            data.request
        );
        if (response.success) {
            yield put(
                RefreshPagespeedActionV6.refreshPagespeedSuccess(response.data)
            );
            ToastHelper.success("Your request has been enqueued.");
        } else {
            yield put(
                RefreshPagespeedActionV6.refreshPagespeedFailed(
                    response.error.message
                )
            );
            ToastHelper.error(response.error.message);
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* RefreshPagespeedSagaV6() {
    yield takeEvery(SITE.REFRESH_PAGESPEED_V6, refreshPagespeed);
}
