import GATEWAY from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

const profilePut = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V2.profiles,
        profileBody(data)
    );
    return response;
};

const profileBody = (data) => {
    let _data = {};
    _data.first_name = data.first_name;
    _data.last_name = data.last_name;
    _data.phone = data.phone;
    if (data.profile_image !== null) {
        _data.profile_image = data.profile_image_default;
    }
    return JSON.stringify(_data);
};

const ProfileUpdateServiceV2 = {
    profilePut,
};

export default ProfileUpdateServiceV2;
