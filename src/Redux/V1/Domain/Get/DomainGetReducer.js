import DOMAIN from "Redux/V1/Domain/ActionType";

const DomainListReducer = (
    state = {
        loading: false,
        success: false,
        domains: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case DOMAIN.DOMAIN_GET:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case DOMAIN.DOMAIN_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                domains: action.response.domains,
            };
        case DOMAIN.DOMAIN_GET_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default DomainListReducer;
