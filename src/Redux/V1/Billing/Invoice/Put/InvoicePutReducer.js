import INVOICE from "Redux/V1/Billing/Invoice/ActionType";

const InvoicePaymentReducer = (
    state = {
        loading: false,
        invoice_payment: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case INVOICE.INVOICE_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case INVOICE.INVOICE_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                invoice_payment: action.response,
            };
        case INVOICE.INVOICE_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default InvoicePaymentReducer;
