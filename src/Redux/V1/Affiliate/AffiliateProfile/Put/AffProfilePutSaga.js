import { takeEvery, put } from "redux-saga/effects";
import AFFILIATE_PROFILE from "Redux/V1/Affiliate/AffiliateProfile/ActionType";
import AffProfileUpdateAction from "Redux/V1/Affiliate/AffiliateProfile/Put/AffProfilePutAction";
import AffiliateService from "Services/V1/AffiliateService";
import ToastHelper from "Helpers/ToastHelper";
function* affProfilePut(data) {
    try {
        const response = yield AffiliateService.affProfilePut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                AffProfileUpdateAction.affProfilePutSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                AffProfileUpdateAction.affProfilePutFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(AffProfileUpdateAction.affProfilePutFailed());
    }
}

export function* AffProfileUpdateSaga() {
    yield takeEvery(AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT, affProfilePut);
}
