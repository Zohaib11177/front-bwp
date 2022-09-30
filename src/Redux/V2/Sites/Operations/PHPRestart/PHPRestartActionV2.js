import OPERATION from "Redux/V2/Sites/Operations/ActionTypeV2";

const phpRestart = (data) => {
    return {
        type: OPERATION.PHP_RESTART_V2,
        request: data,
    };
};
const phpRestartSuccess = (data) => {
    return {
        type: OPERATION.PHP_RESTART_SUCCESS_V2,
        response: data,
    };
};
const phpRestartFailed = (data) => {
    return {
        type: OPERATION.PHP_RESTART_FAILED_V2,
        response: data,
    };
};

const PhpRestartActionV2 = {
    phpRestart,
    phpRestartSuccess,
    phpRestartFailed,
};

export default PhpRestartActionV2;
