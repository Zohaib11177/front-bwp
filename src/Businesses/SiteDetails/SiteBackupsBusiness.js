import SegmentBusiness from "Businesses/SegmentBusiness";

const trackingBackups = (identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	segment.identity = identity;
	return segment;
};

const SiteBackupsBusiness = {
	trackingBackups,
};

export default SiteBackupsBusiness;
