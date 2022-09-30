import CDN from "Redux/V2/Sites/Addons/Cdn/ActionTypeV2";

const cdnEnable = (data) => {
    return {
        type: CDN.CDN_ENABLE_V2,
        request: data,
    };
};
const cdnEnableSuccess = (data) => {
    return {
        type: CDN.CDN_ENABLE_SUCCESS_V2,
        response: data,
    };
};
const cdnEnableFailed = (data) => {
    return {
        type: CDN.CDN_ENABLE_FAILED_V2,
        response: data,
    };
};
const CdnEnableActionV2 = {
    cdnEnable,
    cdnEnableSuccess,
    cdnEnableFailed,
};
export default CdnEnableActionV2;
