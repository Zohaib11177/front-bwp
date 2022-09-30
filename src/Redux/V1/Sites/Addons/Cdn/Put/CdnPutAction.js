import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const cdnPut = (data) => {
    return {
        type: CDN.CDN_PUT,
        request: data,
    };
};
const cdnPutSuccess = (data) => {
    return {
        type: CDN.CDN_PUT_SUCCESS,
        response: data,
    };
};
const cdnPutFailed = (data) => {
    return {
        type: CDN.CDN_PUT_FAILED,
        response: data,
    };
};
const CdnUpdateAction = {
    cdnPut,
    cdnPutSuccess,
    cdnPutFailed,
};
export default CdnUpdateAction;
