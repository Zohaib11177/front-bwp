import SITE from "Redux/V1/Sites/Site/ActionType";

const siteDatabase = (data) => {
    return {
        type: SITE.SITE_DATABASE,
        request: data,
    };
};
const siteDatabaseSuccess = (data) => {
    return {
        type: SITE.SITE_DATABASE_SUCCESS,
        response: data,
    };
};
const siteDatabaseFailed = (data) => {
    return {
        type: SITE.SITE_DATABASE_FAILED,
        response: data,
    };
};

const SiteDatabaseAction = {
    siteDatabase,
    siteDatabaseSuccess,
    siteDatabaseFailed,
};
export default SiteDatabaseAction;
