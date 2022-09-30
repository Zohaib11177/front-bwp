import AFFILIATE_PROFILE from "Redux/V1/Affiliate/AffiliateProfile/ActionType";

const affProfilePut = (data) => {
    return {
        type: AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT,
        request: data,
    };
};
const affProfilePutSuccess = (data) => {
    return {
        type: AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT_SUCCESS,
        response: data,
    };
};
const affProfilePutFailed = (data) => {
    return {
        type: AFFILIATE_PROFILE.AFFILIATE_PROFILE_PUT_FAILED,
        response: data,
    };
};
const AffProfileUpdateAction = {
    affProfilePut,
    affProfilePutSuccess,
    affProfilePutFailed,
};
export default AffProfileUpdateAction;
