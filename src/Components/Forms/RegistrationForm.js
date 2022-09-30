import React, { Component } from "react";
// import FloatingLabel from "floating-label-react";a
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import RegistrationRadioField from "Components/Forms/Fields/RegistrationRadioField";
import InputTextField from "Components/Forms/Fields/InputTextField";
import "Assets/css/checkbox.css";
import "Assets/css/form.css";
import InputEmailField from "./Fields/InputEmailField";
import InputPasswordField from "./Fields/InputPasswordField";
import RegistrationValidation from "Validations/RegistrationValidation";
import ErrorBusiness from "Businesses/ErrorBusiness";
import { CountryList } from "Constants/CountryList.js";
import SelectField from "Components/Forms/Fields/SelectField";

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                persona_id: 1,
                promo_code: this.props.promoCode ? this.props.promoCode : "",
                phone: "",
                ip_address: "demo-id-address",
                country: "",
            },
            err: [],
            country_error: null,
        };
    }

    handleChange = (event) => {
        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            event.target.name
        );
        this.setState({
            error: errorUpdate,
        });

        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        RegistrationValidation.validate(this.state.form, {
            abortEarly: false,
        })

            .then(() => {
                this.props.register(this.state.form);
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };
    componentDidMount() {
        if (this.state.form.promo_code) {
            let promoContainer = document.getElementById(
                "promo_code_container"
            );
            promoContainer.style.display = "block";
        }
    }
    CountryList = () => {
        return CountryList.map((country) => {
            return (
                <option key={country.value} value={country.value}>
                    {country.name}
                </option>
            );
        });
    };
    render() {
        return (
            <div>
                {/* **********form main container*********  */}
                <div className="form-container ">
                    <div className="title-container">
                        <div className="form-title">Create your Account</div>
                        <div className="form-sub-title">
                            Your Bionic Optimized WordPress Site Awaits You.
                        </div>
                    </div>

                    <form
                        id="registration-form"
                        className="form-margin-top "
                        method="POST"
                        onSubmit={this.handleSubmit}
                    >
                        <Row>
                            <Col md={6}>
                                <InputTextField
                                    name="first_name"
                                    label="First Name"
                                    getChange={this.handleChange}
                                    value={this.state.form.first_name}
                                    schema={RegistrationValidation}
                                    error={this.state.error}
                                />
                            </Col>
                            <Col md={6}>
                                <InputTextField
                                    name="last_name"
                                    label="Last Name"
                                    getChange={this.handleChange}
                                    value={this.state.form.last_name}
                                    schema={RegistrationValidation}
                                    error={this.state.error}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputEmailField
                                    name="email"
                                    getChange={this.handleChange}
                                    value={this.state.form.email}
                                    schema={RegistrationValidation}
                                    error={this.state.error}
                                />
                            </Col>
                            <Col md={6}>
                                <InputPasswordField
                                    name="password"
                                    getChange={this.handleChange}
                                    value={this.state.form.password}
                                    schema={RegistrationValidation}
                                    error={this.state.error}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="country-drowpdown-main">
                                    <SelectField
                                        className={`${
                                            this.state.country_error
                                                ? "error-input text-danger"
                                                : ""
                                        }`}
                                        name="country"
                                        defaultOption={"Select a country"}
                                        value={this.state.form.country}
                                        options={this.CountryList()}
                                        onChange={this.handleChange}
                                        schema={RegistrationValidation}
                                        error={this.state.error}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <InputTextField
                                    name="phone"
                                    label="Phone Number"
                                    getChange={this.handleChange}
                                    value={this.state.form.phone}
                                    schema={RegistrationValidation}
                                    error={this.state.error}
                                />
                            </Col>
                        </Row>

                        <hr className="hr-align" />
                        {/* **********3rd Row*********  */}
                        <div className="persona-section">
                            <Row>
                                <Col md={6}>
                                    <div className="persona">
                                        <p> I would describe myself as: </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        {/* **********4rth row Registration Radio Field Component *********** */}
                        <div className="form cf ">
                            <div className="plan cf">
                                <Row>
                                    <RegistrationRadioField
                                        name="demo"
                                        data={{
                                            name: "persona_id",
                                            title: "Agency",
                                            value: 1,
                                            id: "free",
                                            image: "assets/img/RegisterPageIcons/agency.svg",
                                        }}
                                        checked={true}
                                        getChange={this.handleChange}
                                    />

                                    <RegistrationRadioField
                                        name="demo"
                                        data={{
                                            name: "persona_id",
                                            title: "E-Commerce",
                                            value: 2,
                                            id: "basic",
                                            image: "assets/img/RegisterPageIcons/ecommerce.svg",
                                        }}
                                        getChange={this.handleChange}
                                    />

                                    <RegistrationRadioField
                                        name="demo"
                                        data={{
                                            name: "persona_id",
                                            title: "Blogger",
                                            value: 3,
                                            id: "premium",
                                            image: "assets/img/RegisterPageIcons/blogger.svg",
                                        }}
                                        getChange={this.handleChange}
                                    />

                                    <RegistrationRadioField
                                        name="demo"
                                        data={{
                                            name: "persona_id",
                                            title: "Freelancer",
                                            value: 4,
                                            id: "free1",
                                            image: "assets/img/RegisterPageIcons/developer.svg",
                                        }}
                                        getChange={this.handleChange}
                                    />

                                    <RegistrationRadioField
                                        name="demo"
                                        data={{
                                            name: "persona_id",
                                            title: "Business",
                                            value: 5,
                                            id: "basic1",
                                            image: "assets/img/RegisterPageIcons/database-cash-alternate.svg",
                                        }}
                                        getChange={this.handleChange}
                                    />

                                    <RegistrationRadioField
                                        name="demo"
                                        data={{
                                            name: "persona_id",
                                            title: "Others",
                                            value: 6,
                                            id: "premium1",
                                            image: "assets/img/RegisterPageIcons/others.svg",
                                        }}
                                        getChange={this.handleChange}
                                    />
                                </Row>
                            </div>
                        </div>
                        <div className="persona-section mb-0">
                            <Row className="no-gutters">
                                <Col md={12}>
                                    <div
                                        className="persona mt-2"
                                        onClick={() =>
                                            (document.getElementById(
                                                "promo_code_container"
                                            ).style.display = "block")
                                        }
                                    >
                                        <p className="cursor-pointer bionic-link">
                                            Have a promo code ?
                                        </p>
                                    </div>
                                    <div id="promo_code_container">
                                        <InputTextField
                                            name="promo_code"
                                            label="Promo Code"
                                            getChange={this.handleChange}
                                            value={this.state.form.promo_code}
                                            required={false}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="persona-section mb-0">
                            <Row className="no-gutters">
                                <Col md={12}>
                                    <div id="terms" className="persona" style={{ width: '100%'}}>
                                        <input
                                            type="checkbox"
                                            required={true}
                                        /> By clicking "Get Started" you agree to <a href="https://www.bionicwp.com/wp-content/uploads/2021/08/BionicWP-Terms-Conditions-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer">terms & conditions</a>.
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Button
                            className={`btn btn-lg btn-block bionic-btn mt-2  ${
                                this.props.registration.loading ? "loading" : ""
                            }`}
                            type="submit"
                        >
                            Get Started
                        </Button>
                        <div className="form-footer-text">
                            <Col md={12}>
                                <div>
                                    Already on Bionicwp? Let us take you to{" "}
                                    <Link
                                        to="/login"
                                        className="bionic-bold bionic-link"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </Col>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;
