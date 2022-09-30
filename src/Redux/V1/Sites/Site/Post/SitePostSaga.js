import { takeEvery, put } from 'redux-saga/effects';
import SITE from 'Redux/V1/Sites/Site/ActionType';
import SiteService from 'Services/V1/SiteService';
import ToastHelper from 'Helpers/ToastHelper';
import SiteCreateAction from 'Redux/V1/Sites/Site/Post/SitePostAction';
// import SiteBusiness from "Businesses/SiteBusiness";

function* sitePost(data) {
    try {
        ToastHelper.info();
        const response = yield SiteService.sitePost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteCreateAction.sitePostSuccess(response.data));

            setTimeout(() => {
                window.location.href = '/sites';
            }, 2000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(SiteCreateAction.sitePostFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SiteCreateAction.sitePostFailed());
    }
}
export function* SiteCreateSaga() {
    yield takeEvery(SITE.SITE_POST, sitePost);
}
