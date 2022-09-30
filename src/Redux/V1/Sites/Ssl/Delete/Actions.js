import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";

function disableSsl(data) {
    return {
        type: SSL_ACTION_TYPE.DISABLE_SSL,
        request: data,
    };
}
function disableSslSuccess(data) {
    return {
        type: SSL_ACTION_TYPE.DISABLE_SSL_SUCCESS,
        response: data,
    };
}
function disableSslFailed(data) {
    return {
        type: SSL_ACTION_TYPE.DISABLE_SSL_FAILED,
        response: data,
    };
}

const DisableSslAction = {
    disableSsl,
    disableSslSuccess,
    disableSslFailed,
};

export default DisableSslAction;
