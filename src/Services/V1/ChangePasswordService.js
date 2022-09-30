import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const passwordPutBody = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.change_password,
        changePasswordPostBody(data)
    );
    return response;
};

const changePasswordPostBody = (data) => {
    let _data = {};
    _data.password = data.change_password;
    _data.password_confirmation = data.change_password;
    return JSON.stringify(_data);
};

const ChangePasswordService = {
    passwordPutBody,
};

export default ChangePasswordService;
