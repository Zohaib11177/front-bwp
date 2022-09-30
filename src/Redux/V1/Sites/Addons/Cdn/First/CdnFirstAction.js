import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const cdnFirst = (data) => {
    return {
        type: CDN.CDN_FIRST,
        request: data,
    };
};
const cdnFirstSuccess = (data) => {
    return {
        type: CDN.CDN_FIRST_SUCCESS,
        response: data,
    };
};
const cdnFirstFailed = (data) => {
    return {
        type: CDN.CDN_FIRST_FAILED,
        response: data,
    };
};

const CdnDetailAction = {
    cdnFirst,
    cdnFirstSuccess,
    cdnFirstFailed,
};
export default CdnDetailAction;
