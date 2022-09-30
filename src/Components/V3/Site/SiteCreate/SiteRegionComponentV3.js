import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Capitilize from "Helpers/CapitilizeHelper";
import SiteRegionActionV6 from "Redux/V6/Sites/Site/SiteRegion/SiteRegionActionV6";
import SelectField from "Components/Forms/Fields/SelectField";
import { connect } from "react-redux";
class SiteRegionComponentV3 extends Component {
    state = {
        form: {
            region: "",
        },
        state_run: true,
    };

    /* Changing state values with thi function*/
    handleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
        setTimeout(() => {
            this.props.dataGet(name, value);
        }, 500);
    };

    /* Calling site region api*/
    componentDidMount = () => {
        this.props.dispatch(SiteRegionActionV6.siteRegion("region"));
    };
    // // /* Calling site region api*/
    // componentDidUpdate = (nextProps) => {
    //     const { cloudProvider } = this.props;
    //     if (nextProps.cloudProvider && this.state.clouder_provider) {
    //         this.props.dispatch(
    //             SiteRegionAction.siteRegion(nextProps.cloudProvider)
    //         );
    //         this.setState({
    //             state_run: false,
    //             clouder_provider: nextProps.cloudProvider,
    //         });
    //     }
    // };

    /* Generating region list function*/
    regionListFunction = () => {
        const { form } = this.state;
        return this.props.region.region.map((region) => {
            region.default = true;
            // /* Default region selection*/
            if (region.default === true && this.state.state_run) {
                this.props.dataGet("region", region.id);
                form.region = region.id;
                this.setState({
                    form,
                    state_run: false,
                });
            }
            /* Default region selection*/
            return (
                <option value={region.id}>
                    {Capitilize.capital(region.location)}
                </option>
            );
        });
    };

    render() {
        const { form } = this.state;
        const { schema, error } = this.props;
        return (
            <React.Fragment>
                <Row>
                    {" "}
                    <Col lg="12">
                        <SelectField
                            name="region"
                            defaultOption={"Select Region"}
                            value={form.region}
                            options={this.regionListFunction()}
                            onChange={this.handleChange}
                            schema={schema}
                            error={error}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        region: state.siteV6.siteV6.region,
    };
}
export default connect(mapStateToProps)(SiteRegionComponentV3);
