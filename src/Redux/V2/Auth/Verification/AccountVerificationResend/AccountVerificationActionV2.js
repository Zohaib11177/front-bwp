import AUTHV2 from "Redux/V2/Auth/AuthActionTypeV2";

const accountVerification = (data) => {
    return {
        type: AUTHV2.ACCOUNT_VERIFICATION_V2,
        request: data,
    };
};
const accountVerificationSuccess = (data) => {
    return {
        type: AUTHV2.ACCOUNT_VERIFICATION_SUCCESS_V2,
        response: data,
    };
};
const accountVerificationFailed = (data) => {
    return {
        type: AUTHV2.ACCOUNT_VERIFICATION_FAILED_V2,
        response: data,
    };
};

const AccountVerificationActionV2 = {
    accountVerification,
    accountVerificationSuccess,
    accountVerificationFailed,
};
export default AccountVerificationActionV2;
