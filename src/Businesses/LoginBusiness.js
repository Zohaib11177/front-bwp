const trackingLogin = (data) => {
    let user = {};

    user.email = data.authentication.user.email;
    user.wallet = data.authentication.wallet.current_balance;
    user.userId = data.authentication.user.id;
    user.registered_at = data.authentication.user.created_at;
    user.paid_invoice = "$" + data.authentication.segment.paid_invoice;

    return { user, userId: data.authentication.user.id };
};

const LoginBusiness = {
    trackingLogin,
};

export default LoginBusiness;
