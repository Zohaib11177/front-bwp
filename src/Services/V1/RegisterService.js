import GATEWAY from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

const registration = async (data) => {
	const _data = registrationBody(data);
	const response = await GATEWAY.guestGateway("POST", V2.register, _data);
	return response;
};

const registrationBody = (data) => {
	let _data = {};
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
const REGISTRATION_SERVICE = {
	registration,
};
export default REGISTRATION_SERVICE;
