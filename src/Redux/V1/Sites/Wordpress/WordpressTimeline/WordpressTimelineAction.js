import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wordpressTimeline = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_TIMELINE,
        request: data,
    };
};
const wordpressTimelineSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_TIMELINE_SUCCESS,
        response: data,
    };
};
const wordpressTimelineFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_TIMELINE_FAILED,
        response: data,
    };
};

const WordpressTimelineAction = {
    wordpressTimeline,
    wordpressTimelineSuccess,
    wordpressTimelineFailed,
};

export default WordpressTimelineAction;
