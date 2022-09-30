import DOMAIN from "Redux/V1/Domain/ActionType";

const DomainPrimaryReducer = (
    state = {
        loading: false,
        success: false,
        domain_primary: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case DOMAIN.DOMAIN_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case DOMAIN.DOMAIN_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                domain_primary: action.response,
            };
        case DOMAIN.DOMAIN_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default DomainPrimaryReducer;
