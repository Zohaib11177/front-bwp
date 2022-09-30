import FORCE from "Redux/V1/ForceRedirect/ActionTypes";

const forcePut = (data) => {
    return {
        type: FORCE.FORCE_PUT,
        request: data,
    };
};
const forcePutSuccess = (data) => {
    return {
        type: FORCE.FORCE_PUT_SUCCESS,
        response: data,
    };
};
const forcePutFailed = (data) => {
    return {
        type: FORCE.FORCE_PUT_FAILED,
        response: data,
    };
};

const ForceRedirectAction = {
    forcePut,
    forcePutSuccess,
    forcePutFailed,
};
export default ForceRedirectAction;
