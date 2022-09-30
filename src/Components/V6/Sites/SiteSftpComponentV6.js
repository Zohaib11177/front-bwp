import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import copyIcon from "Assets/img/copy-icon.svg";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import ClipBoardHelper from "Helpers/ClipBoardHelper";
import SiteSftpActionV6 from "Redux/V6/Sites/Features/SiteSftp/SiteSftpActionV6";
class SiteSftpComponentV6 extends Component {
    sftpGenerateFunction = () => {
        this.props.dispatch(SiteSftpActionV6.siteSftp(this.props.host));
    };
    render() {
        const sftp = this.props.sftp;
        return (
            <React.Fragment>
                {" "}
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>SFTP/SSH</span>
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
                                                    {sftp.username ? (
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
                                                                                sftp.username
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        sftp.username
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        sftp.username
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
                                                        "-"
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
                                                    {sftp.password ? (
                                                        sftp.password === "" ? (
                                                            "-"
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
                                                                                    sftp.password
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            sftp.password
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
                                                                <Button
                                                                    onClick={() =>
                                                                        ClipBoardHelper.copy(
                                                                            sftp.password
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
                                                        "-"
                                                    )}
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">Host:</span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
                                                    {sftp.host ? (
                                                        sftp.host === "" ? (
                                                            "-"
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
                                                                                    sftp.host
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            sftp.host
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
                                                                <Button
                                                                    onClick={() =>
                                                                        ClipBoardHelper.copy(
                                                                            sftp.host
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
                                                        "-"
                                                    )}
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-col">
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">Port:</span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
                                                    {sftp.port ? (
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
                                                                                sftp.port
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {sftp.port}
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        sftp.port
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
                                                        "-"
                                                    )}
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-row justify-content-end">
                                        <button
                                            className={`btn btn-primary btn-bionic w-btn ${
                                                this.props.regenerate_sftp
                                                    .loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                this.sftpGenerateFunction()
                                            }
                                        >
                                            {Object.keys(sftp).length > 0 &&
                                            sftp.username !== ""
                                                ? "Regenerated SFTP's"
                                                : "Generate SFTP's"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        sftp: store.siteV6.siteV6.detail.sftp,
        regenerate_sftp: store.siteV6.featureV6.siteSftp,
    };
}

export default connect(mapStateToProps)(SiteSftpComponentV6);
