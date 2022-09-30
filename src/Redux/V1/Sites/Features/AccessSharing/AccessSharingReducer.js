import FEATURE from "Redux/V1/Sites/Features/ActionType";

const AccessSharingReducer = (
    state = {
        loading: false,
        success: false,
        access_sharing: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.ACCESS_SHARING:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                access_sharing: {},
            };
        case FEATURE.ACCESS_SHARING_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                access_sharing: action.response.access_sharing,
                err_mess: null,
            };
        case FEATURE.ACCESS_SHARING_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                success: false,
                access_sharing: {},
            };
        default:
            return state;
    }
};

export default AccessSharingReducer;
