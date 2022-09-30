import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

const CustomPlanCreate = (data) => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_CREATE,
        request: data,
    };
};
const CustomPlanCreateSuccess = (data) => {
    return {              
        type: CUSTOM_PLAN.CUSTOM_PLAN_CREATE_SUCCESS,
        response: data,
    };
};
const CustomPlanCreateFailed = (data) => {
    return {
        type: CUSTOM_PLAN.CUSTOM_PLAN_CREATE_FAILED,
        response: data,
    };
};

const CustomPlanCreateAction = {
    CustomPlanCreate,
    CustomPlanCreateSuccess,
    CustomPlanCreateFailed
}

export default CustomPlanCreateAction;