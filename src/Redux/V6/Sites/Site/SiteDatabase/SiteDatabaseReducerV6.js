import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteDatabaseReducerV6 = (
    state = {
        loading: false,
        success: false,
        database: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DATABASE_V6:
            return {
                ...state,
                loading: true,
                success: false,
                database: {},
                err_mess: null,
            };
        case SITE.SITE_DATABASE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                database: action.response.database,
            };
        case SITE.SITE_DATABASE_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                database: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteDatabaseReducerV6;
