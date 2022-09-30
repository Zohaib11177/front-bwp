import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import TextLimitHelper from "Helpers/TextLimitHelper";
import StringHelper from "Helpers/StringHelper";
// import { ReactSVG } from "react-svg";
import ErrorBusiness from "Businesses/ErrorBusiness";
import Messages from "Languages/En.lang";
import { connect } from "react-redux";
class AccountComponent extends Component {
    render() {
        const { user } = this.props;
        ErrorBusiness.errorBoundary([user]);
        const gravatarHash = StringHelper.stringToHash(user.email);
        const { portal_settings } = this.props.portalSettings
        return (
            <React.Fragment>
                <div className="page-header">{!portal_settings?.name ? "BionicWP" : portal_settings.name } Dashboard</div>
                <div className="box">
                    <div className="box-inner">
                        <div className="box-header">
                            <div className="dashboard-profile-image-parent">
                                <a href="/profile" className="username-link">
                                    {!user.profile_image ? (
                                        <img
                                            src={`https://www.gravatar.com/avatar/${gravatarHash}?d=`}
                                            alt="Profile"
                                            className="rounded-circle float-left"
                                        />
                                    ) : (
                                        <img
                                            src={user.profile_image}
                                            alt="Default profile"
                                            className="rounded-circle float-left dashboard-profile-image-child "
                                            // style={{
                                            //     maxWidth: "56px",
                                            //     maxHeight: "56px",
                                            // }}
                                        />
                                    )}
                                </a>
                            </div>
                            <div className="dashboard-welcome-text">
                                Hey{" "}
                                <a href="/profile" className="username-link">
                                    {" "}
                                    {TextLimitHelper.limit(user.first_name, 10)}
                                </a>
                                ,
                                <br />
                                Welcome back!
                            </div>
                        </div>

                        <div className="box-text">
                            {Messages.dashboard.account.text}
                        </div>
                    </div>
                    <a
                        className="btn visitbtn bionic-btn btn-block"
                        href="/profile"
                    >
                        Visit Your Account Page{" "}
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        portalSettings: state.portalSettingsV6.list
    };
}

export default connect(mapStateToProps)(AccountComponent);

