import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import copyIcon from "Assets/img/copy-icon.svg";
import ClipBoardHelper from "Helpers/ClipBoardHelper";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import AccessSharingActionV6 from "Redux/V6/Sites/Features/AccessSharing/AccessSharingActionV6";

class AccessSharingComponentV6 extends Component {
    accessSharingGenerateFunc = (host) => {
        this.props.dispatch(AccessSharingActionV6.accessSharing(host));
    };
    render() {
        const access_sharing = this.props.access_sharing;
        const host = this.props.host;
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Access Sharing</span>
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
                                                    {access_sharing.username ? (
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
                                                                                access_sharing.username
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        access_sharing.username
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        access_sharing.username
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
                                                    {access_sharing.password ? (
                                                        access_sharing.password ===
                                                        "" ? (
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
                                                                                    access_sharing.password
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            access_sharing.password
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
                                                                <Button
                                                                    onClick={() =>
                                                                        ClipBoardHelper.copy(
                                                                            access_sharing.password
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
                                            <span class="font-14">URL:</span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
                                                    {access_sharing.url ? (
                                                        access_sharing.url ===
                                                        "" ? (
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
                                                                                    access_sharing.url
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            access_sharing.url
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
                                                                <Button
                                                                    onClick={() =>
                                                                        ClipBoardHelper.copy(
                                                                            access_sharing.url
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
                                    <div className="inner-row-h"></div>
                                    <div className="inner-row justify-content-end">
                                        <button
                                            className={`btn btn-primary btn-bionic text-180 w-btn ${
                                                this.props.regenerate_password
                                                    .loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                this.accessSharingGenerateFunc(
                                                    host
                                                )
                                            }
                                        >
                                            {Object.keys(access_sharing)
                                                .length === 0
                                                ? "Generate Access"
                                                : "Regenerated Password"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card-blue--content">
                            <div className="row col-br align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="row mb-3 ">
                                        <div className="col-6">
                                            <span className="font-14">
                                                Username:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {access_sharing.username ? (
                                                    access_sharing.username ===
                                                    "" ? (
                                                        "-"
                                                    ) : (
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
                                                                            access_sharing.username
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        access_sharing.username
                                                                    )
                                                                }
                                                                type="text"
                                                                className="no-btn"
                                                            >
                                                                <img
                                                                    className="icon-copy copy mr-2"
                                                                    src={
                                                                        copyIcon
                                                                    }
                                                                    alt="copyIcon"
                                                                />
                                                                {
                                                                    access_sharing.username
                                                                }
                                                            </Button>
                                                        </OverlayTrigger>
                                                    )
                                                ) : (
                                                    "-"
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <span className="font-14">
                                                Password:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {access_sharing.password ? (
                                                    access_sharing.password ===
                                                    "" ? (
                                                        "-"
                                                    ) : (
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
                                                                            access_sharing.password
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        access_sharing.password
                                                                    )
                                                                }
                                                                type="text"
                                                                className="no-btn"
                                                            >
                                                                <img
                                                                    className="icon-copy copy mr-2"
                                                                    src={
                                                                        copyIcon
                                                                    }
                                                                    alt="copyIcon"
                                                                />
                                                                {
                                                                    access_sharing.password
                                                                }
                                                            </Button>
                                                        </OverlayTrigger>
                                                    )
                                                ) : (
                                                    "-"
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <span className="font-14">
                                                URL:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {access_sharing.url ? (
                                                    access_sharing.url ===
                                                    "" ? (
                                                        "-"
                                                    ) : (
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
                                                                            access_sharing.url
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        access_sharing.url
                                                                    )
                                                                }
                                                                type="text"
                                                                className="no-btn"
                                                            >
                                                                <img
                                                                    className="icon-copy copy mr-2"
                                                                    src={
                                                                        copyIcon
                                                                    }
                                                                    alt="copyIcon"
                                                                />
                                                                {
                                                                    access_sharing.url
                                                                }
                                                            </Button>
                                                        </OverlayTrigger>
                                                    )
                                                ) : (
                                                    "-"
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="row mb-3">
                                        <div className="col-12 text-right">
                                            <button
                                                className={`btn btn-primary btn-bionic text-180 w-btn ${
                                                    this.props
                                                        .regenerate_password
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    this.accessSharingGenerateFunc(
                                                        host
                                                    )
                                                }
                                            >
                                                Regenerated Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        regenerate_password: store.siteV6.featureV6.accessSharing,
        access_sharing: store.siteV6.siteV6.detail.access_sharing,
    };
}

export default connect(mapStateToProps)(AccessSharingComponentV6);
