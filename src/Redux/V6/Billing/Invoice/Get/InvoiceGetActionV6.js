import INVOICE from "Redux/V6/Billing/Invoice/ActionTypeV6";

const invoiceGet = (data) => {
    return {
        type: INVOICE.INVOICE_GET_V6,
        request: data,
    };
};
const invoiceGetSuccess = (data) => {
    return {
        type: INVOICE.INVOICE_GET_V6_SUCCESS,
        response: data,
    };
};
const invoiceGetFailed = (data) => {
    return {
        type: INVOICE.INVOICE_GET_V6_FAILED,
        response: data,
    };
};

const InvoiceListActionV6 = {
    invoiceGet,
    invoiceGetSuccess,
    invoiceGetFailed,
};

export default InvoiceListActionV6;
