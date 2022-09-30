import SSL from "Redux/V1/Ssl/ActionType";

const sslRenew = (data) => {
    return {
        type: SSL.SSL_RENEW,
        request: data,
    };
};
const sslRenewSuccess = (data) => {
    return {
        type: SSL.SSL_RENEW_SUCCESS,
        response: data,
    };
};
const sslRenewFailed = (data) => {
    return {
        type: SSL.SSL_RENEW_FAILED,
        response: data,
    };
};

const SslRenewAction = {
    sslRenew,
    sslRenewSuccess,
    sslRenewFailed,
};

export default SslRenewAction;
