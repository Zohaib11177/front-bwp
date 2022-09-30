import React, { Component } from "react";
import { connect } from "react-redux";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/Responsive/TimeLineTable.css";
import StagingBusiness from "Businesses/StagingBusiness";
import SiteSubMenuComponent from "Components/Sites/Ui/SiteSubMenuComponent";
import StagingLogsListComponent from "./StagingLogsListComponent";

class StagingLogsComponent extends Component {
    render() {
        const { stagingLogs, siteDetail } = this.props;
        const { identity } = this.props.match.params;
        const { parent, site_type } = siteDetail;
        StagingBusiness.stagingLogsRedirect(site_type);
        return (
            <React.Fragment>
                {" "}
                <TemplateMain classNameSection="">
                    <SiteSubMenuComponent identity={identity} active="logs" />
                    {parent ? (
                        <StagingLogsListComponent
                            identity={parent.identity}
                            stagingLogs={stagingLogs}
                        />
                    ) : null}
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stagingLogs: state.staging.logs,
        siteDetail: state.SiteDetailReducer.site_detail,
    };
};

export default connect(mapStateToProps)(StagingLogsComponent);
