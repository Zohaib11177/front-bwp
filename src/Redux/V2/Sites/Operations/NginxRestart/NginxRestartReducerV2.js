import OPERATION from "Redux/V2/Sites/Operations/ActionTypeV2";

const NginxRestartReducerV2 = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case OPERATION.NGINX_RESTART_V2:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case OPERATION.NGINX_RESTART_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case OPERATION.NGINX_RESTART_FAILED_V2:
            return {
                ...state,
                loading: false,
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};
export default NginxRestartReducerV2;
