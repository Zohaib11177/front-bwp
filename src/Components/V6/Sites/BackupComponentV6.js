import React, { Component } from "react";
import BackupNameHelper from "Helpers/BackupNameHelper";
import "Assets/css/Responsive/Footer.css";
import "Assets/css/V6/backup-component.css";
import { connect } from "react-redux";
import BackupListActionV6 from "Redux/V6/Sites/Backups/Backup/Get/BackupGetActionV6";
import ConfirmationHelper from "Helpers/ConfirmationHelper";
import BackupDownloadActionV6 from "Redux/V6/Sites/Backups/Backup/BackupDownload/BackupDownloadActionV6";
import BackupRestoreActionV6 from "Redux/V6/Sites/Backups/Backup/BackupRestore/BackupRestoreActionV6";
import Dropdown from 'react-bootstrap/Dropdown';


class BackupComponentV6 extends Component {
    componentDidMount() {
        const host = this.props.host;
        this.props.dispatch(BackupListActionV6.backupGet(host));
    }
    downloadBackup = (container) => {
        const ele = document.getElementById("backups");
        const selectedOption = ele.options[ele.selectedIndex];
        const type = selectedOption.getAttribute("data-type");
        const data = {
            backupId: ele.value,
            host: this.props.host,
            type: type,
            cp: container.cloud_provider ?? "PA",
        };
        ConfirmationHelper(
            this.props.dispatch,
            BackupDownloadActionV6.backupDownload(data),
            "Do you really want to download this backup ?"
        );
    };
    restoreBackup = (container) => {
        const ele = document.getElementById("backups");
        const selectedOption = ele.options[ele.selectedIndex];
        const type = selectedOption.getAttribute("data-type");
        const data = {
            backupId: ele.value,
            host: this.props.host,
            type: type,
            cp: container.cloud_provider ?? "PA",
        };
        ConfirmationHelper(
            this.props.dispatch,
            BackupRestoreActionV6.backupRestore(data),
            "Do you really want to restore this backup ?"
        );
    }
    render() {
        const container = this.props.container;
        const backups = this.props.backups;
        return (
            <React.Fragment>
                <div className="card-blue mb-4 backup-option">
                    <div className="card-blue--header">
                        <span>Backups</span>
                    </div>
                    <div className="card-blue--content">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-field--wrapper mb-4">
                                    <div className="tf-text">
                                        <span className="font-14">
                                            Created:
                                        </span>
                                    </div>
                                    <div className="tf-field">
                                        <select
                                            name="backups"
                                            id="backups"
                                            class="form-control font-13 cursor-pointer"
                                        >
                                            {backups.map((item) => (
                                                <option
                                                    value={item.id}
                                                    data-type={item.type}
                                                    default=""
                                                >
                                                    {BackupNameHelper(
                                                        item.name
                                                    )}{" "}
                                                    - {item.type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 ml-auto">
                            <div className="ml-auto">
                                <Dropdown className="stage-env-main text-right ">
                                    <Dropdown.Toggle
                                        className="site-environment font-weight-light backup-option  site-env-carrot-icon pt-2 bionic-btn"
                                        id="dropdown-basic"
                                    >
                                        Backup Options
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                        onClick={(e) => this.downloadBackup(container)}
                                        >
                                            Download
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                        onClick={(e) => this.restoreBackup(container)}
                                        >
                                            Restore
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        download: store.siteV6.backupV6.backupDownloadV6,
        backups: store.siteV6.backupV6.backupList.backup_list,
    };
}

export default connect(mapStateToProps)(BackupComponentV6);
