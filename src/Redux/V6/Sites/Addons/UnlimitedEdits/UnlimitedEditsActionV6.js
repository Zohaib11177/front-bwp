import ADDON from "Redux/V6/Sites/Addons/ActionTypeV6";

const unlimitedEdits = (data) => {
    return {
        type: ADDON.UNLIMITED_EDITS_V6,
        request: data,
    };
};

const unlimitedEditsSuccess = (data) => {
    return {
        type: ADDON.UNLIMITED_EDITS_V6_SUCCESS,
        response: data,
    };
};

const unlimitedEditsFailed = (data) => {
    return {
        type: ADDON.UNLIMITED_EDITS_V6_FAILED,
        response: data,
    };
};

const UnlimitedEditsActionV6 = {
    unlimitedEdits,
    unlimitedEditsSuccess,
    unlimitedEditsFailed,
};

export default UnlimitedEditsActionV6;
