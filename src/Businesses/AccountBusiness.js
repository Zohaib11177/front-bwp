import SegmentBusiness from "Businesses/SegmentBusiness";

const trackingNerdMode = (data, identity) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);
	return segment;
};

const AccountBusiness = {
	trackingNerdMode,
};

export default AccountBusiness;
