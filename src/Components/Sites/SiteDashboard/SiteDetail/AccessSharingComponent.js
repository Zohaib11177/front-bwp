import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "Assets/css/sitedetail.css";
import Configs from "Configs";
import ClipBoardHelper from "Helpers/ClipBoardHelper";
import AccessSharingActionV2 from "Redux/V2/Sites/Features/AccessSharing/AccessSharingActionV2";
import HideShow from "Components/UI/HideShowComponent";
import ExternalLinkComponent from "Components/UI/ExternalLinkComponent";
import "Assets/css/Responsive/SiteDetailDashboard.css";
import { ReactSVG } from "react-svg";

class AccessSharingComponent extends Component {
    accessSharingFunction = () => {
        this.props.dis(
            AccessSharingActionV2.accessSharing(
                this.props.container.identity,
                this.props.host
            )
        );
    };
    render() {
        const { siteAcessSharing } = this.props;
        const accessSharing = this.props.access_sharing.access_sharing;
        const siteType = this.props.siteDetail.site_type;
        return (
            <React.Fragment>
                <div className="access-sharing-resp-main">
                    <div className="page-header">Access Sharing Details</div>
                    <div className="box">
                        <div>
                            <div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">User</div>
                                    <div className="sitedetais-desc">
                                        {siteAcessSharing[0] ? (
                                            <React.Fragment>
                                                <p className="float-left mr-3">
                                                    {
                                                        siteAcessSharing[0]
                                                            .username
                                                    }
                                                </p>

                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            siteAcessSharing[0]
                                                                .username
                                                        )
                                                    }
                                                >
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            "N/A"
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Password
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        {siteAcessSharing[0] ? (
                                            <React.Fragment>
                                                <HideShow
                                                    value={
                                                        this.props
                                                            .access_sharing
                                                            .success
                                                            ? accessSharing.password
                                                            : siteAcessSharing[0]
                                                                  .password
                                                    }
                                                />

                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            siteAcessSharing[0]
                                                                .password
                                                        )
                                                    }
                                                >
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            "N/A"
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="sitedetais access-sharing-url-main">
                                <div className="sitedetais-title">URL</div>
                                <div className="sitedetais-desc ">
                                    {siteAcessSharing[0] ? (
                                        <ExternalLinkComponent
                                            linkText={siteAcessSharing[0].url}
                                            textLimit={true}
                                            limit={50}
                                        />
                                    ) : (
                                        // <React.Fragment>
                                        //     <p className="float-left mr-3">
                                        //         {siteAcessSharing[0].url}
                                        //     </p>
                                        //     <button
                                        //         className="copyicon"
                                        //         onClick={() =>
                                        //             ClipBoardHelper.copy(
                                        //                 `${siteAcessSharing[0].url}`
                                        //             )
                                        //         }
                                        //     >
                                        //         <img
                                        //             src={`${Configs.public_url}/assets/img/copy.svg`}
                                        //             alt="copyimage"
                                        //         />
                                        //     </button>
                                        // </React.Fragment>
                                        "N/A"
                                    )}
                                </div>
                            </div>

                            <Button
                                className={`btn bionic-btn bionic-bold btn-block ${
                                    this.props.access_sharing.loading
                                        ? "loading"
                                        : ""
                                }`}
                                disabled={siteType !== "staging" ? false : true}
                                onClick={this.accessSharingFunction}
                            >
                                {" "}
                                Access Sharing
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AccessSharingComponent;
