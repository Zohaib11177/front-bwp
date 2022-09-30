import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SiteLaunchTextField from 'Components/Forms/Fields/SiteLaunchTextField';
import SiteLaunchValidationV6 from 'Validations/SiteLaunchValidationV6';
import SiteRegionComponentV3 from 'Components/V3/Site/SiteCreate/SiteRegionComponentV3';
import { connect } from 'react-redux';
// import SiteDomainActionV6 from "Redux/V6/Sites/Site/SiteDomain/SiteDomainActionV6";
// import SiteDatabaseComponent from "Components/Site/SiteCreate/SiteDatabaseComponent";
// import SiteCloudProviderComponent from "Components/Site/SiteCreate/SiteCloudProviderComponent";
// import UsernameHelper from "Helpers/UsernameHelper";
// import PasswordHelper from "Helpers/PasswordHelper";

class SiteCreateFormV3 extends Component {
    state = {
        form: {
            // username: UsernameHelper.generateUserName(this.props.user.email),
            // password: PasswordHelper.generatePassword(12),
            domain: null,
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
    render() {
        const { form } = this.state;
        const { dataGet, error } = this.props;
        const domain_error = this.props.domain.err_mess;
        const domain_success = this.props.domain.success;
        const domain_loading = this.props.domain.loading;
        return (
            <React.Fragment>
                <div className="page-header">Site Information</div>
                <div className="box form-container" id="registration-form">
                    <div className="page-inner-header">
                        WordPress Information
                    </div>
                    <Row>
                        <Col lg="6">
                            <SiteLaunchTextField
                                name="domain"
                                id="domain"
                                label="Domain"
                                getChange={this.handleChange}
                                value={form.domain}
                                schema={SiteLaunchValidationV6}
                                error={error || domain_error}
                                domainError={domain_error}
                                domainSuccess={domain_success}
                                domainLoading={domain_loading}
                                dispatch={this.props.dispatch}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SiteRegionComponentV3
                                dataGet={dataGet}
                                schema={SiteLaunchValidationV6}
                                error={error}
                            />
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

export default connect(mapStateToProps)(SiteCreateFormV3);
