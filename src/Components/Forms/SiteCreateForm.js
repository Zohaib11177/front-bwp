import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import SiteLaunchValidation from 'Validations/SiteLaunchValidation';
import SiteRegionComponent from 'Components/Site/SiteCreate/SiteRegionComponent';
// import SiteDatabaseComponent from "Components/Site/SiteCreate/SiteDatabaseComponent";
// import SiteCloudProviderComponent from "Components/Site/SiteCreate/SiteCloudProviderComponent";
// import UsernameHelper from "Helpers/UsernameHelper";
// import PasswordHelper from "Helpers/PasswordHelper";

class SiteCreateForm extends Component {
    state = {
        form: {
            // username: UsernameHelper.generateUserName(this.props.user.email),
            // password: PasswordHelper.generatePassword(12),
            title: null,
            // cloudProvider: null,
            // email: this.props.user.email,
        },
        state_run: true,
    };
    handleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
        this.props.dataGet(name, value);
    };
    componentDidUpdate = (nextProps) => {
        /* Getting site title with this function */
        if (nextProps.siteIdentity.success) {
            const { form } = this.state;
            if (form.title === null) {
                form.title = this.props.siteIdentity.identity.identity;
                this.setState({
                    form,
                });
            }
            /* state update for parent */
            if (this.state.state_run) {
                // this.props.dataGet("username", this.state.form.username);
                // this.props.dataGet("password", this.state.form.password);
                this.props.dataGet('title', this.state.form.title);
                // this.props.dataGet("email", this.state.form.email);
                this.setState({
                    state_run: false,
                });
            }
            /* state update for parent */
        }

        /* Getting site title with this function */
    };
    render() {
        const { form } = this.state;
        const { dataGet, error } = this.props;

        return (
            <React.Fragment>
                <div className="page-header">Site Information</div>
                <div className="box form-container" id="registration-form">
                    <div className="page-inner-header">
                        WordPress Information
                    </div>
                    <Row>
                        <Col lg="6">
                            <InputTextField
                                name="title"
                                id="title"
                                label="WordPress Site Title"
                                getChange={this.handleChange}
                                value={form.title}
                                schema={SiteLaunchValidation}
                                error={error}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SiteRegionComponent
                                dataGet={dataGet}
                                schema={SiteLaunchValidation}
                                error={error}
                            />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col lg="6">
                            <InputTextField
                                name="title"
                                id="title"
                                label="WordPress Site Title"
                                getChange={this.handleChange}
                                value={form.title}
                                schema={SiteLaunchValidation}
                                error={error}
                            />
                        </Col>
                        <Col lg="6" id="check-username">
                            <InputTextField
                                label="WordPress Admin Username"
                                id="username"
                                name="username"
                                getChange={this.handleChange}
                                value={form.username}
                                schema={SiteLaunchValidation}
                                error={error}
                            />
                        </Col>
                        <Col lg="6" className="wp-password-freeze">
                            <InputTextField
                                label="WordPress Admin Password"
                                id="password"
                                name="password"
                                getChange={this.handleChange}
                                value={form.password}
                                schema={SiteLaunchValidation}
                                error={error}
                                disabled
                            />
                        </Col>
                        <Col lg="6">
                            <InputTextField
                                label="WordPress Admin Email"
                                id="email"
                                name="email"
                                getChange={this.handleChange}
                                value={form.email}
                                schema={SiteLaunchValidation}
                                error={error}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {" "}
                        <Col lg="6" className="mt-2">
                            <SiteCloudProviderComponent
                                dataGet={dataGet}
                                schema={SiteLaunchValidation}
                                error={error}
                                addons={addons}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SiteRegionComponent
                                dataGet={dataGet}
                                schema={SiteLaunchValidation}
                                error={error}
                                cloudProvider={cloudProvider}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                        <SiteDatabaseComponent
                                dataGet={dataGet}
                                schema={SiteLaunchValidation}
                                error={error}
                            />
                        </Col>
                    </Row>
                    <Row>
                    GCP Link Section 
                    <Col className="col-lg-12 billing-box mt-2">
                            <p className="mb-0 ">
                                Can't decide where to launch your site please{" "}
                                <a target="_" href="http://www.gcping.com/">
                                    {" "}
                                    click here...{" "}
                                </a>
                            </p>
                        </Col>
                    GCP Link Section 
                    </Row> */}
                </div>
            </React.Fragment>
        );
    }
}

export default SiteCreateForm;
