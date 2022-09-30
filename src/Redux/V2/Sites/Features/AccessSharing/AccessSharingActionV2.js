import FEATURE from "Redux/V2/Sites/Features/ActionTypeV2";

const accessSharing = (identity, host) => {
    return {
        type: FEATURE.ACCESS_SHARING_V2,
        request: { identity, host },
    };
};
const accessSharingSuccess = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_SUCCESS_V2,
        response: data,
    };
};
const accessSharingFailed = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_FAILED_V2,
        response: data,
    };
};
const AccessSharingActionV2 = {
    accessSharing,
    accessSharingSuccess,
    accessSharingFailed,
};
export default AccessSharingActionV2;
