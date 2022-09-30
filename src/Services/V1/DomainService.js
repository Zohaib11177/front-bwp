import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

const postDomain = async (data, identity) => {
    const _data = domainBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "POST",
        `${V1.domain.restful}${identity}`,
        _data
    );
    return response;
};

const deleteDomain = async (data) => {
    const _data = domainDeleteBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "DELETE",
        `${V1.domain.restful}${data.identity}`,
        _data
    );
    return response;
};

const domainPut = async (data) => {
    const _data = domainPrimaryBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        `${V1.domain.primary}${data.identity}`,
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

const domainGet = async (identity) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V1.domain.restful}${identity}`
    );
    return response;
};

const domainPrimaryBody = (data) => {
    let _data = {};
    _data.domain = data.domain;
    return JSON.stringify(_data);
};

const searchGet = async (data) => {
    const response = await GATEWAY.authGateway(
        "GET",
        `${V2.domain.search}?field=${data.field}&value=${data.value}`
    );
    return response;
};

const DomainService = {
    deleteDomain,
    postDomain,
    domainGet,
    domainPut,
    searchGet,
};
export default DomainService;
