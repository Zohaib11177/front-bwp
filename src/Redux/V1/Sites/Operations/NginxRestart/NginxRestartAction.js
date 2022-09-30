import OPERATION from "Redux/V1/Sites/Operations/ActionType";
const nginxRestart = (data) => {
    return {
        type: OPERATION.NGINX_RESTART,
        request: data,
    };
};
const nginxRestartSuccess = (data) => {
    return {
        type: OPERATION.NGINX_RESTART_SUCCESS,
        response: data,
    };
};
const nginxRestartFailed = (data) => {
    return {
        type: OPERATION.NGINX_RESTART_SUCCESS,
        response: data,
    };
};

const NginxRestartAction = {
    nginxRestart,
    nginxRestartSuccess,
    nginxRestartFailed,
};

export default NginxRestartAction;
