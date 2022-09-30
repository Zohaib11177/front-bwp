import { takeEvery, put } from "redux-saga/effects";

import DOMAIN from "Redux/V1/Domain/ActionType";
import DomainSearchAction from "Redux/V1/Domain/SmartSearch/SearchGetAction";
import DomainService from "Services/V1/DomainService";

import ToastHelper from "Helpers/ToastHelper";

function* searchGet(data) {
    try {
        const response = yield DomainService.searchGet(data.request);
        if (response.success) {
            yield put(DomainSearchAction.searchGetSuccess(response.data));
        } else {
            yield put(
                DomainSearchAction.searchGetFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* searchGetSaga() {
    yield takeEvery(DOMAIN.SEARCH_GET, searchGet);
}
