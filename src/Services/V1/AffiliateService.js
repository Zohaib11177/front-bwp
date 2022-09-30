import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const affiliateStats = async () => {
    const response = await GATEWAY.authGateway("GET", V1.affiliate.stats);
    return response;
};
const affiliateWallet = async () => {
    const response = await GATEWAY.authGateway("GET", V1.affiliate.wallet);
    return response;
};
const affiliateClick = async (data) => {
    const queryParams = window.location.search;
    const response = await GATEWAY.gatewayLogify(
        "GET",
        V1.affiliate.click + data + queryParams
    );
    return response;
};
const affProfilePut = async (data) => {
    const _data = affProfilePutBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.affiliate.profile,
        _data
    );
    return response;
};
function affProfilePutBody(data) {
    let _data = {};
    _data.paypal_account = data.paypal_account;
    return JSON.stringify(_data);
}
const AuthService = {
    affiliateStats,
    affiliateWallet,
    affiliateClick,
    affProfilePut,
};
export default AuthService;
