import { takeEvery, put } from "redux-saga/effects";
import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";
import SitePutActionV6 from "Redux/V6/Sites/SiteWhiteLabel/PUT/SitePutActionV6";
import SiteServiceV6 from "Services/V6/SiteWhiteListV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteWLPut(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV6.siteWLPut(data.request);
        console.log(response)
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SitePutActionV6.siteWLPutSuccess(response.data));
            window.location.reload()
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SitePutActionV6.siteWLPutFailed()
            );
        }
    } catch (error) {
        console.log(error)
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SitePutActionV6.siteWLPutFailed());
    }
}

export function* siteWLPutSagaV6() {
    yield takeEvery(SITE_WHITE_LABEL.SITE_WHITE_LABEL_PUT_V6, siteWLPut);
}
