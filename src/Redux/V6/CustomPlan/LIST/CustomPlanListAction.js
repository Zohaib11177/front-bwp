import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanList = () => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_LIST,
    };
};
const CustomPlanListSuccess = (data) => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_LIST_SUCCESS,
        response: data,
    };
};
const CustomPlanListFailed = () => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_LIST_FAILED,
    };
};

const CustomPlanListAction = {
    CustomPlanList,
    CustomPlanListSuccess,
    CustomPlanListFailed
}

export default CustomPlanListAction;