import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import StripeCreateAction from 'Redux/V6/Stripe/Create/StripeCreateAction';
import 'Assets/css/Responsive/WhiteLabel.css';
// import ErrorBusiness from "Businesses/ErrorBusiness";
// import { ReactSVG } from "react-svg";
// import Configs from "Configs";
class StripeFormV6 extends Component {
    state = {
        modal_show: false,
        form: {
            stripe_key: '',
            stripe_secret: '',
        },
        default_data: false,
        pictures: [],
        error_clear: false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(StripeCreateAction.StripeCreate(this.state.form));
    };

    handleChange = (event) => {
        const { form } = this.state;
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
        console.log(this.state.form);
    };
    componentDidUpdate() {
        const { form, default_data } = this.state;
        if (default_data === false && this.props.detail.success) {
            form.stripe_key = this.props.detail.white_label.stripe_key;
            form.stripe_secret = this.props.detail.white_label.stripe_secret;
            this.setState({
                form,
                default_data: this.props.detail.white_label.loading,
            });
        }
    }
    render() {
        const { create } = this.props;
        // {console.log(this.props.detail,"0000000000")}
        // {console.log(this.props.detail?.white_label.stripe_key,"0000000000")}

        return (
            <Form
                onSubmit={this.handleSubmit}
                className="white-label-form-main">
                <div className="form-container mt-0 box" id="registration-form">
                    <h3>Stripe</h3>
                    <hr className="white-label-divider" />

                    <Row>
                        <Col lg="6">
                            <InputTextField
                                // required
                                name="stripe_key"
                                id="stripe_key"
                                getChange={this.handleChange}
                                value={this.state.form.stripe_key}
                                label="Stripe Key"
                                // schema={WhiteLabelValidation}
                                // error={this.state.error}
                                // maxLength="0"
                                required={true}
                            />
                        </Col>
                        <Col lg="6">
                            <InputTextField
                                name="stripe_secret"
                                id="stripe_secret"
                                getChange={this.handleChange}
                                value={this.state.form.stripe_secret}
                                label="Stripe Secret"
                                // maxLength="100"
                                // schema={WhiteLabelValidation}
                                required={true}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12" className="text-right" xs={12}>
                            <Button
                                type="submit"
                                className={`updatebtn bionic-btn ${
                                    create.loading ? 'loading' : ''
                                }`}
                                // className={`updatebtn bionic-btn `}
                            >
                                Submit
                            </Button>{' '}
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

export default StripeFormV6;
