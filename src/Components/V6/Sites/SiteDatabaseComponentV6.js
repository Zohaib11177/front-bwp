import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import copyIcon from "Assets/img/copy-icon.svg";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import ClipBoardHelper from "Helpers/ClipBoardHelper";
import SiteDatabaseActionV6 from "Redux/V6/Sites/Site/SiteDatabase/SiteDatabaseActionV6";
import SiteDbLoginActionV6 from "Redux/V6/Sites/Features/SiteDbLogin/SiteDbLoginActionV6";

class SiteDatabaseComponentV6 extends Component {
    componentDidMount() {
        const host = this.props.host;
        this.props.dispatch(SiteDatabaseActionV6.siteDatabase(host));
    }
    clickPHPFunction = () => {
        this.props.dispatch(SiteDbLoginActionV6.siteDbLogin(this.props.host));
    };
    render() {
        const database = this.props.database.database;
        return (
            <React.Fragment>
                {this.props.data_center &&
                this.props.data_center.provider_name !== "PA" ? (
                    <div className="col-md-6">
                        <div className="card-blue mb-4 card-sm-adj">
                            <div className="card-blue--header">
                                <span>Database</span>
                            </div>
                            <div className="card-blue--content site_information">
                                <div className="content-wrapper border-col">
                                    <div className="content-col">
                                        <div className="inner-row">
                                            <div className="content-label">
                                                <span class="font-14">
                                                    Username:
                                                </span>
                                            </div>
                                            <div className="content-data">
                                                <span className="font-14 light-txt-color cp-align">
                                                    <div className="copy-text-wrap">
                                                        {database.username ? (
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="bottom"
                                                                    delay={{
                                                                        show: 250,
                                                                        hide: 150,
                                                                    }}
                                                                    overlay={
                                                                        <Tooltip className="button-tooltip">
                                                                            <p>
                                                                                {
                                                                                    database.username
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            database.username
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
                                                                <Button
                                                                    onClick={() =>
                                                                        ClipBoardHelper.copy(
                                                                            database.username
                                                                        )
                                                                    }
                                                                    type="text"
                                                                    className="no-btn"
                                                                >
                                                                    <img
                                                                        className="icon-copy copy ml-2"
                                                                        src={
                                                                            copyIcon
                                                                        }
                                                                        alt="copyIcon"
                                                                    />
                                                                </Button>
                                                            </>
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="inner-row">
                                            <div className="content-label">
                                                <span class="font-14">
                                                    Password:
                                                </span>
                                            </div>
                                            <div className="content-data">
                                                <span className="font-14 light-txt-color cp-align">
                                                    <div className="copy-text-wrap">
                                                        {database.password ? (
                                                            database.password ===
                                                            "" ? (
                                                                "N/A"
                                                            ) : (
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="bottom"
                                                                        delay={{
                                                                            show: 250,
                                                                            hide: 150,
                                                                        }}
                                                                        overlay={
                                                                            <Tooltip className="button-tooltip">
                                                                                <p>
                                                                                    {
                                                                                        database.password
                                                                                    }
                                                                                </p>
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                database.password
                                                                            }
                                                                        </span>
                                                                    </OverlayTrigger>
                                                                    <Button
                                                                        onClick={() =>
                                                                            ClipBoardHelper.copy(
                                                                                database.password
                                                                            )
                                                                        }
                                                                        type="text"
                                                                        className="no-btn"
                                                                    >
                                                                        <img
                                                                            className="icon-copy copy ml-2"
                                                                            src={
                                                                                copyIcon
                                                                            }
                                                                            alt="copyIcon"
                                                                        />
                                                                    </Button>
                                                                </>
                                                            )
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="inner-row">
                                            <div className="content-label">
                                                <span class="font-14">
                                                    Name:
                                                </span>
                                            </div>
                                            <div className="content-data">
                                                <span className="font-14 light-txt-color cp-align">
                                                    <div className="copy-text-wrap">
                                                        {database.name ? (
                                                            database.name ===
                                                            "" ? (
                                                                "N/A"
                                                            ) : (
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="bottom"
                                                                        delay={{
                                                                            show: 250,
                                                                            hide: 150,
                                                                        }}
                                                                        overlay={
                                                                            <Tooltip className="button-tooltip">
                                                                                <p>
                                                                                    {
                                                                                        database.name
                                                                                    }
                                                                                </p>
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                database.name
                                                                            }
                                                                        </span>
                                                                    </OverlayTrigger>
                                                                    <Button
                                                                        onClick={() =>
                                                                            ClipBoardHelper.copy(
                                                                                database.name
                                                                            )
                                                                        }
                                                                        type="text"
                                                                        className="no-btn"
                                                                    >
                                                                        <img
                                                                            className="icon-copy copy ml-2"
                                                                            src={
                                                                                copyIcon
                                                                            }
                                                                            alt="copyIcon"
                                                                        />
                                                                    </Button>
                                                                </>
                                                            )
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-col">
                                        <div className="inner-row-h"></div>
                                        <div className="inner-row justify-content-end">
                                            <button
                                                className={`btn btn-primary btn-bionic w-btn ${
                                                    this.props.database_login
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    this.clickPHPFunction()
                                                }
                                                disabled={
                                                    this.props.data_center &&
                                                    this.props.data_center
                                                        .provider_name === "NS"
                                                        ? true
                                                        : false
                                                }
                                                title={
                                                    this.props.data_center &&
                                                    this.props.data_center
                                                        .provider_name === "NS"
                                                        ? "Your provider do not have this feature"
                                                        : ""
                                                }
                                            >
                                                Database Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-md-6">
                        <div className="card-blue mb-4 card-sm-adj">
                            <div className="card-blue--header">
                                <span>Database</span>
                            </div>
                            <div className="card-blue--content">
                                <div className="text-btn--wrap">
                                    <div className="text-col">
                                        <span className="font-14 light-txt-color f-adj">
                                            We do not provide database details
                                            for security purpose. <br></br> If
                                            you want to access your database,
                                            this feature will give you one time
                                            magic link to access your database.
                                        </span>
                                    </div>
                                    <div className="btn-col">
                                        <React.Fragment>
                                            <button
                                                className={`btn btn-primary btn-bionic w-btn ${
                                                    this.props.database_login
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    this.clickPHPFunction()
                                                }
                                            >
                                                Database Login
                                            </button>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        database: store.siteV6.siteV6.database,
        database_login: store.siteV6.featureV6.db_login,
        data_center: store.siteV6.siteV6.detail.site_info.data_center,
    };
}

export default connect(mapStateToProps)(SiteDatabaseComponentV6);
