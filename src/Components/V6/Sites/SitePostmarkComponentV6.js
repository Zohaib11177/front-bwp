import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import copyIcon from "Assets/img/copy-icon.svg";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import ClipBoardHelper from "Helpers/ClipBoardHelper";

class SitePostmarkComponentV6 extends Component {
    render() {
        const postmark = this.props.postmark;
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Postmark</span>
                        </div>
                        <div className="card-blue--content site_information">
                            <div className="content-wrapper border-col">
                                <div className="content-col">
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">
                                                DKIM Host:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
                                                    {postmark.dkim_hostname ? (
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
                                                                                postmark.dkim_hostname
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        postmark.dkim_hostname
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.dkim_hostname
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
                                                DKIM Type:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
                                                    {postmark.dkim_type ? (
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
                                                                                postmark.dkim_type
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        postmark.dkim_type
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.dkim_type
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
                                                DKIM Value:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
                                                    {postmark.dkim_value ? (
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
                                                                                postmark.dkim_value
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        postmark.dkim_value
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.dkim_value
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
                                </div>
                                <div className="content-col">
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">
                                                Return Host:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap pl-10">
                                                    {postmark.returnpath_hostname ? (
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
                                                                                postmark.returnpath_hostname
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        postmark.returnpath_hostname
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.returnpath_hostname
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
                                                Return Type:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap pl-10">
                                                    {postmark.returnpath_type ? (
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
                                                                                postmark.returnpath_type
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        postmark.returnpath_type
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.returnpath_type
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
                                                Return Value:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap pl-10">
                                                    {postmark.returnpath_value ? (
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
                                                                                postmark.returnpath_value
                                                                            }
                                                                        </p>
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        postmark.returnpath_value
                                                                    }
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.returnpath_value
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
                                </div>
                            </div>
                        </div>
                        <div className="card-blue--content">
                            <div className="row col-br align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="row mb-3 ">
                                        <div className="col-6">
                                            <span className="font-14">
                                                DKIM Host:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {postmark.dkim_hostname ? (
                                                    postmark.dkim_hostname ===
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
                                                                            postmark.dkim_hostname
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.dkim_hostname
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
                                                                    postmark.dkim_hostname
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
                                                DKIM Type:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {postmark.dkim_type ? (
                                                    postmark.dkim_type ===
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
                                                                            postmark.dkim_type
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.dkim_type
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
                                                                    postmark.dkim_type
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
                                                DKIM Value:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {postmark.dkim_value ? (
                                                    postmark.dkim_value ===
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
                                                                            postmark.dkim_value
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.dkim_value
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
                                                                    postmark.dkim_value
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
                                    <div className="row mb-3 ">
                                        <div className="col-6">
                                            <span className="font-14">
                                                Return Host:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {postmark.returnpath_hostname ? (
                                                    postmark.returnpath_hostname ===
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
                                                                            postmark.returnpath_hostname
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.returnpath_hostname
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
                                                                    postmark.returnpath_hostname
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
                                                Return Type:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {postmark.returnpath_type ? (
                                                    postmark.returnpath_type ===
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
                                                                            postmark.returnpath_type
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.returnpath_type
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
                                                                    postmark.returnpath_type
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
                                                Return Value:
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="font-14 light-txt-color">
                                                {postmark.returnpath_value ? (
                                                    postmark.returnpath_value ===
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
                                                                            postmark.returnpath_value
                                                                        }
                                                                    </p>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        postmark.returnpath_value
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
                                                                    postmark.returnpath_value
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
        postmark: store.siteV6.siteV6.detail.postmark,
    };
}

export default connect(mapStateToProps)(SitePostmarkComponentV6);
