export const identifyUser = (id, uname, uemail) => {
	window.analytics.identify(id, {
		name: uname,
		email: uemail,
	});
};
