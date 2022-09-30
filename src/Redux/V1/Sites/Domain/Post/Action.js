import DOMAIN_ACTION_TYPE from "Redux/V1/Sites/Domain/ActionTypes";

const PostDomainAction = {
    postDomain,
    postDomainSuccess,
    postDomainFailed,
};

function postDomain(data) {
    return {
        type: DOMAIN_ACTION_TYPE.POST_DOMAIN,
        request: data,
    };
}
function postDomainSuccess(data) {
    return {
        type: DOMAIN_ACTION_TYPE.POST_DOMAIN_SUCCESS,
        response: data,
    };
}
function postDomainFailed(data) {
    return {
        type: DOMAIN_ACTION_TYPE.POST_DOMAIN_FAILED,
        response: data,
    };
}

export default PostDomainAction;
