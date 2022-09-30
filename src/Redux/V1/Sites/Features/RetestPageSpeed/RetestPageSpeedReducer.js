import RETEST_PAGESPEED from "Redux/V1/Sites/SiteActionType";

const RetestPageSpeedReducer = (
    state = {
        loading: false,
        success: false,
        retest_pagespeed: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case RETEST_PAGESPEED.RETEST_PAGESPEED:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                retest_pagespeed: {},
            };
        case RETEST_PAGESPEED.RETEST_PAGESPEED_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                retest_pagespeed: action.response,
                err_mess: null,
            };
        case RETEST_PAGESPEED.RETEST_PAGESPEED_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                retest_pagespeed: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default RetestPageSpeedReducer;
