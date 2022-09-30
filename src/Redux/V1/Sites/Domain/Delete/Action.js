import DOMAIN_ACTION_TYPE from "Redux/V1/Sites/Domain/ActionTypes";

const DeleteDomainAction = {
    deleteDomain,
    deleteDomainSuccess,
    deleteDomainFailed,
};

function deleteDomain(data) {
    return {
        type: DOMAIN_ACTION_TYPE.DELETE_DOMAIN,
        request: data,
    };
}
function deleteDomainSuccess(data) {
    return {
        type: DOMAIN_ACTION_TYPE.DELETE_DOMAIN_SUCCESS,
        response: data,
    };
}
function deleteDomainFailed(data) {
    return {
        type: DOMAIN_ACTION_TYPE.DELETE_DOMAIN_FAILED,
        response: data,
    };
}

export default DeleteDomainAction;
