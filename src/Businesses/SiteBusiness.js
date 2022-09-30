import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
// import RoundUpHelper from "Helpers/RoundUpHelper";
import SiteCostingActionV2 from 'Redux/V2/Sites/Site/SiteCosting/SiteCostingActionV2';
import Store from 'Redux/Store';
import UsernameHelper from 'Helpers/UsernameHelper';
import PasswordHelper from 'Helpers/PasswordHelper';
import SegmentBusiness from './SegmentBusiness';
import ToolTipComponent from 'Components/UI/ToolTipComponent';
import Configs from 'Configs';
import 'Assets/css/Responsive/SiteLaunch.css';
import Capitilize from 'Helpers/CapitilizeHelper';
import BadgeComponent from 'Components/UI/BadgeComponent';
import RoundUpHelper from 'Helpers/RoundUpHelper';

const trackingLaunchSite = (form, domain) => {
    let segment = {};
    segment = SegmentBusiness.loggedInUser(segment);
    segment = SegmentBusiness.wpDetails(segment, form.wp);
    segment.migration = form.wp.is_migration ? true : false;
    segment.transaction_type = form.card_id ? 'Credit Card' : 'Wallet';
    segment.products = form.user_addons_name;
    segment.staging_domain = domain;

    return segment;
};

const trackingSiteList = (data) => {
    let segment = {};
    segment = SegmentBusiness.loggedInUser(segment);
    segment.total = data;
    // segment.active_sites = data.length;
    return segment;
};

const eliminateUpdateNotAvailable = (data) => {
    return data.filter((d) => {
        let update = 0;
        if (update === 0)
            update =
                d.core.update_version !== undefined &&
                d.core.update_version !== null
                    ? 1
                    : update;
        if (update === 0) {
            const outDateThemes = d.themes.filter(
                (theme) => theme.update_version !== null
            );
            update = outDateThemes.length;
        }
        if (update === 0) {
            const outDatePlugins = d.plugins.filter(
                (plugin) => plugin.update_version !== null
            );
            update = outDatePlugins.length;
        }
        return update > 0;
    });
};

const costCalculate = (addons, id, planId) => {
    const data = {
        product_ids: addons,
        cloud_provider_id: id,
        plan_id: planId,
    };
    Store.dispatch(SiteCostingActionV2.siteCosting(data));
};
const addonFilter = (data) => {
    return data.filter((addon) => {
        return addon.mandatory === false;
    });
};

// const checkPlan = (id, planId, arra) => {
//     let mandatory;
//     const planList = [
//         { plan1: [4] },
//         { plan2: [4] },
//         { plan3: [3, 4] },
//         { plan4: [3, 4] },
//     ];
//     const checkPlan = planList.filter((item) => {
//         return item[`plan${planId}`];
//     });

//     const check = checkPlan[0][`plan${planId}`].map((item) => {
//         return id === item;
//     });
//     console.log(check);
//     return check;
// };
const addonGenerate = (plans, addonSelectionFunction, planId) => {
    let products = plans.filter((plan) => plan.id === planId);
    products = products[0] || [];

    var addons = '';
    if (products.addons) {
        addons = products.addons.map((addon) => {
            return (
                <Row
                    key={addon.id}
                    className={`mb-4  ${addon.hide ? 'd-none' : ''}`}>
                    <Col lg={7} xs={7} className="addon-name-landscape-width">
                        <Form.Check
                            type="checkbox"
                            id={`check-api-${addon.id}`}>
                            <Form.Check.Input
                                type="checkbox"
                                isValid
                                value={addon.id}
                                data-product={addon.name}
                                defaultChecked={addon.block ? true : false}
                                onChange={() =>
                                    addonSelectionFunction(addon.id, addon.name)
                                }
                            />
                            <Form.Check.Label>{addon.name}</Form.Check.Label>
                        </Form.Check>
                    </Col>
                    <Col
                        lg={2}
                        xs={2}
                        className="addon-tootlip-landscape-width">
                        {addon.hide ? (
                            ''
                        ) : (
                            <ToolTipComponent
                                containerClasses="addon-tooltip"
                                src={`${Configs.public_url}/assets/img/General/info.svg`}
                                text={addon.description}
                            />
                        )}
                    </Col>
                    <Col md={3} xs={3} className="text-right pl-0 mt-1">
                        <p
                            className={`mb-0 addon-cost ${
                                addon.bold ? 'font-bold' : ''
                            } ${addon.hide ? 'd-none' : ''}`}>
                            ${' '}
                            {/* {addon.cost
                                ? addon.cost.toFixed(2)
                                : RoundUpHelper.twodecimalplace(addon.cost)} */}
                            {addon.id === 8
                                ? RoundUpHelper.twodecimalplace(addon.cost)
                                : null}
                        </p>
                    </Col>
                </Row>
            );
        });
    }
    return addons;
};

