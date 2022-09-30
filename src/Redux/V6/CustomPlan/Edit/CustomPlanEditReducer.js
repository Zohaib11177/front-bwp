import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanEditReducer = (
    state = {
        loading: false,
        isUpdated : false
    },
    action
) => {
    switch (action.type) {
        case CUSTOM_PLAN.CUSTOM_PLAN_EDIT:
            return {
                ...state,
                loading: true,
                isUpdated : false
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated : true
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_EDIT_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default CustomPlanEditReducer;
