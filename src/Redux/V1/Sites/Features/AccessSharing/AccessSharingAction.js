import FEATURE from "Redux/V1/Sites/Features/ActionType";

const accessSharing = (identity, host) => {
    return {
        type: FEATURE.ACCESS_SHARING,
        request: { identity, host },
    };
};
const accessSharingSuccess = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_SUCCESS,
        response: data,
    };
};
const accessSharingFailed = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_FAILED,
        response: data,
    };
};
const AccessSharingAction = {
    accessSharing,
    accessSharingSuccess,
    accessSharingFailed,
};
export default AccessSharingAction;
