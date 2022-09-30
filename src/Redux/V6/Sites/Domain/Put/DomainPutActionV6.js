import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";

const domainPut = (data) => {
    return {
        type: DOMAIN.DOMAIN_PUT_V6,
        request: data,
    };
};
const domainPutSuccess = (data) => {
    return {
        type: DOMAIN.DOMAIN_PUT_V6_SUCCESS,
        response: data,
    };
};
const domainPutFailed = (data) => {
    return {
        type: DOMAIN.DOMAIN_PUT_V6_FAILED,
        response: data,
    };
};

const DomainPrimaryActionV6 = {
    domainPut,
    domainPutSuccess,
    domainPutFailed,
};
export default DomainPrimaryActionV6;
