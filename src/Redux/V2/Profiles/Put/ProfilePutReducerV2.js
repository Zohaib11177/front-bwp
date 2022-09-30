import PROFILE from "Redux/V2/Profiles/ActionTypeV2";

const ProfileUpdateReducerV2 = (
    state = {
        loading: false,
        success: false,
        update_profile: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case PROFILE.PROFILE_PUT_V2:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case PROFILE.PROFILE_PUT_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                update_profile: action.response,
            };
        case PROFILE.PROFILE_PUT_FAILED_V2:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default ProfileUpdateReducerV2;
