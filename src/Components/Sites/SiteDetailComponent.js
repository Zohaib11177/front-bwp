import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import TemplateHalf from 'Templates/TemplateHalf';
import TemplateThreeCols from 'Templates/TemplateThreeColumns';
import DashboardPerformanceComponent from 'Components/Dashboards/Ui/PerformanceComponent';
// import SpeedBeforeComponent from "Components/AvgSpeeds/SpeedBeforeComponent";
// import SpeedAfterComponent from "Components/AvgSpeeds/SpeedAfterComponent";
// import TemplateFull from "Templates/TemplateFull";
import DashboardTotalComponent from 'Components/Dashboards/Ui/TotalComponent';
import { connect } from 'react-redux';
import SiteDetailAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import ResetPluginAction from 'Redux/V1/Sites/Features/PluginReset/PluginResetAction';
import 'Assets/css/sitedetail.css';
import SiteSubMenuComponent from './Ui/SiteSubMenuComponent';
import Configs from 'Configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/fontawesome-free-solid';
import ClickPhpAction from 'Redux/V1/Sites/Features/PHPLogin/PhpLoginAction';
import ClipBoardHelper from 'Helpers/ClipBoardHelper';
import { Link } from 'react-router-dom';
import StandardFormatHelper from 'Helpers/StandardFormatHelper';
import AvgSpeedComponent from 'Components/AvgSpeeds/AvgSpeedComponent';
// import TemplateSideRight from "Templates/TemplateSidebarRight";
import AccessSharingAction from 'Redux/V1/Sites/Features/AccessSharing/AccessSharingAction';
import RoundUpHelper from 'Helpers/RoundUpHelper';
import StagingCreate from 'Components/Staging/StagingCreateComponent';
/**
 * @classdesc
 * ### Type: Class ###
 * @property {Text} Site_Domain Site Screenshot with Domain URL.
 * @property {Button} WP_Admin WP Admin button to Access WordPress Admin easily.
 * @property {Image} External_Link This link will redirect the user on live site.
 * @property {String_and_Integer} Site_Details In this Section included (IP Address, WP Username, Location, WP Password, Plugin Key and Reset API Key Button).
 * @property {Integer} Update_Details It is included (update available of WordPress, Theme & Plugin) also included file details (files scanned, malware found & total backups).
 * @property {String_and_Integer} SFTP_OR_SSH In this Section included (SFTP username, database name, sftp password, database uers, sftp host & database password) it is also included buttons of (Generate SFTP, Reset Database & Login to DB).
 * @property {Text} Average_Speed_Insights It is included Page Speed time (Before & After) and Load Time (Before & After) also have button (make these numbers Bionic).
 * @property {String_and_Integer} Access_Sharing_Details In this Section included (username, password and URL) and a simple button to see access sharing details.
 */
import MBToGbHelper from 'Helpers/MBToGBHelper';

