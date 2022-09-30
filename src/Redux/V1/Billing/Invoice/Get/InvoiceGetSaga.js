import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V1/Billing/Invoice/ActionType";
import InvoiceListAction from "Redux/V1/Billing/Invoice/Get/InvoiceGetAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceGet(data) {
    try {
        const response = yield InvoiceService.invoiceGet(data.request);
        if (response.success) {
            yield put(InvoiceListAction.invoiceGetSuccess(response.data));
        } else {
            yield put(
                InvoiceListAction.invoiceGetFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* invoiceGetSaga() {
    yield takeEvery(INVOICE.INVOICE_GET, invoiceGet);
}
