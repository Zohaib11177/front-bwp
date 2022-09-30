import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WordpressLockReducer = (
    state = {
        loading: false,
        success: false,
        lock: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_LOCK:
            return {
                ...state,
                loading: true,
                success: true,
                lock: [],
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_LOCK_SUCCESS:
            return {
                ...state,
                loading: false,
                success: false,
                lock: action.response,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_LOCK_FAILED:
            return {
                ...state,
                loading: false,
                lock: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressLockReducer;
