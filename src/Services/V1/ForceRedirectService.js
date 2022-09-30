import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const forcePut = async (data) => {
    const response = await GATEWAY.authGateway("PUT", V1.force_redirect + data);
    return response;
};
const ForceRedirectService = {
    forcePut,
};
export default ForceRedirectService;
