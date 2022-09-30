import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V2/Sites/Features/ActionTypeV2";
import AccessSharingActionV2 from "Redux/V2/Sites/Features/AccessSharing/AccessSharingActionV2";
import SiteFeatureServiceV2 from "Services/V2/SiteFeatureServiceV2";
import SiteDetailAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import ToastHelper from "Helpers/ToastHelper";

function* accessSharing(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureServiceV2.accessSharing(
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                AccessSharingActionV2.accessSharingSuccess(response.data)
            );
            yield put(SiteDetailAction.getSiteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                AccessSharingActionV2.accessSharingFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(AccessSharingActionV2.accessSharingFailed());
    }
}

export function* AccessSharingSagaV2() {
    yield takeEvery(FEATURE.ACCESS_SHARING_V2, accessSharing);
}
