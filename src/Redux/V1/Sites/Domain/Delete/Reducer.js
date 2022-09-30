import DOMAIN_ACTION_TYPE from "Redux/V1/Sites/Domain/ActionTypes";

const DeleteDomainReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case DOMAIN_ACTION_TYPE.DELETE_DOMAIN:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case DOMAIN_ACTION_TYPE.DELETE_DOMAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case DOMAIN_ACTION_TYPE.DELETE_DOMAIN_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default DeleteDomainReducer;
