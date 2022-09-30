import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import SslModal from "Components/Sites/Ssl/SslModal";
import { connect } from "react-redux";
// import DomainListAction from "Redux/V1/Domain/Get/DomainGetAction";
import Capitilize from "Helpers/CapitilizeHelper";
import TwoWordsHelper from "Helpers/TwoWordsHelper";
import "Assets/css/sitedetail.css";
import TextLimitHelper from "Helpers/TextLimitHelper";
import "Assets/css/Responsive/SiteDetailDomain.css";

class SiteCdnComponent extends Component {
    state = {
        ssl_modal: false,
    };

    // componentDidMount() {
    //     // this.props.dispatch(GetSslAction.getSsl(this.props.site.id));
    //     this.props.dispatch(
    //         DomainListAction.domainGet(this.props.site.container.identity)
    //     );
    // }

    sslToggleModal = () => {
        const { ssl_modal } = this.state;
        this.setState({
            ssl_modal: !ssl_modal,
        });
    };

    sslModal = () => {
        if (this.props.site.id || false) {
            return (
                <SslModal
                    show={this.state.ssl_modal}
                    onHide={this.sslToggleModal}
                    dis={this.props.dispatch}
                    identity={this.props.site.container.identity}
                    domainList={this.props.domain_list}
                    enableSslResponse={this.props.add_ssl}
                    sslRevokeResponse={this.props.sslRevoke}
                    sslRenew={this.props.sslRenew}
                />
            );
        }
    };

    render() {
        // const { get_ssl } = this.props;
        const domainPrimary = this.props.domain_list.domains.filter(
            (domain) => {
                return domain.primary === true;
            }
        );
        const getDomain = domainPrimary.map((domain) => {
            return (
                <React.Fragment>
                    <Col lg="2" md="3" xs="3">
                        <div className="update-title">Status</div>
                        <div className="update-desc width-max-content">
                            {domain.ssl_status === "in_active"
                                ? "In active"
                                : TwoWordsHelper.removeDash(
                                      Capitilize.capital(domain.ssl_status)
                                  )}
                        </div>
                    </Col>
                    <Col lg="3" md="3" xs="4">
                        <div className="update-title">Type</div>
                        <div className="update-desc width-max-content ">
                            Let's Encrypt
                        </div>
                    </Col>
                    <Col lg="4" md="6" xs="5">
                        <div className="update-title">Domain</div>
                        <div className="update-desc word-break">
                            {" "}
                            {TextLimitHelper.limit(domain.domain_name, 20)}
                        </div>
                    </Col>{" "}
                    <Col lg="3" xs="12" className="ssl-btn-col">
                        {" "}
                        <Button
                            className="btn bionic-btn updatebtn mt-4"
                            onClick={this.sslToggleModal}
                        >
                            SSL Setting
                        </Button>
                    </Col>
                </React.Fragment>
            );
        });
        return (
            <React.Fragment>
                {/* <div className="page-header">SSL</div> */}
                <div className="box">
                    <Row>
                        <Col lg="12">
                            <div className="page-header ml-0">
                                Let's Encrypt SSL
                            </div>
                        </Col>
                        {getDomain}
                    </Row>
                    {/* <Row>
						<Col md="5" className="text-right">
							<a href="/" className="btn btn-link cog-img">
								<ReactSVG
									src={`${Configs.public_url}/assets/img/iconfindercog.svg`}
									alt="gauge"
									className="d-none"
								/>
							</a>
						</Col>

						{get_ssl.ssl.status ? (
                                <Button
                                    className={`updatebtn  ${
                                        this.props.disable_ssl.loading
                                            ? "loading"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        this.props.dispatch(
                                            DisableSslAction.disableSsl(
                                                this.props.site.id
                                            )
                                        )
                                    }
                                >
                                    Disable SSL
                                </Button>
                            ) : (
                                <Button
                                    className="updatebtn"
                                    onClick={this.sslToggleModal}
                                >
                                    SSL Setting
                                </Button>
                            )}
					</Row> */}
                </div>
                {this.sslModal()}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        // get_ssl: state.GetSslReducer,
        add_ssl: state.PostSslReducer,
        disable_ssl: state.DisableSsl,
        domain_list: state.domainList,
        sslRevoke: state.sslRevoke,
        sslRenew: state.sslRenew,
    };
}
export default connect(mapStateToProps)(SiteCdnComponent);
