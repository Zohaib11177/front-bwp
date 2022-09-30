import UrlHelper from "Helpers/UrlHelper";
const pagesGet = (perPage, number) => {
	// window.location.href = `?page_limit=${perPage}&page=${number}`;
	const params = UrlHelper.parseParams(window.location.search);
	params.page = number;
	params.page_limit = perPage;
	window.location.href = `
		${window.location.origin}${window.location.pathname}?${UrlHelper.stringify(
		params
	)}
	`;
};
const pageLimit = (perPage, number) => {
	const params = UrlHelper.parseParams(window.location.search);
	params.page = number = 1;
	params.page_limit = perPage;
	window.location.href = `
		${window.location.origin}${window.location.pathname}?${UrlHelper.stringify(
		params
	)}
	`;
};
const PaginationBusiness = {
	pagesGet,
	pageLimit,
};

export default PaginationBusiness;
