import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Capitilize from 'Helpers/CapitilizeHelper';
import SelectField from 'Components/Forms/Fields/SelectField';
import { connect } from 'react-redux';
class SitePlanComponent extends Component {
    state = {
        form: {
            plan: 3,
        },
        state_run: true,
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

    /* Calling site region api*/
    // componentDidMount = () => {
    //     this.props.dispatch(SiteRegionAction.siteRegion("region"));
    // };
    // // /* Calling site region api*

    /* Generating region list function*/
    planListFunction = () => {
        const planList = [
            { name: 'Speed & Secure', value: 3 },
            { name: 'Secure', value: 2 },
            { name: 'Lite', value: 1 },
        ];

        return planList.map((plan) => {
            // region.default = true;
            // /* Default region selection*/
            // if (region.default === true && this.state.state_run) {
            //     this.props.dataGet("region", region.id);
            //     form.region = region.id;
            //     this.setState({
            //         form,
            //         state_run: false,
            //     });
            // }
            /* Default region selection*/
            return (
                <option
                    value={plan.value}
                    default={plan.value === 3 ? true : false}>
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
        // region: state.siteV2.siteV2.regionV2,
        state,
    };
}
export default connect(mapStateToProps)(SitePlanComponent);
