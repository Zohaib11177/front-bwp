import React, { Component } from 'react';
import TemplateThreeCols from 'Templates/TemplateThreeColumns';
import DashboardPerformanceComponent from 'Components/Dashboards/Ui/PerformanceComponent';
import DashboardTotalComponent from 'Components/Dashboards/Ui/TotalComponent';
import 'Assets/css/sitedetail.css';
import StandardFormatHelper from 'Helpers/StandardFormatHelper';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import ResourcesComponent from 'Components/Sites/SiteDashboard/SiteDetail/ResourcesComponent';
import 'Assets/css/Responsive/SiteDetailDashboard.css';
import BackupCreateActionV2 from 'Redux/V2/Sites/Backups/Backup/Post/BackupPostActionV2';

class UpdateDetailComponent extends Component {
    backupCreateFunction = () => {
        this.props.dis(BackupCreateActionV2.backupPost(this.props.identity));
    };
    render() {
        const { update, backupDetail, host } = this.props;
        return (
            <React.Fragment>
                <div className="site-management-wrapper">
                    <div className="page-header">Site Management</div>
                    <div className="box snapshot">
                        <div className="performance-title">
                            Updates Available
                        </div>
                        <TemplateThreeCols>
                            <DashboardPerformanceComponent
                                image="../assets/img/WordPress/wp-icon.svg"
                                number={update.core}
                                redirect={`/sites/updates/${host}`}
                                className="wp-icon"
                            />
                            <DashboardPerformanceComponent
                                image="../assets/img/WordPress/wp-theme.svg"
                                number={update.themes}
                                redirect={`/sites/updates/${host}`}
                                className="wp-theme"
                            />
                            <DashboardPerformanceComponent
                                image="../assets/img/WordPress/wp-plugin.svg"
                                number={update.plugins}
                                redirect={`/sites/updates/${host}`}
                                className="wp-plugin"
                            />
                        </TemplateThreeCols>

                        <hr />

                        <div className="performance-title backup-details-title-responsive">
                            Backup Details
                        </div>
                        <TemplateThreeCols>
                            <DashboardTotalComponent
                                title="TOTAL BACKUPS"
                                image=""
                                number={StandardFormatHelper.numberFormat(
                                    backupDetail.total_backups
                                )}
                            />
                            <DashboardTotalComponent
                                title="LAST BACKUP DATE"
                                numberClassName="font-20"
                                image=""
                                number={
                                    backupDetail.last_backup_date !== null
                                        ? TimeStampHelper.standardDateFormat(
                                              backupDetail.last_backup_date
                                          )
                                        : '-'
                                }
                            />

                            <DashboardTotalComponent
                                title="CREATE BACKUP"
                                numberClassName="font-20"
                                image="../assets/img/Backup/backup-create.svg"
                                className="backup-create-icon"
                                iconClassName="cursor-pointer"
                                iconFunction={this.backupCreateFunction}
                                number={null}
                            />
                        </TemplateThreeCols>

                        <ResourcesComponent
                            visitor={this.props.visitor}
                            bandwidth={this.props.bandwidth}
                            disk={this.props.disk}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UpdateDetailComponent;
