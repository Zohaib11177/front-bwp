import React, { Component } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import SnapshotCreateAction from "Redux/V1/Sites/Backups/Snapshot/Post/SnapshotPostAction";
import SnapshotListAction from "Redux/V1/Sites/Backups/Snapshot/Get/SnapshotGetAction";
import SnapshotRestoreAction from "Redux/V1/Sites/Backups/Snapshot/SnapshotRestore/SnapshotRestoreAction";
import SnapshotBusiness from "Businesses/SiteBackup/SnapshotBusiness";
import ConfirmationHelper from "Helpers/ConfirmationHelper";
import NoDataHelper from "Helpers/NoDataHelper";

class Snapshot extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.dis(SnapshotListAction.snapshotGet(this.props.identity));
        }, 1000);
    }
    snapshotCreateFunction = () => {
        this.props.dis(SnapshotCreateAction.snapshotPost(this.props.identity));
    };
    snapshotRestoreFunction = () => {
        ConfirmationHelper(
            this.props.dis,
            SnapshotRestoreAction.snapshotRestore(this.props.identity),
            "Do you really want to restore this snapshot ?"
        );
    };
    render() {
        const snapshotList = this.props.list;
        const createLoading = this.props.create.loading;
        const restore = this.props.restore;
        return (
            <React.Fragment>
                <Row className="mt-2">
                    <Col className="col-lg-12 text-right">
                        <Button
                            className={`wpadmin-btn ml-0  ${
                                createLoading ? "loading" : ""
                            }`}
                            onClick={() => this.snapshotCreateFunction()}
                        >
                            Create Snapshot
                        </Button>
                    </Col>
                </Row>

                <div className="pt-3 pb-3">
                    <Row>
                        <Col lg="8 col-4">
                            <b className="pl-4">Created</b>
                        </Col>
                        <Col lg="2" className="pl-1 col-4"></Col>
                        <Col lg="2" className="pl-1 col-4 text-center">
                            <b>Environment</b>
                        </Col>
                    </Row>
                </div>
                <div className="box backup-list">
                    <ListGroup>
                        {SnapshotBusiness.snapshotGenerate(
                            snapshotList,
                            restore,
                            this.snapshotRestoreFunction
                        )}
                        {NoDataHelper.available(snapshotList)}
                    </ListGroup>
                </div>
            </React.Fragment>
        );
    }
}
export default Snapshot;
