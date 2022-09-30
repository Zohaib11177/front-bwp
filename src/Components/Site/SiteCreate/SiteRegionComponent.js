import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Capitilize from "Helpers/CapitilizeHelper";
import SiteRegionAction from "Redux/V2/Sites/Site/SiteRegion/SiteRegionAction";
import SelectField from "Components/Forms/Fields/SelectField";
import { connect } from "react-redux";
class SiteRegionComponent extends Component {
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
        this.props.dispatch(SiteRegionAction.siteRegion("region"));
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
        region: state.siteV2.siteV2.regionV2,
    };
}
export default connect(mapStateToProps)(SiteRegionComponent);
