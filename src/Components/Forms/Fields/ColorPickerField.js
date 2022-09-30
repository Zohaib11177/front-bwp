import React, { Component } from "react";

class ColorPickerField extends Component {
    render() {
        return (
            <React.Fragment>
                <input
                    className={this.props.className}
                    type="color"
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    required={this.props.required ? true : false}
                />
            </React.Fragment>
        );
    }
}

export default ColorPickerField;
