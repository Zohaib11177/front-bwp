import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CdnDetailAction from "Redux/V1/Sites/Addons/Cdn/First/CdnFirstAction";
import CdnEnableActionV2 from "Redux/V2/Sites/Addons/Cdn/CdnEnable/CdnEnableActionV2";
import CdnDisableActionV2 from "Redux/V2/Sites/Addons/Cdn/CdnDisable/CdnDisableActionV2";
import CdnModal from "Components/Sites/SiteCdn/SiteCdnModal";
import Configs from "Configs";
import "Assets/css/Responsive/SiteDetailAddons.css";
import { ReactSVG } from "react-svg";
import Messages from "Languages/En.lang";
class SiteCdnComponent extends Component {
    state = {
        cdn_modal: false,
    };
    componentDidMount() {
        this.props.dispatch(CdnDetailAction.cdnFirst(this.props.identity));
    }
    enableCdn = () => {
        this.props.dispatch(CdnEnableActionV2.cdnEnable(this.props.identity));
    };
    disableCdn = () => {
        this.props.dispatch(CdnDisableActionV2.cdnDisable(this.props.identity));
    };
    cdnToggleModal = () => {
        const { cdn_modal } = this.state;
        this.setState({
            cdn_modal: !cdn_modal,
        });
    };

    cdnModal = () => {
        if (this.props.cdnDetail.cdn_details.id || false) {
            return (
                <CdnModal
                    show={this.state.cdn_modal}
                    onHide={this.cdnToggleModal}
                    identity={this.props.identity}
                    cdnDetails={this.props.cdnDetail.cdn_details}
                    cdnUpdate={this.props.cdnUpdate}
                />
            );
        }
    };

    render() {
        const { cdnDetail, cdnDisable, cdnEnable, nitroDetail, nitroEnable } =
            this.props;

        const cdnStatus = cdnDetail.cdn_details.status;
        const nitroStatus = nitroDetail.nitro_detail.status;

        const cdnBlock =
            cdnDetail.cdn_details.status === "pending" ||
            cdnDisable.loading ||
            cdnEnable.loading
                ? true
                : false;

        const nitroBlock =
            nitroStatus === "pending" || nitroEnable.loading ? true : false;

        return (
            <React.Fragment>
                {/* <div className="page-header">BionicWP CDN</div> */}
                <div className="box">
                    <Row>
                        <Col lg="9">
                            <div className="page-header">BionicWP CDN</div>
                            <div className="">
                                <p>{Messages.site_addons.bionic_cdn.text}</p>
                            </div>
                        </Col>
                        <Col
                            lg="3"
                            className="text-right align-self-center align-self-responsive"
                        >
                            {cdnStatus === "active" ? (
                                <Button
                                    variant="link"
                                    className="pencil-icon mt-4"
                                    onClick={this.cdnToggleModal}
                                >
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/General/cog.svg`}
                                    />
                                </Button>
                            ) : (
                                ""
                            )}
                            {cdnStatus === "active" &&
                            cdnDetail.cdn_details.id ? (
                                <Button
                                    className={`updatebtn bionic-btn  ${
                                        cdnDisable.loading ? "loading" : ""
                                    }`}
                                    onClick={this.disableCdn}
                                    disabled={cdnBlock || nitroBlock}
                                >
                                    Disable
                                </Button>
                            ) : (
                                <Button
                                    className={`updatebtn bionic-btn  ${
                                        cdnEnable.loading ? "loading" : ""
                                    }`}
                                    onClick={this.enableCdn}
                                    disabled={cdnBlock || nitroBlock}
                                >
                                    Enable
                                </Button>
                            )}
                        </Col>
                    </Row>
                </div>
                {this.cdnModal()}
            </React.Fragment>
        );
    }
}

export default SiteCdnComponent;
