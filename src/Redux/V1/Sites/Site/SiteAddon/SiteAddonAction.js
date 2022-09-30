import SITE from "Redux/V1/Sites/Site/ActionType";

const siteAddon = (data) => {
    return {
        type: SITE.SITE_ADDON,
        request: data,
    };
};

const siteAddonSuccess = (data) => {
    return { type: SITE.SITE_ADDON_SUCCESS, response: data };
};
const siteAddonFailed = (data) => {
    return { type: SITE.SITE_ADDON_FAILED, response: data };
};

const SiteAddonAction = {
    siteAddon,
    siteAddonSuccess,
    siteAddonFailed,
};

export default SiteAddonAction;
