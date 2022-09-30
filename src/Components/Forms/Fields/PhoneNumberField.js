import React, { Component } from "react";

class PhoneNumberField extends Component {
    state = {
        error: null,
    };

    validateField = (e) => {
        if (this.props.schema) {
            Yup.reach(this.props.schema, this.props.name)
                .validate(e.target.value)
                .then(this.setState({ error: null }))
                .catch((err) => {
                    this.setState({ error: err.errors[0] });
                });
        }
        this.props.getChange(e);
    };

    render() {
        let errorSubmit = ErrorBusiness.errorCheck(
            this.props.error,
            this.props.name
        );
        return (
            <React.Fragment>
                <div
                    className={`field form-field mb-0 mt-2 ${
                        this.state.error || errorSubmit
                            ? "is-invalid error-input"
                            : ""
                    }`}
                >
                    <PhoneInput
                        initialValueFormat="national"
                        international={this.props.international}
                        // defaultCountry="RU"
                        value={this.props.value}
                        onChange={this.props.onChange}
                        placeholder={this.props.c}
                    />
                </div>
                {this.state.error || errorSubmit ? (
                    <p className="text-danger validation-message text-right domain-error">
                        {this.state.error}
                        {!this.state.error ? errorSubmit : ""}
                    </p>
                ) : null}
            </React.Fragment>
        );
    }
}

export default PhoneNumberField;
