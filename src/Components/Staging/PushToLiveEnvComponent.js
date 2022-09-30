import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/fontawesome-free-solid';
import { Button } from 'react-bootstrap';
import SyncPushAction from 'Redux/V1/Staging/SyncPushEnv/SyncPushAction';
import Confirm from 'Helpers/ConfirmationHelper';
// import Capitilize from "Helpers/CapitilizeHelper";
import Messages from 'Languages/En.lang';
class PushToLiveEnv extends Component {
    syncEnvironmentFunction = () => {
        const identity = this.props.siteDetail.site_detail.container.identity;
        Confirm(
            this.props.dis,
            SyncPushAction.syncPushPut(identity),
            'Do you really want push to this environment. previous data will be overwritten ?'
        );
    };

    render() {
        return (
            <div className="box">
                <Row>
                    <Col lg="8">
                        <FontAwesomeIcon icon={faRocket} />
                        <div className="operation-title">Push Environment</div>
                        <div className="operation-desc">
                            {Messages.site_operations.push_to_live_env.text}
                        </div>
                    </Col>
                    <Col lg="4" className="text-right align-self-center">
                        <Button
                            className="updatebtn bionic-btn  btn btn-primary"
                            onClick={() => this.syncEnvironmentFunction()}>
                            Push to Live
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PushToLiveEnv;
