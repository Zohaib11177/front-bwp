import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";

const accessSharing = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_V6,
        request: data,
    };
};
const accessSharingSuccess = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_V6_SUCCESS,
        response: data,
    };
};
const accessSharingFailed = (data) => {
    return {
        type: FEATURE.ACCESS_SHARING_V6_FAILED,
        response: data,
    };
};
const AccessSharingActionV6 = {
    accessSharing,
    accessSharingSuccess,
    accessSharingFailed,
};
export default AccessSharingActionV6;
