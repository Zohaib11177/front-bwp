import React from "react";
import SslStatus from "Helpers/SslStatusHelper";
import { Row, Col } from "react-bootstrap";
import TwoWordsHelper from "Helpers/TwoWordsHelper";
import Capitilize from "Helpers/CapitilizeHelper";
import SwitchComponent from "Components/Sites/Domain/SwitchComponent";
import TimeStampHelper from "Helpers/TimeStampHelper";

const validateStatus = (domains) => {
    let status;
    let filtered = domains.domains.filter((domain) => {
        return domain.primary === true;
    });
    /* We are using this to block ssl if domain section blocks */
    let domainStatus = domains.domains.filter((domain) => {
        return domain.status === "request_primary";
    });
    filtered.map((domain) => {
        status = SslStatus.checkStatus(domain.ssl_status);
        if (status === -1 || domainStatus.length > 0) {
            status = "event-none";
        }
        return status;
    });
    return status;
};

const revokeStatus = (domains) => {
    let status;
    let filtered = domains.domains.filter((domain) => {
        return domain.staging === false;
    });

    filtered.map((domain) => {
        if (
            domain.ssl_status === "active" ||
            domain.ssl_status === "revoke_failed" ||
            domain.ssl_status === "renew_failed"
        ) {
            status = true;
        }
        return status;
    });
    return status;
};
const domainStaging = (domains) => {
    let staging = domains.domains.filter((domain) => {
        return domain.staging === true;
    });
    let domain = staging.map((domain) => {
        return (
            <Row>
                <Col lg="7" xs="6">
                    <div className="domain-list mt-2   ">
                        {domain.domain_name}
                        {domain.ssl_status === "active" ? (
                            <span class="badge badge-success ml-2">Secure</span>
                        ) : (
                            <span class="badge badge-warning ml-2">
                                Unsecure
                            </span>
                        )}
                        {domain.primary ? (
                            <span class="badge badge-primary ml-2">
                                Primary
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                </Col>
                <Col lg="3" xs="3" className="p-0">
                    <div className="domain-list mt-2 ">
                        {TwoWordsHelper.removeDash(
                            Capitilize.capital(domain.ssl_status)
                        )}
                    </div>
                </Col>
                <Col lg="3" xs="3"></Col>
            </Row>
        );
    });
    return domain;
};

const domainList = (domains, sslEnable) => {
    let stagingRemoved = domains.domains.filter((domain) => {
        return domain.staging !== true;
    });
    let block = toggleBlock(stagingRemoved);
    let domain = stagingRemoved.map((domain) => {
        let toggle =
            domain.ssl_status === "in_active" ||
            domain.ssl_status === "failed" ||
            domain.ssl_status === "dry_run_failed"
                ? false
                : true;
        domain.toggle = toggle;
        domain.block = block.length > 0 ? "event-none" : "";
        return (
            <Row>
                <Col lg="7" xs="6" className="word-break">
                    <div className="domain-list mt-2  ">
                        {domain.domain_name}
                        {domain.ssl_status === "active" ||
                        domain.ssl_status === "revoke_failed" ? (
                            <span class="badge badge-success ml-2">Secure</span>
                        ) : (
                            <span class="badge badge-warning ml-2">
                                Unsecure
                            </span>
                        )}
                        {domain.primary ? (
                            <span class="badge badge-primary ml-2">
                                Primary
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                </Col>
                <Col lg="3" xs="3" className="p-0">
                    <div className="domain-list mt-2 word-break">
                        {TwoWordsHelper.removeDash(
                            Capitilize.capital(domain.ssl_status)
                        )}
                    </div>
                </Col>
                <Col lg="2 pt-1" xs="3" className={domain.block}>
                    <SwitchComponent
                        name="force"
                        class={`mt-2`}
                        id={"react-switch-" + domain.id}
                        defaultCheck={domain.toggle}
                        value={domain.id}
                        change={() => sslEnable(domain.id)}
                    />
                </Col>
            </Row>
        );
    });
    return domain;
};
const domainsRevoke = (domains) => {
    let domainId = [];
    let domainsExtract = domains.domains.filter(
        (domain) =>
            domain.staging === false &&
            (domain.ssl_status === "active" ||
                domain.ssl_status === "revoke_failed")
    );
    domainsExtract.map((domain) => {
        return domainId.push(domain.id);
    });
    return domainId;
};
const toggleBlock = (domains) => {
    return domains.filter((domain) => {
        return (
            domain.ssl_status !== "in_active" &&
            domain.ssl_status !== "failed" &&
            domain.ssl_status !== "dry_run_failed"
        );
    });
};
const sslRenew = (domains) => {
    let domainId = [];
    let domainsExtract = domains.domains.filter(
        (domain) =>
            domain.staging === false &&
            (domain.ssl_status === "active" ||
                domain.ssl_status === "revoke_failed" ||
                domain.ssl_status === "renew_failed")
    );
    domainsExtract.map((domain) => {
        return domainId.push(domain.id);
    });
    return domainId;
};
const sslRenewButton = (domains) => {
    let status;
    let filtered = domains.domains.filter((domain) => {
        return domain.staging === false;
    });

    filtered.map((domain) => {
        if (
            domain.ssl_status === "renew_failed" ||
            sslExpiryDate(domain.ssl_expiry)
        ) {
            status = true;
        }
        return status;
    });
    return status;
};

const sslExpiryDate = (destoyDate) => {
    const condition =
        -TimeStampHelper.differenceInDays(destoyDate) <= 30 &&
        destoyDate !== null &&
        destoyDate !== undefined;
    return condition;
};

const SslBusiness = {
    validateStatus,
    revokeStatus,
    domainStaging,
    domainList,
    domainsRevoke,
    toggleBlock,
    sslRenew,
    sslRenewButton,
    sslExpiryDate,
};

export default SslBusiness;
