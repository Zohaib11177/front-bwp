import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";

const EnableSsl = (
    state = {
        loading: false,
        success: false,
        cdn_enable: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SSL_ACTION_TYPE.ENABLE_SSL:
            return {
                ...state,
                loading: true,
            };
        case SSL_ACTION_TYPE.ENABLE_SSL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                ssl: action.response,
            };
        case SSL_ACTION_TYPE.ENABLE_SSL_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default EnableSsl;
