const numberFormat = (val = 0) => {
	return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

const StandardFormatHelper = { numberFormat };

export default StandardFormatHelper;
