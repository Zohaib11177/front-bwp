import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V1/Sites/Features/ActionType";
import SiteCloneAction from "Redux/V1/Sites/Features/SiteClone/SiteCloneAction";
import SiteFeatureService from "Services/V1/SiteFeatureService";
import ToastHelper from "Helpers/ToastHelper";

function* siteClone(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.siteClone(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteCloneAction.siteCloneSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SiteCloneAction.siteCloneFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteCloneAction.siteCloneFailed());
    }
}

export function* SiteCloneSaga() {
    yield takeEvery(FEATURE.SITE_CLONE, siteClone);
}
