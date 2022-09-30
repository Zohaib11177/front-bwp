import { takeEvery, put } from 'redux-saga/effects';
import SITE_OTP from 'Redux/V6/Sites/SiteOtp/ActionTypeV6';
import SiteVersionActionV6 from 'Redux/V6/Sites/SiteOtp/Get/SiteGetActionV6';
import SiteServiceV6 from 'Services/V6/SiteServiceV6';
import ToastHelper from 'Helpers/ToastHelper';

function* siteOtpGet(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV6.siteOtpGet(data.request);
        if (response.success) {
            // ToastHelper.success(response.message);
            yield put(SiteVersionActionV6.siteGetSuccess(response.data));
        } else {
            // ToastHelper.error(response.error.message);
            yield put(
                SiteVersionActionV6.siteGetFailed(response.error.message)
            );
        }
    } catch (error) {
        // console.log(error)
        // ToastHelper.error(
        //     "Something went wrong and we have been notified about the problem"
        // );
        yield put(SiteVersionActionV6.siteGetFailed());
    }
}

export function* siteOtpGetSagaV6() {
    yield takeEvery(SITE_OTP.SITE_OTP_GET_V6, siteOtpGet);
}
