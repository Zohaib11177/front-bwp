import AUTHV2 from "Redux/V2/Auth/AuthActionTypeV2";

const AccountVerificationReducerV2 = (
    state = {
        loading: false,
        success: false,
        account_verification: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case AUTHV2.ACCOUNT_VERIFICATION_V2:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                account_verification: {},
            };
        case AUTHV2.ACCOUNT_VERIFICATION_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                password: action.response,
                err_mess: null,
            };
        case AUTHV2.ACCOUNT_VERIFICATION_FAILED_V2:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                success: false,
                account_verification: {},
            };
        default:
            return state;
    }
};

export default AccountVerificationReducerV2;
