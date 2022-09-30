import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import CustomPlanDeleteAction from 'Redux/V6/CustomPlan/Delete/CustomPlanDeleteAction';
// import ErrorBusiness from 'Businesses/ErrorBusiness';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class AgencyCustomPlanDelete extends Component {
    state = {
        modal_show: false,

        default_data: false,
        pictures: [],
        error_clear: false,
    };
    componentDidMount() {
        // this.props.dispatch(SitePlanActionV6.sitePlan());
    }
    handleSubmit = () => {
        // e.preventDefault();
        // CustomPlanValidation.validate(this.state.form, {
        //     abortEarly: false,
        // })
        //     .then(() => {
        this.props.dispatch(
            CustomPlanDeleteAction.CustomPlanDelete(this.props.id)
        );
        // })
        // .catch((err) => {
        //     this.setState({
        //         error: ErrorBusiness.errorGet(err),
        //     });
        // });
    };
    showModal = () => {
        this.setState({
            modal_show: !this.state.modal_show,
        });
    };

    render() {
        return (
            <>
                <span className="pointer" onClick={this.showModal}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                <Modal
                    size="lg"
                    className=""
                    show={this.state.modal_show}
                    // onHide={this.cardToggleModal}
                >
                    <Modal.Header>
                        <div className="d-flex w-100 justify-content-between">
                            <Modal.Title>Delete Plan</Modal.Title>
                            <button
                                className="bg-white border-0"
                                onClick={this.showModal}>
                                x
                            </button>
                        </div>
                    </Modal.Header>

                    <hr className="white-label-divider" />
                    <Modal.Body>
                        <Row>
                            <Col lg="12" className="text-center" xs={12}>
                                <div className="px-4">
                                    <p>
                                        Are you sure you want to delete this
                                        plan?
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Row>
                            <Col lg="12" className="text-right" xs={12}>
                                <div className=" px-4 text-right">
                                    <Button
                                        variant="outline-dark"
                                        onClick={this.showModal}>
                                        Cancel
                                    </Button>{' '}
                                    <Button
                                        variant="danger"
                                        onClick={this.handleSubmit}>
                                        Delete
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.siteV6.siteV6.plan,
    };
};

export default connect(mapStateToProps)(AgencyCustomPlanDelete);
