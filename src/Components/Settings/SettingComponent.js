import React, { Component } from "react";
import TemplateMain from "Templates/TemplateMain";
import ProfileSubMenuComponent from "Components/UI/ProfileSubMenuComponent";
import { connect } from "react-redux";
import NerdModeComponent from "Components/Settings/NerdMode/NerdModeComponent";
import WhiteLabelToggleComponent from "Components/Settings/WhiteLabelComponent/WhiteLabelToggleComponent";
import TemplateHalf from "Templates/TemplateHalf";
import TemplateFull from "Templates/TemplateFull";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
import "Assets/css/profile.css";

class SettingComponent extends Component {
    render() {
        const { nerdMode } = this.props;
        return (
            <TemplateMain
                permissions={["services_enable"]}
                permissionNumber={1}
                text={
                    "Please add your payment method to start using white label in your account"
                }
            >
                <ProfileSubMenuComponent active="settings" />
                <TemplateFull>
                    <div className="page-header">
                        Settings{" "}
                        <div className="heading-icon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-setting.svg`}
                                alt="gauge"
                                className="setting-icon"
                            />
                        </div>
                    </div>
                </TemplateFull>
                <TemplateHalf>
                    <NerdModeComponent nerdMode={nerdMode} />

                    <WhiteLabelToggleComponent />
                </TemplateHalf>
            </TemplateMain>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nerdMode: state.settings.nerdMode,
    };
};

export default connect(mapStateToProps)(SettingComponent);
