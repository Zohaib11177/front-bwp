import { takeEvery, put } from 'redux-saga/effects';
import SITE from 'Redux/V6/Sites/Site/ActionTypeV6';
import SiteServiceV6 from 'Services/V6/SiteServiceV6';
import ToastHelper from 'Helpers/ToastHelper';
import SiteCreateActionV6 from 'Redux/V6/Sites/Site/Post/SitePostActionV6';
// import SiteBusiness from "Businesses/SiteBusiness";

function* sitePost(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV6.sitePost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteCreateActionV6.sitePostSuccess(response.data));

            setTimeout(() => {
                window.location.href = '/sites';
            }, 2000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteCreateActionV6.sitePostFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SiteCreateActionV6.sitePostFailed());
    }
}
export function* SiteCreateSagaV6() {
    yield takeEvery(SITE.SITE_POST_V6, sitePost);
}
