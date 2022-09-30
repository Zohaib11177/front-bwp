import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import SitePagespeedActionV6 from "Redux/V6/Sites/Site/SitePagespeed/SitePagespeedActionV6";
import PagespeedEnableActionV6 from "Redux/V6/Sites/Site/SitePagespeed/Put/PagespeedEnableActionV6";
import Confirmation from "Helpers/ConfirmationHelper";
import recycleIcon from "Assets/img/recycle-icon.svg";
import RefreshPagespeedActionV6 from "Redux/V6/Sites/Site/RefreshPagespeed/RefreshPagespeedActionV6";
import AgencyLoader from "Assets/img/loader.gif"
class SitePagespeedComponentV6 extends Component {
    componentDidMount() {
        const host = this.props.host;
        this.props.dispatch(SitePagespeedActionV6.sitePagespeed(host));
    }
    pagespeedEnable = () => {
        Confirmation(
            this.props.dispatch,
            PagespeedEnableActionV6.pagespeedEnable(this.props.host),
            `Your current plan does not support this feature, if you want to perform this action you will be charged according to new plan. For further details please contact support.`
        );
    };
    refreshSpeed() {
        this.props.dispatch(
            RefreshPagespeedActionV6.refreshPagespeed(this.props.host)
        );
    }
    render() {
        const page_speed = this.props.page_speed.page_speed;
        const plan_name = this.props.site_detail_v6.site_info.plan_name;
        return (
            <React.Fragment>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="card-blue mb-4 card-lg-adj">
                        <div className="card-blue--header">
                            <span>Average Speed Insight</span>
                            <span>
                                <img
                                    className="card-header-icon"
                                    src={recycleIcon}
                                    alt="recycleIcon"
                                    onClick={() => this.refreshSpeed()}
                                />
                            </span>
                        </div>
                        <div className="card-blue--content">
                            <div className="row col-br mb-4">
                                <div className="col-12 col-md-6">
                                    <span className="font-14 f-adj">
                                        Page Speed - Desktop
                                    </span>
                                    <div className="before-after--container">
                                        <div className="speed-ba">
                                            <small>Before</small>
                                            <span>
                                                {
                                                    page_speed.desktop
                                                        .before_score
                                                }
                                            </span>
                                        </div>
                                        <div className="speed-icon">
                                            {/* <img
                                                src={this.props.portalSettings?.name ? "https://my.bionicwp.com/assets/img/Brands/bolt.gif" : AgencyLoader}
                                                alt="logo-icon"
                                            /> */}
                                        </div>
                                        <div className="speed-ba">
                                            <small>after</small>
                                            <span>
                                                {page_speed.desktop.after_score}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="font-14 f-adj">
                                        Page Speed - Mobile
                                    </span>
                                    <div className="before-after--container">
                                        <div className="speed-ba">
                                            <small>Before</small>
                                            <span>
                                                {page_speed.mobile.before_score}
                                            </span>
                                        </div>
                                        <div className="speed-icon">
                                            {/* <img
                                                src={this.props.portalSettings?.name ? "https://my.bionicwp.com/assets/img/Brands/bolt.gif" : AgencyLoader}
                                                alt="logo-icon"
                                            /> */}
                                        </div>
                                        <div className="speed-ba">
                                            <small>after</small>
                                            <span>
                                                {page_speed.mobile.after_score}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-br mb-4">
                                <div className="col-12 col-md-6">
                                    <span className="font-14 f-adj">
                                        Load Time - Desktop
                                    </span>
                                    <div className="before-after--container">
                                        <div className="speed-ba">
                                            <small>Before</small>
                                            {page_speed.desktop
                                                .before_load_time ? (
                                                <span>
                                                    {
                                                        page_speed.desktop
                                                            .before_load_time
                                                    }
                                                    <sub>s</sub>
                                                </span>
                                            ) : null}
                                        </div>
                                        <div className="speed-icon">
                                            {/* <img
                                                src={this.props.portalSettings?.name ? "https://my.bionicwp.com/assets/img/Brands/bolt.gif" : AgencyLoader}
                                                alt="logo-icon"
                                            /> */}
                                        </div>
                                        <div className="speed-ba">
                                            <small>after</small>
                                            {page_speed.desktop
                                                .after_load_time ? (
                                                <span>
                                                    {
                                                        page_speed.desktop
                                                            .after_load_time
                                                    }
                                                    <sub>s</sub>
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="font-14 f-adj">
                                        Load Time - Mobile
                                    </span>
                                    <div className="before-after--container">
                                        <div className="speed-ba">
                                            <small>Before</small>
                                            {page_speed.mobile
                                                .before_load_time ? (
                                                <span>
                                                    {
                                                        page_speed.mobile
                                                            .before_load_time
                                                    }
                                                    <sub>s</sub>
                                                </span>
                                            ) : null}
                                        </div>
                                        <div className="speed-icon">
                                            {/* <img
                                                src={this.props.portalSettings?.name ? "https://my.bionicwp.com/assets/img/Brands/bolt.gif" : AgencyLoader}
                                                alt="logo-icon"
                                            /> */}
                                        </div>
                                        <div className="speed-ba">
                                            <small>after</small>
                                            {page_speed.mobile
                                                .after_load_time ? (
                                                <span>
                                                    {
                                                        page_speed.mobile
                                                            .after_load_time
                                                    }
                                                    <sub>s</sub>
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6"></div>
                                <div className="col-12 col-md-6">
                                    <button
                                        class={`btn btn-primary btn-bionic w-100 font-adj ${
                                            this.props.pagespeedEnable.loading
                                                ? "loading"
                                                : AgencyLoader
                                        }`}
                                        disabled={
                                            plan_name !== "Speed & Secure" ||
                                            (page_speed.mobile
                                                .before_load_time &&
                                                !page_speed.mobile
                                                    .after_load_time)
                                                ? false
                                                : true
                                        }
                                        onClick={(e) => this.pagespeedEnable()}
                                    >
                                        Enable Website Speed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        page_speed: store.siteV6.siteV6.pagespeed,
        pagespeedEnable: store.siteV6.siteV6.enable_pagespeed,
        site_detail_v6: store.siteV6.siteV6.detail,
        portalSettings: store.portalSettingsV6.list
    };
}

export default connect(mapStateToProps)(SitePagespeedComponentV6);
