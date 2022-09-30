import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const cdnDisable = (data) => {
    return {
        type: CDN.CDN_DISABLE,
        request: data,
    };
};
const cdnDisableSuccess = (data) => {
    return {
        type: CDN.CDN_DISABLE_SUCCESS,
        response: data,
    };
};
const cdnDisableFailed = (data) => {
    return {
        type: CDN.CDN_DISABLE_FAILED,
        response: data,
    };
};

const CdnDisableAction = {
    cdnDisable,
    cdnDisableSuccess,
    cdnDisableFailed,
};

export default CdnDisableAction;
