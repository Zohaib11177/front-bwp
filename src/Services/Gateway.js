import config from "Configs/index";
import Store from "Redux/Store";
import LogoutHelper from "Helpers/LogoutHelper";
import LocalStorageHelper from "Helpers/LocalStorageHelper";
import V6 from "Constants/V6ApiConstant"

const Gateway = {
    guestGateway,
    authGateway,
    gatewayLogify,
    gatewaySiteService
};
export default Gateway;

async function authGateway(METHOD, API, BODY = null) {
    const URL = `${config.base_url}${API}`;
    const TOKEN = Store.getState().login.token;
    const OPTIONS = {
        method: METHOD,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
            Domain: V6.Domain
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                if (response.error.code === "BIOWP-401") {
                    LogoutHelper.logout();
                } else if (response.error.code === "BIOWP-404") {
                    // window.location.href = "/404";
                } else if (response.error.code === "BIOWP-403") {
                    window.location.href = "/403";
                }
            } else {
                if (response.data.permissions)
                    try {
                        LocalStorageHelper.save(
                            "permissions",
                            response.data.permissions
                        );
                    } catch (error) {
                        console.log(error);
                    }
            }
            return response;
        });
}

async function guestGateway(METHOD, API, BODY = null) {
    const URL = `${config.base_url}${API}`;
    const OPTIONS = {
        method: METHOD,
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Client-ID": config.client_id,
            "Client-Secret": config.client_secret,
            Domain: V6.Domain
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            } else {
                if (response.data.permissions)
                    try {
                        LocalStorageHelper.save(
                            "permissions",
                            response.data.permissions
                        );
                    } catch (error) {
                        console.log(error);
                    }
            }
            return response;
        });
}
async function gatewayLogify(METHOD, API, BODY = null) {
    const URL = `${config.logify}${API}`;
    const OPTIONS = {
        method: METHOD,
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            }
            return response;
        });
}

async function gatewaySiteService(METHOD, API, BODY = null) {
    const TOKEN = Store.getState().login.token;
    const URL = `${config.site_service}${API}`;
    const OPTIONS = {
        method: METHOD,
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${TOKEN}`,
            Domain: V6.Domain
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            }
            return response;
        });
}
function handleResponse(response) {
    return response.text().then((text) => {
        return text && JSON.parse(text);
    });
}
