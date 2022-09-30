import SegmentBusiness from "Businesses/SegmentBusiness";

const trackingRestartingPHP = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingRestartingNginx = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingResetPermissions = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingDeleteSite = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingClearCache = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const SiteOperationsBusiness = {
	trackingRestartingPHP,
	trackingRestartingNginx,
	trackingResetPermissions,
	trackingDeleteSite,
	trackingClearCache,
};

export default SiteOperationsBusiness;
