import { takeEvery, put } from 'redux-saga/effects';
import FEATURE from 'Redux/V3/Sites/Features/ActionTypeV3';
import WordpressLoginActionV3 from 'Redux/V3/Sites/Features/WordpressLogin/WordpressLoginActionV3';
import SiteFeatureServiceV3 from 'Services/V3/SiteFeatureServiceV3';
// import SiteDashboardBusiness from "Businesses/SiteDetails/SiteDashboardBusiness";
import ToastHelper from 'Helpers/ToastHelper';

function* wordpressLogin(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureServiceV3.wordpressLogin(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressLoginActionV3.wordpressLoginSuccess(response.data)
            );
            window.open(response.data.one_click.url, '_blank');
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressLoginActionV3.wordpressLoginFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(WordpressLoginActionV3.wordpressLoginFailed());
    }
}

export function* WordpressLoginSagaV3() {
    yield takeEvery(FEATURE.WORDPRESS_LOGIN_V3, wordpressLogin);
}
