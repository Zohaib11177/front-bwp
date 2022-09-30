import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wpUpdateAll = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_V1,
        request: data,
    };
};
const wpUpdateAllSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_SUCCESS_V1,
        response: data,
    };
};
const wpUpdateAllFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_FAILED_V1,
        response: data,
    };
};
const WpUpdateAllActionV1 = {
    wpUpdateAll,
    wpUpdateAllSuccess,
    wpUpdateAllFailed,
};
export default WpUpdateAllActionV1;
