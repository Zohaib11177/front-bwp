import GATEWAY from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

const accessSharing = async (identity) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V2.access_sharing + identity
    );
    return response;
};

const SiteFeatureServiceV2 = {
    accessSharing,
};
export default SiteFeatureServiceV2;
