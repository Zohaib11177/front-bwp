import QueryParams from "Helpers/QueryParamsHelper";
const queryParams = (data) => {
    let query = data.location.search;
    query = query.replace("?", "", query);
    let queryObject = QueryParams.queryGet(query);
    let key,
        customAttributes = {};
    for (key in queryObject) {
        if (!key.startsWith("bwp")) continue;
        customAttributes[key] = queryObject[key];
    }

    try {
        const affiliate = {
            affiliate_id: queryObject.aff_id,
            custom_attributes: customAttributes,
        };
        localStorage.setItem("affiliate", JSON.stringify(affiliate));
    } catch {
        console.log("affiliate business error");
    }
};

const AffiliateBusiness = {
    queryParams,
};

export default AffiliateBusiness;
