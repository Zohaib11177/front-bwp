import Gateway from 'Services/Gateway';
import V6 from 'Constants/V6ApiConstant';

const sitePost = (data) => {
    const _data = sitePostBody(data);
    const response = Gateway.gatewaySiteService('POST', V6.sites, _data);
    return response;
};

const sitePostBody = (data) => {
    let _data = {};
    _data.name = data.wp.domain || 'bwp-migration';
    _data.card_id = data.card_id;
    _data.product_ids = data.addons;
    _data.data_center_id = data.wp.region;
    _data.plan_id = parseInt(data.wp.plan) || 3;
    _data.site_type = 'wordpress';

    return JSON.stringify(_data);
};

const getSiteDetail = (host) => {
    const response = Gateway.gatewaySiteService('GET', `${V6.sites}${host}`);
    return response;
};

const getSiteDatabase = (host) => {
    const response = Gateway.gatewaySiteService('GET', `${V6.site_db}${host}`);
    return response;
};

const getResources = (domain) => {
    const response = Gateway.gatewaySiteService(
        'GET',
        `${V6.resources}${domain}`
    );
    return response;
};

const getWordpress = (host) => {
    const response = Gateway.gatewaySiteService('GET', `${V6.site_wp}${host}`);
    return response;
};

const getPagespeed = (host) => {
    const response = Gateway.gatewaySiteService(
        'GET',
        `${V6.site_pagespeed}${host}`
    );
    return response;
};
const refreshPagespeed = (host) => {
    const response = Gateway.gatewaySiteService(
        'PUT',
        `${V6.refresh_pagespeed}${host}`
    );
    return response;
};

const enablePagespeed = (host) => {
    const response = Gateway.gatewaySiteService(
        'PUT',
        `${V6.enable_pagespeed}${host}`
    );
    return response;
};
const login = (host) => {
    const response = Gateway.gatewaySiteService('GET', `${V6.wp_login}${host}`);
    return response;
};

const siteDelete = (identity) => {
    const response = Gateway.gatewaySiteService(
        'DELETE',
        `${V6.site_operation.site_delete}${identity}`
    );
    return response;
};

const siteDeleteCancel = async (identity) => {
    const response = await Gateway.gatewaySiteService(
        'DELETE',
        `${V6.site_operation.site_delete_cancel}${identity}`
    );
    return response;
};

const siteDeleteInstant = async (identity) => {
    const response = await Gateway.gatewaySiteService(
        'DELETE',
        `${V6.site_operation.site_delete_instant}${identity}`
    );
    return response;
};

const siteGetV6 = (data) => {
    let query = window.location.search;
    if (data !== undefined) {
        query = `?page=${1}&page_limit=${data.page_limit}&search=${
            data.search
        }`;
    }
    const response = Gateway.gatewaySiteService('GET', V6.sites + query);
    return response;
};

const siteOtpPut = (domain) => {
    const response = Gateway.gatewaySiteService(
        'PUT',
        `${V6.site_otp.update}${domain}`
    );
    return response;
};

const siteOtpGet = (domain) => {
    const response = Gateway.gatewaySiteService(
        'GET',
        `${V6.site_otp.list}${domain}`
    );
    return response;
};

const siteVersionChange = (domain, body) => {
    const _data = siteVersionPutBody(body);
    const response = Gateway.gatewaySiteService(
        'PUT',
        `${V6.site_version}${domain}`,
        _data
    );
    return response;
};

const siteVersionPutBody = (data) => {
    let _data = {};

    _data.php_version = data;

    return JSON.stringify(_data);
};

const SiteServiceV6 = {
    sitePost,
    getSiteDetail,
    getSiteDatabase,
    getResources,
    getWordpress,
    getPagespeed,
    login,
    siteDelete,
    siteDeleteCancel,
    siteDeleteInstant,
    siteGetV6,
    refreshPagespeed,
    enablePagespeed,
    siteOtpPut,
    siteOtpGet,
    siteVersionChange,
};
export default SiteServiceV6;
