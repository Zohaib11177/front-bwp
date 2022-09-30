import DOMAIN from "Redux/V1/Sites/Domain/ActionTypes";

const DomainDeleteReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case DOMAIN.DOMAIN_DELETE_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case DOMAIN.DOMAIN_DELETE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case DOMAIN.DOMAIN_DELETE_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default DomainDeleteReducerV6;
