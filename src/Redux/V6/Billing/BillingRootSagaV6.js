import { all } from "redux-saga/effects";
import InvoiceRootSagaV6 from "Redux/V6/Billing/Invoice/InvoiceRootSagaV6";
import CardRootSagaV6 from "Redux/V6/Billing/Card/CardRootSagaV6";

export function* BillingRootSagaV6() {
    yield all([InvoiceRootSagaV6(), CardRootSagaV6()]);
}
