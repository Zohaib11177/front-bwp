import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";
import AccessSharingActionV6 from "Redux/V6/Sites/Features/AccessSharing/AccessSharingActionV6";
import SiteFeatureServiceV6 from "Services/V6/SiteFeatureServiceV6";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
import ToastHelper from "Helpers/ToastHelper";

function* accessSharing(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureServiceV6.accessSharing(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                AccessSharingActionV6.accessSharingSuccess(response.data)
            );
            yield put(SiteDetailActionV6.siteDetail(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                AccessSharingActionV6.accessSharingFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(AccessSharingActionV6.accessSharingFailed());
    }
}

export function* AccessSharingSagaV6() {
    yield takeEvery(FEATURE.ACCESS_SHARING_V6, accessSharing);
}
