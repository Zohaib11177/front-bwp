import INVOICE from "Redux/V1/Billing/Invoice/ActionType";

const InvoiceDetailReducer = (
    state = {
        loading: false,
        invoice: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case INVOICE.INVOICE_FIRST:
            return {
                ...state,
                loading: true,
                err_mess: null,
                invoice: {},
            };
        case INVOICE.INVOICE_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                invoice: action.response.invoice,
            };
        case INVOICE.INVOICE_FIRST_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default InvoiceDetailReducer;
