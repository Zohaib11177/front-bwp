import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V1/Sites/Features/ActionType";
import SiteCloneFormAction from "Redux/V1/Sites/Features/SiteCloneForm/SiteCloneFormAction";
import SiteFeatureService from "Services/V1/SiteFeatureService";
import ToastHelper from "Helpers/ToastHelper";

function* siteClone(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.siteCloneForm(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteCloneFormAction.siteCloneSuccess(response.data));
            window.location.href = "/sites";
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteCloneFormAction.siteCloneFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteCloneFormAction.siteCloneFailed());
    }
}

export function* SiteCloneFormSaga() {
    yield takeEvery(FEATURE.SITE_CLONE_FORM, siteClone);
}
