import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

class EnvironmentComponent extends Component {
    state = {
        show: false,
    };

    toggleModal = () => {
        this.setState({
            show: !this.state.show,
        });
    };
    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        const { environment, environmentSelect } = this.props;
        return (
            <React.Fragment>
                <div className="page-header">
                    Launch your new WordPress Site
                </div>
                <div className="box">
                    <section className="environment-plan row">
                        <input
                            type="radio"
                            name="site_type"
                            id="site"
                            value="site"
                            checked={environment === 1 ? true : false}
                            onClick={() => environmentSelect(1)}
                        />
                        <label className="col-md-4" htmlFor="site">
                            Install WordPress
                        </label>

                        {portal_settings?.name ? null : <><input
                            type="radio"
                            name="site_type"
                            id="migrate"
                            value="migrate"
                            checked={environment === 2 ? true : false}
                            onClick={() => this.toggleModal()}
                        />
                        <label className="col-md-4" htmlFor="migrate">
                            Migrate My Sites
                        </label></>}
                    </section>
                </div>

                <Modal
                    className="migration-modal"
                    show={this.state.show}
                    onHide={this.toggleModal}>
                    <Row>
                        <Col lg="12">
                            <iframe
                                src="https://forms.monday.com/forms/embed/f7165cb08ae7bb2446aed46aaf929e81?r=use1"
                                title="Migration"
                                width="650"
                                height="500"
                                style={{
                                    border: '0',
                                }}></iframe>
                        </Col>
                    </Row>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EnvironmentComponent;
