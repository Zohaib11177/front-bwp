const search = (list, searchItemFunction) => {
    // const params = UrlHelper.parseParams(window.location.search);
    // params.search = "dev";
    // window.location.href = `
    // 	${window.location.origin}${window.location.pathname}?${UrlHelper.stringify(
    //     params
    // )}
    // `;
};
const lengthCheck = (data) => {
    try {
        let length = data.length + 1;
        return length > 2 ? true : false;
    } catch (err) {
        console.log("length check helper fail");
    }
};
const SearchBusiness = {
    search,
    lengthCheck,
};
export default SearchBusiness;
