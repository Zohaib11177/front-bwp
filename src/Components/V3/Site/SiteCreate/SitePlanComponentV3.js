import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Capitilize from 'Helpers/CapitilizeHelper';
import SelectField from 'Components/Forms/Fields/SelectField';
import { connect } from 'react-redux';
import SitePlanActionV6 from 'Redux/V6/Sites/Site/SitePlan/SitePlanActionV6';
class SitePlanComponent extends Component {
    state = {
        form: {
            plan: null,
        },
        state_run: true,
    };

    componentDidMount = () => {
        this.props.dispatch(SitePlanActionV6.sitePlan());
    };

    /* Changing state values with thi function*/
    handleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
        setTimeout(() => {
            this.props.dataGet(name, value);
            this.props.addonDataGet(name, value);
        }, 500);
    };

    /* Generating region list function*/
    planListFunction = () => {
        const planList = this.props.plans.plan;

        return planList.map((plan) => {
            /* Default region selection*/
            return (
                <option value={plan.id} default={plan.default}>
                    {Capitilize.capital(plan.name)}
                </option>
            );
        });
    };

    render() {
        const { form } = this.state;
        // const { schema, error } = this.props;
        return (
            <React.Fragment>
                <Row>
                    {' '}
                    <Col lg="12">
                        <SelectField
                            reqired
                            name="plan"
                            // defaultOption={"Select Plan"}
                            value={form.plan}
                            options={this.planListFunction()}
                            onChange={this.handleChange}
                            // schema={schema}
                            // error={error}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        plans: state.siteV6.siteV6.plan,
        state,
    };
}
export default connect(mapStateToProps)(SitePlanComponent);
