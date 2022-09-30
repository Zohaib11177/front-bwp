import INSTANT from "Redux/V3/Sites/InstantDelete/SiteDeleteRootActionTypeV3";

const InstantDeleteReducerV3 = (
    state = {
        loading: false,
        site: {},
        fetched: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case INSTANT.INSTANT_DELETE_V3:
            return {
                ...state,
                loading: true,
                site: {},
                err_mess: null,
                fetched: false,
            };
        case INSTANT.INSTANT_DELETE_SUCCESS_V3:
            return {
                ...state,
                loading: false,
                site: action.response.sites,
                fetched: true,
                err_mess: null,
            };
        case INSTANT.INSTANT_DELETE_FAILED_V3:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                site: {},
                fetched: false,
            };
        default:
            return state;
    }
};

export default InstantDeleteReducerV3;
