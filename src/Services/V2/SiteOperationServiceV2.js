import GATEWAY from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

const nginxRestart = async (identity) => {
    const response = await GATEWAY.authGateway(
        "GET",
        `${V2.site_operation.restart_nginx}${identity}`
    );
    return response;
};

const phpRestart = async (identity) => {
    const response = await GATEWAY.authGateway(
        "GET",
        `${V2.site_operation.restart_php}${identity}`
    );
    return response;
};

const SiteOperationServiceV2 = {
    nginxRestart,
    phpRestart,
};
export default SiteOperationServiceV2;
