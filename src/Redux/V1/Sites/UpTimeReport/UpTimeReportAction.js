import SITE_ACTION_TYPE from 'Redux/V1/Sites/SiteActionType';
const upTimeReportGet = (identity) => {
    return {
        type: SITE_ACTION_TYPE.UP_TIME_REPORT,
        request: identity,
    };
};
const upTimeReportGetSuccess = (data) => {
    return { type: SITE_ACTION_TYPE.UP_TIME_REPORT_SUCCESS, response: data };
};
const upTimeReportGetFailed = (data) => {
    return { type: SITE_ACTION_TYPE.UP_TIME_REPORT_FAILED, response: data };
};

const UpTimeReportAction = {
    upTimeReportGet,
    upTimeReportGetSuccess,
    upTimeReportGetFailed,
};

export default UpTimeReportAction;
