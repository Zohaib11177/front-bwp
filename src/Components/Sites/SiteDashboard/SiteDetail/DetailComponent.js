import React, { Component } from 'react';
import TemplateHalf from 'Templates/TemplateHalf';
import PluginResetAction from 'Redux/V1/Sites/Features/PluginReset/PluginResetAction';
import ClipBoardHelper from 'Helpers/ClipBoardHelper';
import HideShow from 'Components/UI/HideShowComponent';
import Configs from 'Configs';
import 'Assets/css/sitedetail.css';
import { ReactSVG } from 'react-svg';
import ErrorBusiness from 'Businesses/ErrorBusiness';

class DetailComponent extends Component {
    resetKeyFunction = () => {
        const host = this.props.host;
        this.props.dis(PluginResetAction.pluginReset(host));
    };
    render() {
        const { hosting } = this.props;
        const { basic_details, plugin_key } = this.props.detail;
        const { location } = basic_details;
        let ipAddress = basic_details.ip_address.split('-');
        ErrorBusiness.errorBoundary([basic_details, plugin_key]);
        return (
            <React.Fragment>
                <div className="site-detail-resp-main">
                    <div className="page-header ">Site Details</div>
                    <div className="box">
                        <TemplateHalf>
                            <div className="basic_details">
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Ip Address
                                    </div>
                                    <div className="sitedetais-desc">
                                        <p
                                            id="ip-address"
                                            className="float-left mr-3">
                                            {ipAddress[0]}{' '}
                                            <button
                                                className="copyicon"
                                                onClick={() =>
                                                    ClipBoardHelper.copy(
                                                        ipAddress[0]
                                                    )
                                                }>
                                                <ReactSVG
                                                    src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                    alt="copyimage"
                                                />
                                            </button>
                                            <br></br>
                                            {ipAddress[1]
                                                ? ipAddress[1]
                                                : ''}{' '}
                                            {ipAddress[1] ? (
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            ipAddress[1]
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            ) : (
                                                ''
                                            )}{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Location
                                    </div>
                                    <div className="sitedetais-desc">
                                        {location}
                                    </div>
                                </div>
                                {/* <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Server
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        {basic_details.server
                                            ? basic_details.server
                                            : 'N/A'}
                                    </div>
                                </div> */}
                            </div>

                            <div className="basic_details">
                                <div className="sitedetais">
                                    <div className="sitedetais-title">Path</div>
                                    <div className="sitedetais-desc">
                                        <p
                                            id="ip-address"
                                            className="float-left w-100">
                                            {basic_details.path}
                                        </p>
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Plugin Api Key
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        <HideShow
                                            value={
                                                this.props.pluginKeyResponse
                                                    .success
                                                    ? this.props
                                                          .pluginKeyResponse
                                                          .plugin_key
                                                    : plugin_key
                                            }
                                        />
                                        <button
                                            className="copyicon"
                                            onClick={() =>
                                                ClipBoardHelper.copy(
                                                    this.props.pluginKeyResponse
                                                        .success
                                                        ? this.props
                                                              .pluginKeyResponse
                                                              .plugin_key
                                                        : plugin_key
                                                )
                                            }>
                                            <ReactSVG
                                                src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                alt="copyimage"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <button
                                        className={`btn btn-block bionic-bold bionic-btn mt-4 ${
                                            this.props.pluginKeyResponse.loading
                                                ? 'loading'
                                                : ''
                                        }`}
                                        onClick={this.resetKeyFunction}
                                        disabled={
                                            hosting === 'nestify' ? true : false
                                        }
                                        title={
                                            hosting === 'nestify'
                                                ? 'Feature is not available in this site.'
                                                : 'Click to reset your plugin key.'
                                        }>
                                        Reset Api Key
                                    </button>
                                </div>
                            </div>
                        </TemplateHalf>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DetailComponent;
