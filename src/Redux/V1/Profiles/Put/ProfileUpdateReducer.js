import PROFILE from "Redux/V1/Profiles/ActionType";

const ProfileUpdateReducer = (
    state = {
        loading: false,
        success: false,
        profile: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case PROFILE.PROFILE_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case PROFILE.PROFILE_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                profile: action.response,
            };
        case PROFILE.PROFILE_PUT_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default ProfileUpdateReducer;
