import INVOICE from "Redux/V1/Billing/Invoice/ActionType";

const invoiceFirst = (data) => {
    return {
        type: INVOICE.INVOICE_FIRST,
        request: data,
    };
};
const invoiceFirstSuccess = (data) => {
    return {
        type: INVOICE.INVOICE_FIRST_SUCCESS,
        response: data,
    };
};
const invoiceFirstFailed = (data) => {
    return {
        type: INVOICE.INVOICE_FIRST_FAILED,
        response: data,
    };
};

const InvoiceDetailAction = {
    invoiceFirst,
    invoiceFirstSuccess,
    invoiceFirstFailed,
};
export default InvoiceDetailAction;
