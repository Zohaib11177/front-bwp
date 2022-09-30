import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import SiteRegionComponent from 'Components/Site/SiteCreate/SiteRegionComponent';
import SitePlanComponent from 'Components/Site/SiteCreate/SitePlanComponent';
import ErrorBusiness from 'Businesses/ErrorBusiness';
import { Button } from '@material-ui/core';
import SiteCloneFormAction from 'Redux/V1/Sites/Features/SiteCloneForm/SiteCloneFormAction';
import SiteCloneValidation from 'Validations/SiteCloneValidation';

class SiteCloneForm extends Component {
    state = {
        title: '',
        region: '',
        plan: '3',
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
            target.type === 'checkbox' ? target.checked : target.value;
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
    siteDataGet = (name, value, dataLocation = 'site') => {
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
            identity: this.props.identity,
        });
        SiteCloneValidation.validate(this.state, {
            abortEarly: false,
        })
            .then(() => {
                setTimeout(() => {
                    this.props.dispatch(
                        SiteCloneFormAction.siteClone(this.state)
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

        return (
            <React.Fragment>
                {/* <div className="page-header">Site Information</div> */}
                <div className="form-container" id="registration-form">
                    <Row>
                        <Col lg="6">
                            <InputTextField
                                name="title"
                                id="title"
                                label="WordPress Site Title"
                                getChange={this.handleChange}
                                value={this.state.title}
                                schema={SiteCloneValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SiteRegionComponent
                                dataGet={this.siteDataGet}
                                schema={SiteCloneValidation}
                                error={error}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <SitePlanComponent
                                dataGet={this.siteDataGet}
                                addonDataGet={this.siteDataGet}
                            />
                        </Col>
                        <Col lg="6" className="mt-2">
                            <Button
                                onClick={this.handleSubmit}
                                className={`btn btn-primary  bionic-btn btn-block ${
                                    this.props.siteCloneForm.loading
                                        ? 'loading'
                                        : ''
                                }`}
                                style={{
                                    backgroundColor: 'rgb(22, 101, 216)',
                                    textTransform: 'none',
                                }}>
                                Clone
                            </Button>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default SiteCloneForm;
