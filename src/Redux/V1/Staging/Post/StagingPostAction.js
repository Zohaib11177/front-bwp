import STAGING from "Redux/V1/Staging/ActionType";

const stagingPost = (data) => {
    return {
        type: STAGING.STAGING_POST,
        request: data,
    };
};
const stagingPostSuccess = (data) => {
    return {
        type: STAGING.STAGING_POST_SUCCESS,
        response: data,
    };
};
const stagingPostFailed = (data) => {
    return {
        type: STAGING.STAGING_POST_FAILED,
        response: data,
    };
};
const StagingCreateAction = {
    stagingPost,
    stagingPostSuccess,
    stagingPostFailed,
};
export default StagingCreateAction;
