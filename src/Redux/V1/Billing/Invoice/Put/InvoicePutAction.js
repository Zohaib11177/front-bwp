import INVOICE from "Redux/V1/Billing/Invoice/ActionType";

const invoicePut = (data) => {
    return {
        type: INVOICE.INVOICE_PUT,
        request: data,
    };
};
const invoicePutSuccess = (data) => {
    return {
        type: INVOICE.INVOICE_PUT_SUCCESS,
        response: data,
    };
};
const invoicePutFailed = (data) => {
    return {
        type: INVOICE.INVOICE_PUT_FAILED,
        response: data,
    };
};
const InvoicePaymentAction = {
    invoicePut,
    invoicePutSuccess,
    invoicePutFailed,
};
export default InvoicePaymentAction;
