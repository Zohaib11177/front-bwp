import TOPUP from "Redux/V1/Topup/ActionTypes";

const topupPut = (data) => {
    return {
        type: TOPUP.TOPUP_PUT,
        request: data,
    };
};
const topupPutSuccess = (data) => {
    return {
        type: TOPUP.TOPUP_PUT_SUCCESS,
        response: data,
    };
};
const topupPutFailed = (data) => {
    return {
        type: TOPUP.TOPUP_PUT_FAILED,
        response: data,
    };
};

const TopupAction = {
    topupPut,
    topupPutSuccess,
    topupPutFailed,
};
export default TopupAction;
