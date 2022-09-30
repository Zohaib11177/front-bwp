import { all } from "redux-saga/effects";
import CardRootSaga from "Redux/V1/Billing/Card/CardRootSaga";
import InvoiceRootSaga from "Redux/V1/Billing/Invoice/InvoiceRootSaga";

export default function* BillingRootSaga() {
    yield all([InvoiceRootSaga(), CardRootSaga()]);
}
