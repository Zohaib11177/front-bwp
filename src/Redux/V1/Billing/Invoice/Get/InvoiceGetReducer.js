import INVOICE from "Redux/V1/Billing/Invoice/ActionType";

const InvoiceListReducer = (
    state = {
        loading: false,
        invoices: [],
        pagination: "",
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case INVOICE.INVOICE_GET:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case INVOICE.INVOICE_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                invoices: action.response.invoices,
                pagination: action.response.pagination,
            };
        case INVOICE.INVOICE_GET_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default InvoiceListReducer;
