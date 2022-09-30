import React, { Component } from "react";
import WarningMessageComponent from "Components/Message/WarningMessageComponent";
import WarningMessage from "Constants/WarningMessage";
import WarningBusiness from "Businesses/WarningMessageBusiness";
import TimeStampHelper from "Helpers/TimeStampHelper";

class SiteDashboardMessageComponent extends Component {
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

    render() {
        const { siteDetail } = this.props;
        let list = [
            {
                text:
                    WarningMessage.staging_delete.text +
                    " " +
                    TimeStampHelper.standardDateFormat(
                        siteDetail.container.destroy_at
                    ),
                textColor: "#dc3545",
                condition: WarningBusiness.stagingDeleteDate(
                    siteDetail.site_type,
                    siteDetail.container.destroy_at
                ),
                button: false,
                buttonText: null,
                buttonLoading: null,
                action: null,
                closeButton: true,
            },
        ];
        return (
            <React.Fragment>{this.messageListFunction(list)}</React.Fragment>
        );
    }
}

export default SiteDashboardMessageComponent;
