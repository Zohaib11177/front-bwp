import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const cacheAllClear = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V6.site_operation.clear_all_cache + data
    );
    return response;
};

const SiteOperationService = {
    cacheAllClear,
};
export default SiteOperationService;
