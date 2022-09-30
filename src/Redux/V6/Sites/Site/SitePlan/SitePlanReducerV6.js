import SITE from 'Redux/V6/Sites/Site/ActionTypeV6';

const SitePlanReducerV6 = (
    state = {
        loading: false,
        success: false,
        plan: [],
        err_mess: null,
        default_plan: [],
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_PLAN_V6:
            return {
                ...state,
                loading: true,
                success: false,
                plan: [],
                err_mess: null,
            };
        case SITE.SITE_PLAN_V6_SUCCESS:
            const defaultPlan = action.response.plans.filter(
                (plan) => plan.default
            );
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                default_plan: defaultPlan[0] || [],
                plan: action.response.plans,
            };
        case SITE.SITE_PLAN_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                plan: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SitePlanReducerV6;
