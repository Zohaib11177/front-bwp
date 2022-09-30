import Gateway from "Services/Gateway";
import V3 from "Constants/V3ApiConstant";

const getSiteDetail = (host) => {
    const response = Gateway.gatewaySiteService("GET", `${V3.sites}${host}`);
    return response;
};

const SiteDetailService = {
    getSiteDetail,
};
export default SiteDetailService;
