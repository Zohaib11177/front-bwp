import React, { Component } from "react";
import Configs from "Configs";
import TemplateHalf from "Templates/TemplateHalf";
import copyIcon from "Assets/img/copy-icon.svg";
import linkIcon from "Assets/img/link-icon.svg";
import recycleIcon from "Assets/img/recycle-icon.svg";
import settingIcon from "Assets/img/setting-icon-white.svg";
import unLockIcon from "Assets/img/lock-icon-gray.svg";
import lockIcon from "Assets/img/unlock-icon-gray.svg";
import "Assets/css/V3/siteDetail.css";
import wpIcon from "Assets/img/wp-icon-btn.svg";
import TemplateFull from "Templates/TemplateFull";
import { connect } from "react-redux";
// import { Row, Col, ListGroup, Button } from "react-bootstrap";
// import { newDesign } from 'Redux/V3/Sites/NewDesign/NewDesignAction';
import { siteDetail } from "Redux/V3/Sites/SiteDetail/SiteDetailAction";
import SiteSftpAction from "Redux/V1/Sites/Features/SiteSftp/SiteSftpAction";
import ClipBoardHelper from "Helpers/ClipBoardHelper";
import DeleteDomainAction from "Redux/V1/Sites/Domain/Delete/Action";
import TimeStampHelper from "Helpers/TimeStampHelper";
import WordpressLoginAction from "Redux/V1/Sites/Features/WordpressLogin/WordpressLoginAction";
import InputTextField from "Components/Forms/Fields/InputTextField";
import DomainValidation from "Validations/DomainValidation";
import ErrorBusiness from "Businesses/ErrorBusiness";
import PostDomainAction from "Redux/V1/Sites/Domain/Post/Action";
import BackupNameHelper from "Helpers/BackupNameHelper";
import BackupDownloadActionV2 from "Redux/V2/Sites/Backups/Backup/BackupDownload/BackupDownloadActionV2";
import ConfirmationHelper from "Helpers/ConfirmationHelper";
import PluginResetAction from "Redux/V1/Sites/Features/PluginReset/PluginResetAction";
import WordpressUpdateAction from "Redux/V1/Sites/Wordpress/WordpressUpdate/WordpressUpdateAction";
import WordpressRefreshAction from "Redux/V1/Sites/Wordpress/WordpressRefresh/WordpressRefreshAction";
import DomainPrimaryAction from "Redux/V1/Domain/Put/DomainPutAction";
import Comfirmation from "Helpers/ConfirmationHelper";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import SiteDeleteAction from "Redux/V1/Sites/Site/Delete/SiteDeleteAction";
import SiteDeleteActionV3 from "Redux/V3/Sites/InstantDelete/Delete/SiteDeleteActionV3";
import SiteDeleteCancelAction from "Redux/V1/Sites/Site/SiteDeleteCancel/SiteDeleteCancelAction";
import { Dropdown } from "react-bootstrap";
import CacheAllClearAction from "Redux/V1/Sites/Operations/CacheAllClear/CacheAllClearAction";
import NitroEnableAction from "Redux/V1/Sites/Addons/Nitro/NitroEnable/NitroEnableAction";
import UpdateLockAction from "Redux/V1/Sites/Wordpress/WordpressLock/WordpressLockAction";
import ClickPhpAction from "Redux/V1/Sites/Features/PHPLogin/PhpLoginAction";
import StagingCreateAction from "Redux/V1/Staging/Post/StagingPostAction";
import AccessSharingAction from "Redux/V1/Sites/Features/AccessSharing/AccessSharingAction";
import SiteCloneForm from "Components/Forms/SiteCloneForm";
import SyncPushAction from "Redux/V1/Staging/SyncPushEnv/SyncPushAction";
import AddonToggleAction from "Redux/V1/Sites/Addons/AddonToggle/AddonToggleAction";
// import SiteInformation from './SiteInformation';

class SiteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            form: {
                new_domain: "",
            },
        };
    }

    componentDidMount() {
        const host = this.props.match.params.host;
        this.props.dispatch(siteDetail(host));
        // console.log("API data", this.props.site_detail);
    }
    handleChange = (event) => {
        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            event.target.name
        );
        this.setState({
            error: errorUpdate,
        });
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };

    resetField = (close = null) => {
        this.setState({
            form: {
                new_domain: "",
            },
        });
        if (close === null) {
            this.props.onHide();
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { form } = this.state;
        form.old_domain = this.props.site_detail.container.primary_domain_name;

        const data = {
            identity: this.props.site_detail.container.identity,
            form,
        };
        DomainValidation.validate(this.state.form, { abortEarly: false })
            .then(() => {
                this.props.dispatch(PostDomainAction.postDomain(data));
                setTimeout(() => {
                    this.resetField(false);
                }, 1000);
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };

    sftpGenerateFunction = (identity) => {
        const data = {
            identity: identity,
            host: this.props.match.params.host,
        };
        this.props.dispatch(SiteSftpAction.siteSftp(data));
    };

    accessSharingGenerateFunc = (identity) => {
        this.props.dispatch(
            AccessSharingAction.accessSharing(
                identity,
                this.props.match.params.host
            )
        );
    };

    clickPHPFunction = (identity) => {
        this.props.dispatch(ClickPhpAction.phpLogin(identity));
    };

    stagingCreateFunction = (identity) => {
        this.props.dispatch(StagingCreateAction.stagingPost(identity));
    };

    downloadBackup = (container) => {
        const ele = document.getElementById("backups");
        const selectedOption = ele.options[ele.selectedIndex];
        const type = selectedOption.getAttribute("data-type");
        const data = {
            backupId: ele.value,
            identity: container.identity,
            type: type,
            cp: container.cloud_provider ?? "PA",
        };
        ConfirmationHelper(
            this.props.dispatch,
            BackupDownloadActionV2.backupDownload(data),
            "Do you really want to download this backup ?"
        );
    };

    resetKeyFunction = () => {
        const host = this.props.match.params.host;
        this.props.dispatch(PluginResetAction.pluginReset(host));
    };

    updateFunc = (identity, type, slug) => {
        const updateDetails = {
            identity: identity,
            type,
            slug,
            host: this.props.match.params.hosts,
        };
        this.props.dispatch(
            WordpressUpdateAction.wordpressUpdate(updateDetails)
        );
    };

    wordpressRefreshFunction = (identity) => {
        this.props.dispatch(WordpressRefreshAction.wordpressRefresh(identity));
    };

    changePrimary = (e, identity) => {
        let data = {
            identity: identity,
            domain: e.target.value,
        };
        Comfirmation(this.props.dispatch, DomainPrimaryAction.domainPut(data));
    };

    domainDelete = (identity, domain) => {
        let data = {
            identity: identity,
            domain: domain,
        };
        Comfirmation(
            this.props.dispatch,
            DeleteDomainAction.deleteDomain(data)
        );
    };
    deleteSite = (identity) => {
        const data = {
            identity: identity,
            host: this.props.match.params.host,
        };
        Comfirmation(
            this.props.dispatch,
            SiteDeleteAction.siteDelete(data),
            "Site will be deleted on billing date"
        );
    };
    stagingDelete = (identity) => {
        const data = {
            identity: identity,
            primary_domain: this.props.site_detail.parent.domain_name,
        };
        Comfirmation(
            this.props.dispatch,
            SiteDeleteActionV3.instantDelete(data),
            "Site will be deleted Instantly"
        );
    };
    deleteCancelReq = (identity) => {
        const data = {
            identity: identity,
            host: this.props.match.params.host,
        };
        Comfirmation(
            this.props.dispatch,
            SiteDeleteCancelAction.siteDeleteCancel(data),
            "Site will not be deleted anymore"
        );
    };

    clearCache = (identity) => {
        this.props.dispatch(CacheAllClearAction.cacheAllClear(identity));
    };

    nitroEnable = (identity) => {
        Comfirmation(
            this.props.dispatch,
            NitroEnableAction.nitroEnable(identity),
            `Please note that Bionic speed is a paid add on ($9 per month) and would be billed monthly. <br><div class="note-text">Note: If you are using free site, you will not be charged</div>`
        );
    };

    environmentChange = (domain) => {
        var url = window.location.href;
        // eslint-disable-next-line
        url = url.replace(/\/[^\/]*$/, "/" + domain);
        window.location.href = url;
    };

    lockUpdate = (slug, identity) => {
        const lockDetails = {
            identity: identity,
            slug,
        };
        this.props.dispatch(UpdateLockAction.wordpressLock(lockDetails));
    };

    syncEnvironmentFunction = (identity) => {
        Comfirmation(
            this.props.dispatch,
            SyncPushAction.syncPushPut(identity),
            "Do you really want push to this environment. previous data will be overwritten ?"
        );
    };

    ToggleUnlimitedEdits = (identity, addon) => {
        const data = {
            identity: identity,
            product_id: addon.id,
            status: !addon.status,
            host: this.props.match.params.host,
        };

        if (addon.status) {
            this.props.dispatch(AddonToggleAction.addonToggle(data));
        } else {
            Comfirmation(
                this.props.dispatch,
                AddonToggleAction.addonToggle(data),

                `Please note that ${addon.name} is a paid add on ($${addon.cost} per month) and would be billed monthly. <br><div class="note-text">Note: If you are using free site, you will not be charged</div>`
            );
        }
    };

    render() {
        const renderTooltipDeleteIcon = (props) => (
            <Tooltip className="button-tooltip" {...props}>
                <p>Delete</p>
            </Tooltip>
        );
        const {
            site_detail,
            site_info,
            sftp,
            domain_info,
            page_speed,
            wp_core,
            wp_plugin,
            wp_themes,
            database,
            container,
            staging,
            parent,
            tags,
            access_sharing,
            postmark,
            site_addons,
            resources,
        } = this.props.site_detail;
        // console.log(resources);
        const ipAddress = site_detail.ip_address.split("-");
        const { backups } = this.props;
        
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
                                this.props.update.loading ? "loading" : ""
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
                                this.props.update.loading ? "loading" : ""
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
        console.log(site_addons, "site_addons");
        return (
            <>
                <div className="brb-1">
                    <TemplateHalf>
                        <div className="site-detail--icon-text--wrapper">
                            <div className="sd--icon img-avatar">
                                <img
                                    src={
                                        site_detail.screen_shot
                                            ? site_detail.screen_shot
                                            : `${Configs.public_url}/assets/img/General/wp-bold_1.png`
                                    }
                                    className="logo-site"
                                    alt=""
                                />
                            </div>
                            <div className="sd--text">
                                <div className="row">
                                    <div className="col-12">
                                        <span className="main-site-text mr-4">
                                            {this.props.match.params.host}
                                        </span>
                                        {/* <a href="/">
                                            <img
                                                className="icon-copy mr-3"
                                                src={copyIcon}
                                                alt="copyIcon"
                                            />
                                        </a>*/}
                                        <span
                                            onClick={() =>
                                                window.open(
                                                    `https://${this.props.match.params.host}`,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <img
                                                className="link-icon"
                                                src={linkIcon}
                                                alt="linkIcon"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {tags.map((item) => (
                                            <a class="" href="/">
                                                <span
                                                    class={`badge badge-primary bg-${item.name} mr-1`}
                                                >
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                        {Object.keys(staging).length > 0 ? (
                                            <span
                                                class={`badge badge-primary bg-delete mr-1`}
                                            >
                                                staging
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`progress-bar--wrapper`}>
                            <div
                                className={`progress-bar--container ${
                                    Object.keys(resources).length !== 0
                                        ? ""
                                        : "d-none"
                                }`}
                            >
                                <div className="row mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="progress-bar--text">
                                            <span className="dot"></span>
                                            Storage
                                        </div>
                                        <div className="progress-bar--element">
                                            <div class="bar positive">
                                                <span>
                                                    <small>
                                                        {Object.keys(resources)
                                                            .length !== 0
                                                            ? resources.disk
                                                                  .used
                                                            : 0}
                                                        MB
                                                    </small>
                                                    <small>2GB</small>
                                                </span>
                                            </div>
                                            <div
                                                class="bar negative"
                                                style={{
                                                    width: `${
                                                        Object.keys(resources)
                                                            .length !== 0
                                                            ? 100 -
                                                              (resources.disk
                                                                  .used /
                                                                  2048) *
                                                                  100
                                                            : 100
                                                    }%`,
                                                }}
                                            >
                                                <span>
                                                    <small>
                                                        {Object.keys(resources)
                                                            .length !== 0
                                                            ? resources.disk
                                                                  .used
                                                            : 0}
                                                        MB
                                                    </small>
                                                    <small>2GB</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="progress-bar--text">
                                            <span className="dot red"></span>
                                            Visitors
                                        </div>
                                        <div className="progress-bar--element">
                                            <div class="bar positive">
                                                <span>
                                                    <small>
                                                        {Object.keys(resources)
                                                            .length !== 0
                                                            ? resources.visitor
                                                                  .used
                                                            : 0}
                                                    </small>
                                                    <small>20000</small>
                                                </span>
                                            </div>
                                            <div
                                                class="bar negative"
                                                style={{
                                                    width: `${
                                                        Object.keys(resources)
                                                            .length !== 0
                                                            ? 100 -
                                                              (resources.visitor
                                                                  .used /
                                                                  20000) *
                                                                  100
                                                            : 100
                                                    }%`,
                                                }}
                                            >
                                                <span>
                                                    <small>
                                                        {Object.keys(resources)
                                                            .length !== 0
                                                            ? resources.visitor
                                                                  .used
                                                            : 0}
                                                    </small>
                                                    <small>20000</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn--container">
                                <div class="stage-env-main dropdown">
                                    {/* <button
                                        type="button"
                                        class="site-environment site-env-carrot-icon btn-bionic dropdown-toggle btn btn-primary mb-2">
                                        Site Environment
                                    </button> */}
                                    <Dropdown className="stage-env-main ">
                                        <Dropdown.Toggle
                                            className="site-env-carrot-icon pt-2 bionic-btn"
                                            id="dropdown-basic"
                                        >
                                            {`Site Environment`}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                disabled={
                                                    parent.status !== "active"
                                                        ? "disabled"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    this.environmentChange(
                                                        parent.domain_name
                                                    );
                                                }}
                                            >
                                                Live Environment
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                disabled={
                                                    staging.status !== "active"
                                                        ? "disabled"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    this.environmentChange(
                                                        staging.domain_name
                                                    );
                                                }}
                                            >
                                                Staging Environment
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <button
                                    type="button"
                                    class="w-100 btn-bionic submenu-oneclick-login-icon ml-0 btn btn-primary mt-2"
                                    onClick={() =>
                                        this.props.dispatch(
                                            WordpressLoginAction.wordpressLogin(
                                                container.identity
                                            )
                                        )
                                    }
                                >
                                    <div
                                        alt="wordpresswhite"
                                        class="one-click-svg"
                                    >
                                        <img
                                            src={wpIcon}
                                            className="wp-icon"
                                            alt="wpIcon"
                                        />
                                    </div>
                                    WP Admin
                                </button>
                            </div>
                        </div>
                    </TemplateHalf>
                </div>
                <TemplateHalf>
                    <div className="card-blue mt-5 mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Site Information</span>
                        </div>
                        <div className="card-blue--content site_information">
                            <div className="content-wrapper border-col">
                                <div className="content-col">
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">Name:</span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
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
                                                                        site_info.name
                                                                    }
                                                                </p>
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <span>
                                                            {site_info.name}
                                                        </span>
                                                    </OverlayTrigger>
                                                    <Button
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                site_info.name
                                                            )
                                                        }
                                                        type="text"
                                                        className="no-btn"
                                                    >
                                                        <img
                                                            className="icon-copy copy ml-2"
                                                            src={copyIcon}
                                                            alt="copyIcon"
                                                        />
                                                    </Button>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">Plan:</span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
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
                                                                        site_info.plan_name
                                                                    }
                                                                </p>
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                site_info.plan_name
                                                            }
                                                        </span>
                                                    </OverlayTrigger>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-row last-row">
                                        <div className="content-label">
                                            <span class="font-14">
                                                Created:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                {TimeStampHelper.standardDateFormat(
                                                    site_info.created
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-col">
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">
                                                Datacenter:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
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
                                                                        site_info
                                                                            .data_center
                                                                            .location
                                                                    }
                                                                </p>
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                site_info
                                                                    .data_center
                                                                    .location
                                                            }
                                                        </span>
                                                    </OverlayTrigger>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-row">
                                        <div className="content-label">
                                            <span class="font-14">
                                                Php Version:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                <div className="copy-text-wrap">
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
                                                                        site_info.php_version
                                                                    }
                                                                </p>
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                site_info.php_version
                                                            }
                                                        </span>
                                                    </OverlayTrigger>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inner-row last-row">
                                        <div className="content-label">
                                            <span class="font-14">
                                                WP Version:
                                            </span>
                                        </div>
                                        <div className="content-data">
                                            <span className="font-14 light-txt-color cp-align">
                                                -
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-blue mt-5-mobo mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Domain Management</span>
                            <span>
                                <img
                                    className="card-header-icon"
                                    src={settingIcon}
                                    alt="settingIcon"
                                    onClick={() =>
                                        this.setState({ show: true })
                                    }
                                />
                            </span>
                        </div>
                        <div className="card-blue--content p-adj">
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-field--wrapper mb-2">
                                        <div className="tf-text">
                                            <span className="font-14 f-adj">
                                                Domain:
                                            </span>
                                        </div>
                                        <div className="tf-field">
                                            <form
                                                method="POST"
                                                onSubmit={this.handleSubmit}
                                            >
                                                <InputTextField
                                                    name="new_domain"
                                                    getChange={
                                                        this.handleChange
                                                    }
                                                    value={
                                                        this.state.form
                                                            .new_domain
                                                    }
                                                    label="-"
                                                    schema={DomainValidation}
                                                    error={this.state.error}
                                                />
                                                {/* <input
                                                    type="text"
                                                    className="form-control font-13 mr-2"
                                                    placeholder="Select/Add Domain"
                                                /> */}
                                                <button
                                                    className={`btn btn-primary btn-bionic px-4 ${
                                                        this.props.domain
                                                            .loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    type="submit"
                                                >
                                                    Add
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="text-field--wrapper mb-2">
                                        <div className="tf-text">
                                            <span className="font-14 f-adj">
                                                Primary Domain:
                                            </span>
                                        </div>
                                        <div className="tf-field">
                                            <select
                                                name="plan"
                                                id="plan"
                                                onChange={(e) =>
                                                    this.changePrimary(
                                                        e,
                                                        container.identity
                                                    )
                                                }
                                                class="form-control font-14 cursor-pointer  "
                                            >
                                                {domain_info.domains.map(
                                                    (item) => (
                                                        <option
                                                            value={
                                                                item.domain_name
                                                            }
                                                            selected={
                                                                item.primary
                                                                    ? true
                                                                    : false
                                                            }
                                                        >
                                                            {item.domain_name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-field--wrapper">
                                        <div className="tf-text">
                                            <span className="font-14 f-adj">
                                                IP Address:
                                            </span>
                                        </div>
                                        <div className="tf-field">
                                            <span className="font-14 light-txt-color cp-align">
                                                {ipAddress.map((ip) => {
                                                    return (
                                                        <>
                                                            <div className="copy-text-wrap">
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
                                                                                    ip
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {ip}
                                                                    </span>
                                                                </OverlayTrigger>
                                                                <Button
                                                                    onClick={() =>
                                                                        ClipBoardHelper.copy(
                                                                            ip
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
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TemplateHalf>
                <TemplateFull>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="card-blue mb-4">
                                <div className="card-blue--header">
                                    <span>Site Details</span>
                                </div>
                                <div className="card-blue--content site_information">
                                    <div className="content-wrapper border-col">
                                        <div className="content-col">
                                            <div className="inner-row flex-start">
                                                <div className="content-label">
                                                    <span class="font-14">
                                                        IP Address:
                                                    </span>
                                                </div>
                                                <div className="content-data">
                                                    <span className="font-14 light-txt-color cp-align">
                                                        {ipAddress.map((ip) => {
                                                            return (
                                                                <>
                                                                    <div className="copy-text-wrap">
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
                                                                                            ip
                                                                                        }
                                                                                    </p>
                                                                                </Tooltip>
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    ip
                                                                                }
                                                                            </span>
                                                                        </OverlayTrigger>
                                                                        <Button
                                                                            onClick={() =>
                                                                                ClipBoardHelper.copy(
                                                                                    ip
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
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="inner-row">
                                                <div className="content-label">
                                                    <span class="font-14">
                                                        Location:
                                                    </span>
                                                </div>
                                                <div className="content-data">
                                                    <span className="font-14 light-txt-color cp-align">
                                                        <div className="copy-text-wrap">
                                                            {site_detail.location ? (
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
                                                                                    site_detail.location
                                                                                }
                                                                            </p>
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            site_detail.location
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
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
                                                        Path:
                                                    </span>
                                                </div>
                                                <div className="content-data">
                                                    <span className="font-14 light-txt-color cp-align">
                                                        <div className="copy-text-wrap">
                                                            {site_detail.path ? (
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
                                                                                        site_detail.path
                                                                                    }
                                                                                </p>
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                site_detail.path
                                                                            }
                                                                        </span>
                                                                    </OverlayTrigger>
                                                                    <Button
                                                                        onClick={() =>
                                                                            ClipBoardHelper.copy(
                                                                                site_detail.path
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
                                                        Plugin key:
                                                    </span>
                                                </div>
                                                <div className="content-data">
                                                    <span className="font-14 light-txt-color cp-align">
                                                        <div className="copy-text-wrap">
                                                            {site_detail.plugin_api_key ? (
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
                                                                                        site_detail.plugin_api_key
                                                                                    }
                                                                                </p>
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                site_detail.plugin_api_key
                                                                            }
                                                                        </span>
                                                                    </OverlayTrigger>
                                                                    <Button
                                                                        onClick={() =>
                                                                            ClipBoardHelper.copy(
                                                                                site_detail.plugin_api_key
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
                                    <div className="row col-br">
                                        <div className="col-12 col-md-6"></div>
                                        <div className="col-12 col-md-6">
                                            <div className="row mb-3">
                                                <div className="col-12 text-right">
                                                    <button
                                                        className={`btn btn-primary btn-bionic w-btn ${
                                                            this.props
                                                                .plugin_reset
                                                                .loading
                                                                ? "loading"
                                                                : ""
                                                        }`}
                                                        onClick={
                                                            this
                                                                .resetKeyFunction
                                                        }
                                                    >
                                                        Reset API Key
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-blue mb-4">
                                <div className="card-blue--header">
                                    <span>Backups</span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="text-field--wrapper mb-4">
                                                <div className="tf-text">
                                                    <span className="font-14">
                                                        Created:
                                                    </span>
                                                </div>
                                                <div className="tf-field">
                                                    <select
                                                        name="backups"
                                                        id="backups"
                                                        class="form-control font-13 cursor-pointer"
                                                    >
                                                        {backups.map((item) => (
                                                            <option
                                                                value={item.id}
                                                                data-type={
                                                                    item.type
                                                                }
                                                                default=""
                                                            >
                                                                {BackupNameHelper(
                                                                    item.name
                                                                )}{" "}
                                                                - {item.type}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-right">
                                                    <button
                                                        className={`btn btn-primary btn-bionic w-btn w-adj ${
                                                            this.props.download
                                                                .loading
                                                                ? "loading"
                                                                : ""
                                                        }`}
                                                        onClick={(e) =>
                                                            this.downloadBackup(
                                                                container
                                                            )
                                                        }
                                                    >
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="card-blue mb-4 card-lg-adj">
                                <div className="card-blue--header">
                                    <span>Average Speed Insight</span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="row col-br mb-4">
                                        <div className="col-12 col-md-6">
                                            <span className="font-14 f-adj">
                                                Page Speed - Desktop
                                            </span>
                                            <div className="before-after--container">
                                                <div className="speed-ba">
                                                    <small>Before</small>
                                                    <span>
                                                        {
                                                            page_speed.desktop
                                                                .before_score
                                                        }
                                                    </span>
                                                </div>
                                                <div className="speed-icon">
                                                    <img
                                                        src="https://my.bionicwp.com/assets/img/Brands/bolt.gif"
                                                        alt="logo-icon"
                                                    />
                                                </div>
                                                <div className="speed-ba">
                                                    <small>after</small>
                                                    <span>
                                                        {
                                                            page_speed.desktop
                                                                .after_score
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span className="font-14 f-adj">
                                                Page Speed - Mobile
                                            </span>
                                            <div className="before-after--container">
                                                <div className="speed-ba">
                                                    <small>Before</small>
                                                    <span>
                                                        {
                                                            page_speed.mobile
                                                                .before_score
                                                        }
                                                    </span>
                                                </div>
                                                <div className="speed-icon">
                                                    <img
                                                        src="https://my.bionicwp.com/assets/img/Brands/bolt.gif"
                                                        alt="logo-icon"
                                                    />
                                                </div>
                                                <div className="speed-ba">
                                                    <small>after</small>
                                                    <span>
                                                        {
                                                            page_speed.mobile
                                                                .after_score
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-br mb-4">
                                        <div className="col-12 col-md-6">
                                            <span className="font-14 f-adj">
                                                Load Time - Desktop
                                            </span>
                                            <div className="before-after--container">
                                                <div className="speed-ba">
                                                    <small>Before</small>
                                                    {page_speed.desktop
                                                        .before_load_time ? (
                                                        <span>
                                                            {
                                                                page_speed
                                                                    .desktop
                                                                    .before_load_time
                                                            }
                                                            <sub>s</sub>
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <div className="speed-icon">
                                                    <img
                                                        src="https://my.bionicwp.com/assets/img/Brands/bolt.gif"
                                                        alt="logo-icon"
                                                    />
                                                </div>
                                                <div className="speed-ba">
                                                    <small>after</small>
                                                    {page_speed.desktop
                                                        .after_load_time ? (
                                                        <span>
                                                            {
                                                                page_speed
                                                                    .desktop
                                                                    .after_load_time
                                                            }
                                                            <sub>s</sub>
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span className="font-14 f-adj">
                                                Load Time - Mobile
                                            </span>
                                            <div className="before-after--container">
                                                <div className="speed-ba">
                                                    <small>Before</small>
                                                    {page_speed.mobile
                                                        .before_load_time ? (
                                                        <span>
                                                            {
                                                                page_speed
                                                                    .mobile
                                                                    .before_load_time
                                                            }
                                                            <sub>s</sub>
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <div className="speed-icon">
                                                    <img
                                                        src="https://my.bionicwp.com/assets/img/Brands/bolt.gif"
                                                        alt="logo-icon"
                                                    />
                                                </div>
                                                <div className="speed-ba">
                                                    <small>after</small>
                                                    {page_speed.mobile
                                                        .after_load_time ? (
                                                        <span>
                                                            {
                                                                page_speed
                                                                    .mobile
                                                                    .after_load_time
                                                            }
                                                            <sub>s</sub>
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6"></div>
                                        <div className="col-12 col-md-6">
                                            <button
                                                class={`btn btn-primary btn-bionic w-100 font-adj ${
                                                    this.props.nitroEnable
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                disabled={
                                                    page_speed.mobile
                                                        .before_load_time &&
                                                    !page_speed.mobile
                                                        .after_load_time
                                                        ? false
                                                        : true
                                                }
                                                onClick={(e) =>
                                                    this.nitroEnable(
                                                        container.identity
                                                    )
                                                }
                                            >
                                                Enable Website Speed
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TemplateFull>
                <TemplateFull>
                    <div className="row">
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
                                                                sftp.password ===
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
                                                    <span class="font-14">
                                                        Host:
                                                    </span>
                                                </div>
                                                <div className="content-data">
                                                    <span className="font-14 light-txt-color cp-align">
                                                        <div className="copy-text-wrap">
                                                            {sftp.host ? (
                                                                sftp.host ===
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
                                                    <span class="font-14">
                                                        Port:
                                                    </span>
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
                                                                            {
                                                                                sftp.port
                                                                            }
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
                                                        this.props
                                                            .regenerate_sftp
                                                            .loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        this.sftpGenerateFunction(
                                                            container.identity
                                                        )
                                                    }
                                                >
                                                    Regenerated SFTP's
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* If database exist display */}
                        {database.username ? (
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
                                                                {database.password ? (
                                                                    database.password ===
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
                                                                    "-"
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
                                                        className={`btn btn-primary btn-bionic w-btn ${
                                                            this.props
                                                                .database_login
                                                                .loading
                                                                ? "loading"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            this.clickPHPFunction(
                                                                container.identity
                                                            )
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
                        ) : null}

                        {/* Clear Cache */}
                        <div className="col-md-6">
                            <div className="card-blue mb-4 card-sm-adj">
                                <div className="card-blue--header">
                                    <span>Clear Cache</span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="text-btn--wrap">
                                        <div className="text-col">
                                            <span className="font-14 light-txt-color f-adj">
                                                <strong>Note: </strong>
                                                Changes not visible? <br></br>
                                                Click here to quickly purge the
                                                cache on your container.
                                                <br></br>
                                                Changes will take couple of
                                                seconds.
                                            </span>
                                        </div>
                                        <div className="btn-col">
                                            <React.Fragment>
                                                <Button
                                                    className={`btn btn-primary btn-bionic w-btn w-adj px-4 ${
                                                        this.props.clear_cache
                                                            .loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={(e) =>
                                                        this.clearCache(
                                                            container.identity
                                                        )
                                                    }
                                                >
                                                    Clear Cache
                                                </Button>
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Create Staging */}
                        {!staging.status && !parent.status ? (
                            <div className="col-md-6">
                                <div className="card-blue mb-4 card-sm-adj">
                                    <div className="card-blue--header">
                                        <span>Create Staging Site</span>
                                    </div>
                                    <div className="card-blue--content">
                                        <div className="text-btn--wrap">
                                            <div className="text-col">
                                                <span className="font-14 light-txt-color f-adj">
                                                    <strong>Note: </strong>
                                                    Changing something on live
                                                    site isn't a great idea,
                                                    please create staging site
                                                    and play with your change.
                                                    It helps to avoid
                                                    unneccassry down time on
                                                    live site.
                                                </span>
                                            </div>
                                            <div className="btn-col">
                                                <React.Fragment>
                                                    <Button
                                                        onClick={(e) =>
                                                            this.stagingCreateFunction(
                                                                container.identity
                                                            )
                                                        }
                                                        className={`btn btn-primary btn-bionic w-btn w-adj px-4 btn btn-primary ${
                                                            this.props
                                                                .create_staging
                                                                .loading
                                                                ? "loading"
                                                                : ""
                                                        }`}
                                                    >
                                                        Create Staging
                                                    </Button>
                                                </React.Fragment>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {/* Push live */}
                        {parent.status ? (
                            <div className="col-md-6">
                                <div className="card-blue mb-4 card-sm-adj">
                                    <div className="card-blue--header">
                                        <span>Push To Live</span>
                                    </div>
                                    <div className="card-blue--content">
                                        <div className="text-btn--wrap">
                                            <div className="text-col">
                                                <span className="font-14 light-txt-color  f-adj">
                                                    <strong>Note: </strong>
                                                    Push to live if you want to
                                                    sync your live site with
                                                    your staging site. All data
                                                    gets overwritten. If in
                                                    doubt, contact support.
                                                </span>
                                            </div>
                                            <div className="btn-col">
                                                <React.Fragment>
                                                    <Button
                                                        onClick={(e) =>
                                                            this.syncEnvironmentFunction(
                                                                container.identity
                                                            )
                                                        }
                                                        className={`btn btn-primary btn-bionic w-btn w-adj px-4 btn btn-primary ${
                                                            this.props
                                                                .create_staging
                                                                .loading
                                                                ? "loading"
                                                                : ""
                                                        }`}
                                                    >
                                                        Push Live
                                                    </Button>
                                                </React.Fragment>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {/* Delete Site */}
                        <div className="col-md-6">
                            <div className="card-blue mb-4 card-sm-adj">
                                <div className="card-blue--header">
                                    <span>Delete Site</span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="text-btn--wrap">
                                        <div className="text-col">
                                            <span className="font-14 light-txt-color  f-adj">
                                                <strong>Note: </strong>
                                                {Object.keys(parent).length !==
                                                0 ? (
                                                    <>
                                                        Please note this
                                                        operation is
                                                        irreversible and all
                                                        data would be deleted
                                                        immediately.
                                                    </>
                                                ) : (
                                                    <>
                                                        Click here to request
                                                        your site for deletion.
                                                        Please note this
                                                        operation is
                                                        irreversible and all
                                                        data would be deleted on
                                                        coming 4th.
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                        <div className="btn-col">
                                            {container.destroy_at ? (
                                                <React.Fragment>
                                                    <Button
                                                        className={`btn btn-bionic w-btn w-adj mt-4 pl-3 pr-3 ${
                                                            this.props
                                                                .delete_cancel
                                                                .loading
                                                                ? "loading"
                                                                : ""
                                                        }`}
                                                        onClick={(e) =>
                                                            this.deleteCancelReq(
                                                                container.identity
                                                            )
                                                        }
                                                    >
                                                        Cancel Delete
                                                    </Button>
                                                    <p className="text-danger font-14 mt-1">
                                                        {"Deletion Date: " +
                                                            TimeStampHelper.standardDateFormat(
                                                                container.destroy_at
                                                            )}
                                                    </p>
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment>
                                                    {Object.keys(parent)
                                                        .length !== 0 ? (
                                                        <Button
                                                            className={`mt-4 bg-delete btn-bionic w-btn w-adj px-4`}
                                                            onClick={(e) =>
                                                                this.stagingDelete(
                                                                    container.identity
                                                                )
                                                            }
                                                        >
                                                            Delete Staging
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            className={`mt-4 bg-delete btn-bionic w-btn w-adj px-4 ${
                                                                this.props
                                                                    .delete
                                                                    .loading
                                                                    ? "loading"
                                                                    : ""
                                                            }`}
                                                            onClick={(e) =>
                                                                this.deleteSite(
                                                                    container.identity
                                                                )
                                                            }
                                                        >
                                                            Delete Site
                                                        </Button>
                                                    )}
                                                </React.Fragment>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TemplateFull>

                {/* Miscellaneous */}
                <TemplateFull>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="main-title">Miscellaneous</h2>
                        </div>
                    </div>
                    <div className="row ">
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
                                                    <span class="font-14">
                                                        URL:
                                                    </span>
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
                                                        this.props
                                                            .regenerate_password
                                                            .loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        this.accessSharingGenerateFunc(
                                                            container.identity
                                                        )
                                                    }
                                                >
                                                    Regenerated Password
                                                </button>
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
                                                                container.identity
                                                            )
                                                        }
                                                    >
                                                        Regenerated Password
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postmark */}
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

                        {/* Addon Unlimted Edits */}
                        <div className="col-md-6">
                            <div className="card-blue mb-4 card-md-adj">
                                <div className="card-blue--header">
                                    <span>Addon Unlimited Edits</span>
                                </div>
                                <div className="card-blue--content">
                                    <div className="text-btn--wrap">
                                        <div className="text-col">
                                            <span className="font-14 light-txt-color f-adj">
                                                Deep App Level Support, we call
                                                it Unlimited Edits. If you want
                                                our team of passionate WP
                                                Engineers to make all your edits
                                                for you just check this box and
                                                get unlimited 30 min edits.
                                            </span>
                                        </div>
                                        <div className="btn-col">
                                            <React.Fragment>
                                                <Button
                                                    className={`btn btn-primary btn-bionic w-btn w-adj px-4 ${
                                                        this.props.addon.loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={(e) =>
                                                        this.ToggleUnlimitedEdits(
                                                            container.identity,
                                                            site_addons[
                                                                "Unlimited Edits"
                                                            ]
                                                        )
                                                    }
                                                >
                                                    {site_addons[
                                                        "Unlimited Edits"
                                                    ] &&
                                                    site_addons[
                                                        "Unlimited Edits"
                                                    ].status === false
                                                        ? "Enable"
                                                        : "Disable"}
                                                </Button>
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Clone */}
                        {site_info.data_center.cloud_provider.code === "PA" ? (
                            <div className="col-md-6">
                                <div className="card-blue mb-4 card-md-adj">
                                    <div className="card-blue--header">
                                        <span>Clone</span>
                                    </div>
                                    <div className="card-blue--content">
                                        <div className="row col-br align-items-center">
                                            <div className="col-12 col-md-12">
                                                <SiteCloneForm
                                                    dispatch={
                                                        this.props.dispatch
                                                    }
                                                    identity={
                                                        container.identity
                                                    }
                                                    siteCloneForm={
                                                        this.props.siteCloneForm
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </TemplateFull>

                {/* Wordpress */}
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
                                                this.wordpressRefreshFunction(
                                                    container.identity
                                                )
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
                                                                                .loading
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
                                                                                "wp_core",
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
                                                this.wordpressRefreshFunction(
                                                    container.identity
                                                )
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
                                                this.wordpressRefreshFunction(
                                                    container.identity
                                                )
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
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    dialogClassName="modal-90w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Domains
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div
                            className="form-container domain-form-container"
                            id="registration-form"
                        >
                            <div className="domain-modal-scrollable">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="mb-1 domain-list-text modal-title">
                                            Domain List:
                                        </span>
                                        <span class="mb-1 domain-list-text modal-title float-right make-primary-text">
                                            Delete
                                        </span>
                                    </div>
                                </div>
                                {domain_info.domains.map((item) => {
                                    return (
                                        <div class="no-gutters  row">
                                            <div class="col-lg-8 col-7">
                                                <div class="domain-list domain-status-badge">
                                                    {item.domain_name}
                                                    {item.primary ? (
                                                        <span class="badge badge-primary ml-2">
                                                            Primary
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-lg-4 d-flex justify-content-center col-2">
                                                {item.primary === true ||
                                                item.staging === true ? null : (
                                                    <span className="domain-trash-icon">
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            delay={{
                                                                show: 250,
                                                                hide: 150,
                                                            }}
                                                            overlay={
                                                                renderTooltipDeleteIcon
                                                            }
                                                        >
                                                            <Button
                                                                onClick={(e) =>
                                                                    this.domainDelete(
                                                                        container.identity,
                                                                        item.domain_name
                                                                    )
                                                                }
                                                                className={`domain-trash-button ${
                                                                    this.props
                                                                        .site_detail
                                                                        .loading
                                                                        ? "loading"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    focusable="false"
                                                                    data-prefix="fas"
                                                                    data-icon="trash-alt"
                                                                    class="svg-inline--fa fa-trash-alt fa-w-14 "
                                                                    role="img"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 448 512"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"
                                                                    ></path>
                                                                </svg>
                                                            </Button>
                                                        </OverlayTrigger>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

function mapStateToProps(store) {
    return {
        site_detail: store.siteV3.sitedetailV3,
        backups: store.site.backup.backupList.backup_list,
        domain: store.PostDomainReducer,
        plugin_reset: store.site.feature.pluginReset,
        download: store.siteV2.backupV2.backupDownloadV2,
        regenerate_sftp: store.site.feature.siteSftp,
        database_login: store.site.feature.phpLogin,
        clear_cache: store.site.operation.cacheAllClear,
        create_staging: store.staging.create,
        delete: store.site.site.delete,
        delete_cancel: store.site.site.deleteCancel,
        regenerate_password: store.site.feature.accessSharing,
        update: store.site.wordpress.update,
        nitroEnable: store.site.addon.nitroEnable,
        siteCloneForm: store.site.feature.siteCloneForm,
        addon: store.site.addon.toggle,
    };
}

export default connect(mapStateToProps)(SiteDetail);
