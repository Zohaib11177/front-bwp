import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V6/Billing/Invoice/ActionTypeV6";
import InvoiceListActionV6 from "Redux/V6/Billing/Invoice/Get/InvoiceGetActionV6";
import InvoiceServiceV6 from "Services/V6/InvoiceServiceV6";

function* invoiceGet(data) {
    try {
        const response = yield InvoiceServiceV6.invoiceGet(data.request);
        if (response.success) {
            yield put(InvoiceListActionV6.invoiceGetSuccess(response.data));
        } else {
            yield put(
                InvoiceListActionV6.invoiceGetFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* invoiceGetSagaV6() {
    yield takeEvery(INVOICE.INVOICE_GET_V6, invoiceGet);
}
