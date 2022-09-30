import { takeEvery, put } from "redux-saga/effects";

import DOMAIN from "Redux/V1/Domain/ActionType";
import DomainPrimaryAction from "Redux/V1/Domain/Put/DomainPutAction";
import DomainService from "Services/V1/DomainService";
import DomainListAction from "Redux/V1/Domain/Get/DomainGetAction";
import ToastHelper from "Helpers/ToastHelper";

function* domainPut(data) {
    try {
        ToastHelper.info();
        const response = yield DomainService.domainPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(DomainPrimaryAction.domainPutSuccess(response.data));
            yield put(DomainListAction.domainGet(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                DomainPrimaryAction.domainPutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(DomainPrimaryAction.domainPutFailed());
    }
}

export function* domainPutSaga() {
    yield takeEvery(DOMAIN.DOMAIN_PUT, domainPut);
}
