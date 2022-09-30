import React, { Component } from 'react';
import { Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import InputPasswordField from 'Components/Forms/Fields/InputPasswordField';
import SiteRegionComponent from 'Components/Site/SiteCreate/SiteRegionComponent';
import SiteDatabaseComponent from 'Components/Site/SiteCreate/SiteDatabaseComponent';
// import SiteCloudProviderComponent from 'Components/Site/SiteCreate/SiteCloudProviderComponent';
import MigrationValidation from 'Validations/MigrationValidation';
import InputTextBox from 'Components/Forms/Fields/InputTextBox';
import 'Assets/css/migrationform.css';

class MigrationForm extends Component {
    state = {
        form: {
            wp_admin_user: null,
            wp_admin_password: null,
            wp_admin_url: null,
            current_host_name: null,
            current_host_username: null,
            current_host_password: null,
            select_ftp_sftp: 2,
            port: null,
            host_location: null,
            mi_username: null,
            mi_password: null,
            multi_site: null,
            important_dir_root: null,
            agency_name: null,
            domain_url: null,
            domain_username: null,
            domain_password: null,
            hear_about_us: null,
            mi_directories: null,
            mi_staging: null,
            website_url: null,
            migration_notes: null,
        },
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
        // try {
        //     if (this.state.form.wp.important_dir_root === "0") {
        //         this.setState({
        //             form: {
        //                 ...form,
        //                 mi_directories: "",
        //             },
        //         });
        //     }
        // } catch {
        //     console.log("Error: migration form not there");
        // }
    };
    render() {
        const { form } = this.state;
        const { dataGet, error } = this.props;
        return (
            <React.Fragment>
                <Row>
                    {' '}
                    {/* <Col lg="4" className="mt-2">
                        <SiteCloudProviderComponent
                            dataGet={dataGet}
                            schema={MigrationValidation}
                            error={error}
                            addons={addons}
                        />
                    </Col> */}
                    <Col lg="6" className="mt-2">
                        <SiteRegionComponent
                            dataGet={dataGet}
                            schema={MigrationValidation}
                            error={error}
                        />
                    </Col>
                    <Col lg="6" className="mt-2">
                        <SiteDatabaseComponent
                            dataGet={dataGet}
                            schema={MigrationValidation}
                            error={error}
                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg="6">
                        <InputTextField
                            label={'Agency Name'}
                            name={'agency_name'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.agency_name}
                        />
                    </Col>
                    <Col lg="6">
                        <InputTextField
                            label={'Website URL'}
                            name={'website_url'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.website_url}
                        />
                    </Col>
                </Row>
                <hr />
                <Row className="mb-1">
                    <div className="col-auto">
                        <div className="page-inner-header">
                            WordPress Credentials
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={4} sm={4}>
                        <InputTextField
                            label={'WP Admin URL'}
                            name={'wp_admin_url'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.wp_admin_url}
                            schema={MigrationValidation}
                            error={error}
                        />
                    </Col>

                    <Col md={4} sm={4}>
                        <InputTextField
                            label={'WP Admin Username'}
                            name={'wp_admin_user'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.wp_admin_user}
                            schema={MigrationValidation}
                            error={error}
                        />
                    </Col>
                    <Col md={4} sm={4}>
                        <InputPasswordField
                            label={'WP Admin Password'}
                            name={'wp_admin_password'}
                            type={'password'}
                            getChange={this.handleChange}
                            value={form.wp_admin_password}
                            schema={MigrationValidation}
                            error={error}
                        />
                    </Col>
                </Row>
                <hr />
                <Row className="mb-1">
                    <div className="col-auto">
                        <div className="page-inner-header">Domain</div>
                    </div>
                </Row>
                <Row>
                    <Col md={4} sm={4}>
                        <InputTextField
                            label={'Domain Registrar'}
                            name={'domain_url'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.domain_url}
                            required={false}
                        />
                    </Col>

                    <Col md={4} sm={4}>
                        <InputTextField
                            label={'Username'}
                            name={'domain_username'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.domain_username}
                            required={false}
                        />
                    </Col>
                    <Col md={4} sm={4}>
                        <InputPasswordField
                            label={'Password'}
                            name={'domain_password'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.domain_password}
                            required={false}
                        />
                    </Col>
                </Row>
                <hr />
                <Row className="mb-1">
                    <div className="col-auto">
                        <div className="page-inner-header">
                            Current Hosting Credentials
                        </div>
                    </div>
                </Row>
                <Row className="row">
                    <Col md={4} sm={4}>
                        <InputTextField
                            label={'Hosting Provider'}
                            name={'current_host_name'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.current_host_name}
                            required={false}
                        />
                    </Col>

                    <Col md={4} sm={4}>
                        <InputTextField
                            label={'Username'}
                            name={'current_host_username'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.current_host_username}
                            required={false}
                        />
                    </Col>
                    <Col md={4} sm={4}>
                        <InputPasswordField
                            label={'Password'}
                            name={'current_host_password'}
                            type={'password'}
                            getChange={this.handleChange}
                            value={form.current_host_password}
                            required={false}
                        />
                    </Col>
                </Row>
                <hr />
                <Row className="mb-4">
                    <Col md={6} sm={10}>
                        <ToggleButtonGroup
                            id="port_selection"
                            name={'select_ftp_sftp'}
                            type="radio"
                            defaultValue={2}>
                            <ToggleButton
                                onChange={this.handleChange}
                                value={1}>
                                FTP
                            </ToggleButton>
                            <ToggleButton
                                onChange={this.handleChange}
                                value={2}>
                                sFTP
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={6}>
                        <InputTextField
                            id="port"
                            label={'Port'}
                            name={'port'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.port}
                            required={false}
                        />
                    </Col>
                    <Col md={6} sm={6}>
                        <InputTextField
                            label={'Host Location'}
                            name={'host_location'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.host_location}
                            required={false}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={6}>
                        <InputTextField
                            label={'Username'}
                            name={'mi_username'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.mi_username}
                            required={false}
                        />
                    </Col>
                    <Col md={6} sm={6}>
                        <InputPasswordField
                            label={'Password'}
                            name={'mi_password'}
                            type={'password'}
                            getChange={this.handleChange}
                            value={form.mi_password}
                            required={false}
                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6}>
                        <InputTextField
                            label={'How did you hear about us ?'}
                            name={'hear_about_us'}
                            type={'text'}
                            getChange={this.handleChange}
                            value={form.hear_about_us}
                            required={false}
                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <label className="migrate-text">
                            <input
                                name="mi_staging"
                                type="checkbox"
                                className="p-0 float-left mr-2"
                                value={form.mi_staging}
                                onChange={this.handleChange}
                            />{' '}
                            Would you like to put your site on our staging
                            enviroment first?
                        </label>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6} sm={10}>
                        <p className="migrate-text">
                            Is this site a multisite?
                        </p>
                        <label className="migrate-text">
                            <input
                                name={'multi_site'}
                                type="radio"
                                onChange={this.handleChange}
                                value={0}
                                defaultChecked
                            />{' '}
                            No{' '}
                        </label>
                        <label className="migrate-text">
                            <input
                                className="ml-3"
                                name={'multi_site'}
                                type="radio"
                                onChange={this.handleChange}
                                value={1}
                            />{' '}
                            Yes{' '}
                        </label>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12} sm={10}>
                        <p className="mb-0 migrate-text">
                            Are there any important directories in the root?
                        </p>
                        <p className="text-secondary sm-text migrate-text">
                            If you have any directories in the root that also
                            need to be moved over, let us know below
                        </p>
                        <label htmlFor="dir-no" className="migrate-text">
                            <input
                                id="dir-no"
                                name={'important_dir_root'}
                                type="radio"
                                onChange={this.handleChange}
                                value={0}
                                defaultChecked
                            />{' '}
                            No{' '}
                        </label>
                        <label htmlFor="dir-yes" className="migrate-text">
                            <input
                                id="dir-yes"
                                className="ml-3"
                                name={'important_dir_root'}
                                type="radio"
                                onChange={this.handleChange}
                                value={1}
                            />{' '}
                            Yes
                        </label>
                    </Col>
                </Row>
                <Row id="directories-container">
                    <Col md={6} sm={6}>
                        {form.important_dir_root === '1' ? (
                            <InputTextField
                                label={'Directories'}
                                name={'mi_directories'}
                                type={'text'}
                                getChange={this.handleChange}
                                value={form.mi_directories}
                            />
                        ) : (
                            ''
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <InputTextBox
                            placeholder="Notes"
                            name={'migration_notes'}
                            getChange={this.handleChange}
                            value={form.migration_notes}
                            maxLength="5000"
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default MigrationForm;
