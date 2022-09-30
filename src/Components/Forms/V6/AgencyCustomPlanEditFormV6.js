import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import SelectField from 'Components/Forms/Fields/SelectField';
import { connect } from 'react-redux';
// import SitePlanActionV6 from "Redux/V6/Sites/Site/SitePlan/SitePlanActionV6";
// import CustomPlanCreateAction from 'Redux/V6/CustomPlan/Create/CustomPlanCreateAction';
import CustomPlanEditAction from 'Redux/V6/CustomPlan/Edit/CustomPlanEditAction';
import CustomPlanValidation from 'Validations/CustomPlanValidation';
// import ErrorBusiness from "Businesses/ErrorBusiness";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
// import { FaEdit } from "react-icons/fa";

class AgencyCustomPlanEditFormV6 extends Component {
    state = {
        modal_show: false,
        form: {
            id: this.props.data.id,
            name: this.props.data.name,
            is_default: this.props.data.default,
            amount: this.props.data.cost,
            parent_plan_id: this.props.data.parent_plan_id,
            // parent_plan_id : 3,

            addons: [
                {
                    id: 8,
                    amount: this.props.data.addons[0].cost,
                },
            ],
        },
        default_data: false,
        pictures: [],
        error_clear: false,
    };
    componentDidMount() {
        console.log(this.props.data);
        // this.props.dispatch(SitePlanActionV6.sitePlan());
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form);
        // CustomPlanValidation.validate(this.state.form, {
        //     abortEarly: false,
        // })
        //     .then(() => {
        this.props.dispatch(
            CustomPlanEditAction.CustomPlanEdit(this.state.form)
        );
    };
    showModal = () => {
        this.setState({
            modal_show: !this.state.modal_show,
        });
    };
    parentPlans = () => {
        if (this.props.plans?.plan?.length) {
            return (
                <>
                    {this.props.plans?.plan?.map((data) => {
                        return (
                            <option
                                key={data.id}
                                selected={
                                    this.state.parent_plan_id === data.id
                                        ? true
                                        : false
                                }
                                value={data.id}>
                                {data.name}
                            </option>
                        );
                    })}
                </>
            );
        } else {
            return <option>No Plans available</option>;
        }
    };

    handleChange = (event) => {
        const { form } = this.state;
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name !== 'addon_amount') {
            this.setState({
                form: {
                    ...form,
                    [name]: value,
                },
            });
        }
        if (name === 'addon_amount') {
            this.setState({
                form: {
                    ...form,
                    addons: [
                        {
                            id: 8,
                            amount: value,
                        },
                    ],
                },
            });
        }
    };

    render() {
        const { edit } = this.props;

        return (
            <>
                <span className="pointer" onClick={this.showModal}>
                    <FontAwesomeIcon icon={faEdit} />
                </span>{' '}
                <Modal
                    size="lg"
                    className=""
                    show={this.state.modal_show}
                    // onHide={this.cardToggleModal}
                >
                    <Modal.Header>
                        <div className="d-flex w-100 justify-content-between">
                            <Modal.Title>Edit Plan</Modal.Title>
                            <button
                                className="bg-white border-0"
                                onClick={this.showModal}>
                                x
                            </button>
                        </div>
                    </Modal.Header>
                    <Form
                        onSubmit={this.handleSubmit}
                        className="white-label-form-main"
                        id="registration-form">
                        <div className="form-container mt-0 box">
                            <hr className="white-label-divider" />
                            <Modal.Body>
                                <Row>
                                    <Col lg="6">
                                        <InputTextField
                                            name="name"
                                            id="name"
                                            getChange={this.handleChange}
                                            value={this.state.form.name}
                                            label="Name"
                                            maxLength="100"
                                            schema={CustomPlanValidation}
                                            required={true}
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <InputTextField
                                            name="amount"
                                            id="amount"
                                            getChange={this.handleChange}
                                            value={this.state.form.amount}
                                            label="Plan Price"
                                            maxLength="10"
                                            schema={CustomPlanValidation}
                                            required={true}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    {/* <Col md={6}>
                            <InputTextField
                                    name="product_amount"
                                    id="product_amount"
                                    getChange={this.handleChange}
                                    value={this.state.form.product.product_amount}
                                    label="Addon Price"
                                    maxLength="10"
                                    schema={CustomPlanValidation}
                                    required={true}
                                />
                            </Col> */}
                                    <Col md={6}>
                                        <InputTextField
                                            name="addon_amount"
                                            id="addon_amount"
                                            getChange={this.handleChange}
                                            value={
                                                this.state.form.addons[0].amount
                                            }
                                            label="Addon (Unlimited Edit Price)"
                                            maxLength="10"
                                            schema={CustomPlanValidation}
                                            required={true}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <div className="country-drowpdown-main">
                                            <SelectField
                                                required
                                                name="parent_plan_id"
                                                defaultOption={'Select a plan'}
                                                value={
                                                    this.state.form
                                                        .parent_plan_id
                                                }
                                                options={this.parentPlans()}
                                                onChange={this.handleChange}
                                                // schema={RegistrationValidation}
                                                // error={this.state.error}
                                            />
                                        </div>
                                    </Col>
                                    {/* <Col className="ssh-box mb-0" md={6}>
                            <div className=" py-2 border rounded w-100 ">
                      <div className="px-2">
                        <div className='d-flex'>
                          <select
                          required
                        //   value="3"
                            name='parent_plan_id'
                            onChange={this.handleChange}
                            className="fw14 pp-semibold ph px-1 w-100 border-0 color-primary" style={{ outline: "none", backgroundColor: "transparent" }} >
                           
                           {
                 this.props.plans?.plan?.map((data) => {
                    // let selected
                    // if(data.default == true){
                    //     selected = true
                    // }else{
                    //     selected = false
                    // }
                    return(<option
                        // selected={selected}
                        value={data.id}>{data.name}</option>);
                }) }
            </select>
                        </div>
                      </div>
                    </div>
                                    
                                
                            </Col> */}
                                    <Col className="ssh-box mb-0" md={6}>
                                        <Col
                                            lg="6"
                                            className="notifications-title col-8 pl-0">
                                            <h6>Make Default</h6>
                                        </Col>
                                        <Col
                                            lg="6"
                                            // className={`text-right col-4 ${
                                            //     nerdMode.loading ? "loading-nerd-mode" : ""
                                            // }`}
                                        >
                                            <input
                                                name="is_default"
                                                className="react-switch-checkbox"
                                                id={`react-switch-new3`}
                                                type="checkbox"
                                                onChange={this.handleChange}
                                                checked={
                                                    this.state.form.is_default
                                                }
                                            />
                                            <label
                                                className="react-switch-label"
                                                htmlFor={`react-switch-new3`}>
                                                <span
                                                    className={`react-switch-button`}
                                                />
                                            </label>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12" className="text-right" xs={12}>
                                        <Button
                                            type="submit"
                                            className={`updatebtn bionic-btn ${
                                                edit.loading ? 'loading' : ''
                                            }`}
                                            // className={`updatebtn bionic-btn`}
                                        >
                                            Submit
                                        </Button>{' '}
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </div>
                    </Form>
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

export default connect(mapStateToProps)(AgencyCustomPlanEditFormV6);
