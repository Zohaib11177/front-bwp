import { all } from "redux-saga/effects";
import { invoiceGetSaga } from "Redux/V1/Billing/Invoice/Get/InvoiceGetSaga";
import { invoiceFirstSaga } from "Redux/V1/Billing/Invoice/First/InvoiceFirstSaga";
import { invoicePutSaga } from "Redux/V1/Billing/Invoice/Put/InvoicePutSaga";

export default function* InvoiceRootSaga() {
    yield all([invoiceGetSaga(), invoiceFirstSaga(), invoicePutSaga()]);
}
