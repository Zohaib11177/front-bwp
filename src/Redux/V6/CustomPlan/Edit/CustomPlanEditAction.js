import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes";

const CustomPlanEdit = (data) => {
  return {
    type: CUSTOM_PLAN.CUSTOM_PLAN_EDIT,
    request: data,
  };
};
const CustomPlanEditSuccess = (data) => {
  return {
    type: CUSTOM_PLAN.CUSTOM_PLAN_EDIT_SUCCESS,
    response: data,
  };
};
const CustomPlanEditFailed = () => {
  return {
    type: CUSTOM_PLAN.CUSTOM_PLAN_EDIT_FAILED,
  };
};

const CustomPlanEditAction = {
  CustomPlanEdit,
  CustomPlanEditSuccess,
  CustomPlanEditFailed,
};

export default CustomPlanEditAction;
