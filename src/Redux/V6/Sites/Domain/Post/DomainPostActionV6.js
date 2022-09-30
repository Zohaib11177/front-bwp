import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";

const DomainPostActionV6 = {
    postDomain,
    postDomainSuccess,
    postDomainFailed,
};

function postDomain(data) {
    return {
        type: DOMAIN.DOMAIN_POST_V6,
        request: data,
    };
}
function postDomainSuccess(data) {
    return {
        type: DOMAIN.DOMAIN_POST_V6_SUCCESS,
        response: data,
    };
}
function postDomainFailed(data) {
    return {
        type: DOMAIN.DOMAIN_POST_V6_FAILED,
        response: data,
    };
}

export default DomainPostActionV6;
