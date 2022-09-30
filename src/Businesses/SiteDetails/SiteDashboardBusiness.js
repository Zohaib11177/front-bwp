import SegmentBusiness from "Businesses/SegmentBusiness";

const trackingOneClickLogin = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingResetAPI = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingGenerateSFTP = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingLoginDB = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const SiteDashboardBusiness = {
	trackingOneClickLogin,
	trackingResetAPI,
	trackingGenerateSFTP,
	trackingLoginDB,
};

export default SiteDashboardBusiness;
