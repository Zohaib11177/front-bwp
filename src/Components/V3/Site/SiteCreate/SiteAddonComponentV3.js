import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import 'Assets/css/createsite.css';
import 'Assets/css/form.css';
import { connect } from 'react-redux';
import SiteAddonActionV6 from 'Redux/V6/Sites/Site/SiteAddon/SiteAddonActionV6';
import SiteBusiness from 'Businesses/SiteBusiness';
import PaymentComponent from 'Components/Billings/PaymentComponent';
import PermissionBusiness from 'Businesses/PermissionBusiness';
import SitePlanComponentV3 from './SitePlanComponentV3';
import ErrorBusiness from 'Businesses/ErrorBusiness';
class SiteAddonComponentV3 extends Component {
    state = {
        form: {
            addons: [],
            wp: {
                plan: null,
            },
            card_id: null,
        },
        card_modal: false,
        env_status: 1,
        float: {
            top: '',
            position: '',
        },
        is_migration: false,
    };
    siteDataAddon = (name, value, dataLocation = 'site') => {
        const errorUpdate = ErrorBusiness.errorRemove(this.state.error, name);
        this.setState({
            error: errorUpdate,
        });
        const { form } = this.state;
        if (dataLocation === 'site') {
            form.wp[name] = value;
            this.setState({
                form: {
                    ...form,
                },
            });
        } else {
            form[name] = value;
            this.setState({
                form: {
                    ...form,
                },
            });
        }
    };

    /* Calling site addon api and adding handle scroll function*/
    componentDidMount = () => {
        this.props.dispatch(SiteAddonActionV6.siteAddon());
        window.addEventListener('scroll', this.handleScroll);
    };

    /* floating addon panel function*/
    handleScroll = (event) => {
        let windowWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        let footerHeight = document.getElementById('footer').scrollHeight;
        let boxLeft = document.getElementById('box-left').scrollHeight;
        let header = document.getElementById('header').scrollHeight;
        let checkScroll = boxLeft - (footerHeight + header);
        if (this.props.environment === 2 && windowWidth > 850) {
            if (window.scrollY < 160) {
                this.setState({
                    float: {
                        position: '',
                        top: '',
                        width: '323px',
                    },
                });
            } else if (window.scrollY > 160 && window.scrollY < checkScroll) {
                this.setState({
                    float: {
                        position: 'fixed',
                        top: '0px',
                        width: '323px',
                    },
                });
            } else {
                this.setState({
                    float: {
                        ...this.state.float,
                        position: 'fixed',
                        top: 'unset',
                        width: '323px',
                        bottom: `${footerHeight + 23}px`,
                    },
                });
            }
        } else {
            this.setState({
                float: {
                    position: 'unset',
                    top: '',
                    width: '',
                },
            });
        }
    };

    /* Site Cost Calculation Function */
    costCalculateFunction = (
        addons = this.state.form.addons,
        id = this.props.cloudProvider
    ) => {
        SiteBusiness.costCalculate(addons, id, this.state.form.wp.plan);
    };

    addonCostCalculateFunction = () => {
        return SiteBusiness.addonCostCalculate(
            this.props.siteCosting.site_costing
        );
    };

    /* Addon select and drop function*/
    addonsSelectionFunction = (id) => {
        const { form } = this.state;
        const index = form.addons.indexOf(parseInt(id));
        if (index < 0) {
            form.addons.push(parseInt(id));
        } else {
            form.addons.splice(index, 1);
        }
        this.setState({ form });
        // this.costCalculateFunction();
    };

    /* Mandatory addon already selected function*/
    addonMandatoryFunction = (addons, planId) => {
        const addonsGet = SiteBusiness.addonMandatoryFilter(addons, planId);
        const { form } = this.state;
        this.props.dataGet('addons', addonsGet, 'addon');
        form.addons = addonsGet;
        this.setState({
            form,
        });
        this.costCalculateFunction();
    };

    /* Calling mandatory addon function on props update*/
    componentDidUpdate(nextProps) {
        if (nextProps.siteAddon.success) {
            this.addonMandatoryFunction(
                nextProps.siteAddon.products,
                this.state.form.wp.plan
            );
            nextProps.siteAddon.success = false;
        }
    }

    /* Getting card id from payment component*/
    cardIdFunction = (id) => {
        this.setState({
            card_id: id,
        });
        this.props.dataGet('card_id', id, 'addon');
    };

    render() {
        const { siteCreate, siteLaunch } = this.props;
        const { float } = this.state;
        const domain = this.props.domain.success;
        const permissionDenied = !PermissionBusiness.operationPermission(
            ['sites_add'],
            1
        )
            ? true
            : false;

        return (
            <React.Fragment>
                <div className="space-70"></div>
                <div
                    className="box-right"
                    id="box-right"
                    style={{
                        position: float.position,
                        top: float.top,
                        bottom: float.bottom,
                        width: float.width,
                    }}>
                    <div className="box">
                        <div className="box-header">Plans</div>
                        <SitePlanComponentV3
                            dataGet={this.props.dataGet}
                            addonDataGet={this.siteDataAddon}
                        />
                        <div className="box-header mt-3">Addons</div>
                        <div className="additional-checkbox">
                            {SiteBusiness.addonGenerate(
                                this.props.plans.plan,
                                this.addonsSelectionFunction,
                                parseInt(
                                    this.state.form.wp.plan ||
                                        this.props.plans.default_plan.id
                                )
                            )}
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">Billing Information</div>
                        <div className="billing-box mt-2">
                            {
                                SiteBusiness.addonsCostGenerate(
                                    this.props.plans.plan,
                                    parseInt(
                                        this.state.form.wp.plan ||
                                            this.props.plans.default_plan.id
                                    ),
                                    this.state.form.addons
                                ).baseCost
                            }
                        </div>
                        {/* {SiteBusiness.addonsCostGenerate(siteCosting).cost} */}
                        <hr />

                        <div className="billing-box mt-3">
                            <Row>
                                <Col lg="8" className="col-8">
                                    Due Today
                                </Col>
                                <Col lg="4" className="text-right col-4">
                                    $
                                    {
                                       (SiteBusiness.addonsCostGenerate(
                                            this.props.plans.plan,
                                            parseInt(
                                                this.state.form.wp.plan ||
                                                    this.props.plans
                                                        .default_plan.id
                                            ),
                                            this.state.form.addons
                                        ).dueToday)?.toFixed(2)
                                    }
                                </Col>
                            </Row>
                        </div>

                        <div className="page-inner-header mt-3">
                            Payment Method
                        </div>
                        <div className="billing-box mt-3">
                            <PaymentComponent getCard={this.cardIdFunction} />
                        </div>
                        <Row className="mt-2">
                            <Col lg="12">
                                <Button
                                    type="sumbit"
                                    className={`btn btn-block bionic-btn ${
                                        siteCreate.loading ? 'loading' : ''
                                    }`}
                                    disabled={!domain || permissionDenied}
                                    onClick={siteLaunch}>
                                    Launch Site
                                </Button>
                                {!domain ? (
                                    <p>
                                        <strong>Note:</strong> Please write your
                                        unique domain
                                    </p>
                                ) : (
                                    ''
                                )}
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        siteAddon: state.siteV6.siteV6.siteAddon,
        siteCosting: state.siteV2.siteV2.siteCostingV2,
        siteCreate: state.siteV6.siteV6.createV6,
        domain: state.siteV6.siteV6.domain,
        plans: state.siteV6.siteV6.plan,
    };
}
export default connect(mapStateToProps)(SiteAddonComponentV3);
