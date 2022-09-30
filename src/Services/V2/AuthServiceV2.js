import Gateway from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

const accountVerification = async (data) => {
    const response = await Gateway.guestGateway("PUT", V2.verification + data);
    return response;
};

const AuthServiceV2 = {
    accountVerification,
};

export default AuthServiceV2;
