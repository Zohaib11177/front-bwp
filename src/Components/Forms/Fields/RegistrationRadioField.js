import React from "react";
import { Col } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
class RegistrationRadioField extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Col md={6} sm={6} lg={6} xl={4}>
                <input
                    type="radio"
                    name={data.name}
                    value={data.value}
                    id={data.id}
                    onChange={this.props.getChange}
                    // checked={checked}
                    required={this.props.required}
                />
                <label htmlFor={data.id} id={data.id}>
                    <div className="float-left">
                        <ReactSVG
                            src={Configs.public_url + "/" + data.image}
                            className="agency-image"
                        />
                    </div>
                    {data.title}
                </label>
            </Col>
        );
    }
}

export default RegistrationRadioField;
