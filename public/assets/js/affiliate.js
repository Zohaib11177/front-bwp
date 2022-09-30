(async function () {
    const ipInfo = async () => {
        let ip, city, country;

        const url = "https://json.geoiplookup.io/";
        const response = await fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                ip = data.ip;
                city = data.city;
                country = data.country_name;
                localStorage.setItem(
                    "ip_details",
                    JSON.stringify({ ip: ip, city: city, country: country })
                );
            })
            .catch((err) => console.log("IP Success Failed", err)); // Catch errors
        return { ip: ip, city: city, country: country };
    };
    ipInfo();
    const systemInfo = () => {
        let agent = {
            browser: {
                name: null,
                version: null,
                v: null,
                userAgent: null,
                app: null,
                os: null,
            },
            mobile: false,
            pointlock: false,
        };
        let nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = "" + parseFloat(navigator.appVersion);
        let majorVersion = parseInt(navigator.appVersion, 10);
        let nameOffset, verOffset, ix;
        agent.pointlock =
            "pointerLockElement" in document ||
            "mozPointerLockElement" in document ||
            "webkitPointerLockElement" in document;
        if ((verOffset = nAgt.indexOf("Opera")) !== -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf("Version")) !== -1)
                fullVersion = nAgt.substring(verOffset + 8);
        } else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        } else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        } else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) !== -1)
                fullVersion = nAgt.substring(verOffset + 8);
        } else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        } else if (
            (nameOffset = nAgt.lastIndexOf(" ") + 1) <
            (verOffset = nAgt.lastIndexOf("/"))
        ) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() === browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        if ((ix = fullVersion.indexOf(";")) !== -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) !== -1)
            fullVersion = fullVersion.substring(0, ix);
        majorVersion = parseInt("" + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = "" + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        agent.browser.name = browserName;
        agent.browser.version = fullVersion;
        agent.browser.v = majorVersion;
        agent.browser.app = navigator.appName;
        agent.browser.userAgent = navigator.userAgent;
        let OSName = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows";
        if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS";
        if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX";
        if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux";
        agent.browser.os = OSName;
        agent.mobile =
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1;
        return agent;
    };
    const affiliateClick = async (data) => {
        try {
            data.affiliate_code = data.aff_id;
            data.data_1 = data.custom_attributes.data_1;
            data.data_2 = data.custom_attributes.data_2;
            data.data_3 = data.custom_attributes.data_3;
            data.data_4 = data.custom_attributes.data_4;

            const url = "https://logify.bionicwp.com/affiliate/clicks";
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                },
            })
                .then(() => {
                    console.log("Affiliate Click Request Success");
                })
                .catch((err) =>
                    console.log("Affiliate Click Request Success Failed", err)
                ); // Catch errors
        } catch (err) {
            console.log(err);
        }
    };
    const queryObject = (data) => {
        let query = data;
        let queryObject;
        try {
            queryObject = JSON.parse(
                '{"' +
                    decodeURI(query)
                        .replace(/"/g, '"')
                        .toLowerCase()
                        .replace(/&/g, '","')
                        .toLowerCase()
                        .replace(/=/g, '":"')
                        .toLowerCase() +
                    '"}'
            );
        } catch (err) {
            console.log("query object error", err);
        }
        return queryObject;
    };
    /* Login Tracking */
    const loginTrackFunction = (browserInfo, ip) => {
        try {
            const login = {
                browser: browserInfo.browser.name,
                operating_system: browserInfo.browser.os,
                ip_address: ip.ip,
                city: ip.city,
                country: ip.country,
            };
            localStorage.setItem("login", JSON.stringify(login));
        } catch (err) {
            console.log("login tracking error", err);
        }
    };
    /* Login Tracking */
    let url = window.location.search;
    url = url.replace("?", "", url);
    let queryStringObject = queryObject(url);
    let browserInfo = systemInfo();
    let ip = await ipInfo();
    loginTrackFunction(browserInfo, ip);

    try {
        const affiliate = {
            browser: browserInfo.browser.name,
            operating_system: browserInfo.browser.os,
            aff_id: queryStringObject.aff_id,
            ip_address: ip.ip,
            city: ip.city,
            country: ip.country,
            date_creation: new Date(),
            custom_attributes: {
                data_1: queryStringObject.data_1 || null,
                data_2: queryStringObject.data_2 || null,
                data_3: queryStringObject.data_3 || null,
                data_4: queryStringObject.data_4 || null,
            },
        };
        affiliateClick(affiliate);
        localStorage.setItem("affiliate", JSON.stringify(affiliate));
    } catch (err) {
        console.log("affiliate business error", err);
    }
    try {
        function findUpTag(el, attr) {
            while (el.parentNode) {
                el = el.parentNode;
                if (el[attr]) {
                    return el;
                }
            }
            return null;
        }
        document.addEventListener(
            "click",
            function (event) {
                const target = event.target.closest(".aff_registration");
                if (target.matches(".aff_registration a")) return;
                event.preventDefault();
                let affiliate = localStorage.getItem("affiliate");
                affiliate = JSON.parse(affiliate) || {};
                let url = null;
                if (!target.href) {
                    let anchor = target.getElementsByTagName("a");
                    url = anchor[0].href;
                } else {
                    url = target.href;
                }
                if (affiliate.aff_id) {
                    url += `?aff_id=${affiliate.aff_id}`;
                    url += affiliate.custom_attributes.data_1
                        ? `&data_1=${affiliate.custom_attributes.data_1}`
                        : "";
                    url += affiliate.custom_attributes.data_2
                        ? `&data_2=${affiliate.custom_attributes.data_2}`
                        : "";
                    url += affiliate.custom_attributes.data_3
                        ? `&data_3=${affiliate.custom_attributes.data_3}`
                        : "";
                    url += affiliate.custom_attributes.data_4
                        ? `&data_4=${affiliate.custom_attributes.data_4}`
                        : "";
                }
                window.open(url, "_blank");
            },
            false
        );
    } catch (err) {
        console.log(err);
    }
})();
