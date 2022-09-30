import DOMAIN from "Redux/V1/Domain/ActionType";

const searchGet = (data) => {
    return {
        type: DOMAIN.SEARCH_GET,
        request: data,
    };
};
const searchGetSuccess = (data) => {
    return {
        type: DOMAIN.SEARCH_GET_SUCCESS,
        response: data,
    };
};
const searchGetFailed = (data) => {
    return {
        type: DOMAIN.SEARCH_GET_FAILED,
        response: data,
    };
};

const DomainSearchAction = {
    searchGet,
    searchGetSuccess,
    searchGetFailed,
};
export default DomainSearchAction;
