import { takeEvery, put } from "redux-saga/effects";
import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";
import SitePostActionV6 from "Redux/V6/Sites/SiteWhiteLabel/Post/SitePostActionV6";
import SiteServiceV6 from "Services/V6/SiteWhiteListV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteWLPost(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV6.siteWLPost(data.request);
        console.log(response)
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SitePostActionV6.siteWLPostSuccess(response.data));
            window.location.reload()
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SitePostActionV6.siteWLPostFailed()
            );
        }
    } catch (error) {
        console.log(error)
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SitePostActionV6.siteWLPostFailed());
    }
}

export function* siteWLPostSagaV6() {
    yield takeEvery(SITE_WHITE_LABEL.SITE_WHITE_LABEL_POST_V6, siteWLPost);
}
