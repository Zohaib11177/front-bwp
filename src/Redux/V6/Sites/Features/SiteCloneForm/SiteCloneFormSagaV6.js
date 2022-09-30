import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";
import SiteCloneFormActionV6 from "Redux/V6/Sites/Features/SiteCloneForm/SiteCloneFormActionV6";
import SiteFeatureServiceV6 from "Services/V6/SiteFeatureServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteClone(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureServiceV6.siteCloneForm(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteCloneFormActionV6.siteCloneSuccess(response.data));
            window.location.href = "/sites";
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteCloneFormActionV6.siteCloneFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteCloneFormActionV6.siteCloneFailed());
    }
}

export function* SiteCloneFormSagaV6() {
    yield takeEvery(FEATURE.SITE_CLONE_FORM_V6, siteClone);
}
