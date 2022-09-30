import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const cdnEnable = (data) => {
    return {
        type: CDN.CDN_ENABLE,
        request: data,
    };
};
const cdnEnableSuccess = (data) => {
    return {
        type: CDN.CDN_ENABLE_SUCCESS,
        response: data,
    };
};
const cdnEnableFailed = (data) => {
    return {
        type: CDN.CDN_ENABLE_FAILED,
        response: data,
    };
};
const CdnEnableAction = {
    cdnEnable,
    cdnEnableSuccess,
    cdnEnableFailed,
};
export default CdnEnableAction;
