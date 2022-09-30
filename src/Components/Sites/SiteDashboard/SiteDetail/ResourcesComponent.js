import React, { Component } from "react";
import DashboardTotalComponent from "Components/Dashboards/Ui/TotalComponent";
import TemplateThreeCols from "Templates/TemplateThreeColumns";
import MBToGbHelper from "Helpers/MBToGBHelper";
import StandardFormatHelper from "Helpers/StandardFormatHelper";
import "Assets/css/sitedetail.css";
import "Assets/css/Responsive/SiteDetailDashboard.css";

class ResourcesComponent extends Component {
    render() {
        const { visitor, bandwidth, disk } = this.props;
        return (
            <React.Fragment>
                <div>
                    {/* <div className="page-header">Resources</div> */}
                    <div className=" snapshot mt-4">
                        <div className="performance-title site-reources-title">
                            Site Resources
                        </div>
                        <TemplateThreeCols>
                            <DashboardTotalComponent
                                title="Visitors"
                                image=""
                                number={StandardFormatHelper.numberFormat(
                                    visitor.used
                                )}
                            />
                            <DashboardTotalComponent
                                title="Bandwidth"
                                image=""
                                number={MBToGbHelper.convert(
                                    bandwidth.used !== undefined
                                        ? bandwidth.used
                                        : 0
                                )}
                                text="GB"
                            />

                            <DashboardTotalComponent
                                title="Disk"
                                image=""
                                number={MBToGbHelper.convert(
                                    disk.used !== undefined ? disk.used : 0
                                )}
                                text="GB"
                            />
                        </TemplateThreeCols>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ResourcesComponent;
