import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V1/Sites/Operations/ActionType';
import CacheAllClearAction from 'Redux/V1/Sites/Operations/CacheAllClear/CacheAllClearAction';
import SiteOperationService from 'Services/V1/SiteOperationService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* cacheAllClear(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationService.cacheAllClear(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CacheAllClearAction.cacheAllClearSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CacheAllClearAction.cacheAllClearFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CacheAllClearAction.cacheAllClearFailed());
    }
}

export function* CacheAllClearSaga() {
    yield takeEvery(OPERATION.CACHE_ALL_CLEAR, cacheAllClear);
}
