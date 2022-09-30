import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Capitilize from "Helpers/CapitilizeHelper";
import SiteCloudProviderListAction from "Redux/V1/Sites/Site/SiteCloudProvider/SiteCloudProviderAction";
import SelectField from "Components/Forms/Fields/SelectField";
import { connect } from "react-redux";
import SiteRegionAction from "Redux/V2/Sites/Site/SiteRegion/SiteRegionAction";
import SiteBusiness from "Businesses/SiteBusiness";
class SiteCloudProviderComponent extends Component {
    state = {
        form: {
            cloud_provider: "",
        },
        state_run: true,
    };

    /* Changing state values with this function*/
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
            this.costingApiFunction(value);
            this.regionApiFunction(value);
            this.props.dataGet(name, value);
        }, 500);
    };

    /* Calling site cloud provider api*/
    componentDidMount = () => {
        this.props.dispatch(SiteCloudProviderListAction.siteCloudProvider());
    };
    regionApiFunction = (id) => {
        this.props.dispatch(SiteRegionAction.siteRegion(id));
    };
    costingApiFunction = (id) => {
        SiteBusiness.costCalculate(this.props.addons, id);
    };
    /* Generating cloud provider list function*/
    cloudProviderListFunction = () => {
        const { form } = this.state;
        return this.props.cloudProvider.provider.map((provider) => {
            /* Default provider selection*/
            if (provider.default === true && this.state.state_run) {
                this.props.dataGet("cloud_provider", provider.id);
                form.cloud_provider = provider.id;
                this.regionApiFunction(form.cloud_provider);
                this.setState({
                    form,
                    state_run: false,
                });
            }
            /* Default provider selection*/
            return (
                <option key={provider.id} value={provider.id}>
                    {Capitilize.capital(provider.name)}
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
                            name="cloud_provider"
                            defaultOption={"Select Cloud Provider"}
                            value={form.cloud_provider}
                            options={this.cloudProviderListFunction()}
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
        cloudProvider: state.site.site.siteCloudProvider,
    };
}
export default connect(mapStateToProps)(SiteCloudProviderComponent);
