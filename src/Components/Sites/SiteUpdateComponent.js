import React, { Component } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sitedetail.css";
import "Assets/css/siteupdate.css";
import TemplateSideRight from "Templates/TemplateSidebarRight";
import { ReactSVG } from "react-svg";
import SiteSubMenuComponent from "./Ui/SiteSubMenuComponent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WordpressListAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import WordpressUpdateAction from "Redux/V1/Sites/Wordpress/WordpressUpdate/WordpressUpdateAction";
import SiteAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import UpdateLockAction from "Redux/V1/Sites/Wordpress/WordpressLock/WordpressLockAction";
import Configs from "Configs";
import WordPressGetActions from "Redux/V1/Sites/Wordpress/WordpressRefresh/WordpressRefreshAction";
import ToolTipComponent from "Components/UI/ToolTipComponent";

class SiteUpdateComponent extends Component {
    componentWillMount() {
        this.props.dispatch(
            SiteAction.getSiteDetail(this.props.match.params.host)
        );
        setTimeout(() => {
            this.props.dispatch(
                WordpressListAction.wordpressGet(
                    this.props.details.site_detail.container.identity
                )
            );
        }, 1000);
    }
    update = (type, slug) => {
        const updateDetails = {
            identity: this.props.details.site_detail.container.identity,
            type,
            slug,
            host: this.props.match.params.host,
        };
        this.props.dispatch(WordpressUpdateAction.putUpdate(updateDetails));
    };
    lockUpdate = (slug) => {
        const lockDetails = {
            identity: this.props.details.site_detail.container.identity,
            slug,
        };
        this.props.dispatch(UpdateLockAction.updatePut(lockDetails));
    };
    render() {
        // const { wordpress_update } = this.props.wordpress_updates;
        const { wordpress, themes, plugins, timelines } =
            this.props.wordpress_details;
        const { current_version, update_version, lock } = wordpress;

        const allThemes = themes.map((theme) => {
            return (
                <Row className="align-items-center mt-2">
                    <Col lg="3">
                        <div className="update-desc">{theme.name}</div>
                    </Col>
                    <Col lg="3">
                        <div className="update-desc">
                            {theme.current_version}
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="update-desc">
                            {theme.update_version === null
                                ? "Updated"
                                : theme.update_version}
                        </div>
                    </Col>
                    <Col lg="1" className="text-right">
                        <div
                            className="btn btn-link lock-img"
                            onClick={() => this.lockUpdate(theme.slug)}
                        >
                            {theme.lock ? (
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/General/lock-1.svg`}
                                    alt="lock"
                                    className="ml-1 lock"
                                />
                            ) : (
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/General/unlock.svg`}
                                    alt="unlock"
                                    className="unlock"
                                />
                            )}
                        </div>
                    </Col>
                    <Col lg="2">
                        <Button
                            className={`updatebtn ${
                                this.props.wordpress_updates.update_slug ===
                                    theme.slug ||
                                this.props.wordpress_updates.update_slug ===
                                    "theme_all"
                                    ? "loading"
                                    : ""
                            }`}
                            disabled={
                                theme.lock || theme.update_version === null
                            }
                            onClick={() => this.update("theme", theme.slug)}
                        >
                            Update
                        </Button>
                    </Col>
                </Row>
            );
        });

