import STAGING from "Redux/V1/Staging/ActionType";

const stagingDelete = (data) => {
    return {
        type: STAGING.STAGING_DELETE,
        request: data,
    };
};
const stagingDeleteSuccess = (data) => {
    return {
        type: STAGING.STAGING_DELETE_SUCCESS,
        response: data,
    };
};
const stagingDeleteFailed = (data) => {
    return {
        type: STAGING.STAGING_DELETE_FAILED,
        response: data,
    };
};

const StagingDeleteAction = {
    stagingDelete,
    stagingDeleteSuccess,
    stagingDeleteFailed,
};

export default StagingDeleteAction;
