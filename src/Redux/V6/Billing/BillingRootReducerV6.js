import { combineReducers } from "redux";
import InvoiceRootReducerV6 from "Redux/V6/Billing/Invoice/InvoiceRootReducerV6";
import CardRootReducerV6 from "Redux/V6/Billing/Card/CardRootReducerV6";

const BillingRootReducerV6 = combineReducers({
    invoiceV6: InvoiceRootReducerV6,
    cardV6: CardRootReducerV6,
});
export default BillingRootReducerV6;
