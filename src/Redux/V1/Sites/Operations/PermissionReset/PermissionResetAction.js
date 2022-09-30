import OPERATION from "Redux/V1/Sites/Operations/ActionType";

const permissionReset = (data) => {
    return {
        type: OPERATION.PERMISSION_RESET,
        request: data,
    };
};
const permissionResetSuccess = (data) => {
    return {
        type: OPERATION.PERMISSION_RESET_SUCCESS,
        response: data,
    };
};
const permissionResetFailed = (data) => {
    return {
        type: OPERATION.PERMISSION_RESET_FAILED,
        response: data,
    };
};

const PermissionResetAction = {
    permissionReset,
    permissionResetSuccess,
    permissionResetFailed,
};

export default PermissionResetAction;
