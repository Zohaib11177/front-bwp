const count = (data) => {
    try {
        return data.length;
    } catch (err) {
        console.log("Error, Array Count Helper" + err);
    }
};
const ArrayCount = {
    count,
};

export default ArrayCount;
