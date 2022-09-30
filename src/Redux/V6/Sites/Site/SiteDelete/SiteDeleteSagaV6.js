import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteDeleteActionV6 from "Redux/V6/Sites/Site/SiteDelete/SiteDeleteActionV6";
import DeleteServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";

function* siteDelete(data) {
    try {
        ToastHelper.info();
        const response = yield DeleteServiceV6.siteDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteDeleteActionV6.siteDeleteSuccess(response.data));
            yield put(SiteDetailActionV6.siteDetail(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteDeleteActionV6.siteDeleteFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteDeleteSagaV6() {
    yield takeEvery(SITE.SITE_DELETE_V6, siteDelete);
}
