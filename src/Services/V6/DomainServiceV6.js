import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const postDomain = async (data, host) => {
    const _data = domainBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "POST",
        `${V6.domains.restful}${host}`,
        _data
    );
    return response;
};

const deleteDomain = async (data) => {
    const _data = domainDeleteBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "DELETE",
        `${V6.domains.restful}${data.host}`,
        _data
    );
    return response;
};

const domainPut = async (data, host) => {
    console.log(data);
    const _data = domainPrimaryBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        `${V6.domains.primary}${host}`,
        _data
    );
    return response;
};
const domainDeleteBody = (data) => {
    let _data = {};
    _data.domain = data.domain;
    return JSON.stringify(_data);
};
const domainBody = (data) => {
    let _data = {};
    _data.domain = data.new_domain;
    return JSON.stringify(_data);
};

const domainPrimaryBody = (data) => {
    let _data = {};
    _data.domain = data;
    return JSON.stringify(_data);
};

const DomainService = {
    deleteDomain,
    postDomain,
    domainPut,
};
export default DomainService;
