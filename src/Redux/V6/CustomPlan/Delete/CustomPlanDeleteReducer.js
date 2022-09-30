import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanDeleteReducer = (
    state = {
        loading: false,
        isDeleted: false
    },
    action
) => {
    switch (action.type) {
        case CUSTOM_PLAN.CUSTOM_PLAN_DELETE:
            return {
                ...state,
                loading: true,
                isDeleted : false
            }
        case CUSTOM_PLAN.CUSTOM_PLAN_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: true,
            }
        case CUSTOM_PLAN.SERVICE_DELETE_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default CustomPlanDeleteReducer;
