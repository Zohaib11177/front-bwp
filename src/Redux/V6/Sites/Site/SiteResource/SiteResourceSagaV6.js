import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteResourceActionV6 from "Redux/V6/Sites/Site/SiteResource/SiteResourceActionV6";
import ResourceServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteResource(data) {
    try {
        const response = yield ResourceServiceV6.getResources(data.request);
        if (response.success) {
            yield put(SiteResourceActionV6.siteResourceSuccess(response.data));
        } else {
            yield put(
                SiteResourceActionV6.siteResourceFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteResourceSagaV6() {
    yield takeEvery(SITE.SITE_RESOURCE_V6, siteResource);
}
