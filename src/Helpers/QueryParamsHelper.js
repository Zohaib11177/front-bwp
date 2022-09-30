const queryGet = () => {
    let url = window.location.search;
    url = url.replace("?", "", url);
    let queryObject;
    try {
        queryObject = JSON.parse(
            '{"' +
                decodeURI(url)
                    .replace(/"/g, '\\"')
                    .toLowerCase()
                    .replace(/&/g, '","')
                    .toLowerCase()
                    .replace(/=/g, '":"')
                    .toLowerCase() +
                '"}'
        );
    } catch {
        console.log("affiliate helper error");
    }
    return queryObject;
};
const queryParams = () => {
    let url = window.location.search;
    url = url.replace("?", "", url);
    let queryObject;
    try {
        queryObject = JSON.parse(
            '{"' +
                decodeURI(url)
                    .replace(/"/g, '\\"')

                    .replace(/&/g, '","')

                    .replace(/=/g, '":"') +
                '"}'
        );
    } catch {
        console.log("affiliate helper error");
    }
    return queryObject;
};

const QueryParams = {
    queryGet,
    queryParams,
};

export default QueryParams;
