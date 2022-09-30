import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import SelectField from 'Components/Forms/Fields/SelectField';
import { connect } from 'react-redux';
// import SitePlanActionV6 from "Redux/V6/Sites/Site/SitePlan/SitePlanActionV6";
import CustomPlanCreateAction from 'Redux/V6/CustomPlan/Create/CustomPlanCreateAction';
import CustomPlanValidation from 'Validations/CustomPlanValidation';
// import ErrorBusiness from "Businesses/ErrorBusiness";

class AgencyCustomPlanFormV6 extends Component {
    state = {
        modal_show: false,
        form: {
            name: '',
            is_default: false,
            amount: null,
            // parent_plan_id : this.props.parent_plan,
            parent_plan_id: null,
            addons: [
                {
                    id: 8,
                    amount: null,
                },
            ],
        },
        default_data: false,
        pictures: [],
        error_clear: false,
    };

    //   settingSate = () => {
    //     if (this.props.plans?.plan.length) {
    //       const { form } = this.state;
    //       const plan = this.props.plans?.plan.filter(
    //         (item) => {
    //             return item.default == true
    //         }
    //       );
    //       this.setState({
    //         form: {
    //           ...form,
    //           parent_plan_id: plan[0]?.id,
    //         },
    //       });
    //     }
    //   };
    //   componentDidUpdate() {
    //     this.settingSate();
    //     // this.props.dispatch(SitePlanActionV6.sitePlan());
    //   }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form);
        // CustomPlanValidation.validate(this.state.form, {
        //     abortEarly: false,
        // })
        //     .then(() => {
        this.props.dispatch(
            CustomPlanCreateAction.CustomPlanCreate(this.state.form)
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
    parentPlans = () => {
        // const { form } = this.state;
        if (this.props.plans?.plan?.length) {
            return (
                <>
                    {this.props.plans?.plan?.map((data) => {
                        return (
                            <option
                                //    selected={data.default ? true : false}
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
        const { create } = this.props;
        console.log(this.props.siteAddon);

        //    if(parent_plan[0]){
        //     const { form } = this.state;

        //     this.setState({
        //         form: {
        //             ...form,
        //           parent_plan_id : parent_plan[0]?.id}
        //        })
        //    }
        console.log(this.state.form.parent_plan_id);
        return (
            <>
                <Button
                    onClick={this.showModal}
                    className={`payment-btn bionic-btn ${
                        this.props.loading ? 'loading' : ''
                    }`}>
                    Add new
                </Button>
                <Modal
                    size="lg"
                    className=""
                    show={this.state.modal_show}
                    // onHide={this.cardToggleModal}
                >
                    <Modal.Header>
                        <div className="d-flex w-100 justify-content-between">
                            <Modal.Title>Create New Plan</Modal.Title>
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
                           {this.parentPlans()}
               
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
                                                // checked={
                                                //     permissionLength !== -1 ? true : false
                                                // }
                                                // disabled={nerdMode.loading ? true : false}
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
                                                create.loading ? 'loading' : ''
                                            }`}
                                            // className={`updatebtn bionic-btn`}
                                            // className={`updatebtn bionic-btn ${create.loading ? "loading" : ""
                                            //     }`}
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

export default connect(mapStateToProps)(AgencyCustomPlanFormV6);
