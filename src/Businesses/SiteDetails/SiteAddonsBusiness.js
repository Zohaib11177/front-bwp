import SegmentBusiness from "Businesses/SegmentBusiness";

const trackingEnableCDN = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingDisabledCDN = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingUpdateCDN = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingAddDomain = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingDeleteDomain = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingDisableSSL = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingEnableSSL = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingEnableNitro = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingDisableNitro = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingPurgeCacheCDN = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const trackingForcewww = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const SiteAddonsBusiness = {
	trackingEnableCDN,
	trackingDisabledCDN,
	trackingUpdateCDN,
	trackingAddDomain,
	trackingDeleteDomain,
	trackingDisableSSL,
	trackingEnableSSL,
	trackingEnableNitro,
	trackingDisableNitro,
	trackingPurgeCacheCDN,
	trackingForcewww,
};

export default SiteAddonsBusiness;
