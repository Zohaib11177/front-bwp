import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import TemplateMain from "Templates/TemplateMain";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import QueryParamsHelper from "Helpers/QueryParamsHelper";
import StagingRenewalAction from "Redux/V1/Staging/StagingRenewal/StagingRenewalAction";
import TimeStampHelper from "Helpers/TimeStampHelper";

class StagingRenewalComponent extends Component {
    componentDidMount() {
        const query = QueryParamsHelper.queryParams() || {};
        this.props.dispatch(StagingRenewalAction.stagingRenewal(query.token));
    }
    render() {
        const query = QueryParamsHelper.queryGet() || {};
        const { success } = this.props.stagingRenewal;
        return (
            <TemplateMain>
                {" "}
                <div className="box mt-5 mb-4">
                    <div className="staging-renewal">
                        <Row>
                            {" "}
                            <Col md={3}></Col>
                            <Col md={6}>
                                {success ? (
                                    <React.Fragment>
                                        <ReactSVG
                                            title="Login"
                                            src={`${Configs.public_url}/assets/img/General/website.svg`}
                                            alt="wordpresswhite"
                                            className="update-all-business-wp-icon mb-4"
                                        />
                                        <h5>
                                            Thank you extending the expiry of
                                            your staging site
                                        </h5>
                                        <p>
                                            Your staging site for {query.domain}{" "}
                                            has been extended. The expiry date
                                            has now been moved to{" "}
                                            {TimeStampHelper.standardDateFormat(
                                                query.date
                                            )}
                                            .
                                        </p>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <img
                                            id="loading-image"
                                            src={`${Configs.public_url}/assets/img/Brands/bolt.gif`}
                                            alt="Bionic Thunder"
                                        />{" "}
                                        <br />
                                        Processing...
                                    </React.Fragment>
                                )}
                            </Col>
                        </Row>{" "}
                    </div>
                </div>
            </TemplateMain>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        stagingRenewal: state.staging.renewal,
    };
};

export default connect(mapStateToProps)(StagingRenewalComponent);
