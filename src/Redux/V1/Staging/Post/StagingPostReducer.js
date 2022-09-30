import STAGING from "Redux/V1/Staging/ActionType";

const StagingCreateReducer = (
    state = {
        loading: false,
        staging: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case STAGING.STAGING_POST:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case STAGING.STAGING_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                staging: action.response,
            };
        case STAGING.STAGING_POST_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default StagingCreateReducer;
