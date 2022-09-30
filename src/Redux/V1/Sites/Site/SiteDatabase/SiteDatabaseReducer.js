import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteDatabaseReducer = (
    state = {
        loading: false,
        success: false,
        site_db: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DATABASE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                site_db: [],
            };
        case SITE.SITE_DATABASE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                site_db: action.response.dbs,
                err_mess: null,
            };
        case SITE.SITE_DATABASE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                site_db: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteDatabaseReducer;
