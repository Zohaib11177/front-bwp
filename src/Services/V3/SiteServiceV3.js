import Gateway from "Services/Gateway";
import V3 from "Constants/V3ApiConstant";

const siteGetV3 = (data) => {
    let query = window.location.search;
    if (data !== undefined) {
        query = `?page=${1}&page_limit=${data.page_limit}&search=${
            data.search
        }`;
    }
    const response = Gateway.gatewaySiteService("GET", V3.sites + query);
    return response;
};

const SiteServiceV3 = {
    siteGetV3,
};
export default SiteServiceV3;
