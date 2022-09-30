import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";

const DomainDeleteActionV6 = {
    deleteDomain,
    deleteDomainSuccess,
    deleteDomainFailed,
};

function deleteDomain(data) {
    return {
        type: DOMAIN.DOMAIN_DELETE_V6,
        request: data,
    };
}
function deleteDomainSuccess(data) {
    return {
        type: DOMAIN.DOMAIN_DELETE_V6_SUCCESS,
        response: data,
    };
}
function deleteDomainFailed(data) {
    return {
        type: DOMAIN.DOMAIN_DELETE_V6_FAILED,
        response: data,
    };
}

export default DomainDeleteActionV6;
