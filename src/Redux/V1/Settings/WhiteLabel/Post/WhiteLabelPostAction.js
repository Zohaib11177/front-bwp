import SETTINGS from "Redux/V1/Settings/ActionType";

const whiteLabelPost = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_POST,
        request: data,
    };
};
const whiteLabelPostSuccess = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_POST_SUCCESS,
        response: data,
    };
};
const whiteLabelPostFailed = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_POST_FAILED,
        response: data,
    };
};
const WhiteLabelCreateAction = {
    whiteLabelPost,
    whiteLabelPostSuccess,
    whiteLabelPostFailed,
};
export default WhiteLabelCreateAction;
