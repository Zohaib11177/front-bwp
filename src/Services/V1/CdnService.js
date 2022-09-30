import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const cdnFirst = async (data) => {
    const response = await GATEWAY.authGateway("GET", V1.cdn.details + data);
    return response;
};
const cdnEnable = async (data) => {
    const response = await GATEWAY.authGateway("PUT", V1.cdn.enable + data);
    return response;
};
const cdnDisable = async (data) => {
    const response = await GATEWAY.authGateway("PUT", V1.cdn.disable + data);
    return response;
};
const cdnPut = async (data) => {
    const _data = cdnPutBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.cdn.update + data.identity,
        _data
    );
    return response;
};
const cdnCache = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.cdn.purge_cache + data
    );
    return response;
};
const cdnPutBody = (data) => {
    let _data = {};
    _data.include = data.form.include;
    _data.exclude = data.form.exclude;
    _data.disable_admin = data.form.disable_admin;
    return JSON.stringify(_data);
};
const CdnService = {
    cdnFirst,
    cdnEnable,
    cdnDisable,
    cdnPut,
    cdnCache,
};
export default CdnService;
