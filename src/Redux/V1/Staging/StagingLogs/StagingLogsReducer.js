import STAGING from "Redux/V1/Staging/ActionType";

const StagingLogsReducer = (
    state = {
        loading: false,
        staging_logs: [],
        err_mess: null,
        success: false,
    },
    action
) => {
    switch (action.type) {
        case STAGING.STAGING_LOGS:
            return {
                ...state,
                loading: true,
                staging_logs: [],
                err_mess: null,
                success: false,
            };
        case STAGING.STAGING_LOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                staging_logs: action.response,
                err_mess: null,
                success: true,
            };
        case STAGING.STAGING_LOGS_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                staging_logs: [],
                success: false,
            };
        default:
            return state;
    }
};

export default StagingLogsReducer;
