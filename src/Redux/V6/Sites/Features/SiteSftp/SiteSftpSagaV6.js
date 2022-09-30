import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";
import SiteSftpActionV6 from "Redux/V6/Sites/Features/SiteSftp/SiteSftpActionV6";
import SiteFeatureServiceV6 from "Services/V6/SiteFeatureServiceV6";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteSftp(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureServiceV6.siteSftp(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteSftpActionV6.siteSftpSuccess(response.data.sftps));
            yield put(SiteDetailActionV6.siteDetail(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SiteSftpActionV6.siteSftpFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteSftpActionV6.siteSftpFailed());
    }
}

export function* SiteSftpSagaV6() {
    yield takeEvery(FEATURE.SITE_SFTP_V6, siteSftp);
}
