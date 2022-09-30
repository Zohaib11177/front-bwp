import { all } from "redux-saga/effects";
import { invoiceGetSagaV6 } from "Redux/V6/Billing/Invoice/Get/InvoiceGetSagaV6";

export default function* InvoiceRootSagaV6() {
    yield all([invoiceGetSagaV6()]);
}
