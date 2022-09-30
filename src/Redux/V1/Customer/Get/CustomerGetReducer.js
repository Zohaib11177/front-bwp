import LoginHelper from "Helpers/LoginHelper";
const CustomerReducer = (
    state = {
        loading: false,
        customer: localStorage.getItem("user")
            ? LoginHelper.localData(localStorage.getItem("user"))
            : {},
        permissions: localStorage.getItem("permissions")
            ? LoginHelper.localData(localStorage.getItem("permissions"))
            : [],
        wallet: localStorage.getItem("wallet")
            ? LoginHelper.localData(localStorage.getItem("wallet"))
            : {},
        affiliate_code: localStorage.getItem("affiliate_code") || null,
    },
    action
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default CustomerReducer;
