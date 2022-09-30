import { takeEvery, put } from 'redux-saga/effects';
import FEATURE from 'Redux/V1/Sites/Features/ActionType';
import PhpLoginAction from 'Redux/V1/Sites/Features/PHPLogin/PhpLoginAction';
import SiteFeatureService from 'Services/V1/SiteFeatureService';
// import SiteDashboardBusiness from "Businesses/SiteDetails/SiteDashboardBusiness";
import ToastHelper from 'Helpers/ToastHelper';

function* phpLogin(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.phpLogin(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PhpLoginAction.phpLoginSuccess(response.data));
            window.open(response.data.phpmyadmin.url, '_blank');
        } else {
            ToastHelper.error(response.error.message);
            yield put(PhpLoginAction.phpLoginFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(PhpLoginAction.phpLoginFailed());
    }
}

export function* PhpLoginSaga() {
    yield takeEvery(FEATURE.PHP_LOGIN, phpLogin);
}
