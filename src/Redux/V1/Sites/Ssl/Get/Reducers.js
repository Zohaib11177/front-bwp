import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";

const GetSslReducer = (
    state = {
        loading: false,
        success: false,
        ssl: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SSL_ACTION_TYPE.GET_SSL:
            return {
                ...state,
                loading: true,
            };
        case SSL_ACTION_TYPE.GET_SSL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                ssl: action.response.ssl,
            };
        case SSL_ACTION_TYPE.GET_SSL_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default GetSslReducer;
