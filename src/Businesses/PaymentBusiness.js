import SegmentBusiness from "./SegmentBusiness";

const trackingPostCard = (data) => {
	let segment = {};
	segment = SegmentBusiness.loggedInUser(segment);

	let addCard = {};
	addCard.card_name = data.name;
	addCard.card_number = data.card_number.replace(/\d(?=\d{4})/g, "*");
	addCard.card_exp_month = data.exp_month;
	addCard.card_exp_year = data.exp_year;

	segment.card_details = addCard;
	return segment;
};

const PaymentBusiness = {
	trackingPostCard,
};

export default PaymentBusiness;
