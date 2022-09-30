import { takeEvery, put } from "redux-saga/effects";
import SITE_OTP from "Redux/V6/Sites/SiteOtp/ActionTypeV6";
import SiteOtpPutActionV6 from "Redux/V6/Sites/SiteOtp/Put/SitePutActionV6";
import SiteServiceV6 from "Services/V6/SiteServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteOtpPut(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV6.siteOtpPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteOtpPutActionV6.sitePutSuccess(response.data));
            window.location.reload()
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteOtpPutActionV6.sitePutFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error)
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteOtpPutActionV6.sitePutFailed());
    }
}

export function* siteOtpPutSagaV6() {
    yield takeEvery(SITE_OTP.SITE_OTP_PUT_V6, siteOtpPut);
}
