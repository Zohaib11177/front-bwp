import { combineReducers } from "redux";
import InvoiceListReducerV6 from "Redux/V6/Billing/Invoice/Get/InvoiceGetReducerV6";

const InvoiceRootReducerV6 = combineReducers({
    invoiceList: InvoiceListReducerV6,
});
export default InvoiceRootReducerV6;
