import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TemplateFull from "Templates/TemplateFull";
import TemplateMain from "Templates/TemplateMain";
import AffiliateLink from "Components/Affiliate/Dashboard/AffiliateLinkComponent";
import AffiliateStats from "Components/Affiliate/Stats/AffiliateStatsComponent";
import AffiliateWallet from "Components/Affiliate/Wallet/AffiliateWalletComponent";
import AffiliateClickComponent from "Components/Affiliate/Clicks/AffiliateClickComponent";
import AffiliatePaypalComponent from "Components/Affiliate/Paypal/AffiliatePaypalComponent";
import Config from "Configs/index";
import "Assets/css/affiliate.css";
import { connect } from "react-redux";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
class AffiliateComponent extends Component {
    render() {
        const {
            dispatch,
            affiliateId,
            affiliateClicks,
            affiliateStats,
            affiliateWallet,
            affiliateProfileUpdate,
        } = this.props;

        return (
            <React.Fragment>
                <TemplateMain>
                    <Container className="main-wrapper">
                        <TemplateFull>
                            <div className="page-header affiliate-heading">
                                <h3>
                                    Affiliate
                                    <div className="heading-icon">
                                        <ReactSVG
                                            src={`${Configs.public_url}/assets/img/HeaderIcons/affiliate.svg`}
                                            alt="gauge"
                                            className="heading-affiliate-icon"
                                        />
                                    </div>
                                </h3>
                            </div>
                        </TemplateFull>
                        <TemplateFull>
                            <AffiliateLink
                                affUrl={`${Config.web_url}?aff_id=${affiliateId}`}
                            />
                            <AffiliateWallet
                                dis={dispatch}
                                wallet={affiliateWallet}
                            />
                            <AffiliatePaypalComponent
                                dis={dispatch}
                                profileUpdate={affiliateProfileUpdate}
                                account={affiliateWallet}
                            />
                            <AffiliateStats
                                stats={affiliateStats}
                                dis={dispatch}
                                affiliateStatsLoading={affiliateStats.loading}
                            />
                            <AffiliateClickComponent
                                dis={dispatch}
                                affiliateId={affiliateId}
                                click={affiliateClicks}
                            />
                        </TemplateFull>
                    </Container>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        affiliateId: state.customer.affiliate_code,
        affiliateStats: state.affiliate.stats,
        affiliateWallet: state.affiliate.wallet,
        affiliateClicks: state.affiliate.click,
        affiliateProfileUpdate: state.affiliate.affiliateProfile.profileUpdate,
    };
}

export default connect(mapStateToProps)(AffiliateComponent);
