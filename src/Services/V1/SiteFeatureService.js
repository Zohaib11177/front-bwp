import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
// import V2 from 'Constants/V2ApiConstant';

const phpLogin = async (data) => {
    const response = await GATEWAY.authGateway("GET", V1.one_click_php + data);
    return response;
};

const pluginReset = async (data) => {
    const response = await GATEWAY.authGateway(
        "GET",
        V1.site_operation.plugin_key + data
    );
    return response;
};

const wordpressLogin = (identity) => {
    const response = GATEWAY.gatewaySiteService(
        "GET",
        `${V1.site_operation.quick_login}${identity}`
    );
    return response;
};

const siteClone = async (data) => {
    const _data = siteCloneBody(data);
    const response = await GATEWAY.authGateway(
        "POST",
        V1.clone + data.identity,
        _data
    );
    return response;
};

const siteCloneBody = (data) => {
    let _data = {};
    _data.destination_identity = data.destination_identity;
    return JSON.stringify(_data);
};

const siteScreenshot = async (identity) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.screenshot_put + identity
    );
    return response;
};

const accessSharing = async (identity) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.access_sharing + identity
    );
    return response;
};

const siteSftp = (identity) => {
    const response = GATEWAY.gatewaySiteService(
        "PUT",
        `${V1.site_operation.reset_sftp}${identity}`
    );
    return response;
};

const retestPageSpeed = async (identity) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.retest_pagespeed + identity
    );
    return response;
};

const siteCloneForm = async (data) => {
    const _data = siteCloneFormBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V1.clone_form + data.identity,
        _data
    );
    return response;
};

const siteCloneFormBody = (data) => {
    let _data = {};
    _data.name = data.title || "bwp-migration";
    _data.plan_id = parseInt(data.plan);
    _data.product_ids = data.product;
    _data.data_center_id = parseInt(data.region);
    _data.card_id = null;
    _data.site_type = "wordpress";
    return JSON.stringify(_data);
};
const SiteFeatureService = {
    phpLogin,
    pluginReset,
    wordpressLogin,
    siteClone,
    siteScreenshot,
    accessSharing,
    siteSftp,
    retestPageSpeed,
    siteCloneForm,
};
export default SiteFeatureService;
