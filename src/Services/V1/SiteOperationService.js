import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const nginxRestart = async (identity) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V1.site_operation.restart_nginx}${identity}`
    );
    return response;
};

const phpRestart = async (identity) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V1.site_operation.restart_php}${identity}`
    );
    return response;
};

const permissionReset = async (identity) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V1.site_operation.reset_permission}${identity}`
    );
    return response;
};

const cacheClear = async (data) => {
    const response = await GATEWAY.authGateway("GET", V1.clear_cache + data);
    return response;
};

const cacheAllClear = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V1.site_operation.clear_all_cache + data
    );
    return response;
};

const SiteOperationService = {
    nginxRestart,
    phpRestart,
    permissionReset,
    cacheClear,
    cacheAllClear,
};
export default SiteOperationService;
