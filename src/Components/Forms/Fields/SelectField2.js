import React from "react";
import { Form } from "react-bootstrap";
class SelectField2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Form.Control
                    className="restore-select custom-select"
                    // readOnly
                    as="select"
                    defaultValue={this.props.defaultValue}
                    onClick={this.props.onClick}
                    disabled={this.props.disableSelect}
                >
                    {this.props.options}
                </Form.Control>
            </React.Fragment>
        );
    }
}

export default SelectField2;
