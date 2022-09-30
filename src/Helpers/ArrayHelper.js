function extractColumn(arr, column) {
    return arr.map((x) => x[column]);
}

const ArrayHelper = {
    extractColumn,
};

export default ArrayHelper;
