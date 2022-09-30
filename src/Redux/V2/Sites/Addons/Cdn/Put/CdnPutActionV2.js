import CDN from "Redux/V2/Sites/Addons/Cdn/ActionTypeV2";

const cdnPut = (data) => {
    return {
        type: CDN.CDN_PUT_V2,
        request: data,
    };
};
const cdnPutSuccess = (data) => {
    return {
        type: CDN.CDN_PUT_SUCCESS_V2,
        response: data,
    };
};
const cdnPutFailed = (data) => {
    return {
        type: CDN.CDN_PUT_FAILED_V2,
        response: data,
    };
};
const CdnUpdateActionV2 = {
    cdnPut,
    cdnPutSuccess,
    cdnPutFailed,
};
export default CdnUpdateActionV2;
