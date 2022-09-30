import React, { Component } from "react";
import AffiliateWalletAction from "Redux/V1/Affiliate/AffiliateWallet/AffiliateWalletAction";
import WalletStats from "Components/Affiliate/Wallet/WalletStatsComponent";
import RoundUpHelper from "Helpers/RoundUpHelper";

class AffiliateWallet extends Component {
    componentDidMount() {
        this.props.dis(AffiliateWalletAction.affiliateWallet());
    }

    render() {
        const { wallet } = this.props.wallet;
        return (
            <WalletStats
                wallet={
                    wallet.amount_withdrawable
                        ? `$ ${RoundUpHelper.twodecimalplace(
                              wallet.amount_withdrawable
                          )}`
                        : `$ 0`
                }
                pending={
                    wallet.amount_pending
                        ? `$ ${RoundUpHelper.twodecimalplace(
                              wallet.amount_pending
                          )}`
                        : `$ 0`
                }
            />
        );
    }
}

export default AffiliateWallet;
