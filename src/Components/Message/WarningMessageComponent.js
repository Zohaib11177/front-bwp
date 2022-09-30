import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Configs from "Configs";
class WarningMessageComponent extends Component {
    state = {
        state_condition: true,
    };
    closeMessageFunction = () => {
        this.setState({
            state_condition: false,
        });
        setTimeout(() => {
            if (this.props.condition) {
                this.setState({
                    state_condition: true,
                });
            }
        }, 60000);
    };
    render() {
        const {
            text,
            textColor,
            condition,
            button,
            buttonText,
            buttonLoading,
            action,
            key,
            closeButton,
        } = this.props;
        const { state_condition } = this.state;

        if (condition && state_condition)
            return (
                <section
                    key={key}
                    id="permission-denied-component"
                    className="box-shadow mb-1"
                >
                    <Row>
                        <Col md={12}>
                            <div id="permission-box">
                                <p
                                    style={{ color: textColor }}
                                    className="mb-0 font-bold ml-2 mr-2"
                                >
                                    {text}
                                </p>
                                {button ? (
                                    <Button
                                        type="sumbit"
                                        className={`bionic-btn bionic-btn-sm box-shadow resend-btn ${
                                            buttonLoading ? "loading" : ""
                                        }`}
                                        onClick={action}
                                    >
                                        {buttonText}
                                    </Button>
                                ) : null}{" "}
                                {closeButton ? (
                                    <span
                                        className="cancel-message"
                                        onClick={this.closeMessageFunction}
                                    >
                                        <img
                                            src={`${Configs.public_url}/assets/img/General/close.svg`}
                                            alt="close"
                                        />
                                    </span>
                                ) : null}
                            </div>
                        </Col>
                    </Row>
                </section>
            );
        else {
            return "";
        }
    }
}

export default WarningMessageComponent;
