import SSL from "Redux/V1/Ssl/ActionType";

const sslDelete = (data) => {
    return {
        type: SSL.SSL_DELETE,
        request: data,
    };
};
const sslDeleteSuccess = (data) => {
    return {
        type: SSL.SSL_DELETE_SUCCESS,
        response: data,
    };
};
const sslDeleteFailed = (data) => {
    return {
        type: SSL.SSL_DELETE_FAILED,
        response: data,
    };
};

const SslRevokeAction = {
    sslDelete,
    sslDeleteSuccess,
    sslDeleteFailed,
};

export default SslRevokeAction;