const addonMandatoryFilter = (products, planId) => {
    planId = parseInt(planId);
    let addonMandatory = [];
    products.filter((addon) => {
        addon.block =
            (addon.id === 4 && planId === 1) ||
            (addon.id === 4 && planId === 2) ||
            (addon.id === 4 && planId === 3)
                ? true
                : false || (addon.id === 3 && planId === 3)
                ? true
                : false;

        return addon.mandatory === true || addon.block === true
            ? addonMandatory.push(addon.id)
            : null;
    });

    return addonMandatory;
};
const addonsCostGenerate = (plans, selected, addons = []) => {
    let products = plans.filter((plan) => plan.id === selected);
    products = products[0] || [];
    var dueToday = products.cost_today;

    if (products.addons) {
        let planAddons = products.addons.filter((addon) =>
            addons.includes(addon.id)
        );

        for (let i = 0; i < planAddons.length; i++) {
            dueToday += planAddons[i].cost_today;
        }
    }

    let cost = products.cost || 0;
    const baseCost = (
        <Row>
            <Col lg="8" className="col-8">
                <p className="mb-0 font-bold">Base Cost</p>
            </Col>
            <Col lg="4" className="text-right col-4">
                {' '}
                <p className="mb-0 font-bold">${parseFloat(cost).toFixed(2)}</p>
            </Col>
        </Row>
    );

    return { baseCost, cost, dueToday };
};
const addonCostCalculate = (addonCosting = []) => {
    const cost = { total: 0, today: 0 };
    addonCosting.forEach((element) => {
        cost['total'] += element.amount_net;
        cost['today'] += element.amount_till_next_billing;
    });
    return cost;
};
const fieldChecks = (state, title) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (state.title === null || state.title === '') {
        state.title = title;
    }
    if (state.password === null || state.password === '') {
        state.password = PasswordHelper.generatePassword(12);
    }
    if (state.username === null || state.username === '') {
        state.username = UsernameHelper.generateUserName(user.email);
    }
    if (state.email === null || state.email === '') {
        state.email = user.email;
    }
    return state;
};

const tags = (site) => {
    const tagLink = site.primary_domain_name;
    const defaultBadgeColor = '#002544';
    const tags = site.tags.map((tag) => {
        return (
            <BadgeComponent
                className="mr-1"
                color={tag.color === null ? defaultBadgeColor : tag.color}
                text={Capitilize.capital(tag.name)}
                link={`/sites/${tagLink}`}
                linkClass={tagLink === undefined ? 'event-none-badge' : ''}
            />
        );
    });

    return tags;
};

const tagsName = (site) => {
    const tagLink = site.primary_domain_name;
    const tags = site.tags.map((tag) => {
        if (tag.name) {
            return (
                <BadgeComponent
                    className={`mr-1 font-12 bg-${
                        tag.name ? tag.name : 'none'
                    }`}
                    text={Capitilize.capital(tag.name)}
                    link={`/sites/${tagLink}`}
                    linkClass={tagLink === undefined ? 'event-none-badge' : ''}
                />
            );
        }
        return '';
    });

    return tags;
};

const planCost = (planId, addon) => {
    const checkAddon = addon.filter((addon) => {
        return addon === 8;
    });

    const addonCheck = checkAddon[0] ? 39 : 0;
    let planCost = {
        plan1: 11.9 + addonCheck,
        plan2: 18.9 + addonCheck,
        plan3: 25.9 + addonCheck,
    };
    const date1 = new Date();
    const date2 = new Date(date1.getFullYear(), date1.getMonth() + 1, 5);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (planCost[`plan${planId}`] / 30) * diffDays;
};
const SiteBusiness = {
    costCalculate,
    trackingLaunchSite,
    trackingSiteList,
    eliminateUpdateNotAvailable,
    addonGenerate,
    addonMandatoryFilter,
    addonFilter,
    addonsCostGenerate,
    addonCostCalculate,
    fieldChecks,
    tags,
    tagsName,
    planCost,
};

export default SiteBusiness;
