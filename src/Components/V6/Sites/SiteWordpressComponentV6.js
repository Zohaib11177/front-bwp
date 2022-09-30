import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import TemplateFull from "Templates/TemplateFull";
import unLockIcon from "Assets/img/lock-icon-gray.svg";
import lockIcon from "Assets/img/unlock-icon-gray.svg";
import recycleIcon from "Assets/img/recycle-icon.svg";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import SiteWordpressActionV6 from "Redux/V6/Sites/Site/SiteWordpress/SiteWordpressActionV6";
import WordpressUpdateActionV6 from "Redux/V6/Sites/Wordpress/WordpressUpdate/WordpressUpdateActionV6";
import WordpressRefreshActionV6 from "Redux/V6/Sites/Wordpress/WordpressRefresh/WordpressRefreshActionV6";
import UpdateLockActionV6 from "Redux/V6/Sites/Wordpress/WordpressLock/WordpressLockActionV6";

class SiteWordpressComponentV6 extends Component {
    componentDidMount() {
        const host = this.props.host;
        this.props.dispatch(SiteWordpressActionV6.siteWordpress(host));
    }
    updateFunc = (identity, type, slug) => {
        const updateDetails = {
            identities: [identity],
            type,
            slug,
            host: this.props.host,
        };
        this.props.dispatch(
            WordpressUpdateActionV6.wordpressUpdate(updateDetails)
        );
    };
    wordpressRefreshFunction = () => {
        this.props.dispatch(
            WordpressRefreshActionV6.wordpressRefresh(this.props.host)
        );
    };
    lockUpdate = (slug, identity) => {
        const lockDetails = {
            identity: identity,
            slug,
            host: this.props.host,
        };
        this.props.dispatch(UpdateLockActionV6.wordpressLock(lockDetails));
    };
    render() {
        const { wp_core, wp_plugin, wp_themes } = this.props.wordpress;
        const container = this.props.container;
        const allThemes = wp_themes.map((theme) => {
            return (
                <tr>
                    <td>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{
                                show: 250,
                                hide: 150,
                            }}
                            overlay={
                                <Tooltip className="button-tooltip">
                                    <p>{theme.theme_name}</p>
                                </Tooltip>
                            }
                        >
                            <Button type="text" className="no-btn pe-none">
                                {theme.theme_name}
                            </Button>
                        </OverlayTrigger>
                    </td>
                    <td>{theme.version}</td>
                    <td>
                        {theme.latest_version === ""
                            ? "Updated"
                            : theme.latest_version}
                    </td>
                    <td>
                        {theme.lock ? (
                            <img
                                onClick={(e) =>
                                    this.lockUpdate(
                                        theme.slug,
                                        container.identity
                                    )
                                }
                                src={lockIcon}
                                className="table-lock-icon unlock"
                                alt="lockIcon"
                            />
                        ) : (
                            <img
                                src={unLockIcon}
                                onClick={(e) =>
                                    this.lockUpdate(
                                        theme.slug,
                                        container.identity
                                    )
                                }
                                className="table-lock-icon"
                                alt="lockIcon"
                            />
                        )}
                        <button
                            className={`btn btn-primary btn-bionic btn-table ${
                                this.props.update.update_slug === theme.slug ||
                                this.props.update.update_slug === "theme_all"
                                    ? "loading"
                                    : ""
                            }`}
                            disabled={theme.latest_version ? false : true}
                            onClick={() =>
                                this.updateFunc(
                                    container.identity,
                                    "theme",
                                    theme.slug
                                )
                            }
                        >
                            Update
                        </button>
                    </td>
                </tr>
            );
        });
        const allPlugins = wp_plugin.map((plugin) => {
            return (
                <tr>
                    <td>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{
                                show: 250,
                                hide: 150,
                            }}
                            overlay={
                                <Tooltip className="button-tooltip">
                                    <p>{plugin.plugin_name}</p>
                                </Tooltip>
                            }
                        >
                            <Button type="text" className="no-btn pe-none">
                                {plugin.plugin_name}
                            </Button>
                        </OverlayTrigger>
                    </td>
                    <td>{plugin.version}</td>
                    <td>
                        {plugin.latest_version === ""
                            ? "Updated"
                            : plugin.latest_version}
                    </td>
                    <td>
                        {plugin.lock ? (
                            <img
                                src={lockIcon}
                                onClick={(e) =>
                                    this.lockUpdate(
                                        plugin.slug,
                                        container.identity
                                    )
                                }
                                className="table-lock-icon unlock"
                                alt="lockIcon"
                            />
                        ) : (
                            <img
                                onClick={(e) =>
                                    this.lockUpdate(
                                        plugin.slug,
                                        container.identity
                                    )
                                }
                                src={unLockIcon}
                                className="table-lock-icon"
                                alt="lockIcon"
                            />
                        )}
                        <button
                            className={`btn btn-primary btn-bionic btn-table ${
                                this.props.update.update_slug === plugin.slug ||
                                this.props.update.update_slug === "plugin_all"
                                    ? "loading"
                                    : ""
                            }`}
                            disabled={plugin.latest_version ? false : true}
                            onClick={() =>
                                this.updateFunc(
                                    container.identity,
                                    "plugin",
                                    plugin.slug
                                )
                            }
                        >
                            Update
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <React.Fragment>
                <TemplateFull>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="main-title">Wordpress</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="card-blue mb-4">
                                <div className="card-blue--header">
                                    <span>
                                        Wordpress Core
                                        <img
                                            onClick={(e) =>
                                                this.wordpressRefreshFunction()
                                            }
                                            className="card-header-icon"
                                            src={recycleIcon}
                                            alt="recyclIcon"
                                        />
                                    </span>
                                    <span>
                                        <button
                                            className="btn btn-primary btn-bionic p-0"
                                            onClick={() =>
                                                this.updateFunc(
                                                    container.identity,
                                                    "core",
                                                    "core"
                                                )
                                            }
                                        >
                                            Update All
                                        </button>
                                    </span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="bionic-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Core Name</th>
                                                            <th>Version</th>
                                                            <th>
                                                                Latest Version
                                                            </th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Object.keys(wp_core)
                                                            .length !== 0 ? (
                                                            <tr>
                                                                <td>
                                                                    {wp_core.core_name ? (
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
                                                                                            wp_core.core_name
                                                                                        }
                                                                                    </p>
                                                                                </Tooltip>
                                                                            }
                                                                        >
                                                                            <Button
                                                                                type="text"
                                                                                className="no-btn pe-none"
                                                                            >
                                                                                {
                                                                                    wp_core.core_name
                                                                                }
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    ) : (
                                                                        "-"
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {wp_core.version
                                                                        ? wp_core.version
                                                                        : "-"}
                                                                </td>
                                                                <td>
                                                                    {wp_core.latest_version
                                                                        ? wp_core.latest_version ===
                                                                          ""
                                                                            ? "Updated"
                                                                            : wp_core.latest_version
                                                                        : "Updated"}
                                                                </td>
                                                                <td>
                                                                    {wp_core.lock ? (
                                                                        <img
                                                                            src={
                                                                                lockIcon
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                this.lockUpdate(
                                                                                    "core",
                                                                                    container.identity
                                                                                )
                                                                            }
                                                                            className="table-lock-icon unlock"
                                                                            alt="lockIcon"
                                                                        />
                                                                    ) : (
                                                                        <img
                                                                            src={
                                                                                unLockIcon
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                this.lockUpdate(
                                                                                    "core",
                                                                                    container.identity
                                                                                )
                                                                            }
                                                                            className="table-lock-icon"
                                                                            alt="lockIcon"
                                                                        />
                                                                    )}
                                                                    <button
                                                                        className={`btn btn-primary btn-bionic btn-table ${
                                                                            this
                                                                                .props
                                                                                .update
                                                                                .update_slug ===
                                                                            "core"
                                                                                ? "loading"
                                                                                : ""
                                                                        }`}
                                                                        disabled={
                                                                            wp_core.latest_version
                                                                                ? false
                                                                                : true
                                                                        }
                                                                        onClick={() =>
                                                                            this.updateFunc(
                                                                                container.identity,
                                                                                "core",
                                                                                wp_core.slug
                                                                            )
                                                                        }
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            <p className="text-force-center py-2 light-txt-color">
                                                                <span>
                                                                    No Data
                                                                    Available
                                                                </span>
                                                            </p>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-blue mb-4">
                                <div className="card-blue--header">
                                    <span>
                                        Wordpress Theme
                                        <img
                                            onClick={(e) =>
                                                this.wordpressRefreshFunction()
                                            }
                                            className="card-header-icon"
                                            src={recycleIcon}
                                            alt="recyclIcon"
                                        />
                                    </span>
                                    <span>
                                        <button
                                            className="btn btn-primary btn-bionic p-0"
                                            onClick={() =>
                                                this.updateFunc(
                                                    container.identity,
                                                    "theme",
                                                    "theme_all"
                                                )
                                            }
                                        >
                                            Update All
                                        </button>
                                    </span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="bionic-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Plugin Name</th>
                                                            <th>Version</th>
                                                            <th>
                                                                Latest Version
                                                            </th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allThemes.length !==
                                                        0 ? (
                                                            allThemes
                                                        ) : (
                                                            <p className="text-force-center py-2 light-txt-color">
                                                                <span>
                                                                    No Data
                                                                    Available
                                                                </span>
                                                            </p>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="card-blue mb-4 card-sm-adjF">
                                <div className="card-blue--header">
                                    <span>
                                        Wordpress Plugin
                                        <img
                                            onClick={(e) =>
                                                this.wordpressRefreshFunction()
                                            }
                                            className="card-header-icon"
                                            src={recycleIcon}
                                            alt="recyclIcon"
                                        />
                                    </span>
                                    <span>
                                        <button
                                            className="btn btn-primary btn-bionic p-0"
                                            onClick={() =>
                                                this.updateFunc(
                                                    container.identity,
                                                    "plugin",
                                                    "plugin_all"
                                                )
                                            }
                                        >
                                            Update All
                                        </button>
                                    </span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="bionic-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Plugin Name</th>
                                                            <th>Version</th>
                                                            <th>
                                                                Latest Version
                                                            </th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allPlugins.length !==
                                                        0 ? (
                                                            allPlugins
                                                        ) : (
                                                            <p className="text-force-center py-2 light-txt-color">
                                                                <span>
                                                                    No Data
                                                                    Available
                                                                </span>
                                                            </p>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TemplateFull>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        wordpress: store.siteV6.siteV6.wordpress,
        update: store.siteV6.wordpressV6.update,
    };
}

export default connect(mapStateToProps)(SiteWordpressComponentV6);
