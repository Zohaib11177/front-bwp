import STAGING from "Redux/V1/Staging/ActionType";

const stagingRenewal = (data) => {
    return {
        type: STAGING.STAGING_RENEWAL,
        request: data,
    };
};
const stagingRenewalSuccess = (data) => {
    return {
        type: STAGING.STAGING_RENEWAL_SUCCESS,
        response: data,
    };
};
const stagingRenewalFailed = (data) => {
    return {
        type: STAGING.STAGING_RENEWAL_FAILED,
        response: data,
    };
};
const StagingRenewalAction = {
    stagingRenewal,
    stagingRenewalSuccess,
    stagingRenewalFailed,
};
export default StagingRenewalAction;
