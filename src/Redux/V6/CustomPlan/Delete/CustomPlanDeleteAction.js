import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanDelete = (data) => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_DELETE,
        request: data
    };
};
const CustomPlanDeleteSuccess = () => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_DELETE_SUCCESS,
    
    };
};
const CustomPlanDeleteFailed = () => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_DELETE_FAILED,
    };
};

const CustomPlanDeleteAction = {
    CustomPlanDelete,
    CustomPlanDeleteSuccess,
    CustomPlanDeleteFailed
}

export default CustomPlanDeleteAction;