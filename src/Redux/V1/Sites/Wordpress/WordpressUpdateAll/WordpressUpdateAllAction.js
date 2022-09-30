import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wpUpdateAll = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL,
        request: data,
    };
};
const wpUpdateAllSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_SUCCESS,
        response: data,
    };
};
const wpUpdateAllFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_FAILED,
        response: data,
    };
};
const WpUpdateAllAction = {
    wpUpdateAll,
    wpUpdateAllSuccess,
    wpUpdateAllFailed,
};
export default WpUpdateAllAction;
