import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wordpressUpdate = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE,
        request: data,
    };
};
const wordpressUpdateSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_SUCCESS,
        response: data,
    };
};
const wordpressUpdateFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_FAILED,
        response: data,
    };
};

const WordpressUpdateAction = {
    wordpressUpdate,
    wordpressUpdateSuccess,
    wordpressUpdateFailed,
};
export default WordpressUpdateAction;
