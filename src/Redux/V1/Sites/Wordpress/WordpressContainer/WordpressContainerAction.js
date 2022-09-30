import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
const wordpressContainer = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_CONTAINER,
        request: data,
    };
};
const wordpressContainerSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_CONTAINER_SUCCESS,
        response: data,
    };
};
const wordpressContainerFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_CONTAINER_FAILED,
        response: data,
    };
};

const WordpressContainerAction = {
    wordpressContainer,
    wordpressContainerSuccess,
    wordpressContainerFailed,
};
export default WordpressContainerAction;
