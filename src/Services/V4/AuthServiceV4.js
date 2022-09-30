import Gateway from "Services/Gateway";
import V4 from "Constants/V4ApiConstant";
import LocalStorageHelper from "Helpers/LocalStorageHelper";

async function login(data) {
    const _data = loginBody(data);
    const response = await Gateway.guestGateway("POST", V4.auth.login, _data);
    return response;
}

const loginBody = (data) => {
    const loginData = LocalStorageHelper.get("login");
    let _data = {};
    _data.email = data.email;
    _data.password = data.password;
    _data.token = data.token;
    if (loginData) {
        _data.browser = loginData.browser;
        _data.os = loginData.operating_system;
        _data.ip_address = loginData.ip_address;
        _data.city = loginData.city;
        _data.country = loginData.country;
    }
    return JSON.stringify(_data);
};

const register = async (data) => {
    const _data = registerBody(data);
    const response = await Gateway.guestGateway(
        "POST",
        V4.auth.register,
        _data
    );
    return response;
};

const registerBody = (data) => {
    let _data = {};
    const affiliate = JSON.parse(localStorage.getItem("affiliate"));
    const ipData = LocalStorageHelper.get("ip_details");
    _data.first_name = data.first_name;
    _data.last_name = data.last_name;
    _data.email = data.email;
    _data.password = data.password;
    _data.password_confirmation = _data.password;
    _data.phone = data.phone;
    _data.persona_id = data.persona_id ? data.persona_id : 1;
    _data.promo_code = data.promo_code;
    _data.aff_id = null;
    _data.custom_attributes = null;
    _data.browser = null;
    _data.operating_system = null;
    _data.ip = ipData.ip;
    _data.city = null;
    _data.country = data.country;
    _data.date_creation = null;
    if (affiliate) {
        _data.aff_id = affiliate.aff_id;
        _data.custom_attributes = affiliate.custom_attributes;
        _data.browser = affiliate.browser;
        _data.operating_system = affiliate.operating_system;
        _data.ip_address = affiliate.ip_address;
        _data.city = affiliate.city;
        // _data.country = affiliate.country;
        _data.date_creation = affiliate.date_creation;
    }
    return JSON.stringify(_data);
};

const AuthServiceV4 = {
    login,
    register,
};

export default AuthServiceV4;
