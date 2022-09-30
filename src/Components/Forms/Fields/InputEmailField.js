import React from "react";
import StringHelper from "Helpers/StringHelper";
import * as Yup from "yup";
import ErrorBusiness from "Businesses/ErrorBusiness";
class InputEmailField extends React.Component {
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
                    <input
                        type="email"
                        name={this.props.name}
                        id={this.props.id ? this.props.id : this.props.name}
                        placeholder=" "
                        onChange={this.validateField}
                        required={this.props.required ? true : false}
                    />
                    <label
                        htmlFor={
                            this.props.id ? this.props.id : this.props.name
                        }
                    >
                        {StringHelper.capitalize(
                            this.props.label
                                ? this.props.label
                                : this.props.name
                        )}
                    </label>
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

export default InputEmailField;
