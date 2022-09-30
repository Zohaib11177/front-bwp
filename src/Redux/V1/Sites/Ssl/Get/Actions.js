import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";

function getSsl(data) {
    return {
        type: SSL_ACTION_TYPE.GET_SSL,
        request: data,
    };
}
function getSslSuccess(data) {
    return {
        type: SSL_ACTION_TYPE.GET_SSL_SUCCESS,
        response: data,
    };
}
function getSslFailed(data) {
    return {
        type: SSL_ACTION_TYPE.GET_SSL_FAILED,
        response: data,
    };
}

const GetSslAction = {
    getSsl,
    getSslSuccess,
    getSslFailed,
};

export default GetSslAction;
