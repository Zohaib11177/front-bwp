import SETTINGS from "Redux/V1/Settings/ActionType";

const ServiceListReducer = (
    state = {
        loading: false,
        services: [],
    },
    action
) => {
    switch (action.type) {
        case SETTINGS.SERVICE_GET:
            return {
                ...state,
                loading: true,
            };
        case SETTINGS.SERVICE_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                services: action.response.services,
            };
        case SETTINGS.SERVICE_GET_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default ServiceListReducer;
