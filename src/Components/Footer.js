import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Configs from 'Configs';
import 'Assets/css/Responsive/Footer.css';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        // eslint-disable-next-line
        let url = 'javascript:void(Tawk_API.toggle())';
        const { portal_settings } = this.props.portalSettings;
        return (
            <React.Fragment>
                <Container fluid className="footer" id="footer">
                    <Container>
                        <Row className="no-gutters">
                            <Col sm={4} className="footer-logo">
                                <div>
                                    <a href="/dashboard">
                                        <img
                                            src={
                                                !portal_settings?.logo
                                                    ? `${Configs.public_url}/assets/img/Brands/bionic-logo.gif`
                                                    : portal_settings.logo
                                            }
                                            alt="footerlogo"
                                            className="footer-img"
                                        />
                                    </a>
                                </div>
                                <p>
                                    Premium WordPress hosting for <br />{' '}
                                    everyone, small or large
                                </p>
                            </Col>
                            <Col sm={8} className="footer-content">
                                <Row className="no-gutters">
                                    <Col sm={3} xs={6}>
                                        <div className="footer-title">
                                            Get Started
                                        </div>
                                        <ul className="list-unstyled footer-list mb-0">
                                            <li>
                                                <a href="/sites/launch">
                                                    Launch a Site
                                                </a>
                                            </li>
                                            {portal_settings?.name ? null : <li>
                                                <a
                                                    href="https://forms.monday.com/forms/embed/f7165cb08ae7bb2446aed46aaf929e81?r=use1"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    Migrate a Site
                                                </a>
                                            </li>}
                                            {/* {!portal_settings?.name ? (
                                                <li>
                                                    <a
                                                        href="https://www.bionicwp.com/web-hosting-affiliate-program/"
                                                        target="_">
                                                        Affiliate Program
                                                    </a>
                                                </li>
                                            ) : null} */}
                                        </ul>
                                    </Col>
                                    <Col sm={2} xs={6}>
                                        <div className="footer-title">
                                            Manage
                                        </div>
                                        <ul className="list-unstyled footer-list mb-0">
                                            <li>
                                                <a href="/sites">Sites</a>
                                            </li>
                                            {/* <li>
												<a href="/sites/launch">
													Updated
												</a>
											</li> */}
                                            <li>
                                                <a href="/profile">Account</a>
                                            </li>
                                        </ul>
                                    </Col>

                                    {!portal_settings?.name ? (
                                        <Col sm={3} xs={6}>
                                            <div className="footer-title">
                                                Help
                                            </div>
                                            <ul className="list-unstyled footer-list mb-0">
                                                <li>
                                                    <a href="mailto: support@bionicwp.com">
                                                        Open a Ticket
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.bionicwp.com/knowledge-base/"
                                                        target="_">
                                                        Help Docs
                                                    </a>
                                                </li>
                                                {/* <li>
                                                <a href={url}>Live Chat</a>
                                            </li> */}
                                            </ul>
                                        </Col>
                                    ) : null}
                                    <Col sm={4} xs={6}>
                                        <div className="footer-title">
                                            {!portal_settings?.name
                                                ? 'BionicWP'
                                                : portal_settings?.name}{' '}
                                            - Nerd Stats
                                        </div>
                                        <ul className="list-unstyled footer-list mb-0 nerd-stats-list">
                                            <li>
                                                <div className="version-released-text">
                                                    {' '}
                                                    Version Number:{' '}
                                                </div>
                                                <span>3.6.3</span>
                                            </li>
                                            <li>
                                                <div className="version-released-text">
                                                    {' '}
                                                    Released:
                                                </div>
                                                <span>
                                                    {' '}
                                                    30/06/2021 - 02:30 PM
                                                </span>
                                            </li>
                                            {!portal_settings?.name ? (
                                                <>
                                                    <li>
                                                        <a
                                                            href="https://app.getbeamer.com/bionicwp/en"
                                                            target="_">
                                                            {!portal_settings?.name
                                                                ? 'BionicWP'
                                                                : portal_settings.name}{' '}
                                                            Changelogs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://status.bionicwp.com"
                                                            target="_">
                                                            System Status
                                                        </a>
                                                    </li>
                                                </>
                                            ) : null}
                                            {/* <li>
                                                <a
                                                    href="https://app.getbeamer.com/bionicwp/en"
                                                    target="_">
                                                    {!portal_settings?.name ? "BionicWP" : portal_settings.name } Changelogs
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://status.bionicwp.com"
                                                    target="_">
                                                    System Status
                                                </a>
                                            </li> */}
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <ToastContainer />
                </Container>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        Auth: state.login,
        alert: state.systemAlerts.list,
        portalSettings: state.portalSettingsV6.list,
    };
}

export default connect(mapStateToProps)(Footer);
