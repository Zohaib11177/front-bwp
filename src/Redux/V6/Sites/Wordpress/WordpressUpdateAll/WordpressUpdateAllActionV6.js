import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";

const wpUpdateAll = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_V6,
        request: data,
    };
};
const wpUpdateAllSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_V6_SUCCESS,
        response: data,
    };
};
const wpUpdateAllFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_ALL_V6_FAILED,
        response: data,
    };
};
const WpUpdateAllActionV6 = {
    wpUpdateAll,
    wpUpdateAllSuccess,
    wpUpdateAllFailed,
};
export default WpUpdateAllActionV6;
