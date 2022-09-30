import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";

const WordpressLockReducerV6 = (
    state = {
        loading: false,
        success: false,
        lock: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_LOCK_V6:
            return {
                ...state,
                loading: true,
                success: true,
                lock: [],
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_LOCK_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: false,
                lock: action.response,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_LOCK_V6_FAILED:
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

export default WordpressLockReducerV6;
