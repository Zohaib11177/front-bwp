import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

class BadgeComponent extends Component {
    render() {
        return (
            <Link to={this.props.link} className={this.props.linkClass}>
                <Badge
                    className={`badge badge-text-color ${this.props.className}`}
                    style={{ backgroundColor: this.props.color }}
                >
                    {this.props.text}
                </Badge>
            </Link>
        );
    }
}

export default BadgeComponent;
