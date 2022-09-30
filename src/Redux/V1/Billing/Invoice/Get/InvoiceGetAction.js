import INVOICE from "Redux/V1/Billing/Invoice/ActionType";

const invoiceGet = (data) => {
    return {
        type: INVOICE.INVOICE_GET,
        request: data,
    };
};
const invoiceGetSuccess = (data) => {
    return {
        type: INVOICE.INVOICE_GET_SUCCESS,
        response: data,
    };
};
const invoiceGetFailed = (data) => {
    return {
        type: INVOICE.INVOICE_GET_FAILED,
        response: data,
    };
};

const InvoiceListAction = {
    invoiceGet,
    invoiceGetSuccess,
    invoiceGetFailed,
};

export default InvoiceListAction;
