import GATEWAY from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

const cdnEnable = async (data) => {
    const response = await GATEWAY.authGateway("POST", V2.cdn + data);
    return response;
};
const cdnDisable = async (data) => {
    const response = await GATEWAY.authGateway("DELETE", V2.cdn + data);
    return response;
};
const cdnPut = async (data) => {
    const _data = cdnPutBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V2.cdn + data.identity,
        _data
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
const CdnServiceV2 = {
    cdnEnable,
    cdnDisable,
    cdnPut,
};
export default CdnServiceV2;
