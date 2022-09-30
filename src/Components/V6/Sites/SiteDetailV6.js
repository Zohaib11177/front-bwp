import React, { Component } from 'react';
import Configs from 'Configs';
import TemplateHalf from 'Templates/TemplateHalf';
import copyIcon from 'Assets/img/copy-icon.svg';
import linkIcon from 'Assets/img/link-icon.svg';
import 'Assets/css/V3/siteDetail.css';
import wpIcon from 'Assets/img/wp-icon-btn.svg';
import TemplateFull from 'Templates/TemplateFull';
import { connect } from 'react-redux';
// import { Row, Col, ListGroup, Button } from "react-bootstrap";
// import { newDesign } from 'Redux/V3/Sites/NewDesign/NewDesignAction';
import ClipBoardHelper from 'Helpers/ClipBoardHelper';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import PluginResetAction from 'Redux/V1/Sites/Features/PluginReset/PluginResetAction';
import { Button, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import SiteCloneFormV6 from 'Components/Forms/V6/SiteCloneFormV6';
import BackupComponentV6 from 'Components/V6/Sites/BackupComponentV6';
import SiteResourceComponentV6 from 'Components/V6/Sites/SiteResourceComponentV6';
import SiteDetailActionV6 from 'Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6';
import SiteDatabaseComponentV6 from 'Components/V6/Sites/SiteDatabaseComponentV6';
import SiteWordpressComponentV6 from 'Components/V6/Sites/SiteWordpressComponentV6';
import SitePagespeedComponentV6 from 'Components/V6/Sites/SitePagespeedComponentV6';
import SiteLoginActionV6 from 'Redux/V6/Sites/Site/SiteLogin/SiteLoginActionV6';
import AccessSharingComponentV6 from 'Components/V6/Sites/AccessSharingComponentV6';
import ClearCacheComponentV6 from 'Components/V6/Sites/ClearCacheComponentV6';
import DeleteSiteComponentV6 from 'Components/V6/Sites/DeleteSiteComponentV6';
import SiteStagingComponentV6 from 'Components/V6/Sites/SiteStagingComponentV6';
import UnlimitedEditsComponentV6 from 'Components/V6/Sites/UnlimitedEditsComponentV6';
import SiteDomainComponentV6 from 'Components/V6/Sites/SiteDomainComponentV6';
import SiteSftpComponentV6 from 'Components/V6/Sites/SiteSftpComponentV6';
import SitePostmarkComponentV6 from 'Components/V6/Sites/SitePostmarkComponentV6';
import PushtoLiveComponentV6 from 'Components/V6/Sites/PushtoLiveComponentV6';
import SitePutActionV6 from 'Redux/V6/Sites/SiteOtp/Put/SitePutActionV6';
import SiteOtpGetActionV6 from 'Redux/V6/Sites/SiteOtp/Get/SiteGetActionV6';
import TemplateSmall from 'Templates/TemplateSmall';
import SiteVersionActionV6 from 'Redux/V6/Sites/SiteVersion/Put/SitePutActionV6';
import Confirmation from 'Helpers/ConfirmationHelper';
import SiteCustomerDetailActionV6 from 'Redux/V6/Sites/Site/SiteCustomerDetail/SiteCustomerDetailActionV6';

class SiteDetail extends Component {
    componentDidMount() {
        const host = this.props.match.params.host;
        this.props.dispatch(SiteCustomerDetailActionV6.siteCustomerDetail(host));
        this.props.dispatch(SiteDetailActionV6.siteDetail(host));
        this.props.dispatch(SiteOtpGetActionV6.siteGet(host));
    }

    resetKeyFunction = () => {
        const host = this.props.match.params.host;
        this.props.dispatch(PluginResetAction.pluginReset(host));
    };

    environmentChange = (domain) => {
        var url = window.location.href;
        // eslint-disable-next-line
        url = url.replace(/\/[^\/]*$/, '/' + domain);
        window.location.href = url;
    };

    generateOTPHandler = () => {
        const host = this.props.match.params.host;
        this.props.dispatch(SitePutActionV6.sitePut(host));
    };

    siteVersionChange = (e) => {
        const host = this.props.match.params.host;
        const value = e.target.value;
        Confirmation(
            this.props.dispatch,
            SiteVersionActionV6.sitePut({ host, value }),
            'Site version PHP version will be changed'
        );
    };

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        const customer_details = this.props.customer_details;
        const createdat = customer_details?.name ? new Date(customer_details?.created_at) : null;
        const created_date = createdat?.getDate() +" "+ monthNames[createdat?.getMonth()] +" "+ createdat?.getFullYear()
        console.log(created_date, "000000000000000000000000000000")
        const {
            site_detail,
            site_info,
            container,
            staging,
            parent,
            tags,
            site_addons,
        } = this.props.site_detail_v6;

        const ipAddress =
            site_detail.ip_address !== null
                ? site_detail.ip_address.split('-')
                : [];
        const host = this.props.match.params.host;
        const siteOtp = this.props.siteOtpList;
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        return (
            <>
                <div className="brb-1">
                    <TemplateHalf>
                        <div className="site-detail--icon-text--wrapper">
                            <div className="sd--icon img-avatar">
                            {portal_settings?.name ?  <img
                                        src={ site_detail.screen_shot
                                            ? site_detail.screen_shot :`https://static.vecteezy.com/system/resources/previews/001/198/020/non_2x/grid-globe-png.png`
                                        }
                                        className="logo-site"
                                        alt=""
                                    /> :
                                           <img
                                           src={
                                            site_detail.screen_shot
                                            ? site_detail.screen_shot
                                                   : `${Configs.public_url}/assets/img/General/wp-bold_1.png`
                                           }
                                           className="logo-site"
                                           alt=""
                                       />
                                        }
                                {/* <img
                                    src={
                                        site_detail.screen_shot
                                            ? site_detail.screen_shot
                                            : `${Configs.public_url}/assets/img/General/wp-bold_1.png`
                                    }
                                    className="logo-site"
                                    alt=""
                                /> */}
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
                                                    '_blank'
                                                )
                                            }>
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
                                            <div class="">
                                                <span
                                                    class={`badge badge-primary bg-${item.name} mr-1`}>
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                        {Object.keys(staging).length > 0 ? (
                                            <span
                                                class={`badge badge-primary bg-delete mr-1`}>
                                                staging
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <TemplateSmall
                                            loading={
                                                this.props.siteOtpListLoading
                                            }>
                                            OTP :{' '}
                                            {siteOtp.otp.otp
                                                ? siteOtp.otp.otp
                                                : null}
                                            {!siteOtp.otp.otp ? (
                                                <button
                                                    onClick={
                                                        this.generateOTPHandler
                                                    }
                                                    className="btn btn-bionic">
                                                    Generate OTP
                                                </button>
                                            ) : null}
                                        </TemplateSmall>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`progress-bar--wrapper`}>
                            <SiteResourceComponentV6
                                host={this.props.match.params.host}
                            />
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
                                            id="dropdown-basic">
                                            {`Site Environment`}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                disabled={
                                                    parent.status !== 'active'
                                                        ? 'disabled'
                                                        : ''
                                                }
                                                onClick={() => {
                                                    this.environmentChange(
                                                        parent.domain_name
                                                    );
                                                }}>
                                                Live Environment
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                disabled={
                                                    staging.status !== 'active'
                                                        ? 'disabled'
                                                        : ''
                                                }
                                                onClick={() => {
                                                    this.environmentChange(
                                                        staging.domain_name
                                                    );
                                                }}>
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
                                            SiteLoginActionV6.siteLogin(host)
                                        )
                                    }>
                                    <div
                                        alt="wordpresswhite"
                                        class="one-click-svg">
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
                                                        }>
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
                                                        className="no-btn">
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
                                                        }>
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
                                                        }>
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
                                            {site_info.data_center
                                                .provider_name &&
                                            site_info.data_center
                                                .provider_name === 'PA' ? (
                                                <select
                                                    name="php_version"
                                                    className="form-control font-13 cursor-pointer"
                                                    onChange={
                                                        this.siteVersionChange
                                                    }
                                                    defaultValue={
                                                        site_info.php_version
                                                    }>
                                                    <option value={'7.4'}>
                                                        7.4
                                                    </option>
                                                    <option value={'8.0'}>
                                                        8.0
                                                    </option>
                                                    <option value={'8.1'}>
                                                        8.1
                                                    </option>
                                                </select>
                                            ) : (
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
                                                            }>
                                                            <span>
                                                                {
                                                                    site_info.php_version
                                                                }
                                                            </span>
                                                        </OverlayTrigger>
                                                    </div>
                                                </span>
                                            )}
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
                                                {site_info.wp_version
                                                    ? site_info.wp_version
                                                    : '-'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SiteDomainComponentV6
                        host={this.props.match.params.host}
                    />
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
                                                                            }>
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
                                                                            className="no-btn">
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
                                                                    }>
                                                                    <span>
                                                                        {
                                                                            site_detail.location
                                                                        }
                                                                    </span>
                                                                </OverlayTrigger>
                                                            ) : (
                                                                '-'
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
                                                                        }>
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
                                                                        className="no-btn">
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
                                                                '-'
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
                                                                        }>
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
                                                                        className="no-btn">
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
                                                                '-'
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
                                                                ? 'loading'
                                                                : ''
                                                        }`}
                                                        onClick={
                                                            this
                                                                .resetKeyFunction
                                                        }
                                                        disabled={true}
                                                        title={
                                                            'This feature is currently unavailable'
                                                        }>
                                                        Reset API Key
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <BackupComponentV6
                                host={this.props.match.params.host}
                                container={container}
                            />
                        </div>
                        <SitePagespeedComponentV6
                            host={this.props.match.params.host}
                        />
                    </div>
                </TemplateFull>
                <TemplateFull>
                    <div className="row">
                        <SiteSftpComponentV6
                            host={this.props.match.params.host}
                        />

                        {/* If database exist display */}
                        <SiteDatabaseComponentV6
                            host={this.props.match.params.host}
                        />
                        {/* Clear Cache */}
                        <ClearCacheComponentV6
                            host={this.props.match.params.host}
                        />

                        {/* Create Staging */}
                        {!staging.status && !parent.status ? (
                            <SiteStagingComponentV6
                                host={this.props.match.params.host}
                            />
                        ) : null}

                        {/* Push live */}
                        <PushtoLiveComponentV6
                            host={this.props.match.params.host}
                        />

                        {/* Delete Site */}
                        <DeleteSiteComponentV6
                            host={this.props.match.params.host}
                        />
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
                        <AccessSharingComponentV6
                            host={this.props.match.params.host}
                            />
                        {/* Postmark */}
                        <SitePostmarkComponentV6 />
                        {/* Addon Unlimted Edits */}
                        <UnlimitedEditsComponentV6
                            host={this.props.match.params.host}
                            site_addons={site_addons}
                        />
                        {/* Clone */}
                        {site_info.data_center.cloud_provider.code === 'PA' ? (
                            <div className="col-md-6">
                                <div className="card-blue mb-4 card-md-adj">
                                    <div className="card-blue--header">
                                        <span>Clone</span>
                                    </div>
                                    <div className="card-blue--content">
                                        <div className="row col-br align-items-center">
                                            <div className="col-12 col-md-12">
                                                <SiteCloneFormV6
                                                    dispatch={
                                                        this.props.dispatch
                                                    }
                                                    host={
                                                        this.props.match.params
                                                            .host
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
                        {customer_details?.name === "" ? null :
                      <>  <div className="col-md-6">
                                <div className="card-blue mb-4 card-md-adj">
                                    <div className="card-blue--header">
                                        <span>Customer Details</span>
                                    </div>
                                    <div className="card-blue--content">
                                        <div className="row col-br align-items-center">
                                            <div className="col-md-6 border-right">
                                                <div className='row pt-1 pb-2' >
                                                    <div className='col-12' >
                                                    <p className='font-14' >Name : <span className='color-grey' >{customer_details?.name}</span></p>
                                                    </div>
                                                </div>
                                                <div className='row pt-1 pb-2' >
                                                    <div className='col-12' >
                                                    <p className='font-14' >Email : <span className='color-grey' >{customer_details?.email}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ">
                                                <div className='row pt-1 pb-2' >
                                                    <div className='col-12' >
                                                    <p className='font-14' >Created at : <span className='color-grey' >{created_date}</span></p>
                                                    </div>
                                                </div>
                                                <div className='row pt-1 pb-2' >
                                                    <div className='col-12' >
                                                    <p className='font-14' >Status : <span className='color-grey' >{customer_details?.status}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </> }
                    </div>
                </TemplateFull>

                {/* Wordpress */}
                <SiteWordpressComponentV6
                    host={this.props.match.params.host}
                    container={container}
                />
            </>
        );
    }
}

function mapStateToProps(store) {
    return {
        
        customer_details: store.siteV6.siteV6.customer_detail.customer_details,
        site_detail_v6: store.siteV6.siteV6.detail,
        plugin_reset: store.site.feature.pluginReset,
        siteCloneForm: store.siteV6.featureV6.siteCloneForm,
        siteOtpList: store.siteOtp.list,
        siteOtpListLoading: store.siteOtp.list.loading,
    };
}

export default connect(mapStateToProps)(SiteDetail);
