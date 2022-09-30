import REGISTER from "Redux/V3/Auth/Register/Post/ActionType";

const RegisterReducer = (
    state = {
        loading: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case REGISTER.REGISTRATION_POST:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case REGISTER.REGISTRATION_POST_SUCCESS:
            return { ...state, loading: false };
        case REGISTER.REGISTRATION_POST_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default RegisterReducer;
