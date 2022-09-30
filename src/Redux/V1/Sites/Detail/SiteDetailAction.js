import SITE_ACTION_TYPE from "Redux/V1/Sites/SiteActionType";

function getSiteDetail(host) {
    return { type: SITE_ACTION_TYPE.GET_SITE_DETAIL, host };
}

function getSiteDetailSuccess(data) {
    return { type: SITE_ACTION_TYPE.GET_SITE_DETAIL_SUCCESS, data };
}

const SiteAction = {
    getSiteDetail,
    getSiteDetailSuccess,
};

export default SiteAction;
