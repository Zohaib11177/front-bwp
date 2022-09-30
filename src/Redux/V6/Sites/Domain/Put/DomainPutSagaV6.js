import { takeEvery, put } from "redux-saga/effects";

import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";
import DomainPrimaryActionV6 from "Redux/V6/Sites/Domain/Put/DomainPutActionV6";
import DomainServiceV6 from "Services/V6/DomainServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* domainPut(data) {
    try {
        ToastHelper.info();
        console.log(data);
        const response = yield DomainServiceV6.domainPut(
            data.request.domain,
            data.request.host
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(DomainPrimaryActionV6.domainPutSuccess(response.data));
            setTimeout(function () {
                window.location.href = "/sites/" + data.request.domain;
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                DomainPrimaryActionV6.domainPutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(DomainPrimaryActionV6.domainPutFailed());
    }
}

export function* domainPutSagaV6() {
    yield takeEvery(DOMAIN.DOMAIN_PUT_V6, domainPut);
}
