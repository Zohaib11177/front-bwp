import { takeEvery, put } from "redux-saga/effects";
import PAGESPEED from "Redux/V6/Sites/Site/ActionTypeV6";
import PagespeedEnableActionV6 from "Redux/V6/Sites/Site/SitePagespeed/Put/PagespeedEnableActionV6";
import PageSpeedServiceV6 from "Services/V6/SiteServiceV6";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
import ToastHelper from "Helpers/ToastHelper";

function* pagespeedEnable(data) {
    try {
        ToastHelper.info();
        const response = yield PageSpeedServiceV6.enablePagespeed(data.request);
        if (response.success) {
            // ToastHelper.success(response.message);
            yield put(
                PagespeedEnableActionV6.pagespeedEnableSuccess(response.data)
            );
            yield put(SiteDetailActionV6.siteDetail(data.request));
        } else {
            // ToastHelper.error(response.error.message);
            yield put(
                PagespeedEnableActionV6.pagespeedEnableFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(PagespeedEnableActionV6.pagespeedEnableFailed());
    }
}

export function* PagespeedEnableSagaV6() {
    yield takeEvery(PAGESPEED.PAGESPEED_ENABLE_V6, pagespeedEnable);
}
