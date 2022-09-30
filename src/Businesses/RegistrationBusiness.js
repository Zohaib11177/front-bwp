const trackingRegistration = (data, authentication) => {
    let user = {};
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.email = data.email;
    user.persona = data.persona_id;
    user.promo = data.promo_code;

    // user.registration = user;

    return { user, userId: authentication.user.id };
};

const RegistrationBusiness = {
    trackingRegistration,
};

export default RegistrationBusiness;
