import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteAddon = (data) => {
    return {
        type: SITE.SITE_ADDON_V6,
        request: data,
    };
};

const siteAddonSuccess = (data) => {
    return { type: SITE.SITE_ADDON_V6_SUCCESS, response: data };
};
const siteAddonFailed = (data) => {
    return { type: SITE.SITE_ADDON_V6_FAILED, response: data };
};

const SiteAddonActionV6 = {
    siteAddon,
    siteAddonSuccess,
    siteAddonFailed,
};

export default SiteAddonActionV6;
