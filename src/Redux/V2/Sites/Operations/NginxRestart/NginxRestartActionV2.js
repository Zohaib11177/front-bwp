import OPERATION from "Redux/V2/Sites/Operations/ActionTypeV2";
const nginxRestart = (data) => {
    return {
        type: OPERATION.NGINX_RESTART_V2,
        request: data,
    };
};
const nginxRestartSuccess = (data) => {
    return {
        type: OPERATION.NGINX_RESTART_SUCCESS_V2,
        response: data,
    };
};
const nginxRestartFailed = (data) => {
    return {
        type: OPERATION.NGINX_RESTART_SUCCESS_V2,
        response: data,
    };
};

const NginxRestartActionV2 = {
    nginxRestart,
    nginxRestartSuccess,
    nginxRestartFailed,
};

export default NginxRestartActionV2;
