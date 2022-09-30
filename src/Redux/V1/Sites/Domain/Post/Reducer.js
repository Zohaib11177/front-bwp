import DOMAIN_ACTION_TYPE from "Redux/V1/Sites/Domain/ActionTypes";

const PostDomainReducer = (
    state = {
        loading: false,
        success: false,
        domains: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case DOMAIN_ACTION_TYPE.POST_DOMAIN:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case DOMAIN_ACTION_TYPE.POST_DOMAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                POST_DOMAIN: action.response,
            };
        case DOMAIN_ACTION_TYPE.POST_DOMAIN_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default PostDomainReducer;