        const allPlugins = plugins.map((plugin) => {
            return (
                <Row className="align-items-center mt-2">
                    <Col lg="3">
                        <div className="update-desc">{plugin.name}</div>
                    </Col>
                    <Col lg="3">
                        <div className="update-desc">
                            {plugin.current_version}
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="update-desc">
                            {plugin.update_version === null
                                ? "Updated"
                                : plugin.update_version}
                        </div>
                    </Col>
                    <Col lg="1" className="float-left">
                        <div
                            className="btn btn-link lock-img"
                            onClick={() => this.lockUpdate(plugin.slug)}
                        >
                            {plugin.lock ? (
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/lock-1.svg`}
                                    alt="lock"
                                    className="ml-1 lock"
                                />
                            ) : (
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/unlock.svg`}
                                    alt="unlock"
                                    className="unlock"
                                />
                            )}
                        </div>
                    </Col>
                    <Col lg="2">
                        <Button
                            className={`updatebtn ${
                                this.props.wordpress_updates.update_slug ===
                                    plugin.slug ||
                                this.props.wordpress_updates.update_slug ===
                                    "plugin_all"
                                    ? "loading"
                                    : ""
                            }`}
                            disabled={
                                plugin.lock || plugin.update_version === null
                            }
                            onClick={() => this.update("plugin", plugin.slug)}
                        >
                            Update
                        </Button>
                    </Col>
                </Row>
            );
        });
        return (
            <React.Fragment>
                <TemplateMain>
                    <SiteSubMenuComponent
                        identity={this.props.match.params.host}
                        active="update"
                    />
                    <div className="site-update-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                <Row>
                                    <Col lg="8">
                                        <div className="page-header refresh-icon-update">
                                            WordPress Core
                                            <Link
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Refresh"
                                                onClick={() =>
                                                    this.props.dispatch(
                                                        WordPressGetActions.WordPressGet(
                                                            this.props.details
                                                                .site_detail
                                                                .container
                                                                .identity
                                                        )
                                                    )
                                                }
                                            >
                                                <svg
                                                    class="w-6 h-6"
                                                    fill="none"
                                                    stroke="var(--main-color)"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                    ></path>
                                                </svg>{" "}
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col
                                        lg="4"
                                        className="text-right pt-4 d-none"
                                    >
                                        <Link className="update-all">
                                            Update All
                                        </Link>
                                    </Col>
                                </Row>
                                <div className="box">
                                    <Row>
                                        <Col lg="3">
                                            <div className="update-title">
                                                Wordpress
                                            </div>
                                            <div className="update-desc">
                                                Core
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div className="update-title">
                                                Version
                                            </div>
                                            <div className="update-desc">
                                                {current_version}
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div className="update-title">
                                                Latest Version
                                            </div>
                                            <div className="update-desc">
                                                {update_version === null
                                                    ? "Updated"
                                                    : update_version}
                                                {/* {wp_update_version} */}
                                            </div>
                                        </Col>
                                        <Col lg="1" className="text-right">
                                            <div
                                                className="btn btn-link lock-img"
                                                onClick={() =>
                                                    this.lockUpdate("core")
                                                }
                                            >
                                                {lock ? (
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/lock-1.svg`}
                                                        alt="lock"
                                                        className="ml-1 lock"
                                                    />
                                                ) : (
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/unlock.svg`}
                                                        alt="unlock"
                                                        className="unlock"
                                                    />
                                                )}
                                            </div>
                                        </Col>
                                        <Col lg="2">
                                            <Button
                                                className={`updatebtn ${
                                                    this.props.wordpress_updates
                                                        .update_slug === "wp"
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                disabled={
                                                    lock ||
                                                    update_version === null
                                                }
                                                onClick={() =>
                                                    this.update("core", "wp")
                                                }
                                            >
                                                Update
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>

                                <Row>
                                    <Col lg="8 col-8">
                                        <div className="page-header refresh-icon-update ">
                                            WordPress Themes
                                            <Link
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Refresh"
                                                onClick={() =>
                                                    this.props.dispatch(
                                                        WordPressGetActions.WordPressGet(
                                                            this.props.details
                                                                .site_detail
                                                                .container
                                                                .identity
                                                        )
                                                    )
                                                }
                                            >
                                                <svg
                                                    class="w-6 h-6"
                                                    fill="none"
                                                    stroke="var(--main-color)"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                    ></path>
                                                </svg>{" "}
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col
                                        lg="4"
                                        className="text-right pt-4 col-4"
                                    >
                                        <Link
                                            className="update-all"
                                            onClick={() =>
                                                this.update(
                                                    "theme",
                                                    "theme_all"
                                                )
                                            }
                                        >
                                            Update All
                                        </Link>
                                    </Col>
                                </Row>
                                <div className="box">
                                    <Row>
                                        <Col lg="3 col-3">
                                            <div className="update-title">
                                                Theme Name
                                            </div>
                                        </Col>
                                        <Col lg="3 col-3">
                                            <div className="update-title">
                                                Version
                                            </div>
                                        </Col>
                                        <Col lg="3 col-5">
                                            <div className="update-title">
                                                Latest Version
                                            </div>
                                        </Col>
                                        <Col
                                            lg="2"
                                            className="text-right"
                                        ></Col>
                                    </Row>
                                    {allThemes}
                                </div>

                                <Row>
                                    <Col lg="8 col-8">
                                        <div className="page-header refresh-icon-update ">
                                            WordPress Plugins
                                            <Link
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Refresh"
                                                onClick={() =>
                                                    this.props.dispatch(
                                                        WordPressGetActions.WordPressGet(
                                                            this.props.details
                                                                .site_detail
                                                                .container
                                                                .identity
                                                        )
                                                    )
                                                }
                                            >
                                                <svg
                                                    class="w-6 h-6"
                                                    fill="none"
                                                    stroke="var(--main-color)"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                    ></path>
                                                </svg>{" "}
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col
                                        lg="4"
                                        className="text-right pt-4 col-4"
                                    >
                                        <Link
                                            className="update-all"
                                            onClick={() =>
                                                this.update(
                                                    "plugin",
                                                    "plugin_all"
                                                )
                                            }
                                        >
                                            Update All
                                        </Link>
                                    </Col>
                                </Row>
                                <div className="box">
                                    <Row>
                                        <Col lg="3 col-3">
                                            <div className="update-title">
                                                Plug-in Name
                                            </div>
                                        </Col>
                                        <Col lg="3 col-3">
                                            <div className="update-title">
                                                Version
                                            </div>
                                        </Col>
                                        <Col lg="3 col-5">
                                            <div className="update-title">
                                                Latest Version
                                            </div>
                                        </Col>
                                        <Col
                                            lg="2"
                                            className="text-right"
                                        ></Col>
                                    </Row>
                                    {allPlugins}
                                </div>
                            </div>
                            <div className="site-update-right">
                                <div className="box">
                                    <Row>
                                        <Col lg="12">
                                            <div className="page-header">
                                                Timeline
                                            </div>
                                            <ListGroup>
                                                {timelines
                                                    .reverse()
                                                    .map((t) => (
                                                        <ListGroup.Item>
                                                            {t.text}
                                                        </ListGroup.Item>
                                                    ))}
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </TemplateSideRight>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        details: state.SiteDetailReducer,
        wordpress_details: state.wordpressDetails,
        wordpress_updates: state.wordpressUpdate,
    };
}

export default connect(mapStateToProps)(SiteUpdateComponent);
