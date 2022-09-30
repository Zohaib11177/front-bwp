import STAGING from "Redux/V1/Staging/ActionType";

const StagingDeleteReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case STAGING.STAGING_DELETE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case STAGING.STAGING_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case STAGING.STAGING_DELETE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};
export default StagingDeleteReducer;
