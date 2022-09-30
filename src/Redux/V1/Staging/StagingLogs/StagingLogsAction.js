import STAGING from "Redux/V1/Staging/ActionType";

const stagingLogs = (data) => {
    return {
        type: STAGING.STAGING_LOGS,
        request: data,
    };
};
const stagingLogsSuccess = (data) => {
    return {
        type: STAGING.STAGING_LOGS_SUCCESS,
        response: data,
    };
};
const stagingLogsFailed = (data) => {
    return {
        type: STAGING.STAGING_LOGS_FAILED,
        response: data,
    };
};
const StagingLogsAction = {
    stagingLogs,
    stagingLogsSuccess,
    stagingLogsFailed,
};
export default StagingLogsAction;
