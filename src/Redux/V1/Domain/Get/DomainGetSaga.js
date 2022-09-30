 import { takeEvery, put } from "redux-saga/effects";

import DOMAIN from "Redux/V1/Domain/ActionType";
import DomainListAction from "Redux/V1/Domain/Get/DomainGetAction";
import DomainService from "Services/V1/DomainService"

import ToastHelper from "Helpers/ToastHelper";

function* domainGet(data) {
    try {
        const response = yield DomainService.domainGet(data.request);
        if (response.success) {
         
            yield put(DomainListAction.domainGetSuccess(response.data));
        } else {
            yield put(DomainListAction.domainGetFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* domainGetSaga() {
    yield takeEvery(DOMAIN.DOMAIN_GET, domainGet);
}
