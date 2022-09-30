import STAGING from "Redux/V6/Staging/ActionTypeV6";

const StagingCreateReducerV6 = (
    state = {
        loading: false,
        staging: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case STAGING.STAGING_POST_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case STAGING.STAGING_POST_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                staging: action.response,
            };
        case STAGING.STAGING_POST_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default StagingCreateReducerV6;
