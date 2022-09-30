import React, { Component } from "react";
import WarningMessageComponent from "Components/Message/WarningMessageComponent";
import WarningMessage from "Constants/WarningMessage";
import WarningBusiness from "Businesses/WarningMessageBusiness";
class SiteCreateMessageComponent extends Component {
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
                    closeButton={message.closeButton}
                />
            );
        });
    };
    viewInvoiceFunction = () => {
        window.location.href = "/billing";
    };
    render() {
        const { cardList, cardModalFunction } = this.props;
        let list = [
            {
                text: WarningMessage.pending_invoice.text,
                textColor: "#dc3545",
                condition: WarningBusiness.invoicePending(cardList),
                button: true,
                buttonText: WarningMessage.pending_invoice.button,
                buttonLoading: null,
                action: this.viewInvoiceFunction,
                closeButton: true,
            },
            {
                text: WarningMessage.payment_method.text,
                textColor: "#212529",
                condition: WarningBusiness.paymentMethod(cardList),
                button: true,
                buttonText: WarningMessage.payment_method.button,
                buttonLoading: null,
                action: cardModalFunction,
                closeButton: true,
            },
        ];
        return (
            <React.Fragment>{this.messageListFunction(list)}</React.Fragment>
        );
    }
}

export default SiteCreateMessageComponent;
