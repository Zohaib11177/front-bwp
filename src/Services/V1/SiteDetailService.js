import Gateway from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const getSiteDetail = (host) => {
    const response = Gateway.gatewaySiteService("GET", `${V1.sites}${host}`);
    return response;
};

const SiteDetailService = {
    getSiteDetail,
};
export default SiteDetailService;
