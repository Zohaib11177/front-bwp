import React, { Component } from "react";
class SearchField extends Component {
    render() {
        return (
            <input
                type="text"
                id={this.props.id}
                name={this.props.name}
                onChange={this.props.onChange}
                onPaste={this.props.onPaste}
                onKeyUp={this.props.onKeyUp}
                value={this.props.value}
                placeholder={this.props.placeholder}
                className={`form-control ${this.props.className}`}
                autoComplete="off"
            />
        );
    }
}

export default SearchField;
