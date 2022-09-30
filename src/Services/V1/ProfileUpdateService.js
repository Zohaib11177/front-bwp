import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const profilePutBody = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.profiles,
        profileUpdatePostBody(data)
    );
    return response;
};

const profileUpdatePostBody = (data) => {
    let _data = {};
    _data.first_name = data.first_name;
    _data.last_name = data.last_name;
    _data.phone = data.phone;
    _data.profile_image = data.profile_image;

    return JSON.stringify(_data);
};

const ProfileUpdateService = {
    profilePutBody,
};

export default ProfileUpdateService;
