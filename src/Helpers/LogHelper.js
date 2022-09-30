const print = (message) => {
    if (process.env.NODE_ENV !== "production") {
        console.log(message);
    }
};

const LogHelper = {
    print,
};

export default LogHelper;
