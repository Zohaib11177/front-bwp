import DESIGN from 'Redux/V3/Sites/NewDesign/NewDesignActionType';

const newDesign = () => {
    return {
        type: DESIGN.NEW_DESIGN,
        payload: {
            name: 'loading',
        },
    };
};

const newDesignSuccess = (data) => {
    return {
        type: DESIGN.NEW_DESIGN_SUCCESS,
        payload: {
            name: data,
        },
    };
};

const newDesignFailed = () => {
    return {
        type: DESIGN.NEW_DESIGN_FAILED,
        payload: {
            name: 'failed',
        },
    };
};

export { newDesign, newDesignSuccess, newDesignFailed };
