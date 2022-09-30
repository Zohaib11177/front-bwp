export const RegisterHelper = (
	id,
	uname,
	user_last_name,
	uemail,
	persona,
	promo
) => {
	window.analytics.identify(id, {
		first_name: uname,
		last_name: user_last_name,
		email: uemail,
		persona_id: persona,
		promo_code: promo,
	});
};
