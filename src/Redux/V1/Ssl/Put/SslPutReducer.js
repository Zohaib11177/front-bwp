import SSL from "Redux/V1/Ssl/ActionType";

const SslEnableReducer = (
    state = {
        loading: false,
        success: false,
        ssl_enable: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SSL.SSL_PUT:
            return {
                ...state,
                loading: true,
            };
        case SSL.SSL_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                ssl_enable: action.response,
            };
        case SSL.SSL_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SslEnableReducer;
