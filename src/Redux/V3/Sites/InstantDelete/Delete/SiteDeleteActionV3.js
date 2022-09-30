import INSTANT from "Redux/V3/Sites/InstantDelete/SiteDeleteRootActionTypeV3";

const instantDelete = (data) => {
    return {
        type: INSTANT.INSTANT_DELETE_V3,
        request: data.identity,
    };
};
const instantDeleteSuccess = (data) => {
    return {
        type: INSTANT.INSTANT_DELETE_SUCCESS_V3,
        response: data,
    };
};
const instantDeleteFailed = (data) => {
    return {
        type: INSTANT.INSTANT_DELETE_FAILED_V3,
        response: data,
    };
};
const InstantDeleteActionV3 = {
    instantDelete,
    instantDeleteSuccess,
    instantDeleteFailed,
};

export default InstantDeleteActionV3;
