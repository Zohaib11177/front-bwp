import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V1/Billing/Invoice/ActionType";
import InvoiceDetailAction from "Redux/V1/Billing/Invoice/First/InvoiceFirstAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceFirst(data) {
    try {
        const response = yield InvoiceService.invoiceFirst(data.request);
        if (response.success) {
            yield put(InvoiceDetailAction.invoiceFirstSuccess(response.data));
        } else {
            yield put(
                InvoiceDetailAction.invoiceFirstFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* invoiceFirstSaga() {
    yield takeEvery(INVOICE.INVOICE_FIRST, invoiceFirst);
}
