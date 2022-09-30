import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const stagingPost = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "POST",
        V6.staging + data
    );
    return response;
};

const syncPushEnv = async (data) => {
    const response = await GATEWAY.gatewaySiteService("PUT", V6.staging + data);
    return response;
};

const StagingService = {
    stagingPost,
    syncPushEnv,
};
export default StagingService;
