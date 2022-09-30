import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteCancelDeleteActionV6 from "Redux/V6/Sites/Site/SiteCancelDelete/SiteCancelDeleteActionV6";
import CancelDeleteServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";

function* siteCancelDelete(data) {
    try {
        ToastHelper.info();
        const response = yield CancelDeleteServiceV6.siteDeleteCancel(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                SiteCancelDeleteActionV6.siteCancelDeleteSuccess(response.data)
            );
            yield put(SiteDetailActionV6.siteDetail(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteCancelDeleteActionV6.siteCancelDeleteFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteCancelDeleteSagaV6() {
    yield takeEvery(SITE.SITE_CANCEL_DELETE_V6, siteCancelDelete);
}
