import Gateway from "Services/Gateway";
import V3 from "Constants/V3ApiConstant";

const registerPost = async (data) => {
    const _data = registerPostBody(data);
    const response = await Gateway.guestGateway(
        "POST",
        V3.auth.register,
        _data
    );
    return response;
};

const registerPostBody = (data) => {
    let _data = {};
    const affiliate = JSON.parse(localStorage.getItem("affiliate"));

    _data.first_name = data.first_name;
    _data.last_name = data.last_name;
    _data.email = data.email;
    _data.password = data.password;
    _data.password_confirmation = _data.password;
    _data.phone = "1233456";
    _data.persona_id = data.persona_id ? data.persona_id : 1;
    _data.promo_code = data.promo_code;
    _data.aff_id = null;
    _data.custom_attributes = null;
    _data.browser = null;
    _data.operating_system = null;
    _data.ip_address = null;
    _data.city = null;
    _data.country = null;
    _data.date_creation = null;
    if (affiliate) {
        _data.aff_id = affiliate.aff_id;
        _data.custom_attributes = affiliate.custom_attributes;
        _data.browser = affiliate.browser;
        _data.operating_system = affiliate.operating_system;
        _data.ip_address = affiliate.ip_address;
        _data.city = affiliate.city;
        _data.country = affiliate.country;
        _data.date_creation = affiliate.date_creation;
    }
    return JSON.stringify(_data);
};

const AuthService = {
    registerPost,
};

export default AuthService;
