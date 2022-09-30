import React from "react";
import * as Yup from "yup";
import ErrorBusiness from "Businesses/ErrorBusiness";
class InputTextBox extends React.Component {
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
                    className={`field  mb-0 mt-2 ${
                        this.state.error || errorSubmit
                            ? "is-invalid error-input"
                            : ""
                    }`}
                >
                    {" "}
                    <textarea
                        name={this.props.name}
                        id={this.props.id ? this.props.id : this.props.name}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onInput={this.validateField}
                        required={this.props.required ? true : false}
                        disabled={this.props.disabled ? true : false}
                        maxLength={this.props.maxLength}
                        autoComplete="off"
                    ></textarea>
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

export default InputTextBox;
