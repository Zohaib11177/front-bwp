import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";

const DomainPrimaryReducerV6 = (
    state = {
        loading: false,
        success: false,
        domain_primary: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case DOMAIN.DOMAIN_PUT_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case DOMAIN.DOMAIN_PUT_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                domain_primary: action.response,
            };
        case DOMAIN.DOMAIN_PUT_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default DomainPrimaryReducerV6;
