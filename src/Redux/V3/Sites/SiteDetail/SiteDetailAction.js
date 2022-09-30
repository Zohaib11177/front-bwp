import DETAIL from 'Redux/V3/Sites/SiteDetail/SiteDetailActionType';

const siteDetail = (host) => {
    return {
        type: DETAIL.SITE_DETAIL,
        payload: {
            host: host
        },
    };
};

const siteDetailSuccess = (data) => {
    return {
        type: DETAIL.SITE_DETAIL_SUCCESS,
        payload: data,
    };
};

const siteDetailFailed = () => {
    return {
        type: DETAIL.SITE_DETAIL_FAILED,
        payload: {
            name: 'failed',
        },
    };
};

export { siteDetail, siteDetailSuccess, siteDetailFailed };
