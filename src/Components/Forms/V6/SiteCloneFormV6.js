import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SiteLaunchTextField from "Components/Forms/Fields/SiteLaunchTextField";
import SiteRegionComponentV3 from "Components/V3/Site/SiteCreate/SiteRegionComponentV3";
import SitePlanComponentV3 from "Components/V3/Site/SiteCreate/SitePlanComponentV3";
import ErrorBusiness from "Businesses/ErrorBusiness";
import { Button } from "@material-ui/core";
import SiteCloneFormActionV6 from "Redux/V6/Sites/Features/SiteCloneForm/SiteCloneFormActionV6";
import SiteCloneValidationV6 from "Validations/SiteCloneValidationV6";
import { connect } from "react-redux";

class SiteCloneFormV6 extends Component {
    state = {
        domain: "",
        region: "",
        plan: "3",
        product: [1, 2],
        state_run: true,
    };
    handleChange = (event) => {
        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            event.target.name
        );
        this.setState({
            error: errorUpdate,
        });
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
        // this.props.dataGet(name, value);
    };
    componentDidUpdate = (nextProps) => {
        // /* Getting site title with this function */
        // if (nextProps.siteIdentity.success) {
        //     const { form } = this.state;
        //     if (form.title === null) {
        //         form.title = this.props.siteIdentity.identity.identity;
        //         this.setState({
        //             form,
        //         });
        //     }
        //     /* state update for parent */
        //     if (this.state.state_run) {
        //         // this.props.dataGet("username", this.state.form.username);
        //         // this.props.dataGet("password", this.state.form.password);
        //         this.props.dataGet("title", this.state.form.title);
        //         // this.props.dataGet("email", this.state.form.email);
        //         this.setState({
        //             state_run: false,
        //         });
        //     }
        //     /* state update for parent */
        // }
        /* Getting site title with this function */
    };
    siteDataGet = (name, value, dataLocation = "site") => {
        const errorUpdate = ErrorBusiness.errorRemove(this.state.error, name);
        this.setState({
            error: errorUpdate,
        });

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            host: this.props.host,
        });
        SiteCloneValidationV6.validate(this.state, {
            abortEarly: false,
        })
            .then(() => {
                setTimeout(() => {
                    this.props.dispatch(
                        SiteCloneFormActionV6.siteClone(this.state)
                    );
                }, 500);
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };

    render() {
        // const { form } = this.state;
        const { error } = this.props;
        const domain_error = this.props.domain.err_mess;
        const domain_success = this.props.domain.success;
        const domain_loading = this.props.domain.loading;

        return (
            <React.Fragment>
                {/* <div className="page-header">Site Information</div> */}
                <div className="form-container" id="registration-form">
                    <Row>
                        <Col lg="6">
                            <SiteLaunchTextField
                                name="domain"
                                id="domain"
                                label="Domain"
                                getChange={this.handleChange}
                                value={this.state.domain}
                                schema={SiteCloneValidationV6}
                                error={error || domain_error}
                                domainError={domain_error}
                                domainSuccess={domain_success}
                                domainLoading={domain_loading}
                                dispatch={this.props.dispatch}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SiteRegionComponentV3
                                dataGet={this.siteDataGet}
                                schema={SiteCloneValidationV6}
                                error={error}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SitePlanComponentV3
                                dataGet={this.siteDataGet}
                                addonDataGet={this.siteDataGet}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <Button
                                onClick={this.handleSubmit}
                                className={`btn btn-primary  bionic-btn btn-block ${
                                    this.props.siteCloneForm.loading
                                        ? "loading"
                                        : ""
                                }`}
                                style={{
                                    backgroundColor: "rgb(22, 101, 216)",
                                    textTransform: "none",
                                }}
                                disabled={!domain_success}
                            >
                                Clone
                            </Button>
                            {!domain_success ? (
                                <p>
                                    <strong>Note:</strong> Please write your
                                    unique domain
                                </p>
                            ) : (
                                ""
                            )}
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        domain: state.siteV6.siteV6.domain,
    };
}

export default connect(mapStateToProps)(SiteCloneFormV6);
