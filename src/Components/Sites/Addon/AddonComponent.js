import React, { Component } from "react";
import Confirm from "Helpers/ConfirmationHelper";
import AddonBusiness from "Businesses/AddonBusiness";
import AddonListAction from "Redux/V1/Sites/Addons/Get/AddonGetAction";
import AddonToggleAction from "Redux/V1/Sites/Addons/AddonToggle/AddonToggleAction";
class AddonComponent extends Component {
    state = {
        addon_id: "",
    };
    componentDidMount() {
        this.props.dis(AddonListAction.addonGet(this.props.identity));
    }
    addonToggleFunction = (id, status, purchase, name, price) => {
        this.addonLoadingFunction(id);
        const data = {
            identity: this.props.identity,
            product_id: id,
            status: status,
        };

        if (purchase !== null) {
            this.props.dis(AddonToggleAction.addonToggle(data));
        } else {
            Confirm(
                this.props.dis,
                AddonToggleAction.addonToggle(data),

                `Please note that ${name} is a paid add on ($${price} per month) and would be billed monthly. <br><div class="note-text">Note: If you are using free site, you will not be charged</div>`
            );
        }
    };
    addonLoadingFunction = (id) => {
        this.setState({
            addon_id: id,
        });
    };
    render() {
        return (
            <React.Fragment>
                {AddonBusiness.generate(
                    this.props.list.addon_list,
                    this.props.list.loading,
                    this.addonToggleFunction,
                    this.state.addon_id
                )}
            </React.Fragment>
        );
    }
}

export default AddonComponent;
