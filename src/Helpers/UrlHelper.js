const parseParams = (querystring) => {
    // parse query string
    const params = new URLSearchParams(querystring);

    const obj = {};

    // iterate over all keys
    for (const key of params.keys()) {
        if (params.getAll(key).length > 1) {
            obj[key] = params.getAll(key);
        } else {
            obj[key] = params.get(key);
        }
    }

    return obj;
};

const stringify = (params) => {
    let queryParam = "";
    for (const property in params) {
        queryParam += `${property}=${params[property]}&`;
    }

    return queryParam.slice(0, -1);
};

const UrlHelper = {
    parseParams,
    stringify,
};

export default UrlHelper;
