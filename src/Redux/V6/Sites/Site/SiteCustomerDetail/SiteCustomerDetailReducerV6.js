import SITE from 'Redux/V6/Sites/Site/ActionTypeV6';

const SiteCustomerDetailReducerV6 = (
    state = {
        loading: false,
        success: false,
        customer_details:{
            email: "",
            name: ""
        },
        err_mess: null,
        
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_CUSTOMER_DETAIL_V6:
            return {
                ...state,
                loading: true,
                success: false,
                customer_details:{
                    email: "",
                    name: ""
                },
                err_mess: null,
            };
        case SITE.SITE_CUSTOMER_DETAIL_V6_SUCCESS:
        
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                customer_details: action.response.customer_details,
            };
        case SITE.SITE_CUSTOMER_DETAIL_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                customer_details:{
                    email: "",
                    name: ""
                },
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteCustomerDetailReducerV6;
