import React, { Component } from 'react';
import TemplateHalf from 'Templates/TemplateHalf';
import PhpLoginAction from 'Redux/V1/Sites/Features/PHPLogin/PhpLoginAction';
import ClipBoardHelper from 'Helpers/ClipBoardHelper';
import SiteSftpAction from 'Redux/V1/Sites/Features/SiteSftp/SiteSftpAction';
import HideShow from 'Components/UI/HideShowComponent';
import 'Assets/css/sitedetail.css';
import { Link } from 'react-router-dom';
import Configs from 'Configs';
import 'Assets/css/Responsive/SiteDetailDashboard.css';
import { Row, Col } from 'react-bootstrap';
// import TemplateFull from "Templates/TemplateFull";

import { ReactSVG } from 'react-svg';
import ErrorBusiness from 'Businesses/ErrorBusiness';
class SFTPDatabaseComponent extends Component {
    loginDbFunction = (identity) => {
        this.props.dis(PhpLoginAction.phpLogin(identity));
    };
    sftpGenerateFunction = () => {
        const data = {
            identity: this.props.siteDetail.container.identity,
            host: this.props.host,
        };
        this.props.dis(SiteSftpAction.siteSftp(data));
    };
    render() {
        const { database, container, database_detail } = this.props.siteDetail;
        ErrorBusiness.errorBoundary([database]);
        return (
            <React.Fragment>
                <div className="sftp-responsive-main" id="sftp">
                    <div className="page-header">sFTP / SSH</div>
                    <div className={`box `}>
                        <TemplateHalf>
                            <div className="responsive-sftp-fields">
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        SFTP Username
                                    </div>
                                    <div className="sitedetais-desc">
                                        {this.props.sftps ? (
                                            <React.Fragment>
                                                <p className="float-left mr-3">
                                                    {this.props.sftps.username}
                                                </p>

                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            this.props.sftps
                                                                .username
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
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
                                    <div className="sitedetais-desc d-flex">
                                        {this.props.sftps ? (
                                            <React.Fragment>
                                                <HideShow
                                                    value={
                                                        this.props.sftps
                                                            .password
                                                    }
                                                />
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            this.props.sftps
                                                                .password
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
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
                                        {this.props.sftps ? (
                                            <React.Fragment>
                                                <p className="float-left mr-3">
                                                    {this.props.sftps.host
                                                        ? `sftp://${this.props.sftps.host}`
                                                        : ''}
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            `sftp://${this.props.sftps.host}`
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
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
                                        {this.props.sftps ? (
                                            <React.Fragment>
                                                <p className="float-left mr-3">
                                                    {this.props.sftps.port
                                                        ? `${this.props.sftps.port}`
                                                        : ''}
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            `${this.props.sftps.port}`
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
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
                            {container.cloud_provider !== 'PA' ? (
                                <div className="responsive-sftp-fields">
                                    <div className="sitedetais">
                                        <div className="sitedetais-title">
                                            Database
                                        </div>

                                        <div className="sitedetais-desc">
                                            <p className="float-left mr-3">
                                                {database_detail.name}
                                            </p>

                                            <button
                                                className="copyicon"
                                                onClick={() =>
                                                    ClipBoardHelper.copy(
                                                        database_detail.name
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
                                        <div className="sitedetais-title">
                                            Database Name
                                        </div>

                                        <div className="sitedetais-desc">
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
                                                <ReactSVG
                                                    src={`${Configs.public_url}/assets/img/General/copy.svg`}
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
                                                <ReactSVG
                                                    src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                    alt="copyimage"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="sitedetais">
                                        <div className="sitedetais-title">
                                            Database Password
                                        </div>
                                        <div className="sitedetais-desc d-flex">
                                            <HideShow
                                                value={database.password}
                                            />
                                            <button
                                                className="copyicon"
                                                onClick={() =>
                                                    ClipBoardHelper.copy(
                                                        database.password
                                                    )
                                                }>
                                                <ReactSVG
                                                    src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                    alt="copyimage"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </TemplateHalf>
                        <div className="sitedetais  ">
                            <Row>
                                <Col lg={6}>
                                    <button
                                        className={`btn bionic-btn btn-block bionic-bold    ${
                                            this.props.sftpLoading
                                                ? 'loading'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            this.sftpGenerateFunction(
                                                container.identity
                                            )
                                        }
                                        title={
                                            'Click to reset your sFTP password.'
                                        }>
                                        {this.props.sftps
                                            ? 'Regenerate sFTPs'
                                            : 'Generate sFTP'}
                                    </button>
                                </Col>
                                {container.cloud_provider !== 'PA' ? (
                                    <Col lg={3} md={6} sm={6} xs={6}>
                                        <button
                                            className="btn bionic-btn-outline reset-db"
                                            disabled>
                                            Reset DB
                                        </button>
                                    </Col>
                                ) : null}
                                {container.cloud_provider !== 'PA' ? (
                                    <Col lg={3} md={6} sm={6} xs={6}>
                                        <Link
                                            className={`btn bionic-btn-outline  login-db ${
                                                this.props.clickPHP.loading
                                                    ? 'loading'
                                                    : ''
                                            }`}
                                            rel="noopener noreferrer"
                                            onClick={() =>
                                                this.loginDbFunction(
                                                    container.identity
                                                )
                                            }>
                                            Login to DB
                                        </Link>
                                    </Col>
                                ) : null}
                            </Row>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SFTPDatabaseComponent;
