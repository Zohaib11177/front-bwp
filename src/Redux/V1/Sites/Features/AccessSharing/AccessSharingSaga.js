import { takeEvery, put } from 'redux-saga/effects';
import FEATURE from 'Redux/V1/Sites/Features/ActionType';
import AccessSharingAction from 'Redux/V1/Sites/Features/AccessSharing/AccessSharingAction';
import SiteFeatureService from 'Services/V1/SiteFeatureService';
import { siteDetail } from 'Redux/V3/Sites/SiteDetail/SiteDetailAction';
import ToastHelper from 'Helpers/ToastHelper';

function* accessSharing(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.accessSharing(
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(AccessSharingAction.accessSharingSuccess(response.data));
            yield put(siteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                AccessSharingAction.accessSharingFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(AccessSharingAction.accessSharingFailed());
    }
}

export function* AccessSharingSaga() {
    yield takeEvery(FEATURE.ACCESS_SHARING, accessSharing);
}
