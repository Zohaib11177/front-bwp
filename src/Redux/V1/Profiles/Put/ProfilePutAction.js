import PROFILE from "Redux/V1/Profiles/ActionType";

const profilePut = (data) => {
    return {
        type: PROFILE.PROFILE_PUT,
        request: data,
    };
};
const profilePutSuccess = (data) => {
    return {
        type: PROFILE.PROFILE_PUT_SUCCESS,
        response: data,
    };
};
const profilePutFailed = (data) => {
    return {
        type: PROFILE.PROFILE_PUT_FAILED,
        response: data,
    };
};

const ProfileUpdateAction = {
    profilePut,
    profilePutSuccess,
    profilePutFailed,
};
export default ProfileUpdateAction;
