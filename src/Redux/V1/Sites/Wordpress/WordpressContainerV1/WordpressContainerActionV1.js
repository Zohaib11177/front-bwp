import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
const wordpressContainer = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_CONTAINER_V1,
        request: data,
    };
};
const wordpressContainerSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_CONTAINER_SUCCESS_V1,
        response: data,
    };
};
const wordpressContainerFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_CONTAINER_FAILED_V1,
        response: data,
    };
};

const WordpressContainerActionV1 = {
    wordpressContainer,
    wordpressContainerSuccess,
    wordpressContainerFailed,
};
export default WordpressContainerActionV1;
