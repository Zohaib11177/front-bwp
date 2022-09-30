import React, { Component } from "react";
import { connect } from "react-redux";
import WarningMessageComponent from "Components/Message/WarningMessageComponent";
import AccVerificationResendAction from "Redux/V1/Auth/Verification/AccountVerificationResend/AccVerificationResendAction";
import "Assets/css/Responsive/WarningMessage.css";
class MessageComponent extends Component {
    messageListFunction = (list) => {
        return list.map((message, index) => {
            return (
                <WarningMessageComponent
                    key={index + 1}
                    text={message.text}
                    textColor={message.textColor}
                    condition={message.condition}
                    button={message.button}
                    buttonText={message.buttonText}
                    buttonLoading={message.buttonLoading}
                    action={message.action}
                />
            );
        });
    };
    render() {
        const acountEmailResendloading = this.props.accountEmailResend.loading;
        const userStatus = this.props.user.customer.status;
        const verificationSuccess = this.props.accountVerification.success;
        const accountVerificationCondition =
            userStatus === "pending" && !verificationSuccess ? true : false;
        let list = [
            {
                text: "Verify your account by clicking on the link sent to your email address. Didn't receive the email?",
                textColor: "#dc3545",
                condition: accountVerificationCondition,
                button: true,
                buttonText: "Click here to resend",
                buttonLoading: acountEmailResendloading,
                action: () =>
                    this.props.dispatch(
                        AccVerificationResendAction.accVerificationResend()
                    ),
            },
            {
                text: "Thank you for verifying your account.",
                textColor: "#18b543",
                condition: verificationSuccess,
                button: false,
                buttonText: "",
                buttonLoading: null,
                action: null,
            },
        ];
        return (
            <React.Fragment>{this.messageListFunction(list)}</React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.customer,
        accountEmailResend: state.auth.accVerificationResend,
        accountVerification: state.authV2.accountVerificationV2,
    };
};

export default connect(mapStateToProps)(MessageComponent);
