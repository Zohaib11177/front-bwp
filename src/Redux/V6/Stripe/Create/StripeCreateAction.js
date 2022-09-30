import STRIPE from "Redux/V6/Stripe/ActionTypes"

const StripeCreate = (data) => {
    return {
        type: STRIPE.STRIPE_CREATE,
        request: data,
    };
};
const StripeCreateSuccess = (data) => {
    return {              
        type: STRIPE.STRIPE_CREATE_SUCCESS,
        response: data,
    };
};
const StripeCreateFailed = (data) => {
    return {
        type: STRIPE.STRIPE_CREATE_FAILED,
        response: data,
    };
};

const StripeCreateAction = {
    StripeCreate,
    StripeCreateSuccess,
    StripeCreateFailed
}

export default StripeCreateAction;