import { takeEvery, put } from "redux-saga/effects";
import RETEST_PAGESPEED from "Redux/V1/Sites/SiteActionType";
import RetestPageSpeedAction from "Redux/V1/Sites/Features/RetestPageSpeed/RetestPageSpeedAction";
import SiteFeatureService from "Services/V1/SiteFeatureService";
import ToastHelper from "Helpers/ToastHelper";

function* retestPageSpeed(data) {
    try {
        const response = yield SiteFeatureService.retestPageSpeed(data.request);
        if (response.success) {
            ToastHelper.success(response.message);

            yield put(
                RetestPageSpeedAction.retestPageSpeedSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                RetestPageSpeedAction.retestPageSpeedFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* RetestPageSpeedSaga() {
    yield takeEvery(RETEST_PAGESPEED.RETEST_PAGESPEED, retestPageSpeed);
}
