import STAGING from "Redux/V1/Staging/ActionType";

const StagingRenewalReducer = (
    state = {
        loading: false,
        staging_renewal: [],
        err_mess: null,
        success: false,
    },
    action
) => {
    switch (action.type) {
        case STAGING.STAGING_RENEWAL:
            return {
                ...state,
                loading: true,
                staging_renewal: [],
                err_mess: null,
                success: false,
            };
        case STAGING.STAGING_RENEWAL_SUCCESS:
            return {
                ...state,
                loading: false,
                staging_renewal: action.response,
                err_mess: null,
                success: true,
            };
        case STAGING.STAGING_RENEWAL_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                staging_renewal: [],
                success: false,
            };
        default:
            return state;
    }
};

export default StagingRenewalReducer;
