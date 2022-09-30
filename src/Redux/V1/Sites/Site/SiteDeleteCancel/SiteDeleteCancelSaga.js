import { takeEvery, put } from 'redux-saga/effects';

import SITE from 'Redux/V1/Sites/Site/ActionType';
import SiteDeleteCancelAction from 'Redux/V1/Sites/Site/SiteDeleteCancel/SiteDeleteCancelAction';
import SiteService from 'Services/V1/SiteService';
import SiteAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import ToastHelper from 'Helpers/ToastHelper';
import { siteDetail } from 'Redux/V3/Sites/SiteDetail/SiteDetailAction';

function* siteDeleteCancel(data) {
    try {
        ToastHelper.info();
        const response = yield SiteService.siteDeleteCancel(
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                SiteDeleteCancelAction.siteDeleteCancelSuccess(response.data)
            );
            yield put(SiteAction.getSiteDetail(data.request.host));
            yield put(siteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteDeleteCancelAction.siteDeleteCancelFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* SiteDeleteCancelSaga() {
    yield takeEvery(SITE.SITE_DELETE_CANCEL, siteDeleteCancel);
}
