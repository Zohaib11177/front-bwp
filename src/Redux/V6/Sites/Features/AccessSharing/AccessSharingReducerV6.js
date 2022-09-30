import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";

const AccessSharingReducerV6 = (
    state = {
        loading: false,
        success: false,
        access_sharing: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.ACCESS_SHARING_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                access_sharing: {},
            };
        case FEATURE.ACCESS_SHARING_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                access_sharing: action.response.access_sharing,
                err_mess: null,
            };
        case FEATURE.ACCESS_SHARING_V6_FAILED:
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

export default AccessSharingReducerV6;
