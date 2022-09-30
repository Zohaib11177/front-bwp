import SITE_PORTAL_SETTINGS_GET_V6 from "Redux/V6/Sites/SitePortalSettings/ActionTypeV6";
import SettingHelper from "Helpers/SettingHelper";

const SitePSGetReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
        isFetched : false,
        portal_settings: localStorage.getItem("portal_settings") ? SettingHelper.localData(localStorage.getItem("portal_settings")) : {},
    },
    action
) => {
    switch (action.type) {
        case SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                isFetched : true,
                portal_settings: action.response.portal_settings
            };
        case SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response , isFetched : true };
        default:
            return state;
    }
};

export default SitePSGetReducerV6;
