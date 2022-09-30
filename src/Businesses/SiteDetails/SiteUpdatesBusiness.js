import SegmentBusiness from "Businesses/SegmentBusiness";

const trackingUpdateWordPressCore = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const SiteAddonsBusiness = {
	trackingUpdateWordPressCore,
};

export default SiteAddonsBusiness;
