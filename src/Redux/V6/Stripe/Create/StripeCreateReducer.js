import STRIPE from "Redux/V6/Stripe/ActionTypes"

const StripeCreatReducer = (
    state = {
        loading: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case STRIPE.STRIPE_CREATE:
            return {
                ...state,
                loading: true,
            }
        case STRIPE.STRIPE_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case STRIPE.STRIPE_CREATE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response.message
            }
        default:
            return state
    }
}

export default StripeCreatReducer;