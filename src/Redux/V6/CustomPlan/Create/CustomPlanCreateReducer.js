import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanCreatReducer = (
    state = {
        loading: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case CUSTOM_PLAN.CUSTOM_PLAN_CREATE:
            return {
                ...state,
                loading: true,
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_CREATE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response.message
            }
        default:
            return state
    }
}

export default CustomPlanCreatReducer;