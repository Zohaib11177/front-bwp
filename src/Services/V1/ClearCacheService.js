import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const clearCache = async (data) => {
    const response = await GATEWAY.authGateway("GET", V1.clear_cache + data);
    return response;
};

const ClearCacheService = {
    clearCache,
};
export default ClearCacheService;
