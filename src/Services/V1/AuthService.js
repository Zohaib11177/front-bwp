import Gateway from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

async function loginPost(data) {
    const _data = loginPostBody(data);
    const response = await Gateway.guestGateway("POST", V2.login, _data);
    return response;
}

function loginPostBody(data) {
    let _data = {};
    _data.email = data.email;
    _data.password = data.password;
    return JSON.stringify(_data);
}
const registerPost = async (data) => {
    const _data = registerPostBody(data);
    const response = await Gateway.guestGateway("POST", V2.register, _data);
    return response;
};

const registerPostBody = (data) => {
    let _data = {};
    const affiliate = JSON.parse(localStorage.getItem("affiliate"));
    if (affiliate) {
        _data.aff_id = affiliate.affiliate_id;
        _data.custom_attributes = affiliate.custom_attributes;
    }
    _data.first_name = data.first_name;
    _data.last_name = data.last_name;
    _data.email = data.email;
    _data.password = data.password;
    _data.password_confirmation = _data.password;
    _data.phone = "1233456";
    _data.persona_id = data.persona_id ? data.persona_id : 1;
    _data.promo_code = data.promo_code;
    return JSON.stringify(_data);
};
async function forgotPost(data) {
    const _data = forgotPostBody(data);
    const response = await Gateway.guestGateway(
        "POST",
        V1.forgot_password,
        _data
    );
    return response;
}

function forgotPostBody(data) {
    let _data = {};
    _data.email = data.email;
    return JSON.stringify(_data);
}

async function resetPut(data) {
    const _data = resetPutBody(data);
    const response = await Gateway.guestGateway(
        "PUT",
        V2.reset_password,
        _data
    );
    return response;
}

function resetPutBody(data) {
    let _data = {};
    _data.token = data.token;
    _data.password = data.password;
    _data.password_confirmation = data.password_confirmation;
    return JSON.stringify(_data);
}

const logout = async (data) => {
    const response = await Gateway.authGateway(
        "DELETE",
        V1.logout + "?" + data
    );
    return response;
};
const accVerificationResend = async (data) => {
    const response = await Gateway.authGateway("POST", V1.verification_resend);
    return response;
};

const AuthService = {
    loginPost,
    registerPost,
    forgotPost,
    resetPut,
    logout,
    accVerificationResend,
};

export default AuthService;
