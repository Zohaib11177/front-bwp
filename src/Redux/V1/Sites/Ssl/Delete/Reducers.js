import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";

const DisableSsl = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SSL_ACTION_TYPE.DISABLE_SSL:
            return {
                ...state,
                loading: true,
            };
        case SSL_ACTION_TYPE.DISABLE_SSL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case SSL_ACTION_TYPE.DISABLE_SSL_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default DisableSsl;
