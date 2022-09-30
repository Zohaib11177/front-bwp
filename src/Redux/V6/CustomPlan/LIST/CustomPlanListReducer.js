import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanListReducer = (
    state = {
        loading: false,
        custom_plan: [],
        isFetched: false,
        pagination: null
    },
    action
) => {
    switch (action.type) {
        case CUSTOM_PLAN.CUSTOM_PLAN_LIST:
            return {
                ...state,
                loading: true,
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                custom_plan: action.response.plans,
                isFetched: true
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_LIST_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default CustomPlanListReducer;
