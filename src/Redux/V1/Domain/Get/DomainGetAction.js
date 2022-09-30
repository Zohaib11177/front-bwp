import DOMAIN from "Redux/V1/Domain/ActionType";

const domainGet = (data) => {
    return {
        type: DOMAIN.DOMAIN_GET,
        request: data,
    };
};
const domainGetSuccess = (data) => {
    return {
        type: DOMAIN.DOMAIN_GET_SUCCESS,
        response: data,
    };
};
const domainGetFailed = (data) => {
    return {
        type: DOMAIN.DOMAIN_GET_FAILED,
        response: data,
    };
};

const DomainListAction = {
    domainGet,
    domainGetSuccess,
    domainGetFailed,
};
export default DomainListAction;
