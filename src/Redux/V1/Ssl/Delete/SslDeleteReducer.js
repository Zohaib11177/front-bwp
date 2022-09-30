import SSL from "Redux/V1/Ssl/ActionType";

const SslRevokeReducer = (
    state = {
        loading: false,
        success: false,
        ssl_revoke: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SSL.SSL_DELETE:
            return {
                ...state,
                loading: true,
            };
        case SSL.SSL_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                ssl_revoke: action.response,
            };
        case SSL.SSL_DELETE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SslRevokeReducer;
