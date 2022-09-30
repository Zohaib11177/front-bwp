import Gateway from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const getRegions = (identity) => {
    const response = Gateway.gatewaySiteService("GET", `${V6.regions}`);
    return response;
};

const getPlans = (identity) => {
    const response = Gateway.gatewaySiteService("GET", `${V6.plans}`);
    return response;
};

const siteAddon = () => {
    const response = Gateway.gatewaySiteService("GET", V6.products);
    return response;
};

const siteDomain = (data) => {
    const _data = siteDomainBody(data);
    const response = Gateway.gatewaySiteService("POST", V6.domain, _data);
    return response;
};

const siteDomainBody = (data) => {
    let _data = {};
    _data.domain = data;

    return JSON.stringify(_data);
};

const RegionService = {
    getRegions,
    getPlans,
    siteAddon,
    siteDomain,
};
export default RegionService;
