import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V1/Sites/Operations/ActionType';
import CacheClearAction from 'Redux/V1/Sites/Operations/CacheClear/CacheClearAction';
import SiteOperationService from 'Services/V1/SiteOperationService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* cacheClear(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationService.cacheClear(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CacheClearAction.cacheClearSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CacheClearAction.cacheClearFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CacheClearAction.cacheClearFailed());
    }
}

export function* CacheClearSaga() {
    yield takeEvery(OPERATION.CACHE_CLEAR, cacheClear);
}
