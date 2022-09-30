import GATEWAY from "Services/Gateway";
import V3 from "Constants/V3ApiConstant";

const wordpressLogin = (identity) => {
    const response = GATEWAY.authGateway(
        "GET",
        `${V3.site_operation.quick_login}${identity}`
    );
    return response;
};

const SiteFeatureServiceV3 = {
    wordpressLogin,
};
export default SiteFeatureServiceV3;
