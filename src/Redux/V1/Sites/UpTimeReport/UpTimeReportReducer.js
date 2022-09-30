import SITE_ACTION_TYPE from 'Redux/V1/Sites/SiteActionType';

const UpTimeReportReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
        up_time_report: [],
    },
    action
) => {
    switch (action.type) {
        case SITE_ACTION_TYPE.UP_TIME_REPORT:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case SITE_ACTION_TYPE.UP_TIME_REPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                up_time_report: action.response.report,
            };
        case SITE_ACTION_TYPE.UP_TIME_REPORT_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                err_mess: action.response.error.message,
                up_time_report: [],
            };
        default:
            return state;
    }
};
export default UpTimeReportReducer;
