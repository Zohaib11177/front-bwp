import React from "react";
import StringHelper from "Helpers/StringHelper";
import * as Yup from "yup";
// import { Button } from "react-bootstrap";

class UploadFileField extends React.Component {
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
        return (
            <React.Fragment>
                <div
                    className={`field form-field mb-0 mt-2 ${
                        this.state.error ? "is-invalid error-input" : ""
                    }`}
                >
                    <input
                        type="file"
                        name={this.props.name}
                        id={this.props.id ? this.props.id : this.props.name}
                        placeholder=" "
                        value={this.props.value}
                        onChange={this.validateField}
                        required={
                            this.props.required !== undefined
                                ? this.props.required
                                : true
                        }
                        disabled={this.props.disabled ? true : false}
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
                {this.state.error ? (
                    <p className="text-danger validation-message text-right  domain-error">
                        {this.state.error}
                    </p>
                ) : null}
            </React.Fragment>
        );
    }
}

export default UploadFileField;
