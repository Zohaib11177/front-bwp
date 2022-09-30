import { takeEvery, put } from 'redux-saga/effects';
import SITE from 'Redux/V1/Sites/Site/ActionType';
import SiteService from 'Services/V1/SiteService';
import SiteDeleteAction from 'Redux/V1/Sites/Site/Delete/SiteDeleteAction';
import SiteAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import ToastHelper from 'Helpers/ToastHelper';
import { siteDetail } from 'Redux/V3/Sites/SiteDetail/SiteDetailAction';

function* siteDelete(data) {
    try {
        ToastHelper.info();
        const response = yield SiteService.siteDelete(data.request.identity);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteDeleteAction.siteDeleteSuccess(response.data));
            yield put(SiteAction.getSiteDetail(data.request.host));
            yield put(siteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteDeleteAction.siteDeleteFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SiteDeleteAction.siteDeleteFailed());
    }
}

export function* SiteDeleteSaga() {
    yield takeEvery(SITE.SITE_DELETE, siteDelete);
}
