import AFFILIATE_PROFILE from "Redux/V1/Affiliate/AffiliateProfile/ActionType";

const AffProfileUpdateReducer = (
    state = {
        loading: false,
        affiliate_profile: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
                affiliate_profile: [],
                success: false,
            };
        case AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                affiliate_profile: action.response,
                err_mess: null,
                success: false,
            };
        case AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT_FAILED:
            return {
                ...state,
                loading: false,
                affiliate_profile: [],
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default AffProfileUpdateReducer;
