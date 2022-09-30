import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V6/Sites/Operations/ActionTypeV6";
import CacheAllClearActionV6 from "Redux/V6/Sites/Operations/CacheAllClear/CacheAllClearActionV6";
import SiteOperationServiceV6 from "Services/V6/SiteOperationServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* cacheAllClear(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationServiceV6.cacheAllClear(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                CacheAllClearActionV6.cacheAllClearSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CacheAllClearActionV6.cacheAllClearFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CacheAllClearActionV6.cacheAllClearFailed());
    }
}

export function* CacheAllClearSagaV6() {
    yield takeEvery(OPERATION.CACHE_ALL_CLEAR_V6, cacheAllClear);
}
