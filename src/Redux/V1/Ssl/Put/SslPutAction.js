import SSL from "Redux/V1/Ssl/ActionType";

const sslPut = (data) => {
    return {
        type: SSL.SSL_PUT,
        request: data,
    };
};
const sslPutSuccess = (data) => {
    return {
        type: SSL.SSL_PUT_SUCCESS,
        response: data,
    };
};
const sslPutFailed = (data) => {
    return {
        type: SSL.SSL_PUT_FAILED,
        response: data,
    };
};

const SslEnableAction = {
    sslPut,
    sslPutSuccess,
    sslPutFailed,
};

export default SslEnableAction;