import StagingCreate from 'Components/Staging/StagingCreateComponent';
class SiteDetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copySuccess: false,
            copySuccess1: false,
            copySuccess2: false,
            copySuccess3: false,
            copySuccess4: false,
            typeWp: 'password',
            typePK: 'password',
            typeDP: 'password',
            typeSP: 'password',
        };
        this.showHideWpPass = this.showHideWpPass.bind(this);
        this.showHidePluginKey = this.showHidePluginKey.bind(this);
        this.showHideDatabasePass = this.showHideDatabasePass.bind(this);
        this.showHideSftpPass = this.showHideSftpPass.bind(this);
    }
    showHideWpPass(e) {
        this.setState({
            typeWp: this.state.typeWp === 'input' ? 'password' : 'input',
        });
    }
    showHidePluginKey(e) {
        this.setState({
            typePK: this.state.typePK === 'input' ? 'password' : 'input',
        });
    }
    showHideDatabasePass(e) {
        this.setState({
            typeDP: this.state.typeDP === 'input' ? 'password' : 'input',
        });
    }
    showHideSftpPass(e) {
        this.setState({
            typeSP: this.state.typeSP === 'input' ? 'password' : 'input',
        });
    }
    componentWillMount = () => {
        const host = this.props.match.params.host;
        this.props.dispatch(SiteDetailAction.getSiteDetail(host));
    };

    resetKey = () => {
        const host = this.props.match.params.host;
        this.props.dispatch(ResetPluginAction.getReset(host));
    };

    // copyText = (text) => {
    // };

    // copyCodeToClipboard = () => {
    // 	const el = this.textArea;
    // 	const el2 = this.textArea;
    // 	el.select();
    // 	el2.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard1 = () => {
    // 	const el1 = this.textAreaWordpressPass;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess1: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess1: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard2 = () => {
    // 	const el1 = this.textAreaPluginKey;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess2: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess2: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard3 = () => {
    // 	const el1 = this.textAreaDatabasePass;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess3: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess3: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard4 = () => {
    // 	const el1 = this.textAreaSftpPass;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess4: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess4: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard5 = () => {
    // 	const el1 = this.textAreaSftpUser;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess5: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess5: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard6 = () => {
    // 	const el1 = this.textAreaDBName;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess6: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess6: false,
    // 		});
    // 	}, 2000);
    // };
    // copyCodeToClipboard7 = () => {
    // 	const el1 = this.textAreaDBUser;
    // 	el1.select();
    // 	document.execCommand("copy");
    // 	this.setState({ copySuccess7: true });
    // 	setTimeout(() => {
    // 		this.setState({
    // 			copySuccess7: false,
    // 		});
    // 	}, 2000);
    // };
    clickPHPFunction = (identity) => {
        this.props.dispatch(ClickPhpAction.clickPHP(identity));
    };

    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    render() {
        const {
            basic_details,
            // primary_domain,
            wordpress,
            database,
            sftps,
            plugin_key,
            security,
            // avg_insight,
            container,
            update,
            access_sharing,
        } = this.props.site_detail;

        return (
            <React.Fragment>
                <TemplateMain>
                    <SiteSubMenuComponent
                        identity={this.props.match.params.host}
                        active="dashboard"
                        site={this.props.site_detail}
                    />
                    <div className="site-page">
                        {/* <TemplateHalf>
                            <div className="site-screenshot d-flex align-items-center">
                                <img
                                    src={`${Configs.public_url}/assets/img/site-image.png`}
                                    alt=""
                                />
                                <div className="site-url">
                                    {primary_domain}
                                    <Button
                                        variant="link"
                                        className="pencil-icon"
                                        target="_blank"
                                        href={"http://" + primary_domain}
                                    >
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />
                                    </Button>
                                </div>
                            </div>

                            <div className="site-admin d-flex align-items-center justify-content-end">
                                <img
                                    src={`${Configs.public_url}/assets/img/cog-settings.png`}
                                    alt=""
                                    className="d-none"
                                />
                                <Button
                                    className={`wpadmin-btn ${
                                        this.props.quick_login_loading
                                            ? "loading"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        this.props.dispatch(
                                            SiteDetailAction.quickLogin(
                                                container.identity
                                            )
                                        )
                                    }
                                >
                                    <img
                                        src="../assets/img/Wordpress-white.png"
                                        alt=""
                                    />{" "}
                                    WP Admin
                                </Button>
                            </div>
                        </TemplateHalf> */}
                        <TemplateHalf>
                            <div>
                                <div className="page-header">Site Details</div>
                                <div className="box">
                                    <TemplateHalf>
                                        <div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Ip Address
                                                </div>
                                                <div className="sitedetais-desc">
                                                    <p
                                                        id="ip-address"
                                                        className="float-left mr-3">
                                                        {
                                                            basic_details.ip_address
                                                        }
                                                    </p>

                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                basic_details.ip_address
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Location
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {basic_details.location}
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Plugin Api Key
                                                </div>
                                                <div className="sitedetais-desc">
                                                    <input
                                                        type={this.state.typePK}
                                                        ref={(textarea) =>
                                                            (this.textAreaPluginKey =
                                                                textarea)
                                                        }
                                                        id="plugin-key"
                                                        className="copytextarea"
                                                        defaultValue={
                                                            this.props
                                                                .plugin_key
                                                                .success
                                                                ? this.props
                                                                      .plugin_key
                                                                      .plugin_key
                                                                : plugin_key
                                                        }
                                                        readOnly
                                                    />
                                                    <span
                                                        className={
                                                            this.state.typePK
                                                        }
                                                        onClick={
                                                            this
                                                                .showHidePluginKey
                                                        }>
                                                        {this.state.typePK ===
                                                        'input' ? (
                                                            <FontAwesomeIcon
                                                                icon={faEye}
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faEyeSlash
                                                                }
                                                            />
                                                        )}
                                                    </span>
                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                this.props
                                                                    .plugin_key
                                                                    .success
                                                                    ? this.props
                                                                          .plugin_key
                                                                          .plugin_key
                                                                    : plugin_key
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Wordpress Username
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {/* {wordpress.username} */}
                                                    <p
                                                        id="ip-address"
                                                        className="float-left mr-3">
                                                        {wordpress.username
                                                            .length <= 22
                                                            ? wordpress.username
                                                            : wordpress.username.substring(
                                                                  0,
                                                                  22
                                                              ) + '...'}
                                                    </p>

                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                wordpress.username
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Wordpress Password
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {/* {wordpress.password} */}

                                                    <input
                                                        className="copytextarea"
                                                        ref={(textarea) =>
                                                            (this.textAreaWordpressPass =
                                                                textarea)
                                                        }
                                                        defaultValue={
                                                            wordpress.password
                                                        }
                                                        type={this.state.typeWp}
                                                        readOnly
                                                    />

                                                    <span
                                                        className={
                                                            this.state.typeWp
                                                        }
                                                        onClick={
                                                            this.showHideWpPass
                                                        }>
                                                        {this.state.typeWp ===
                                                        'input' ? (
                                                            <FontAwesomeIcon
                                                                icon={faEye}
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faEyeSlash
                                                                }
                                                            />
                                                        )}
                                                    </span>
                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                wordpress.password
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <button
                                                    className={`btn resetbtn btn-block mt-4 ${
                                                        this.props.plugin_key
                                                            .loading
                                                            ? 'loading'
                                                            : ''
                                                    }`}
                                                    onClick={this.resetKey}>
                                                    Reset Api Key
                                                </button>
                                            </div>
                                        </div>
                                    </TemplateHalf>
                                </div>
                            </div>
                            <div>
                                <div className="page-header">
                                    Update Details
                                </div>
                                <div className="box snapshot">
                                    <div className="performance-title">
                                        Updates Available
                                    </div>
                                    <TemplateThreeCols>
                                        <DashboardPerformanceComponent
                                            image="../assets/img/Wordpress.png"
                                            number={update.core}
                                            redirect={`/sites/update/${this.props.match.params.host}`}
                                        />
                                        <DashboardPerformanceComponent
                                            image="../assets/img/theme2.png"
                                            number={update.themes}
                                            redirect={`/sites/update/${this.props.match.params.host}`}
                                        />
                                        <DashboardPerformanceComponent
                                            image="../assets/img/plugin4.png"
                                            number={update.plugins}
                                            redirect={`/sites/update/${this.props.match.params.host}`}
                                        />
                                    </TemplateThreeCols>

                                    <hr />

                                    <div className="performance-title">
                                        File Details
                                    </div>
                                    <TemplateThreeCols>
                                        <DashboardTotalComponent
                                            title="Files Scanned"
                                            image=""
                                            number={StandardFormatHelper.numberFormat(
                                                security.files_scanned
                                            )}
                                        />
                                        <DashboardTotalComponent
                                            title="Malware Found"
                                            image=""
                                            number={security.thread_blocked}
                                        />
                                        <DashboardTotalComponent
                                            title="Total Backups"
                                            image=""
                                            number={security.total_backups}
                                        />
                                    </TemplateThreeCols>
                                </div>
                            </div>
                        </TemplateHalf>
                        <TemplateHalf>
                            <div>
                                <div className="page-header">sFTP / SSH</div>
                                <div className="box">
                                    <TemplateHalf>
                                        <div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    SFTP Username
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {sftps ? (
                                                        <React.Fragment>
                                                            <p className="float-left mr-3">
                                                                {sftps.username}
                                                            </p>

                                                            <button
                                                                className="copyicon"
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        sftps.username
                                                                    )
                                                                }>
                                                                <img
                                                                    src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                    alt="copyimage"
                                                                />
                                                            </button>
                                                        </React.Fragment>
                                                    ) : (
                                                        'N/A'
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    SFTP Password
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {sftps ? (
                                                        //sftps[0].password
                                                        <React.Fragment>
                                                            <input
                                                                type={
                                                                    this.state
                                                                        .typeSP
                                                                }
                                                                ref={(
                                                                    textarea
                                                                ) =>
                                                                    (this.textAreaSftpPass =
                                                                        textarea)
                                                                }
                                                                className="copytextarea"
                                                                defaultValue={
                                                                    sftps.password
                                                                }
                                                                readOnly
                                                            />
                                                            <span
                                                                className={
                                                                    this.state
                                                                        .typeSP
                                                                }
                                                                onClick={
                                                                    this
                                                                        .showHideSftpPass
                                                                }>
                                                                {this.state
                                                                    .typeSP ===
                                                                'input' ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faEye
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faEyeSlash
                                                                        }
                                                                    />
                                                                )}
                                                            </span>
                                                            <button
                                                                className="copyicon"
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        sftps.password
                                                                    )
                                                                }>
                                                                <img
                                                                    src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                    alt="copyimage"
                                                                />
                                                            </button>
                                                        </React.Fragment>
                                                    ) : (
                                                        'N/A'
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    SFTP Host
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {sftps ? (
                                                        // `sftp://${sftps[0].host}:${sftps[0].port}`
                                                        <React.Fragment>
                                                            <p className="float-left mr-3">
                                                                {`sftp://${sftps.host}`}
                                                            </p>
                                                            <button
                                                                className="copyicon"
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        `sftp://${sftps.host}`
                                                                    )
                                                                }>
                                                                <img
                                                                    src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                    alt="copyimage"
                                                                />
                                                            </button>
                                                        </React.Fragment>
                                                    ) : (
                                                        'N/A'
                                                    )}
                                                </div>
                                            </div>

                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    SFTP Port
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {sftps ? (
                                                        // `sftp://${sftps[0].host}:${sftps[0].port}`
                                                        <React.Fragment>
                                                            <p className="float-left mr-3">
                                                                {`${sftps.port}`}
                                                            </p>
                                                            <button
                                                                className="copyicon"
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        `${sftps.port}`
                                                                    )
                                                                }>
                                                                <img
                                                                    src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                    alt="copyimage"
                                                                />
                                                            </button>
                                                        </React.Fragment>
                                                    ) : (
                                                        'N/A'
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Database
                                                </div>

                                                <div className="sitedetais-desc">
                                                    {/* {database.name} */}
                                                    <p className="float-left mr-3">
                                                        {
                                                            this.props
                                                                .site_detail
                                                                .database_detail
                                                                .name
                                                        }
                                                    </p>

                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                this.props
                                                                    .site_detail
                                                                    .database_detail
                                                                    .name
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Database Name
                                                </div>

                                                <div className="sitedetais-desc">
                                                    {/* {database.name} */}
                                                    <p className="float-left mr-3">
                                                        {database.name}
                                                    </p>

                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                database.name
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Database User
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {/* {database.username} */}
                                                    <p className="float-left mr-3">
                                                        {database.username}
                                                    </p>

                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                database.username
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Database Password
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {/* {database.password} */}
                                                    <input
                                                        type={this.state.typeDP}
                                                        ref={(textarea) =>
                                                            (this.textAreaDatabasePass =
                                                                textarea)
                                                        }
                                                        className="copytextarea"
                                                        defaultValue={
                                                            database.password
                                                        }
                                                        readOnly
                                                    />
                                                    <span
                                                        className={
                                                            this.state.typeDP
                                                        }
                                                        onClick={
                                                            this
                                                                .showHideDatabasePass
                                                        }>
                                                        {this.state.typeDP ===
                                                        'input' ? (
                                                            <FontAwesomeIcon
                                                                icon={faEye}
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faEyeSlash
                                                                }
                                                            />
                                                        )}
                                                    </span>
                                                    <button
                                                        className="copyicon"
                                                        onClick={() =>
                                                            ClipBoardHelper.copy(
                                                                database.password
                                                            )
                                                        }>
                                                        <img
                                                            src={`${Configs.public_url}/assets/img/copy.svg`}
                                                            alt="copyimage"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TemplateHalf>
                                    <div className="sitedetais">
                                        <TemplateHalf>
                                            <div>
                                                <button
                                                    className={`btn resetbtn  ${
                                                        this.props.sftp_loading
                                                            ? 'loading'
                                                            : ''
                                                    }`}
                                                    // disabled={
                                                    // 	sftps[0] ? true : false
                                                    // }
                                                    onClick={() =>
                                                        this.props.dispatch(
                                                            SiteDetailAction.postSftp(
                                                                container.identity
                                                            )
                                                        )
                                                    }>
                                                    {sftps[0] === true
                                                        ? 'Regenerate sFTP'
                                                        : 'Generate sFTP'}
                                                </button>
                                            </div>
                                            <div className="btn-Reset">
                                                <button
                                                    className="btn btn-outline-primary"
                                                    disabled>
                                                    Reset DB
                                                </button>
                                                <Link
                                                    className={`btn btn-outline-primary  ${
                                                        this.props.click_php
                                                            .loading
                                                            ? 'loading'
                                                            : ''
                                                    }`}
                                                    rel="noopener noreferrer"
                                                    onClick={() =>
                                                        this.clickPHPFunction(
                                                            container.identity
                                                        )
                                                    }>
                                                    Login to DB
                                                </Link>
                                            </div>
                                        </TemplateHalf>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="page-header refresh-icon-update">
                                    Avg. Speed Insights
                                    <Link
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Refresh">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="var(--main-color)"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                        </svg>{' '}
                                    </Link>
                                </div>
                                <div className="box ">
                                    <div className="speed mt-3">
                                        <Row>
                                            <Col sm={12}>
                                                <div className="speed-title">
                                                    Page Speed
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <SpeedBeforeComponent
                                                    title="Before"
                                                    number={
                                                        avg_insight
                                                            .page_speed_score
                                                            .value
                                                            ? RoundUpHelper.onedecimalplace(
                                                                  avg_insight
                                                                      .page_speed_score
                                                                      .value
                                                              )
                                                            : 0.0
                                                    }
                                                    class={
                                                        avg_insight
                                                            .page_speed_score
                                                            .color
                                                    }
                                                />
                                            </Col>

                                            <div className="speed-image">
                                                <img
                                                    src="../assets/img/speed-icon.svg"
                                                    alt="speed"
                                                />
                                            </div>

                                            <Col sm={6}>
                                                <SpeedAfterComponent
                                                    title="After"
                                                    number={
                                                        avg_insight
                                                            .speed_score_prediction
                                                            .value
                                                            ? RoundUpHelper.onedecimalplace(
                                                                  avg_insight
                                                                      .speed_score_prediction
                                                                      .value
                                                              )
                                                            : 0.0
                                                    }
                                                    class={
                                                        avg_insight
                                                            .speed_score_prediction
                                                            .color
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    </div>

                                    <hr />
                                    <div className="speed mt-5">
                                        <Row>
                                            <Col sm={12}>
                                                <div className="speed-title">
                                                    Load Time
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <SpeedBeforeComponent
                                                    title="Before"
                                                    number={
                                                        avg_insight
                                                            .fully_loaded_time
                                                            .value
                                                    }
                                                    second="s"
                                                    class={
                                                        avg_insight
                                                            .fully_loaded_time
                                                            .color
                                                    }
                                                />
                                            </Col>
                                            <div className="speed-image">
                                                <img
                                                    // src="../assets/img/speed-icon.svg"
                                                    alt="speed"
                                                />
                                            </div>
                                            <Col sm={6}>
                                                <SpeedAfterComponent
                                                    title="After"
                                                    number={
                                                        avg_insight
                                                            .loaded_time_prediction
                                                            .value
                                                    }
                                                    second="s"
                                                    class={
                                                        avg_insight
                                                            .loaded_time_prediction
                                                            .color
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <TemplateFull>
                                        <button
                                            className="btn btn-outline-primary btn-outline mt-5"
                                            disabled>
                                            Make these numbers Bionic?
                                        </button>
                                    </TemplateFull>
                                </div>{' '}
                                <AvgSpeedComponent avgSpeed={{}} />
                            </div>
                        </TemplateHalf>
                        {/* <TemplateFull> */}
                        <TemplateHalf>
                            <div>
                                <div className="page-header">
                                    Access Sharing Details
                                </div>
                                <div className="box">
                                    {/* <TemplateSideRight> */}
                                    <div>
                                        <div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    User
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {access_sharing[0] ? (
                                                        <React.Fragment>
                                                            <p className="float-left mr-3">
                                                                {
                                                                    access_sharing[0]
                                                                        .username
                                                                }
                                                            </p>

                                                            <button
                                                                className="copyicon"
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        access_sharing[0]
                                                                            .username
                                                                    )
                                                                }>
                                                                <img
                                                                    src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                    alt="copyimage"
                                                                />
                                                            </button>
                                                        </React.Fragment>
                                                    ) : (
                                                        '-'
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="sitedetais">
                                                <div className="sitedetais-title">
                                                    Password
                                                </div>
                                                <div className="sitedetais-desc">
                                                    {access_sharing[0] ? (
                                                        //sftps[0].password
                                                        <React.Fragment>
                                                            <input
                                                                type={
                                                                    this.state
                                                                        .typeSP
                                                                }
                                                                ref={(
                                                                    textarea
                                                                ) =>
                                                                    (this.textAreaSftpPass =
                                                                        textarea)
                                                                }
                                                                className="copytextarea"
                                                                value={
                                                                    this.props
                                                                        .access_sharing
                                                                        .success
                                                                        ? this
                                                                              .props
                                                                              .access_sharing
                                                                              .access_sharing
                                                                              .password
                                                                        : access_sharing[0]
                                                                              .password
                                                                }
                                                                readOnly
                                                            />
                                                            <span
                                                                className={
                                                                    this.state
                                                                        .typeSP
                                                                }
                                                                onClick={
                                                                    this
                                                                        .showHideSftpPass
                                                                }>
                                                                {this.state
                                                                    .typeSP ===
                                                                'input' ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faEye
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faEyeSlash
                                                                        }
                                                                    />
                                                                )}
                                                            </span>
                                                            <button
                                                                className="copyicon"
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        access_sharing[0]
                                                                            .password
                                                                    )
                                                                }>
                                                                <img
                                                                    src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                    alt="copyimage"
                                                                />
                                                            </button>
                                                        </React.Fragment>
                                                    ) : (
                                                        '-'
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sitedetais">
                                            <div className="sitedetais-title">
                                                URL
                                            </div>
                                            <div className="sitedetais-desc">
                                                {access_sharing[0] ? (
                                                    <React.Fragment>
                                                        <p className="float-left mr-3">
                                                            {
                                                                access_sharing[0]
                                                                    .url
                                                            }
                                                        </p>
                                                        <button
                                                            className="copyicon"
                                                            onClick={() =>
                                                                ClipBoardHelper.copy(
                                                                    `${access_sharing[0].url}`
                                                                )
                                                            }>
                                                            <img
                                                                src={`${Configs.public_url}/assets/img/copy.svg`}
                                                                alt="copyimage"
                                                            />
                                                        </button>
                                                    </React.Fragment>
                                                ) : (
                                                    '-'
                                                )}
                                            </div>
                                        </div>

                                        <Button
                                            className={`accesssharing-btn btn-block ${
                                                this.props.access_sharing
                                                    .loading
                                                    ? 'loading'
                                                    : ''
                                            }`}
                                            disabled={
                                                this.props.site_detail
                                                    .site_type !== 'staging'
                                                    ? false
                                                    : true
                                            }
                                            onClick={() =>
                                                this.props.dispatch(
                                                    AccessSharingAction.AccessSharingDetails(
                                                        container.identity,
                                                        this.props.match.params
                                                            .host
                                                    )
                                                )
                                            }>
                                            {' '}
                                            Access Sharing
                                        </Button>
                                    </div>

                                    {/* </TemplateSideRight> */}
                                </div>
                            </div>
                            <StagingCreate
                                dis={this.props.dispatch}
                                identity={container.identity}
                                stagingCreateResponse={this.props.stagingCreate}
                                siteDetail={this.props.site_detail}
                            />
                        </TemplateHalf>
                        {/* </TemplateFull> */}
                        <TemplateHalf>
                            <div>
                                <div className="page-header">Resources</div>
                                <div className="box snapshot">
                                    <div className="performance-title">
                                        Site Resources
                                    </div>
                                    <TemplateThreeCols>
                                        <DashboardTotalComponent
                                            title="Visitors"
                                            image=""
                                            number={StandardFormatHelper.numberFormat(
                                                this.props.resources_visitor
                                                    .used
                                            )}
                                        />
                                        <DashboardTotalComponent
                                            title="Bandwidth"
                                            image=""
                                            number={
                                                MBToGbHelper.convert(
                                                    this.props
                                                        .resources_bandwidth
                                                        .used !== undefined
                                                        ? this.props
                                                              .resources_bandwidth
                                                              .used
                                                        : 0
                                                ) + ' GB'
                                            }
                                        />

                                        <DashboardTotalComponent
                                            title="Disk"
                                            image=""
                                            number={
                                                MBToGbHelper.convert(
                                                    this.props.resources_disk
                                                        .used !== undefined
                                                        ? this.props
                                                              .resources_disk
                                                              .used
                                                        : 0
                                                ) + ' GB'
                                            }
                                        />
                                    </TemplateThreeCols>
                                </div>
                            </div>
                            <div></div>
                        </TemplateHalf>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        site_detail: state.SiteDetailReducer.site_detail,
        resources_visitor: state.SiteDetailReducer.visitor,
        resources_bandwidth: state.SiteDetailReducer.bandwidth,
        resources_disk: state.SiteDetailReducer.disk,
        quick_login_loading: state.SiteDetailReducer.quick_login_loading,
        sftp_loading: state.SiteDetailReducer.sftp_loading,
        plugin_key: state.resetPlugin,
        click_php: state.clickPHP,
        access_sharing: state.AccessSharingReducer,
        stagingCreate: state.staging.create,
    };
}

export default connect(mapStateToProps)(SiteDetailComponent);
