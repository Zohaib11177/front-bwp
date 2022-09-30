import SSL from "Redux/V1/Ssl/ActionType";

const SslRenewReducer = (
    state = {
        loading: false,
        success: false,
        ssl_renew: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SSL.SSL_RENEW:
            return {
                ...state,
                loading: true,
            };
        case SSL.SSL_RENEW_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                ssl_renew: action.response,
            };
        case SSL.SSL_RENEW_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SslRenewReducer;
