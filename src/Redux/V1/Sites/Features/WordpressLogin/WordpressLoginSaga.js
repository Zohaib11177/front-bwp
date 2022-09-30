import { takeEvery, put } from 'redux-saga/effects';
import FEATURE from 'Redux/V1/Sites/Features/ActionType';
import WordpressLoginAction from 'Redux/V1/Sites/Features/WordpressLogin/WordpressLoginAction';
import SiteFeatureService from 'Services/V1/SiteFeatureService';
// import SiteDashboardBusiness from "Businesses/SiteDetails/SiteDashboardBusiness";
import ToastHelper from 'Helpers/ToastHelper';

function* wordpressLogin(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.wordpressLogin(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressLoginAction.wordpressLoginSuccess(response.data)
            );
            window.open(response.data.one_click.url, '_blank');
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressLoginAction.wordpressLoginFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(WordpressLoginAction.wordpressLoginFailed());
    }
}

export function* WordpressLoginSaga() {
    yield takeEvery(FEATURE.WORDPRESS_LOGIN, wordpressLogin);
}
