import { takeEvery, put } from 'redux-saga/effects';
import FEATURE from 'Redux/V1/Sites/Features/ActionType';
import SiteSftpAction from 'Redux/V1/Sites/Features/SiteSftp/SiteSftpAction';
import SiteFeatureService from 'Services/V1/SiteFeatureService';
// import SiteDashboardBusiness from 'Businesses/SiteDetails/SiteDashboardBusiness';
import SiteDetailAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import { siteDetail } from 'Redux/V3/Sites/SiteDetail/SiteDetailAction';
import ToastHelper from 'Helpers/ToastHelper';

function* siteSftp(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.siteSftp(
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteSftpAction.siteSftpSuccess(response.data.sftps));
            yield put(SiteDetailAction.getSiteDetail(data.request.host));
            yield put(siteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SiteSftpAction.siteSftpFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SiteSftpAction.siteSftpFailed());
    }
}

export function* SiteSftpSaga() {
    yield takeEvery(FEATURE.SITE_SFTP, siteSftp);
}
