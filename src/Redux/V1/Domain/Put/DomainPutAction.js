import DOMAIN from "Redux/V1/Domain/ActionType";

const domainPut = (data) => {
    return {
        type: DOMAIN.DOMAIN_PUT,
        request: data,
    };
};
const domainPutSuccess = (data) => {
    return {
        type: DOMAIN.DOMAIN_PUT_SUCCESS,
        response: data,
    };
};
const domainPutFailed = (data) => {
    return {
        type: DOMAIN.DOMAIN_PUT_FAILED,
        response: data,
    };
};

const DomainPrimaryAction = {
    domainPut,
    domainPutSuccess,
    domainPutFailed,
};
export default DomainPrimaryAction;
