import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V1/Billing/Invoice/ActionType";
import InvoicePaymentAction from "Redux/V1/Billing/Invoice/Put/InvoicePutAction";
import InvoiceService from "Services/V1/InvoiceService";

import ToastHelper from "Helpers/ToastHelper";

function* invoicePut(data) {
    try {
        ToastHelper.info();
        const response = yield InvoiceService.invoicePut(data.request);

        if (response.success) {
            ToastHelper.success(response.message);
            yield put(InvoicePaymentAction.invoicePutSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                InvoicePaymentAction.invoicePutFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(InvoicePaymentAction.invoicePutFailed());
    }
}

export function* invoicePutSaga() {
    yield takeEvery(INVOICE.INVOICE_PUT, invoicePut);
}
