import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
class StagingEnvironment extends Component {
    environmentChange = (domain) => {
        var url = window.location.href;
        // eslint-disable-next-line
        url = url.replace(/\/[^\/]*$/, "/" + domain);
        window.location.href = url;
    };
    render() {
        const parentDomain = this.props.siteDetail.parent || {};
        const stagingDomain = this.props.siteDetail.staging || {};
        const siteType = this.props.siteDetail.site_type;

        return (
            <Dropdown className="stage-env-main ">
                <Dropdown.Toggle
                    className="site-environment site-env-carrot-icon pt-2 bionic-btn"
                    id="dropdown-basic"
                >
                    {`Site Environment`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        disabled={siteType === "live" ? "disabled" : ""}
                        onClick={() => {
                            this.environmentChange(parentDomain.primary_domain);
                        }}
                    >
                        Live Environment
                    </Dropdown.Item>
                    <Dropdown.Item
                        disabled={
                            stagingDomain.status !== "active" ||
                            siteType === "staging"
                                ? "disabled"
                                : ""
                        }
                        onClick={() => {
                            this.environmentChange(
                                stagingDomain.primary_domain
                            );
                        }}
                    >
                        Staging Environment
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default StagingEnvironment;
