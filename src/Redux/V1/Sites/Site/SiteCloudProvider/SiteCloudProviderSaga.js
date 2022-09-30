import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V1/Sites/Site/ActionType";
import SiteCloudProviderListAction from "Redux/V1/Sites/Site/SiteCloudProvider/SiteCloudProviderAction";
import SiteService from "Services/V1/SiteService";
import ToastHelper from "Helpers/ToastHelper";

function* siteCloudProvider(data) {
    try {
        const response = yield SiteService.siteCloudProvider(data.request);
        if (response.success) {
            yield put(
                SiteCloudProviderListAction.siteCloudProviderSuccess(
                    response.data
                )
            );
        } else {
            yield put(
                SiteCloudProviderListAction.siteCloudProviderFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
        SiteCloudProviderListAction.siteCloudProviderFailed();
    }
}

export function* SiteCloudProviderListSaga() {
    yield takeEvery(SITE.SITE_CLOUD_PROVIDER, siteCloudProvider);
}
