import DESIGN from 'Redux/V3/Sites/NewDesign/NewDesignActionType';

const NewDesignReducer = (
    state = {
        name: 'irfan',
    },
    action
) => {
    switch (action.type) {
        case DESIGN.NEW_DESIGN:
            return {
                ...state,
                name: 'new design',
            };
        case DESIGN.NEW_DESIGN_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
            };
        case DESIGN.NEW_DESIGN_FAILED:
            return {
                ...state,
                name: 'new design failed',
            };
        default:
            return state;
    }
};

export default NewDesignReducer;
