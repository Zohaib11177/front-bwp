import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

const get = async (data) => {
    const response = await GATEWAY.authGateway("GET", `${V1.ssl.get}${data}`);
    return response;
};

const enable = async (data) => {
    const _data = sslEnableBody(data.domains);
    const response = await GATEWAY.authGateway(
        "PUT",
        `${V2.ssl.enable}${data.identity}`,
        _data
    );
    return response;
};

const disable = async (identity) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        `${V1.ssl.disable}${identity}`
    );
    return response;
};

const sslEnableBody = (data) => {
    let _data = {};
    _data.id = data;
    return JSON.stringify(_data);
};
const sslDelete = async (data) => {
    const _data = sslDeleteBody(data.revoke_domains);
    const response = await GATEWAY.authGateway(
        "DELETE",
        `${V2.ssl.revoke}${data.identity}`,
        _data
    );
    return response;
};
const sslDeleteBody = (data) => {
    let _data = {};
    _data.id = data;
    return JSON.stringify(_data);
};
const sslRenew = async (data) => {
    const _data = sslRenewBody(data.id);
    const response = await GATEWAY.authGateway(
        "PUT",
        `${V2.ssl.renew}${data.identity}`,
        _data
    );
    return response;
};
const sslRenewBody = (data) => {
    let _data = {};
    _data.id = data;
    return JSON.stringify(_data);
};
const SslService = {
    get,
    enable,
    disable,
    sslDelete,
    sslRenew,
};
export default SslService;
