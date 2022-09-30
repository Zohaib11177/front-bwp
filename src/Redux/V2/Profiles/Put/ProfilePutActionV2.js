import PROFILE from "Redux/V2/Profiles/ActionTypeV2";

const profilePut = (data) => {
    return {
        type: PROFILE.PROFILE_PUT_V2,
        request: data,
    };
};
const profilePutSuccess = (data) => {
    return {
        type: PROFILE.PROFILE_PUT_SUCCESS_V2,
        response: data,
    };
};
const profilePutFailed = (data) => {
    return {
        type: PROFILE.PROFILE_PUT_FAILED_V2,
        response: data,
    };
};

const ProfileUpdateActionV2 = {
    profilePut,
    profilePutSuccess,
    profilePutFailed,
};


export default ProfileUpdateActionV2;
