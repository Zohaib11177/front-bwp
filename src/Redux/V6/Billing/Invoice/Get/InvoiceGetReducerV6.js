import INVOICE from "Redux/V6/Billing/Invoice/ActionTypeV6";

const InvoiceListReducerV6 = (
    state = {
        loading: false,
        invoices: [],
        pagination: "",
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case INVOICE.INVOICE_GET_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case INVOICE.INVOICE_GET_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                invoices: action.response.invoices,
                pagination: action.response.pagination,
            };
        case INVOICE.INVOICE_GET_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default InvoiceListReducerV6;
