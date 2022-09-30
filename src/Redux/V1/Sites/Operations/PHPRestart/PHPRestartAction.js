import OPERATION from "Redux/V1/Sites/Operations/ActionType";

const phpRestart = (data) => {
    return {
        type: OPERATION.PHP_RESTART,
        request: data,
    };
};
const phpRestartSuccess = (data) => {
    return {
        type: OPERATION.PHP_RESTART_SUCCESS,
        response: data,
    };
};
const phpRestartFailed = (data) => {
    return {
        type: OPERATION.PHP_RESTART_FAILED,
        response: data,
    };
};

const PhpRestartAction = {
    phpRestart,
    phpRestartSuccess,
    phpRestartFailed,
};

export default PhpRestartAction;
