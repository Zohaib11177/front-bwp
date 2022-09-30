import CDN from "Redux/V2/Sites/Addons/Cdn/ActionTypeV2";

const cdnDisable = (data) => {
    return {
        type: CDN.CDN_DISABLE_V2,
        request: data,
    };
};
const cdnDisableSuccess = (data) => {
    return {
        type: CDN.CDN_DISABLE_SUCCESS_V2,
        response: data,
    };
};
const cdnDisableFailed = (data) => {
    return {
        type: CDN.CDN_DISABLE_FAILED_V2,
        response: data,
    };
};

const CdnDisableActionV2 = {
    cdnDisable,
    cdnDisableSuccess,
    cdnDisableFailed,
};

export default CdnDisableActionV2;
