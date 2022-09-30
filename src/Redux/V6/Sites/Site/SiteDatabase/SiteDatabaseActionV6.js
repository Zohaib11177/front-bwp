import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteDatabase = (data) => {
    return {
        type: SITE.SITE_DATABASE_V6,
        request: data,
    };
};
const siteDatabaseSuccess = (data) => {
    return {
        type: SITE.SITE_DATABASE_V6_SUCCESS,
        response: data,
    };
};
const siteDatabaseFailed = (data) => {
    return {
        type: SITE.SITE_DATABASE_V6_FAILED,
        response: data,
    };
};

const SiteDatabaseActionV6 = {
    siteDatabase,
    siteDatabaseSuccess,
    siteDatabaseFailed,
};
export default SiteDatabaseActionV6;
