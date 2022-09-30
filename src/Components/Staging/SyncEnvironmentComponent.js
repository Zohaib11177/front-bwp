import React, { Component } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/fontawesome-free-solid";
import SyncPutAction from "Redux/V1/Staging/Put/SyncPutAction";
import Confirm from "Helpers/ConfirmationHelper";
import Capitilize from "Helpers/CapitilizeHelper";
import Messages from "Languages/En.lang";
class SyncEnvironment extends Component {
    syncEnvironmentFunction = (operation, action, environment) => {
        const siteType = this.props.siteDetail.site_detail.site_type;
        let stagingDomain;
        let parentDomain;
        if (siteType === "live") {
            parentDomain = this.props.siteDetail.site_detail.container.identity;
            stagingDomain = this.props.siteDetail.site_detail.staging.identity;
        } else {
            parentDomain = this.props.siteDetail.site_detail.parent.identity;
            stagingDomain =
                this.props.siteDetail.site_detail.container.identity;
        }
        const data = {
            action: action,
            environment: environment,
            parent_identity: parentDomain,
            staging_identity: stagingDomain,
        };
        Confirm(
            this.props.dis,
            SyncPutAction.syncPut(data),
            operation === "pull"
                ? "Do you really want pull this environment. previous data will be overwritten"
                : "Do you really want push to this environment. previous data will be overwritten ?"
        );
    };
    render() {
        const siteType = this.props.siteDetail.site_detail.site_type;
        const pushEnvironment = siteType === "staging" ? "live" : "staging";
        const pullEnvironment = siteType || "";
        return (
            <div className="box">
                <Row>
                    <Col lg="8">
                        <FontAwesomeIcon icon={faRocket} />
                        <div className="operation-title">
                            Push & Pull Environment
                        </div>
                        <div className="operation-desc">
                            {Messages.site_operations.site_env.text}
                        </div>
                    </Col>
                    <Col lg="4" className="text-right">
                        <Dropdown className="mt-4 sync-dropdown ">
                            <Dropdown.Toggle
                                className={`updatebtn bionic-btn ${
                                    this.props.sync.loading ? "loading" : ""
                                }`}
                                id="dropdown-basic"
                            >
                                Push To {Capitilize.capital(pushEnvironment)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() =>
                                        this.syncEnvironmentFunction(
                                            "push",
                                            "full",
                                            pushEnvironment
                                        )
                                    }
                                >
                                    All
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        this.syncEnvironmentFunction(
                                            "push",
                                            "files",
                                            pushEnvironment
                                        )
                                    }
                                >
                                    Files
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        this.syncEnvironmentFunction(
                                            "push",
                                            "database",
                                            pushEnvironment
                                        )
                                    }
                                >
                                    Database
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-4 sync-dropdown">
                            <Dropdown.Toggle
                                className={`updatebtn bionic-btn ${
                                    this.props.sync.loading ? "loading" : ""
                                }`}
                                id="dropdown-basic"
                            >
                                Pull From {Capitilize.capital(pushEnvironment)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() =>
                                        this.syncEnvironmentFunction(
                                            "pull",
                                            "full",
                                            pullEnvironment
                                        )
                                    }
                                >
                                    All
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        this.syncEnvironmentFunction(
                                            "pull",
                                            "files",
                                            pullEnvironment
                                        )
                                    }
                                >
                                    Files
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        this.syncEnvironmentFunction(
                                            "pull",
                                            "database",
                                            pullEnvironment
                                        )
                                    }
                                >
                                    Database
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SyncEnvironment;
