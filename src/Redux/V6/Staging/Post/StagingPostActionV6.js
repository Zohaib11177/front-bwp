import STAGING from "Redux/V6/Staging/ActionTypeV6";

const stagingPost = (data) => {
    return {
        type: STAGING.STAGING_POST_V6,
        request: data,
    };
};
const stagingPostSuccess = (data) => {
    return {
        type: STAGING.STAGING_POST_V6_SUCCESS,
        response: data,
    };
};
const stagingPostFailed = (data) => {
    return {
        type: STAGING.STAGING_POST_V6_FAILED,
        response: data,
    };
};
const StagingCreateActionV6 = {
    stagingPost,
    stagingPostSuccess,
    stagingPostFailed,
};
export default StagingCreateActionV6;
