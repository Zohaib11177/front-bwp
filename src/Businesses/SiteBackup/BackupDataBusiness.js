import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import BackupNameHelper from 'Helpers/BackupNameHelper';
import Capitilize from 'Helpers/CapitilizeHelper';
import ArrayCount from 'Helpers/ArrayCount';
import ToolTipComponent from 'Components/UI/ToolTipComponent';
import Configs from 'Configs';

const backupGenerate = (
    data,
    handleSelect,
    restore,
    backupDownload,
    cloudProvider
) => {
    let blockDownload;
    // const restoreLoading = restore.loading;
    // const downloadLoading = backupDownload.loading;

    const list = data.map((backup) => {
        let downloadList = data.filter((backup) => {
            return backup.status === 'downloading';
        });
        blockDownload = ArrayCount.count(downloadList) !== 0 ? true : false;
        return (
            <ListGroup.Item className="pr-1">
                <Row key={backup.id}>
                    <Col lg="5 pt-2" xs={5}>
                        {BackupNameHelper(backup.name)}
                    </Col>

                    <Col lg="2 pt-2" xs={2}>
                        {backup.type}
                    </Col>
                    <Col lg="2 pt-2" xs={2}>
                        {Capitilize.capital(backup.perform_by)}
                    </Col>
                    <Col lg="2" xs={3}>
                        <div className="d-flex backup-dropdown">
                            {blockDownload ? (
                                <ToolTipComponent
                                    iconClassName="backupdownload-info-icon mt-2 mr-2"
                                    text="Your request to download this backup has been received. You’ll receive a link to your email once its ready."
                                    src={`${Configs.public_url}/assets/img/General/info.svg`}
                                />
                            ) : (
                                ''
                            )}

                            <select
                                onChange={(e) =>
                                    handleSelect(e, backup, cloudProvider)
                                }
                                className="restore-select custom-select"
                                // disabled={
                                //     restoreLoading || downloadLoading
                                //         ? true
                                //         : false
                                // }
                            >
                                <option value="action">Action</option>
                                <option
                                    disabled={blockDownload ? true : false}
                                    value="download">
                                    Download
                                </option>

                                {cloudProvider === 'GCP' ? (
                                    <option value="restore">Restore</option>
                                ) : null}
                            </select>
                        </div>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    });
    return list;
};

const BackupDataBusiness = {
    backupGenerate,
};

export default BackupDataBusiness;
