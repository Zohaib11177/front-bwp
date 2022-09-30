import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";

function enableSsl(data) {
    return {
        type: SSL_ACTION_TYPE.ENABLE_SSL,
        request: data,
    };
}
function enableSslSuccess(data) {
    return {
        type: SSL_ACTION_TYPE.ENABLE_SSL_SUCCESS,
        response: data,
    };
}
function enableSslFailed(data) {
    return {
        type: SSL_ACTION_TYPE.ENABLE_SSL_FAILED,
        response: data,
    };
}

const EnableSslAction = {
    enableSsl,
    enableSslSuccess,
    enableSslFailed,
};

export default EnableSslAction;
